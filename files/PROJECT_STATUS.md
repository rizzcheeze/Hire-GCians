# Hire GCians! Project Status

## Read This First

This project is a client-side dynamic MVP built from static HTML mockups.

If reopening this project in a future session, start here, then read:
- `hire_gcians.js`
- `hire_gcians.css`

Recommended prompt for future sessions:
- `Read PROJECT_STATUS.md first, then continue from there.`

## Current Product Model

### Roles
- `student` = Gordon College applicants
- `employer` = third-party companies hiring Gordon College students
- `admin` = Gordon College officials with oversight access only

### Core rule for matching
- students do not manually manage profile skills
- skills used for matching should come from AI analysis of the uploaded PDF resume
- the current app simulates that flow on the client side

### Current architecture
- standalone HTML pages
- shared styles in `hire_gcians.css`
- shared app logic and seeded state in `hire_gcians.js`
- browser `localStorage` persistence

### Not in place yet
- backend API
- database
- real auth/session handling
- real PDF extraction
- real AI skill extraction

## Current Routes

### Landing and auth
- `hire_gcians_landing_page_full.html`
- `hire_gcians_for_employers.html`
- `hire_gcians_about.html`
- `hire_gcians_auth.html`

### Student routes
- `hire_gcians_student_dashboard.html`
- `hire_gcians_job_listing.html`
- `hire_gcians_my_applications.html`
- `hire_gcians_saved_jobs.html`
- `hire_gcians_student_profile.html`
- `hire_gcians_skills_resume.html`
- `hire_gcians_settings.html`
- `hire_gcians_public_profile.html`

### Employer routes
- `hire_gcians_employer_dashboard.html`
- `hire_gcians_employer_posting.html`
- `hire_gcians_employer_applicants.html`
- `hire_gcians_employer_active_listings.html`
- `hire_gcians_hired_students.html`
- `hire_gcians_company_profile.html`
- `hire_gcians_employer_settings.html`

### Admin route
- `hire_gcians_admin.html`

## What Works Now

### Student side
- login/signup flow
- job browsing and filtering
- job detail rendering
- save/unsave jobs
- apply/withdraw applications
- applications status view
- profile rendering
- settings rendering
- public profile rendering
- resume upload/demo analysis flow
- compatibility scoring driven by resume-derived skills

### Employer side
- employer dashboard metrics
- posting draft and publish flow
- live posting preview
- applicants list and detail
- stage updates and notes
- active listings
- hired students
- company profile
- employer settings

### Admin side
- overview metrics
- recent users table
- active listings table
- health card
- alerts card

## Most Recent Structural Changes

### Landing/navigation
- landing nav now has working routes for `Browse Jobs`, `For Employers`, and `About`

### Resume-driven matching
- student skills are no longer treated as manually managed profile data
- matching now reads resume-derived skill data
- student profile and public profile reflect resume-derived skills

### Role refactor
- employers are now outside companies, not college departments
- admins are now college officials, not hiring users
- employer/account copy was updated across the app to company/employer wording

### Company route migration
- active employer profile route is now `hire_gcians_company_profile.html`
- nav links now point to company profile
- active JS page key is `company-profile`

### Deployment prep
- added `vercel.json` with root routing, clean public paths, and basic security headers
- public marketing/auth pages now label the app as a client-side MVP demo
- seeded jobs are now split across multiple employer accounts instead of one employer owning every sample listing

## Known Migration / Cleanup State

These are not blockers, but they still exist:

- some `department` references remain inside `hire_gcians.js` only as compatibility fallbacks for older `localStorage` data
- some marketing/explanatory text is still static by design
- employer settings are still stored as one shared demo settings object rather than per-employer backend records

## Demo Accounts

### Student
- email: `allyana@gordoncollege.edu.ph`
- password: `student123`

### Employer
- email: `hiring@brightpathdigital.com`
- password: `employer123`

### Admin
- email: `admin@gordoncollege.edu.ph`
- password: `admin123`

## Known Limits

### Resume / PDF analysis
Current state:
- accepts PDF file selection
- stores file name in app state
- generates a local AI-style skills/quantifiable preview
- uses resume-derived skills as the source for matching

Still missing:
- PDF text extraction
- OCR for scanned PDFs
- real AI skill extraction
- real quantifiable-achievement detection
- trustworthy compatibility scoring from actual resume text

### Persistence and backend
- still uses `localStorage`
- no server persistence
- no role-protected backend

## Best Next Steps

1. Build the real PDF pipeline: file upload -> text extraction -> OCR fallback -> AI skill extraction -> quantifiable detection.
2. Build a real backend for users, jobs, applications, settings, and saved jobs.
3. Add real authentication and role-based access.
4. Split seeded data so multiple third-party employers own different jobs.
5. Make employer settings/company profile state per employer once a backend exists.
6. Do a broader responsive QA pass across all pages after Vercel preview testing.

## Resume-After-Reopen Instructions

If you come back later, tell the assistant:
- `Read PROJECT_STATUS.md first.`
- `Use the current role model: students, third-party employers, and college-admin oversight.`
- `Resume matching must stay PDF/AI-driven, not manually entered by students.`

If a feature is actively in progress, add that task here before closing the tab.
