const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');

const dataFilePath = path.resolve(__dirname, '../data/store.json');

// Default initial state seeded with real brochure data
const defaultState = {
  admins: [
    {
      _id: 'admin-1',
      id: 'admin-1',
      name: 'Dr. Vasanth Kumar N',
      email: 'admin@saaraswath.com',
      passwordHash: bcrypt.hashSync('Admin@123', 8),
      role: 'superadmin',
      createdAt: new Date().toISOString()
    }
  ],
  courses: [
    {
      _id: 'upsc-cse-integrated',
      id: 'upsc-cse-integrated',
      title: 'UPSC Civil Services Integrated (Prelims + Mains + Interview)',
      category: 'UPSC',
      duration: '1 Year / 2 Years (Weekend & Regular)',
      mode: 'Classroom & Hybrid Online',
      badge: 'Flagship Program',
      description: 'Holistic 360-degree training covering General Studies Paper I & II (CSAT), Mains GS I-IV, Essay writing, Optional subject guidance, and personality development.',
      features: [
        'Comprehensive Prelims & Mains Syllabus Coverage',
        'Daily Current Affairs & Editorial Analysis',
        'Weekly Answer Writing Mentorship',
        'Rigorous Test Series with All-India Benchmarking',
        'Personalized 1-on-1 Guidance by Dr. Vasanth Kumar N'
      ],
      eligibility: 'Any Degree or Final Year Graduation Students',
      batchTimings: 'Morning (7:30 AM - 10:00 AM) | Evening (5:30 PM - 8:00 PM) | Weekend Batches'
    },
    {
      _id: 'kpsc-kas-probationers',
      id: 'kpsc-kas-probationers',
      title: 'KPSC KAS - Gazetted Probationers (Group A & B)',
      category: 'KAS',
      duration: '10-12 Months',
      mode: 'Classroom & Hybrid Online',
      badge: 'State Premier',
      description: 'Specialized training tailored specifically to the Karnataka Public Service Commission syllabus, focusing on Karnataka History, Geography, Economy, Polity, and Kannada language mastery.',
      features: [
        'In-depth Karnataka Heritage, Culture & Economy modules',
        'KPSC Prelims Paper 1 & 2 complete coverage',
        'Mains GS 1 to GS 4 answer structuring workshops',
        'Kannada & English qualifying papers coaching',
        'State Economic Survey & Karnataka Budget special classes'
      ],
      eligibility: 'Graduation in any discipline',
      batchTimings: 'Regular Daily & Exclusive Weekend Batches'
    },
    {
      _id: 'psi-pc-foundation',
      id: 'psi-pc-foundation',
      title: 'Karnataka Police PSI & PC Comprehensive Coaching',
      category: 'Police Services',
      duration: '4-6 Months',
      mode: 'Classroom Intensive',
      badge: 'High Selection Rate',
      description: 'Tailored for candidates aspiring for Police Sub-Inspector and Police Constable examinations with structured syllabus coverage and physical test guidance roadmap.',
      features: [
        'General Studies Paper-II rigorous coverage',
        'Paper-I Translation (English to Kannada & Kannada to English)',
        'Precise writing and essay drafting practice',
        'Daily speed tests and mental ability shortcuts'
      ],
      eligibility: 'Graduation for PSI / PUC (10+2) for PC',
      batchTimings: 'Daily Morning & Evening Batches'
    },
    {
      _id: 'degree-integrated-ias-kas',
      id: 'degree-integrated-ias-kas',
      title: 'Degree Integrated Foundation Batch (3 Years)',
      category: 'Foundation',
      duration: '3 Academic Years',
      mode: 'Weekend & Holiday Batches',
      badge: 'Long-term Excellence',
      description: 'Specially structured for undergraduate college students (B.A., B.Sc., B.Com., B.B.A., B.E.) to build rock-solid foundational concepts alongside university graduation.',
      features: [
        'NCERT textbook deep dive (Classes 6 to 12)',
        'Basic analytical newspaper reading habits',
        'Foundational maps, atlas interpretation, and history timeline building',
        'Zero conflict with university semester exams'
      ],
      eligibility: '1st, 2nd, or Final Year Degree Students',
      batchTimings: 'Saturday Evenings & Sundays'
    },
    {
      _id: 'kannada-literature-optional',
      id: 'kannada-literature-optional',
      title: 'Kannada Literature Optional (UPSC & KPSC)',
      category: 'Optional',
      duration: '4 Months',
      mode: 'Classroom & Interactive Mentoring',
      badge: 'High Scoring Discipline',
      description: 'Specialized coaching for Paper I and Paper II of Kannada Literature optional with complete textual analysis, poet evaluations, and model answer drafting.',
      features: [
        'Ancient, Medieval, and Modern Kannada Literature mastery',
        'Comprehensive notes on Halegannada and Nadugannada texts',
        'Linguistics and literary criticism modules',
        'Previous 15 years question paper analysis'
      ],
      eligibility: 'Aspirants opting for Kannada Literature Optional',
      batchTimings: 'Special Weekend & Evening Batches'
    }
  ],
  faculty: [
    {
      _id: 'f1',
      id: 'f1',
      name: 'Dr. Krishna Kumar',
      role: 'Senior Resource Person',
      specialization: 'Geography',
      experience: '10+ Years Mentoring',
      bio: 'Subject matter expert covering Physical, Indian, and Karnataka Geography with map-oriented conceptual clarity.',
      image: '/images/faculty/dr-krishna-kumar.jpg'
    },
    {
      _id: 'f2',
      id: 'f2',
      name: 'Sri Akash',
      role: 'Faculty',
      specialization: 'Indian Constitution & Polity',
      experience: '8+ Years Mentoring',
      bio: 'Expert in constitutional governance, landmark judicial verdicts, and parliamentary procedures.',
      image: '/images/faculty/sri-akash.jpg'
    },
    {
      _id: 'f3',
      id: 'f3',
      name: 'Sri Raghu M Raj',
      role: 'Faculty',
      specialization: 'History of Karnataka & Culture',
      experience: '7+ Years Mentoring',
      bio: 'In-depth coverage of Karnataka dynasties, heritage, unification movement, and modern state history.',
      image: '/images/faculty/sri-raghu-m-raj.jpg'
    },
    {
      _id: 'f4',
      id: 'f4',
      name: 'Sri Sandhya G S',
      role: 'Faculty',
      specialization: 'General Science',
      experience: '6+ Years Mentoring',
      bio: 'Focuses on fundamental physics, chemistry, biology, and everyday scientific applications for competitive exams.',
      image: '/images/faculty/sri-sandhya-g-s.jpg'
    },
    {
      _id: 'f5',
      id: 'f5',
      name: 'Sri Rachana',
      role: 'Faculty',
      specialization: 'Environment & Ecology',
      experience: '6+ Years Mentoring',
      bio: 'Covers environmental conventions, biodiversity conservation, climate change, and Karnataka wildlife ecosystems.',
      image: '/images/faculty/sri-rachana.jpg'
    },
    {
      _id: 'f6',
      id: 'f6',
      name: 'Sri Ashwini',
      role: 'Faculty',
      specialization: 'Science & Technology',
      experience: '7+ Years Mentoring',
      bio: 'Delivers high-yield lectures on biotechnology, defense tech, space missions, and recent technological developments.',
      image: '/images/faculty/sri-ashwini.jpg'
    },
    {
      _id: 'f7',
      id: 'f7',
      name: 'Sri Kumar',
      role: 'Faculty',
      specialization: 'Indian Economy & Karnataka Survey',
      experience: '8+ Years Mentoring',
      bio: 'Specialist in macroeconomics, state budgets, fiscal policies, banking reforms, and rural economic growth.',
      image: '/images/faculty/sri-kumar.jpg'
    },
    {
      _id: 'f8',
      id: 'f8',
      name: 'Sri Narasimha Murthy',
      role: 'Faculty',
      specialization: 'Indian History & Art and Culture',
      experience: '9+ Years Mentoring',
      bio: 'Engaging lectures covering Ancient, Medieval, Modern freedom struggle, and Indian temple architecture.',
      image: '/images/faculty/sri-narasimha-murthy.jpg'
    },
    {
      _id: 'f9',
      id: 'f9',
      name: 'Sri Pratheeksha',
      role: 'Faculty',
      specialization: 'Current Affairs & CSAT',
      experience: '5+ Years Mentoring',
      bio: 'Mentors aspirants on daily national/state current events, analytical reasoning, and quantitative aptitude.',
      image: '/images/faculty/sri-pratheeksha.jpg'
    },
    {
      _id: 'f10',
      id: 'f10',
      name: 'Prof G Chandrashekaran',
      role: 'Faculty',
      specialization: 'Indian Economy & Public Policy',
      experience: '12+ Years Mentoring',
      bio: 'Distinguished educator specializing in monetary economics, international trade, and governance reforms.',
      image: '/images/faculty/prof-g-chandrashekaran.jpg'
    }
  ],
  achievers: [
    {
      _id: 'a1',
      id: 'a1',
      name: 'Sri Pooja',
      exam: 'Karnataka GPT Selection',
      batch: 'Batch 2023-24',
      role: 'GPT - Biology, GHPS Doddasullikere, Hunsur TQ, Mysuru',
      quote: 'The rigorous coaching and personalized test discussions at Saaraswath Academy were instrumental in my rank.',
      image: '/images/achievements/sri-pooja.jpg'
    },
    {
      _id: 'a2',
      id: 'a2',
      name: 'Sri Dayanand',
      exam: 'Karnataka GPT Selection',
      batch: 'Batch 2023-24',
      role: 'GPT - Biology, GMS Kotta, Sira TQ, Tumakuru',
      quote: 'Conceptual clarity over rote memorization gave me the edge during the competitive evaluation.',
      image: '/images/achievements/sri-dayanand.jpg'
    },
    {
      _id: 'a3',
      id: 'a3',
      name: 'Sri Dinesha N J',
      exam: 'Karnataka GPT Selection',
      batch: 'Batch 2023-24',
      role: 'GPT - Biology, GHPS Hunasekatte, Shikaripura TQ, Shivamogga',
      quote: 'Dr. Vasanth Kumar Sir\'s guidance in biology and competitive pedagogy made all the difference.',
      image: '/images/achievements/sri-dinesha-n-j.jpg'
    },
    {
      _id: 'a4',
      id: 'a4',
      name: 'Sri Krishna G B',
      exam: 'Police Sub-Inspector (PSI)',
      batch: 'Batch 2024',
      role: 'PSI Selection',
      quote: 'The comprehensive practice on paper 1 translation and general studies gave me a decisive edge.',
      image: '/images/achievements/sri-krishna-g-b.jpg'
    },
    {
      _id: 'a5',
      id: 'a5',
      name: 'Sri Santhosh Bedre',
      exam: 'Police Sub-Inspector (PSI)',
      batch: 'Batch 2024',
      role: 'PSI Selection',
      quote: 'Strict discipline, continuous mock exams, and individual attention from mentors.',
      image: '/images/achievements/sri-santhosh-bedre.jpg'
    }
  ],
  gallery: [
    {
      _id: 'g1',
      id: 'g1',
      title: 'Classroom Mentoring Session',
      category: 'Classroom',
      image: '/images/classroom/classroom_3.jpeg',
      description: 'Interactive classroom discussion on Constitutional Governance.'
    },
    {
      _id: 'g2',
      id: 'g2',
      title: 'Academy Felicitation Ceremony',
      category: 'Achievements',
      image: '/images/achievements/sri-pooja.jpg',
      description: 'Honoring our successful officers and rank holders.'
    }
  ],
  enquiries: [
    {
      _id: 'enq-1',
      id: 'enq-1',
      name: 'Ramesh Gowda',
      phone: '9845123456',
      email: 'ramesh.g@gmail.com',
      courseInterested: 'KPSC KAS - Gazetted Probationers',
      preferredContactMethod: 'Phone',
      preferredMode: 'Classroom',
      qualification: 'B.A. Final Year',
      notes: 'Looking for Kannada medium guidance and weekend batch details.',
      consent: true,
      status: 'New',
      createdAt: '2026-10-09T08:30:00.000Z'
    },
    {
      _id: 'enq-2',
      id: 'enq-2',
      name: 'Sneha Patil',
      phone: '8762345678',
      email: 'sneha.patil@outlook.com',
      courseInterested: 'UPSC Civil Services Integrated',
      preferredContactMethod: 'WhatsApp',
      preferredMode: 'Weekend Batch',
      qualification: 'B.E. Computer Science',
      notes: 'Working in tech, target is UPSC 2027.',
      consent: true,
      status: 'Contacted',
      createdAt: '2026-10-08T11:15:00.000Z'
    }
  ],
  studyMaterials: [
    {
      _id: 'sm-1',
      id: 'sm-1',
      title: 'UPSC Civil Services Prelims 2024 - General Studies Paper I',
      resourceType: 'Question Paper',
      examination: 'UPSC',
      subject: 'General Studies',
      year: '2024',
      description: 'Official UPSC CSE Prelims 2024 GS-1 question paper with answer keys and topic-wise breakdown.',
      filePath: '/uploads/study-materials/upsc-prelims-2024-gs1.pdf',
      fileName: 'upsc-prelims-2024-gs1.pdf',
      fileSize: '1.8 MB',
      isPublished: true,
      downloadCount: 142,
      createdAt: '2026-10-01T10:00:00.000Z',
      updatedAt: '2026-10-01T10:00:00.000Z'
    },
    {
      _id: 'sm-2',
      id: 'sm-2',
      title: 'KPSC KAS Gazetted Probationers 2024 - Prelims Paper I (General Studies & Humanities)',
      resourceType: 'Question Paper',
      examination: 'KAS',
      subject: 'General Studies',
      year: '2024',
      description: 'Official KAS Gazetted Probationers preliminary examination Paper-I in English & Kannada.',
      filePath: '/uploads/study-materials/kpsc-kas-prelims-2024-paper1.pdf',
      fileName: 'kpsc-kas-prelims-2024-paper1.pdf',
      fileSize: '2.1 MB',
      isPublished: true,
      downloadCount: 189,
      createdAt: '2026-10-02T11:30:00.000Z',
      updatedAt: '2026-10-02T11:30:00.000Z'
    },
    {
      _id: 'sm-3',
      id: 'sm-3',
      title: 'Indian Polity & Constitution - Comprehensive Revision Framework',
      resourceType: 'Study Notes',
      examination: 'UPSC',
      subject: 'Indian Polity',
      year: '2026',
      description: 'High-yield conceptual notes covering Fundamental Rights, DPSP, Parliament, Judicial Review, and Constitutional Amendments.',
      filePath: '/uploads/study-materials/indian-polity-foundations.pdf',
      fileName: 'indian-polity-foundations.pdf',
      fileSize: '3.4 MB',
      isPublished: true,
      downloadCount: 310,
      createdAt: '2026-10-03T09:15:00.000Z',
      updatedAt: '2026-10-03T09:15:00.000Z'
    },
    {
      _id: 'sm-4',
      id: 'sm-4',
      title: 'Karnataka History, Heritage & Unification Movement - Summary Notes',
      resourceType: 'Study Notes',
      examination: 'KAS',
      subject: 'Karnataka General Knowledge',
      year: '2026',
      description: 'Crucial summary notes covering Shatavahanas, Kadambas, Chalukyas, Hoysalas, Vijayanagara, Mysore Wodeyars, and state unification.',
      filePath: '/uploads/study-materials/karnataka-history-notes.pdf',
      fileName: 'karnataka-history-notes.pdf',
      fileSize: '2.8 MB',
      isPublished: true,
      downloadCount: 265,
      createdAt: '2026-10-04T14:20:00.000Z',
      updatedAt: '2026-10-04T14:20:00.000Z'
    },
    {
      _id: 'sm-5',
      id: 'sm-5',
      title: 'Geography of India & Karnataka - Map-Oriented Notes',
      resourceType: 'Study Notes',
      examination: 'UPSC',
      subject: 'Geography',
      year: '2026',
      description: 'River systems, physiographic divisions, climate zones, minerals, and agro-ecological zones of Karnataka and India.',
      filePath: '/uploads/study-materials/geography-notes.pdf',
      fileName: 'geography-notes.pdf',
      fileSize: '2.4 MB',
      isPublished: true,
      downloadCount: 198,
      createdAt: '2026-10-05T16:45:00.000Z',
      updatedAt: '2026-10-05T16:45:00.000Z'
    },
    {
      _id: 'sm-6',
      id: 'sm-6',
      title: 'Karnataka State Economic Survey & Budget Highlights 2025-26',
      resourceType: 'Study Notes',
      examination: 'KAS',
      subject: 'Indian Economy',
      year: '2025',
      description: 'Key macroeconomic figures, state welfare guarantees, agricultural growth metrics, and industrial policy updates.',
      filePath: '/uploads/study-materials/karnataka-economic-survey.pdf',
      fileName: 'karnataka-economic-survey.pdf',
      fileSize: '1.9 MB',
      isPublished: true,
      downloadCount: 220,
      createdAt: '2026-10-06T12:10:00.000Z',
      updatedAt: '2026-10-06T12:10:00.000Z'
    }
  ],
  syllabus: {
    upsc: 'UPSC CSE Prelims: GS-I (200 M, 100 Qs), CSAT Paper II (200 M, 80 Qs, Qualifying 33%). Mains: 1750 Written Marks + 275 Personality Test.',
    kas: 'KPSC KAS Prelims: Paper 1 (200 M, 100 Qs) + Paper 2 (200 M, 100 Qs). Mains: 1250 Written Marks + Personality Test = 1275 Marks.'
  },
  brochure: {
    filename: 'academy-brochure.pdf',
    filepath: '/brochures/academy-brochure.pdf',
    uploadedAt: new Date().toISOString()
  },
  settings: {
    academyName: 'Saaraswath IAS/KAS Academy',
    address: '#608, 1st Floor, P & T Block, (Near Jnanaganga school), Panchamantra road, Kuvempunagar, Mysuru - 570023',
    phones: ['7619415566', '7619615566'],
    whatsapp: '7619415566',
    email: 'srisaaraswath@gmail.com',
    heroTitle: 'The Success Blueprint for UPSC & KAS Aspirants',
    directorName: 'Dr. Vasanth Kumar N'
  }
};

// Load saved data if present on disk, otherwise initialize with default state
let currentStore = defaultState;

try {
  if (fs.existsSync(dataFilePath)) {
    const raw = fs.readFileSync(dataFilePath, 'utf8');
    const parsed = JSON.parse(raw);
    currentStore = {
      ...defaultState,
      ...parsed,
      // Merge critical collections ensuring arrays exist
      admins: parsed.admins || defaultState.admins,
      courses: parsed.courses || defaultState.courses,
      faculty: parsed.faculty || defaultState.faculty,
      achievements: parsed.achievements || defaultState.achievements,
      gallery: parsed.gallery || defaultState.gallery,
      enquiries: parsed.enquiries || defaultState.enquiries,
      studyMaterials: parsed.studyMaterials || defaultState.studyMaterials,
      settings: parsed.settings || defaultState.settings,
    };
  } else {
    fs.writeFileSync(dataFilePath, JSON.stringify(defaultState, null, 2), 'utf8');
  }
} catch (err) {
  console.error('[Store] Error loading store file:', err.message);
  currentStore = defaultState;
}

// Helper to save store synchronously to persistent disk file
currentStore.save = function () {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(currentStore, null, 2), 'utf8');
  } catch (err) {
    console.error('[Store] Error saving store to file:', err.message);
  }
};

module.exports = currentStore;
