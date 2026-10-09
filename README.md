# Saaraswath IAS/KAS Academy - Web Platform

Official full-stack web application and content management system for **Saaraswath IAS/KAS Academy**, Mysuru (Founded in 2019 by Dr. Vasanth Kumar N).

## 🏛️ Academy Overview
- **Location**: #608, 1st Floor, P & T Block, (Near Jnanaganga school), Panchamantra Road, Kuvempunagar, Mysuru - 570023
- **Contact**: +91 7619615566 / +91 7619415566
- **Email**: srisaaraswath@gmail.com
- **Programs**: UPSC Civil Services (Prelims + Mains + Interview), KAS Gazetted Probationers (Prelims + Mains), PSI/PC, Foundation Batches, Kannada Literature Optional, and Mentorship.

---

## 🏗️ Project Architecture

```
saaraswath-academy/
├── client/          # Vite + React Modern Single Page Application
└── server/          # Express.js REST API with dynamic storage (MongoDB with In-Memory fallback)
```

### Key Highlights
- **Stunning UI/UX Design System**: Navy/Indigo primary palette with warm saffron/amber accents, glassmorphic cards, fluid typography, responsive layout, and smooth interactions.
- **Complete Course & Exam Catalog**: In-depth syllabus breakdown, exam patterns for UPSC CSE and KPSC KAS, downloadable official academy brochure.
- **Interactive Admissions & Enquiries**: Live consultation & admission enquiry forms with validation and backend storage.
- **Admin Management Portal**: Secure dashboard to manage courses, faculty, achievers, gallery photos, syllabus, brochure downloads, and student enquiries.
- **Zero-Friction Offline/Online Fallback**: The backend connects to MongoDB if available, but automatically runs gracefully in self-contained datastore mode if MongoDB is not present.

---

## 🚀 Quick Start Guide

### 1. Install Dependencies
```bash
# Root concurrent runner
npm install

# Client dependencies
cd client
npm install

# Server dependencies
cd ../server
npm install
```

### 2. Configure Environment Variables
- Copy `client/.env.example` to `client/.env`
- Copy `server/.env.example` to `server/.env`

### 3. Run Development Servers
From the root directory:
```bash
npm run dev
```
Or run separately:
- **Client**: `npm run client` (starts at http://localhost:5173)
- **Server**: `npm run server` (starts at http://localhost:5000)

### 4. Admin Credentials (Default Seed)
- **Email**: `admin@saaraswath.com`
- **Password**: `Admin@123`
