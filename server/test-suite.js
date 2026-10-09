const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'http://127.0.0.1:5000';

function apiRequest(method, endpoint, body = null, headers = {}) {
  return new Promise((resolve, reject) => {
    const url = new URL(BASE_URL + endpoint);
    const reqHeaders = { ...headers };
    let reqBody = null;

    if (body && !(body instanceof Buffer) && typeof body === 'object') {
      reqHeaders['Content-Type'] = 'application/json';
      reqBody = JSON.stringify(body);
    } else if (body) {
      reqBody = body;
    }

    if (reqBody) {
      reqHeaders['Content-Length'] = Buffer.byteLength(reqBody);
    }

    const options = {
      hostname: url.hostname,
      port: url.port,
      path: url.pathname + url.search,
      method: method,
      headers: reqHeaders,
    };

    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        let json = null;
        try { json = JSON.parse(data); } catch (e) { json = data; }
        resolve({ status: res.statusCode, data: json, headers: res.headers });
      });
    });

    req.on('error', (err) => reject(err));
    if (reqBody) req.write(reqBody);
    req.end();
  });
}

async function runTests() {
  console.log('--- STARTING MANDATORY E2E TESTS ---');
  let passed = 0;
  let total = 0;

  function assert(condition, message) {
    total++;
    if (condition) {
      console.log(`✅ [PASS] ${message}`);
      passed++;
    } else {
      console.error(`❌ [FAIL] ${message}`);
    }
  }

  // 1. Authenticate Admin
  console.log('\n[Setup] Authenticating admin...');
  const loginRes = await apiRequest('POST', '/api/auth/login', {
    email: 'admin@saaraswath.com',
    password: 'Admin@123'
  });
  assert(loginRes.status === 200 && loginRes.data.token, 'Admin login succeeded and received JWT token');
  const token = loginRes.data.token;
  const authHeaders = { Authorization: `Bearer ${token}` };

  // TEST 1: Student Enquiry Submission & Admin Retrieval
  console.log('\n[Test 1] Testing Student Enquiry Submission...');
  const testPhone = '9845012345';
  const enquiryPayload = {
    fullName: 'Ravi Kumar Somanna',
    mobile: testPhone,
    email: 'ravi.somanna@example.com',
    courseInterest: 'KPSC KAS Prelims & Mains Mentorship',
    preferredContactMethod: 'WhatsApp',
    message: 'I want to join the 2026 weekend batch for KAS.',
    consent: true
  };
  const createEnquiryRes = await apiRequest('POST', '/api/enquiries', enquiryPayload);
  assert(createEnquiryRes.status === 201 && createEnquiryRes.data.success, 'Enquiry submitted with HTTP 201 response');
  const createdEnquiryId = createEnquiryRes.data.enquiry?.id || createEnquiryRes.data.enquiry?._id;

  // Verify in Admin dashboard
  const adminEnquiriesRes = await apiRequest('GET', '/api/admin/enquiries', null, authHeaders);
  assert(adminEnquiriesRes.status === 200, 'Admin can fetch enquiry list');
  const foundEnquiry = adminEnquiriesRes.data.enquiries?.find(e => e.mobile === testPhone || e.id === createdEnquiryId);
  assert(foundEnquiry && foundEnquiry.fullName === 'Ravi Kumar Somanna', 'Newly submitted enquiry is present in admin enquiries table');

  // Verify Admin can update status
  const updateStatusRes = await apiRequest('PATCH', `/api/admin/enquiries/${createdEnquiryId}/status`, { status: 'Contacted' }, authHeaders);
  assert(updateStatusRes.status === 200 && updateStatusRes.data.enquiry?.status === 'Contacted', 'Admin successfully changed enquiry status to "Contacted"');

  // TEST 2: Admin Upload Study Material
  console.log('\n[Test 2] Testing Admin Study Material Upload...');
  // Create multipart body manually for PDF upload
  const boundary = '----WebKitFormBoundary' + Math.random().toString(36).substring(2);
  const samplePdf = Buffer.from('%PDF-1.4 sample test study material content for E2E test\n%%EOF');
  
  let bodyBuffer = Buffer.concat([
    Buffer.from(`--${boundary}\r\nContent-Disposition: form-data; name="title"\r\n\r\nKarnataka History Comprehensive Notes\r\n`),
    Buffer.from(`--${boundary}\r\nContent-Disposition: form-data; name="type"\r\n\r\nStudy Notes\r\n`),
    Buffer.from(`--${boundary}\r\nContent-Disposition: form-data; name="exam"\r\n\r\nKAS\r\n`),
    Buffer.from(`--${boundary}\r\nContent-Disposition: form-data; name="subject"\r\n\r\nKarnataka General Knowledge\r\n`),
    Buffer.from(`--${boundary}\r\nContent-Disposition: form-data; name="year"\r\n\r\n2025\r\n`),
    Buffer.from(`--${boundary}\r\nContent-Disposition: form-data; name="description"\r\n\r\nAuthentic Vijayanagara & Mysore dynasty notes\r\n`),
    Buffer.from(`--${boundary}\r\nContent-Disposition: form-data; name="isPublished"\r\n\r\ntrue\r\n`),
    Buffer.from(`--${boundary}\r\nContent-Disposition: form-data; name="file"; filename="karnataka-history-test.pdf"\r\nContent-Type: application/pdf\r\n\r\n`),
    samplePdf,
    Buffer.from(`\r\n--${boundary}--\r\n`)
  ]);

  const uploadRes = await apiRequest('POST', '/api/admin/study-materials', bodyBuffer, {
    ...authHeaders,
    'Content-Type': `multipart/form-data; boundary=${boundary}`
  });

  assert(uploadRes.status === 201 && uploadRes.data.item, 'Study material PDF uploaded and recorded');
  const uploadedMaterialId = uploadRes.data.item?.id || uploadRes.data.item?._id;

  // Check it appears on public /api/study-materials
  const publicMaterialsRes = await apiRequest('GET', '/api/study-materials');
  const foundPublic = publicMaterialsRes.data.items?.find(m => m.id === uploadedMaterialId);
  assert(foundPublic && foundPublic.title === 'Karnataka History Comprehensive Notes', 'Uploaded document is visible on public study materials listing');

  // TEST 3: Admin Edit Document Details
  console.log('\n[Test 3] Testing Admin Edit Document Details...');
  const editRes = await apiRequest('PUT', `/api/admin/study-materials/${uploadedMaterialId}`, {
    title: 'Karnataka History & Heritage Master Notes (Revised 2026)',
    subject: 'Karnataka General Knowledge'
  }, authHeaders);
  assert(editRes.status === 200, 'Admin edit returned HTTP 200');

  // Check public listing reflects new title
  const publicAfterEdit = await apiRequest('GET', '/api/study-materials');
  const foundEdited = publicAfterEdit.data.items?.find(m => m.id === uploadedMaterialId);
  assert(foundEdited && foundEdited.title.includes('Revised 2026'), 'Public listing immediately reflects updated document title');

  // TEST 4: Admin Delete Document
  console.log('\n[Test 4] Testing Admin Delete Document...');
  const deleteRes = await apiRequest('DELETE', `/api/admin/study-materials/${uploadedMaterialId}`, null, authHeaders);
  assert(deleteRes.status === 200, 'Admin delete returned HTTP 200');

  // Check public listing no longer includes it
  const publicAfterDelete = await apiRequest('GET', '/api/study-materials');
  const deletedStillFound = publicAfterDelete.data.items?.find(m => m.id === uploadedMaterialId);
  assert(!deletedStillFound, 'Deleted document is removed from public listing');

  // Check download is 404
  const downloadDeleted = await apiRequest('GET', `/api/study-materials/${uploadedMaterialId}/download`);
  assert(downloadDeleted.status === 404, 'Download endpoint returns 404 for deleted document');

  // TEST 5: Faculty Management - Image upload & update
  console.log('\n[Test 5] Testing Faculty Photograph Management...');
  const imgBoundary = '----WebKitFormBoundaryImg' + Math.random().toString(36).substring(2);
  const sampleImg = Buffer.from('RIFF\x24\x00\x00\x00WEBPVP8 \x18\x00\x00\x00\x30\x01\x00\x9d\x01\x2a\x01\x00\x01\x00\x02\x00\x34\x25\xa4\x00\x03\x70\x00\xfe\xfb\xfd\xb7\x00');
  let imgBuffer = Buffer.concat([
    Buffer.from(`--${imgBoundary}\r\nContent-Disposition: form-data; name="image"; filename="faculty-test.webp"\r\nContent-Type: image/webp\r\n\r\n`),
    sampleImg,
    Buffer.from(`\r\n--${imgBoundary}--\r\n`)
  ]);
  const imgUploadRes = await apiRequest('POST', '/api/upload/image', imgBuffer, {
    ...authHeaders,
    'Content-Type': `multipart/form-data; boundary=${imgBoundary}`
  });
  assert(imgUploadRes.status === 201 && imgUploadRes.data.imageUrl, 'Faculty image uploaded successfully: ' + imgUploadRes.data.imageUrl);

  // Update a faculty profile with new photograph URL
  const facultyListRes = await apiRequest('GET', '/api/faculty');
  const targetFaculty = facultyListRes.data.faculty[0];
  const updateFacultyRes = await apiRequest('PUT', `/api/faculty/${targetFaculty.id}`, {
    ...targetFaculty,
    image: imgUploadRes.data.imageUrl
  }, authHeaders);
  assert(updateFacultyRes.status === 200, 'Faculty profile updated with new image URL');

  // Verify on public faculty endpoint
  const publicFacultyRes = await apiRequest('GET', '/api/faculty');
  const updatedFaculty = publicFacultyRes.data.faculty.find(f => f.id === targetFaculty.id);
  assert(updatedFaculty && updatedFaculty.image === imgUploadRes.data.imageUrl, 'Public faculty page receives updated photograph without broken link');

  // TEST 6: Persistence Verification
  console.log('\n[Test 6] Testing Data Persistence...');
  const storeFilePath = path.resolve(__dirname, 'data/store.json');
  assert(fs.existsSync(storeFilePath), 'Persistent database file store.json exists on disk');
  const storeContent = JSON.parse(fs.readFileSync(storeFilePath, 'utf8'));
  assert(storeContent.enquiries && storeContent.enquiries.length > 0, `store.json contains ${storeContent.enquiries.length} persistent enquiries`);
  assert(storeContent.studyMaterials && storeContent.studyMaterials.length > 0, `store.json contains ${storeContent.studyMaterials.length} persistent study materials`);

  // TEST 7: Security Verification
  console.log('\n[Test 7] Testing Security & Unauthenticated Access Protection...');
  const unauthorizedEnquiries = await apiRequest('GET', '/api/admin/enquiries');
  assert(unauthorizedEnquiries.status === 401, 'Unauthenticated request to GET /api/admin/enquiries rejected with HTTP 401');

  const unauthorizedUpload = await apiRequest('POST', '/api/admin/study-materials', { title: 'Hacked' });
  assert(unauthorizedUpload.status === 401, 'Unauthenticated upload to /api/admin/study-materials rejected with HTTP 401');

  const unauthorizedDelete = await apiRequest('DELETE', '/api/admin/study-materials/sm-1');
  assert(unauthorizedDelete.status === 401, 'Unauthenticated delete rejected with HTTP 401');

  // TEST 8: Dashboard Metrics
  console.log('\n[Test 8] Testing Dashboard Live Statistics Endpoint...');
  const dashboardStatsRes = await apiRequest('GET', '/api/admin/dashboard/stats', null, authHeaders);
  assert(dashboardStatsRes.status === 200 && dashboardStatsRes.data.stats, 'Dashboard stats endpoint returns live counts');
  console.log('Live Stats:', dashboardStatsRes.data.stats);

  console.log(`\n========================================`);
  console.log(`E2E TEST SUMMARY: ${passed} / ${total} assertions passed (${Math.round((passed/total)*100)}%)`);
  console.log(`========================================\n`);

  if (passed === total) {
    process.exit(0);
  } else {
    process.exit(1);
  }
}

runTests().catch(err => {
  console.error('Test runner encountered an error:', err);
  process.exit(1);
});
