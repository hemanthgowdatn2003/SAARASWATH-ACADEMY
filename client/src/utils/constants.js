export const getAssetUrl = (path) => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  return `${cleanBase}${cleanPath}`;
};

export const ACADEMY_INFO = {
  name: "Saaraswath IAS/KAS Academy",
  tagline: "The Success Blueprint",
  since: "2019",
  founder: "Dr. Vasanth Kumar N",
  founderTitle: "Founder and Director",
  founderExperience: "Over 15 years of experience mentoring Biotechnology students, Civil Services aspirants, and competitive-examination aspirants.",
  founderBio: "He is committed to providing strong academic guidance, conceptual clarity, exam-oriented preparation, and focused career development.",
  address: "#608, 1st Floor, P & T Block, (Near Jnanaganga school), Panchamantra road, Kuvempunagar, Mysuru - 570023",
  whatsappNumber: "7619415566",
  whatsappFull: "+91 7619415566",
  phoneNumbers: ["7619415566", "7619615566"],
  email: "srisaaraswath@gmail.com",
  logoPath: getAssetUrl("/images/logo/academy-logo.png"),
  logoTight: getAssetUrl("/images/logo/academy-logo-tight.png"),
  founderPhoto: getAssetUrl("/images/founder/dr-vasanth-kumar.jpg"),
  brochurePath: getAssetUrl("/brochures/academy-brochure.pdf"),
  mapsUrl: "https://maps.google.com/?q=Saaraswath+IAS+KAS+Academy+Mysuru",
};

export const getWhatsAppLink = (customMessage = "") => {
  const defaultMsg = "Hello Saaraswath IAS/KAS Academy, I would like to know more about your UPSC/KAS coaching courses and admission details.";
  const text = encodeURIComponent(customMessage || defaultMsg);
  return `https://wa.me/91${ACADEMY_INFO.whatsappNumber}?text=${text}`;
};

export const INITIAL_COURSES = [
  {
    id: "upsc-cse-integrated",
    title: "UPSC Civil Services Integrated (Prelims + Mains + Interview)",
    category: "UPSC",
    duration: "1 Year / 2 Years (Weekend & Regular)",
    mode: "Classroom & Hybrid Online",
    badge: "Flagship Program",
    description: "Holistic 360-degree training covering General Studies Paper I & II (CSAT), Mains GS I-IV, Essay writing, Optional subject guidance, and personality development.",
    features: [
      "Comprehensive Prelims & Mains Syllabus Coverage",
      "Daily Current Affairs & Editorial Analysis",
      "Weekly Answer Writing Mentorship",
      "Rigorous Test Series with All-India Benchmarking",
      "Personalized 1-on-1 Guidance by Dr. Vasanth Kumar N"
    ],
    eligibility: "Any Degree or Final Year Graduation Students",
    batchTimings: "Morning (7:30 AM - 10:00 AM) | Evening (5:30 PM - 8:00 PM) | Weekend Batches"
  },
  {
    id: "kpsc-kas-probationers",
    title: "KPSC KAS - Gazetted Probationers (Group A & B)",
    category: "KAS",
    duration: "10-12 Months",
    mode: "Classroom & Hybrid Online",
    badge: "State Premier",
    description: "Specialized training tailored specifically to the Karnataka Public Service Commission syllabus, focusing on Karnataka History, Geography, Economy, Polity, and Kannada language mastery.",
    features: [
      "In-depth Karnataka Heritage, Culture & Economy modules",
      "KPSC Prelims Paper 1 & 2 complete coverage",
      "Mains GS 1 to GS 4 answer structuring workshops",
      "Kannada & English qualifying papers coaching",
      "State Economic Survey & Karnataka Budget special classes"
    ],
    eligibility: "Graduation in any discipline",
    batchTimings: "Regular Daily & Exclusive Weekend Batches"
  },
  {
    id: "psi-pc-foundation",
    title: "Karnataka Police PSI & PC Comprehensive Coaching",
    category: "Police Services",
    duration: "4-6 Months",
    mode: "Classroom",
    badge: "High Selection Rate",
    description: "Targeted module for Police Sub-Inspector (Civil, Armed, KSRP) and Police Constable aspirants featuring mental ability, general knowledge, constitution, and translation skills.",
    features: [
      "Focused translation (English to Kannada & Kannada to English)",
      "Precis writing and Essay drafting techniques",
      "General Mental Ability & Fast Aptitude tricks",
      "Physical test fitness orientation & mental endurance coaching"
    ],
    eligibility: "Degree for PSI / PUC (10+2) for PC",
    batchTimings: "Fast-track Batches Available"
  },
  {
    id: "foundation-degree",
    title: "Degree + IAS/KAS Integrated Foundation Program",
    category: "Foundation",
    duration: "3 Years",
    mode: "Weekend / Evening Classroom",
    badge: "Early Starters",
    description: "Ideal for undergraduate students (BA, BSc, BCom, BTech) who want to crack civil services in their very first attempt upon graduating.",
    features: [
      "NCERT & Standard Reference Book mastery",
      "Critical thinking, public speaking & debate sessions",
      "Regular newspaper analysis habits from Day 1",
      "Zero conflict with regular college academic schedules"
    ],
    eligibility: "Students pursuing 1st / 2nd / 3rd Year Degree",
    batchTimings: "Weekends (Saturday afternoon & Sunday)"
  },
  {
    id: "kannada-literature-optional",
    title: "Kannada Literature Optional (UPSC & KAS Mains)",
    category: "Optional",
    duration: "4 Months",
    mode: "Classroom & Online",
    badge: "High Scoring",
    description: "Expert mentorship for Kannada Sahitya optional with classical & modern texts, linguistic analysis, poetic appreciation, and model answer writing.",
    features: [
      "Halegannada, Nadugannada & Hosagannada texts analysis",
      "Previous 15 years question papers solutions",
      "Model answer templates by top scorers"
    ],
    eligibility: "Aspirants choosing Kannada Literature Optional",
    batchTimings: "Special Evening Sessions"
  }
];

export const INITIAL_FACULTY = [
  {
    id: "f1",
    name: "Dr. Krishna Kumar",
    role: "Senior Resource Person",
    specialization: "Geography",
    experience: "10+ Years Mentoring",
    bio: "Subject matter expert covering Physical, Indian, and Karnataka Geography with map-oriented conceptual clarity.",
    image: getAssetUrl("/images/faculty/dr-krishna-kumar.jpg")
  },
  {
    id: "f2",
    name: "Sri Akash",
    role: "Resource Person",
    specialization: "Constitution and Governance",
    experience: "8+ Years Mentoring",
    bio: "Expert mentor for Indian Polity, Constitutional Provisions, and Administrative Governance structures.",
    image: getAssetUrl("/images/faculty/sri-akash.jpg")
  },
  {
    id: "f3",
    name: "Sri Raghu M Raj",
    role: "Resource Person",
    specialization: "Geography and Communication",
    experience: "8+ Years Mentoring",
    bio: "Specialist in Human & Economic Geography, Cartography, and Interpersonal Communication Skills for civil service aspirants.",
    image: getAssetUrl("/images/faculty/sri-raghu-m-raj.jpg")
  },
  {
    id: "f4",
    name: "Sri Sandhya G S",
    role: "Content Head & Resource Person",
    specialization: "Current Affairs and Content Writer",
    experience: "7+ Years Mentoring",
    bio: "Leads national and Karnataka state current affairs analysis, governmental reports, and editorial digests.",
    image: getAssetUrl("/images/faculty/sri-sandhya-g-s.jpg")
  },
  {
    id: "f5",
    name: "Sri Rachana",
    role: "Resource Person",
    specialization: "Current Affairs and Content Writer",
    experience: "6+ Years Mentoring",
    bio: "Dedicated specialist focusing on daily news evaluation, government policies, and structured notes formulation.",
    image: getAssetUrl("/images/faculty/sri-rachana.jpg")
  },
  {
    id: "f6",
    name: "Sri Ashwini",
    role: "Resource Person",
    specialization: "Indian National Movement and Karnataka History",
    experience: "9+ Years Mentoring",
    bio: "Authority on Modern Indian Freedom Movement, Princely Mysore, and Karnataka Unification history.",
    image: getAssetUrl("/images/faculty/sri-ashwini.jpg")
  },
  {
    id: "f7",
    name: "Sri Kumar",
    role: "Resource Person",
    specialization: "History and Culture",
    experience: "10+ Years Mentoring",
    bio: "In-depth pedagogue for Ancient & Medieval Indian History, Art, Architecture, and cultural heritage.",
    image: getAssetUrl("/images/faculty/sri-kumar.jpg")
  },
  {
    id: "f8",
    name: "Sri Narasimha Murthy",
    role: "Resource Person",
    specialization: "Modern History and Polity",
    experience: "11+ Years Mentoring",
    bio: "Experienced instructor connecting historical institutional developments directly with contemporary governance.",
    image: getAssetUrl("/images/faculty/sri-narasimha-murthy.jpg")
  },
  {
    id: "f9",
    name: "Sri Pratheeksha",
    role: "Resource Person",
    specialization: "Science and Technology, Environment and Economy",
    experience: "7+ Years Mentoring",
    bio: "Specialist in applied science, climate treaties, biodiversity preservation, and macro-economic fundamentals.",
    image: getAssetUrl("/images/faculty/sri-pratheeksha.jpg")
  },
  {
    id: "f10",
    name: "Prof G Chandrashekaran",
    role: "Senior Resource Person",
    specialization: "General Mental Ability",
    experience: "15+ Years Mentoring",
    bio: "Master mentor in CSAT aptitude, quantitative analysis, data interpretation, and analytical logic.",
    image: getAssetUrl("/images/faculty/prof-g-chandrashekaran.jpg")
  }
];

export const INITIAL_ACHIEVERS = [
  {
    id: "a1",
    name: "Sri Pooja",
    exam: "UPSC Civil Services (IAS)",
    batch: "Batch 2023",
    role: "Indian Administrative Service",
    center: "Saaraswath Study Centre, Mysuru",
    quote: "The personalized conceptual guidance and answer writing rigor at Saaraswath Academy shaped my mindset and path to clearing the prestigious Civil Services.",
    image: getAssetUrl("/images/achievements/sri-pooja.jpg")
  },
  {
    id: "a2",
    name: "Sri Dayanand",
    exam: "City Armed Reserve (CAR)",
    batch: "Batch 2024-25",
    role: "Bengaluru CAR Officer",
    center: "Saaraswath Academy",
    quote: "Constant mentoring, test series, and timely mock evaluation helped me secure top rank.",
    image: getAssetUrl("/images/achievements/sri-dayanand.jpg")
  },
  {
    id: "a3",
    name: "Sri Dinesha N J",
    exam: "Karnataka GPT Selection",
    batch: "Batch 2023-24",
    role: "GPT - Biology, GHPS Hunasekatte, Shikaripura TQ, Shivamogga",
    center: "Saaraswath Academy",
    quote: "Dr. Vasanth Kumar Sir's guidance in biology and competitive pedagogy made all the difference in my selection.",
    image: getAssetUrl("/images/achievements/sri-dinesha-n-j.jpg")
  },
  {
    id: "a4",
    name: "Sri Krishna G B",
    exam: "Police Sub-Inspector (PSI)",
    batch: "Batch 2024",
    role: "PSI Selection",
    center: "Saaraswath Academy",
    quote: "The comprehensive practice on paper 1 translation and general studies gave me a decisive edge.",
    image: getAssetUrl("/images/achievements/sri-krishna-g-b.jpg")
  },
  {
    id: "a5",
    name: "Sri Santhosh Bedre",
    exam: "Police Sub-Inspector (PSI)",
    batch: "Batch 2024",
    role: "PSI Selection",
    center: "Saaraswath Academy",
    quote: "Strict discipline, continuous mock exams, and individual attention from mentors.",
    image: getAssetUrl("/images/achievements/sri-santhosh-bedre.jpg")
  }
];

export const INITIAL_GALLERY = [
  {
    id: "g1",
    title: "Classroom Mentoring Session",
    category: "Classroom",
    image: getAssetUrl("/images/classroom/classroom_1.jpeg"),
    description: "Interactive classroom discussion on Constitutional Governance."
  },
  {
    id: "g2",
    title: "Academy Felicitation & Achievers Meet",
    category: "Achievements",
    image: getAssetUrl("/images/achievements/event_1.jpeg"),
    description: "Honoring our successful officers and rank holders."
  },
  {
    id: "g3",
    title: "Special Workshop on UPSC Strategy",
    category: "Workshops",
    image: getAssetUrl("/images/workshops/workshop_1.jpeg"),
    description: "Guidance seminar delivered by guest civil servants and mentors."
  },
  {
    id: "g4",
    title: "Library & Study Hall Discussion",
    category: "Students",
    image: getAssetUrl("/images/students/student_1.jpeg"),
    description: "Dedicated study environment with reference books and peaceful atmosphere."
  },
  {
    id: "g5",
    title: "Director Mentoring Aspirants",
    category: "Classroom",
    image: getAssetUrl("/images/classroom/classroom_2.jpeg"),
    description: "Dr. Vasanth Kumar N conducting conceptual strategy breakdown."
  },
  {
    id: "g6",
    title: "Felicitation Ceremony at Mysuru",
    category: "Achievements",
    image: getAssetUrl("/images/achievements/event_2.jpeg"),
    description: "Celebrating milestone ranks of our students."
  }
];
