(function () {
  "use strict";

  const STORAGE_KEY = "hire-gcians-state-v1";
  const PAGE = document.body.dataset.page || "";

  const seedState = {
    session: { userId: "student-allyana" },
    ui: {
      selectedJobId: "job-uiux",
      applicationFilter: "all",
      employerSelectedJobId: "job-webdev",
      employerSelectedApplicationId: "app-webdev-allyana",
      employerStageFilter: "all",
      signupRole: "student",
      jobFilters: {
        types: ["Part-time", "Internship"],
        companies: [],
        setups: [],
        minScore: 0,
      },
    },
    resumeAnalyses: {
      "student-allyana": {
        fileName: "allyana_resume.pdf",
        extractedSkills: ["Vue.js", "Django", "Python", "Figma", "Adobe XD", "UI/UX Design", "HTML/CSS", "REST APIs"],
        quantifiable: ["Designed interfaces for 2 student projects", "Built 1 capstone frontend with REST integration"],
        summary: "The current resume profile is strongest in frontend, UI/UX, and practical campus project work.",
      },
      "student-juan": {
        fileName: "juan_resume.pdf",
        extractedSkills: ["Vue.js", "REST APIs", "JavaScript", "HTML/CSS", "Troubleshooting"],
        quantifiable: ["Supported 1 campus lab environment and student troubleshooting workflow."],
        summary: "The current resume profile is strongest in practical web support and systems troubleshooting.",
      },
      "student-maria": {
        fileName: "maria_resume.pdf",
        extractedSkills: ["Python", "HTML/CSS", "Canva", "Figma", "Documentation"],
        quantifiable: ["Created design assets for multiple campus activities and documentation tasks."],
        summary: "The current resume profile is strongest in design support, documentation, and entry-level development.",
      },
      "student-rey": {
        fileName: "rey_resume.pdf",
        extractedSkills: ["Django", "HTML/CSS", "SQL", "Python"],
        quantifiable: ["Built 1 database-driven records prototype with Python and SQL."],
        summary: "The current resume profile is strongest in backend coursework, SQL, and Django-based tool building.",
      },
      "student-katrina": {
        fileName: "katrina_resume.pdf",
        extractedSkills: ["HTML/CSS", "Writing"],
        quantifiable: ["Produced written student-facing content for campus publication work."],
        summary: "The current resume profile is strongest in writing and basic web-content support.",
      },
    },
    settings: {
      emailMatches: true,
      emailApplications: true,
      publicProfile: true,
      preferredSetup: "On-site / Remote",
      availability: "Weekdays after class",
    },
    employerSettings: {
      companyName: "BrightPath Digital Solutions",
      summary: "BrightPath Digital Solutions hires Gordon College students for internships, freelance support, and entry-level project work in product, operations, and digital delivery.",
      defaultJobType: "Part-time",
      defaultWorkSetup: "Remote",
      emailApplicants: true,
      emailExpiring: true,
      publicCompany: true,
    },
    saved: { "student-allyana": ["job-uiux", "job-content", "job-library", "job-ai-lab"] },
    notes: { "app-webdev-allyana": "Strong profile. Has most required skills. Schedule for technical interview." },
    users: [
      {
        id: "student-allyana",
        role: "student",
        firstName: "Allyana",
        lastName: "Espiridion",
        email: "allyana@gordoncollege.edu.ph",
        password: "student123",
        program: "BSCS",
        yearLevel: "2nd Year",
        section: "2-B",
        about: "2nd-year Computer Science student passionate about building user-centered web applications. Looking for internships and part-time opportunities from companies hiring Gordon College students.",
        skills: ["Vue.js", "Django", "Python", "Figma", "Adobe XD", "UI/UX Design", "HTML/CSS", "REST APIs", "Canva", "User Research"],
        preferences: ["Open to opportunities", "Part-time preferred", "On-site / Remote"],
        experience: [
          { title: "Frontend Developer — Capstone Project", org: "Gordon College", dates: "Jan 2025 – Present", desc: "Led frontend development of HIRE GCians! using Vue.js and a Django REST API." },
          { title: "Graphic Designer — SC Newsletter", org: "Student Council", dates: "Aug 2024 – Dec 2024", desc: "Designed monthly newsletters for 2,000+ students." },
        ],
      },
      {
        id: "student-juan",
        role: "student",
        firstName: "Juan",
        lastName: "dela Cruz",
        email: "juan@gordoncollege.edu.ph",
        password: "student123",
        program: "BSIT",
        yearLevel: "3rd Year",
        section: "3-A",
        about: "BSIT student focused on practical web, systems support, and client-facing technical work.",
        skills: ["Vue.js", "REST APIs", "JavaScript", "HTML/CSS", "Troubleshooting"],
        preferences: ["Open to opportunities", "Flexible hours"],
        experience: [{ title: "Technical Support Volunteer", org: "Community Tech Hub", dates: "2024", desc: "Maintained devices and handled basic user support workflows." }],
      },
      {
        id: "student-maria",
        role: "student",
        firstName: "Maria",
        lastName: "Santos",
        email: "maria@gordoncollege.edu.ph",
        password: "student123",
        program: "BSCS",
        yearLevel: "2nd Year",
        section: "2-A",
        about: "Computer Science student interested in Python, design systems, and content support.",
        skills: ["Python", "HTML/CSS", "Canva", "Figma", "Documentation"],
        preferences: ["Open to opportunities"],
        experience: [{ title: "Design Volunteer", org: "Youth Media Collective", dates: "2024", desc: "Created posters and campaign assets for community activities." }],
      },
      {
        id: "student-rey",
        role: "student",
        firstName: "Rey",
        lastName: "Lim",
        email: "rey@gordoncollege.edu.ph",
        password: "student123",
        program: "BSIT",
        yearLevel: "2nd Year",
        section: "2-B",
        about: "BSIT student building Django-based tools and small admin systems.",
        skills: ["Django", "HTML/CSS", "SQL", "Python"],
        preferences: ["Part-time preferred"],
        experience: [{ title: "Database Project Lead", org: "Coursework", dates: "2025", desc: "Built a student records prototype using SQL and Python." }],
      },
      {
        id: "student-katrina",
        role: "student",
        firstName: "Katrina",
        lastName: "Reyes",
        email: "katrina@gordoncollege.edu.ph",
        password: "student123",
        program: "BSCS",
        yearLevel: "3rd Year",
        section: "3-B",
        about: "CS student exploring frontend and documentation work.",
        skills: ["HTML/CSS", "Writing"],
        preferences: ["Open to opportunities"],
        experience: [{ title: "Newsletter Contributor", org: "College Publication", dates: "2024", desc: "Wrote and formatted student feature articles." }],
      },
      { id: "employer-it", role: "employer", firstName: "BrightPath", lastName: "Digital", email: "hiring@brightpathdigital.com", password: "employer123", organization: "BrightPath Digital Solutions" },
      { id: "employer-north", role: "employer", firstName: "North Harbor", lastName: "Team", email: "jobs@northharborcreatives.com", password: "employer123", organization: "North Harbor Creatives" },
      { id: "employer-summit", role: "employer", firstName: "Summit", lastName: "Workforce", email: "talent@summitworkforce.com", password: "employer123", organization: "Summit Workforce Partners" },
      { id: "employer-nova", role: "employer", firstName: "Nova", lastName: "Analytics", email: "careers@novaanalytics.com", password: "employer123", organization: "Nova Analytics" },
      { id: "admin-1", role: "admin", firstName: "GC", lastName: "Official", email: "admin@gordoncollege.edu.ph", password: "admin123", organization: "Gordon College Career Services" },
    ],
    jobs: [
      { id: "job-uiux", title: "UI/UX Design Intern", company: "BrightPath Digital Solutions", type: "Internship", setup: "Remote", schedule: "20 hours/week", description: "Support product designers in creating UI flows, wireframes, and usability notes for client products.", skills: ["Figma", "Adobe XD", "Prototyping", "User Research"], slots: 2, employerId: "employer-it", postedAt: "2026-04-06", status: "active", matchOverrides: { "student-allyana": 94 } },
      { id: "job-webdev", title: "Web Development Assistant", company: "BrightPath Digital Solutions", type: "Part-time", setup: "Remote", schedule: "Mon-Fri, flexible hours", description: "Maintain client-facing web tools, fix UI bugs, and support REST API integrations.", skills: ["Vue.js", "Django", "REST APIs", "Python", "HTML/CSS"], slots: 2, employerId: "employer-it", postedAt: "2026-04-02", status: "active", matchOverrides: { "student-allyana": 81, "student-juan": 78, "student-maria": 72, "student-rey": 69, "student-katrina": 58 } },
      { id: "job-graphic", title: "Graphic Design Assistant", company: "North Harbor Creatives", type: "Part-time", setup: "Remote", schedule: "Weekends only", description: "Produce digital assets, social graphics, and campaign layouts for client work.", skills: ["Canva", "Photoshop", "Layout"], slots: 1, employerId: "employer-north", postedAt: "2026-04-07", status: "active", matchOverrides: { "student-allyana": 73 } },
      { id: "job-content", title: "Content Creator — Social Media", company: "North Harbor Creatives", type: "Part-time", setup: "Remote", schedule: "10 hours/week", description: "Create social posts, short-form captions, and basic edited reels for business accounts.", skills: ["Copywriting", "Video editing", "Canva"], slots: 1, employerId: "employer-north", postedAt: "2026-04-05", status: "active", matchOverrides: { "student-allyana": 68 } },
      { id: "job-library", title: "Operations Support Assistant", company: "Summit Workforce Partners", type: "Part-time", setup: "Hybrid", schedule: "Afternoons", description: "Support spreadsheets, documentation, and back-office coordination for operations staff.", skills: ["Data entry", "MS Office", "Documentation"], slots: 2, employerId: "employer-summit", postedAt: "2026-04-04", status: "active", matchOverrides: { "student-allyana": 61 } },
      { id: "job-ai-lab", title: "AI Research Support Intern", company: "Nova Analytics", type: "Internship", setup: "Hybrid", schedule: "Flexible", description: "Support lightweight ML experiments, documentation, and dataset cleanup for analytics projects.", skills: ["Python", "Machine Learning", "Documentation"], slots: 1, employerId: "employer-nova", postedAt: "2026-04-03", status: "active", matchOverrides: { "student-allyana": 77 } },
    ],
    applications: [
      { id: "app-uiux-allyana", jobId: "job-uiux", studentId: "student-allyana", status: "interview", appliedAt: "2026-04-03", events: ["Application submitted", "Under review", "Interview scheduled"] },
      { id: "app-webdev-allyana", jobId: "job-webdev", studentId: "student-allyana", status: "review", appliedAt: "2026-04-05", events: ["Application submitted", "Under review"] },
      { id: "app-graphic-allyana", jobId: "job-graphic", studentId: "student-allyana", status: "pending", appliedAt: "2026-04-07", events: ["Application submitted"] },
      { id: "app-webdev-juan", jobId: "job-webdev", studentId: "student-juan", status: "review", appliedAt: "2026-04-04", events: ["Application submitted", "Under review"] },
      { id: "app-webdev-maria", jobId: "job-webdev", studentId: "student-maria", status: "review", appliedAt: "2026-04-05", events: ["Application submitted", "Under review"] },
      { id: "app-webdev-rey", jobId: "job-webdev", studentId: "student-rey", status: "pending", appliedAt: "2026-04-05", events: ["Application submitted"] },
      { id: "app-webdev-katrina", jobId: "job-webdev", studentId: "student-katrina", status: "pending", appliedAt: "2026-04-06", events: ["Application submitted"] },
    ],
  };

  let state = loadState();

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function loadState() {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : clone(seedState);
      parsed.jobs = (parsed.jobs || []).map((job) => {
        if (!job.company && job.department) job.company = job.department;
        return job;
      });
      parsed.users = (parsed.users || []).map((user) => {
        if (!user.organization && user.department) user.organization = user.department;
        return user;
      });
      if (parsed.employerSettings) {
        if (!parsed.employerSettings.companyName && parsed.employerSettings.name) parsed.employerSettings.companyName = parsed.employerSettings.name;
        if (parsed.employerSettings.publicCompany === undefined && parsed.employerSettings.publicDepartment !== undefined) parsed.employerSettings.publicCompany = parsed.employerSettings.publicDepartment;
      }
      if (parsed.ui?.jobFilters && !parsed.ui.jobFilters.companies && parsed.ui.jobFilters.departments) {
        parsed.ui.jobFilters.companies = parsed.ui.jobFilters.departments;
      }
      if (!parsed.resumeAnalyses) {
        parsed.resumeAnalyses = {};
        const legacyResume = parsed.resume || {};
        (parsed.users || []).forEach((user) => {
          if (user.role === "student") {
            parsed.resumeAnalyses[user.id] = {
              fileName: user.id === "student-allyana" ? (legacyResume.fileName || "") : "",
              extractedSkills: Array.isArray(user.skills) ? user.skills.slice() : [],
              quantifiable: user.id === "student-allyana" && Array.isArray(legacyResume.quantifiable) ? legacyResume.quantifiable.slice() : [],
              summary: user.id === "student-allyana" && legacyResume.summary ? legacyResume.summary : "Upload a PDF resume so the AI can extract skills for matching.",
            };
          }
        });
      }
      return parsed;
    } catch {
      return clone(seedState);
    }
  }

  function saveState() {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function companyName(job) {
    return job.company || job.department || "";
  }

  function organizationName(user) {
    return user.organization || user.department || "";
  }

  function byId(collection, id) {
    return collection.find((item) => item.id === id);
  }

  function currentUser() {
    return byId(state.users, state.session.userId) || state.users[0];
  }

  function students() {
    return state.users.filter((user) => user.role === "student");
  }

  function resumeForStudent(studentId) {
    if (!state.resumeAnalyses) state.resumeAnalyses = {};
    if (!state.resumeAnalyses[studentId]) {
      const user = byId(state.users, studentId) || {};
      state.resumeAnalyses[studentId] = {
        fileName: "",
        extractedSkills: Array.isArray(user.skills) ? user.skills.slice() : [],
        quantifiable: [],
        summary: "Upload a PDF resume so the AI can extract skills for matching.",
      };
    }
    return state.resumeAnalyses[studentId];
  }

  function studentSkills(student) {
    return resumeForStudent(student.id).extractedSkills || [];
  }

  function jobsForEmployer(userId) {
    return state.jobs.filter((job) => job.employerId === userId);
  }

  function applicationsForStudent(userId) {
    return state.applications.filter((item) => item.studentId === userId);
  }

  function applicationsForJob(jobId) {
    return state.applications.filter((item) => item.jobId === jobId);
  }

  function scoreJob(student, job) {
    if (job.matchOverrides && job.matchOverrides[student.id]) {
      return job.matchOverrides[student.id];
    }
    const extracted = studentSkills(student).map((skill) => skill.toLowerCase());
    const overlap = job.skills.filter((skill) => extracted.includes(skill.toLowerCase())).length;
    const ratio = overlap / Math.max(job.skills.length, 1);
    return Math.max(45, Math.min(97, Math.round(52 + ratio * 43)));
  }

  function recommendedJobs(student) {
    return state.jobs
      .filter((job) => job.status === "active")
      .map((job) => Object.assign({}, job, { score: scoreJob(student, job) }))
      .sort((a, b) => b.score - a.score);
  }

  function initials(user) {
    return `${(user.firstName || "")[0] || ""}${(user.lastName || "")[0] || ""}`.toUpperCase();
  }

  function fmtDate(dateText) {
    return new Date(dateText).toLocaleDateString([], { month: "long", day: "numeric", year: "numeric" });
  }

  function shortDate(dateText) {
    return new Date(dateText).toLocaleDateString([], { month: "short", day: "numeric" });
  }

  function escapeHtml(text) {
    return String(text).replace(/[&<>"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[char]);
  }

  function pctClass(score) {
    if (score >= 80) return "pct-high";
    if (score >= 65) return "pct-mid";
    return "pct-low";
  }

  function suggestedSkill(student) {
    const skillSet = new Set(studentSkills(student).map((skill) => skill.toLowerCase()));
    for (const job of recommendedJobs(student)) {
      const missing = job.skills.find((skill) => !skillSet.has(skill.toLowerCase()));
      if (missing) return missing;
    }
    return "Prototyping";
  }

  function navigateFor(user) {
    if (user.role === "employer") window.location.href = "/employer/dashboard";
    else if (user.role === "admin") window.location.href = "/admin";
    else window.location.href = "/student/dashboard";
  }

  function setSession(userId) {
    state.session.userId = userId;
    saveState();
  }

  function setText(selector, value) {
    const node = document.querySelector(selector);
    if (node) node.textContent = value;
  }

  function syncChrome() {
    const user = currentUser();
    document.querySelectorAll(".s-name").forEach((node) => (node.textContent = `${user.firstName} ${user.lastName}`.trim()));
    document.querySelectorAll(".s-avatar").forEach((node) => (node.textContent = initials(user)));
    if (user.role === "student") {
      document.querySelectorAll(".s-prog").forEach((node) => (node.textContent = `${user.program} ${user.section}`));
    }
    if (user.role === "employer") {
      document.querySelectorAll(".s-dept").forEach((node) => (node.textContent = "Third-party employer"));
    }
  }

  function syncRoleActions() {
    const user = currentUser();
        const employerVisible = user.role === "employer";
    document.querySelectorAll('[data-role-action="employer-only"]').forEach((node) => {
      node.style.display = employerVisible ? "" : "none";
    });
  }

  function wireSidebars() {
    const map = {
      Dashboard: "hire_gcians_student_dashboard.html",
      "Browse jobs": "hire_gcians_job_listing.html",
      "My applications": "hire_gcians_my_applications.html",
      Saved: "hire_gcians_saved_jobs.html",
      "Edit profile": "hire_gcians_student_profile.html",
      "Skills & resume": "hire_gcians_skills_resume.html",
      Settings: "hire_gcians_settings.html",
    };
    document.querySelectorAll(".hg-student-dashboard .s-nav li, .hg-my-applications .s-nav li, .hg-saved-jobs .s-nav li").forEach((item) => {
      const key = item.textContent.replace("⬡", "").replace(/[■□]/g, "").trim();
      if (map[key]) {
        item.style.cursor = "pointer";
        item.onclick = () => (window.location.href = map[key]);
      }
    });
  }

  function ensurePageUser() {
    const user = currentUser();
    if ((PAGE.startsWith("employer") || PAGE === "company-profile" || PAGE === "hired-students") && user.role !== "employer") {
      state.session.userId = "employer-it";
    }
    if (PAGE === "admin" && user.role !== "admin") {
      state.session.userId = "admin-1";
    }
    if ((PAGE.startsWith("student") || PAGE === "job-listing" || PAGE === "my-applications" || PAGE === "saved-jobs" || PAGE === "skills-resume" || PAGE === "settings" || PAGE === "public-profile") && user.role !== "student") {
      state.session.userId = "student-allyana";
    }
    saveState();
  }

  function applyForJob(jobId) {
    const user = currentUser();
    if (user.role !== "student") {
      window.alert("Sign in as a student to apply.");
      return;
    }
    const existing = state.applications.find((item) => item.jobId === jobId && item.studentId === user.id);
    if (existing) {
      window.alert("You already applied to this role.");
      return;
    }
    state.applications.push({
      id: `app-${jobId}-${user.id}-${Date.now()}`,
      jobId,
      studentId: user.id,
      status: "pending",
      appliedAt: new Date().toISOString().slice(0, 10),
      events: ["Application submitted"],
    });
    saveState();
    renderCurrentPage();
  }

  function toggleSaved(jobId) {
    const user = currentUser();
    const list = state.saved[user.id] || [];
    const next = list.includes(jobId) ? list.filter((id) => id !== jobId) : list.concat(jobId);
    state.saved[user.id] = next;
    saveState();
    renderCurrentPage();
  }

  function initAuthPage() {
    const loginButton = document.getElementById("login-submit");
    const signupButton = document.getElementById("signup-submit");
    if (loginButton) {
      loginButton.addEventListener("click", () => {
        const email = document.getElementById("login-email").value.trim().toLowerCase();
        const password = document.getElementById("login-password").value.trim();
        const user = state.users.find((item) => item.email.toLowerCase() === email && item.password === password);
        if (!user) {
          window.alert("Invalid email or password. Demo accounts use the seeded credentials.");
          return;
        }
        setSession(user.id);
        navigateFor(user);
      });
    }
    if (signupButton) {
      signupButton.addEventListener("click", () => {
        const role = state.ui.signupRole || "student";
        const firstName = document.getElementById("signup-first-name").value.trim();
        const lastName = document.getElementById("signup-last-name").value.trim();
        const email = document.getElementById("signup-email").value.trim().toLowerCase();
        const password = document.getElementById("signup-password").value.trim();
        if (!firstName || !lastName || !email || !password) {
          window.alert("Complete the signup form first.");
          return;
        }
        if (state.users.some((item) => item.email.toLowerCase() === email)) {
          window.alert("That email already exists in the demo data.");
          return;
        }
        const user = {
          id: `user-${Date.now()}`,
          role,
          firstName,
          lastName,
          email,
          password,
          program: document.getElementById("signup-program")?.value || "BSCS",
          yearLevel: document.getElementById("signup-year-level")?.value || "1st Year",
          section: "1-A",
          organization: document.getElementById("signup-company")?.value || "BrightPath Digital Solutions",
          about: role === "student" ? "New student account." : "New employer account.",
          skills: [],
          preferences: role === "student" ? ["Open to opportunities"] : [],
          experience: [],
        };
        state.users.push(user);
        if (role === "student") {
          state.saved[user.id] = [];
          state.resumeAnalyses[user.id] = {
            fileName: "",
            extractedSkills: [],
            quantifiable: [],
            summary: "Upload a PDF resume so the AI can extract skills for matching.",
          };
        }
        setSession(user.id);
        saveState();
        navigateFor(user);
      });
    }
  }

  function renderStudentDashboard() {
    const user = currentUser();
    const jobs = recommendedJobs(user);
    const apps = applicationsForStudent(user.id);
    const extractedSkills = studentSkills(user);
    const resume = resumeForStudent(user.id);
    setText("#student-dashboard-title", `Welcome back, ${user.firstName}`);
    setText("#student-dashboard-subtitle", `${jobs.length} active matches available right now`);
    const metrics = document.getElementById("student-dashboard-metrics");
    if (metrics) {
      metrics.innerHTML = `
        <div class="metric"><div class="metric-val">${jobs.length}</div><div class="metric-label">Recommended jobs</div></div>
        <div class="metric"><div class="metric-val">${apps.length}</div><div class="metric-label">Applications sent</div></div>
        <div class="metric"><div class="metric-val">${jobs[0] ? jobs[0].score : 0}%</div><div class="metric-label">Top match score</div></div>
      `;
    }
    const recs = document.getElementById("student-dashboard-recommendations");
    if (recs) {
      recs.innerHTML = jobs.slice(0, 4).map((job) => `
        <div class="job-card">
          <div>
            <div class="job-title">${escapeHtml(job.title)}</div>
            <div class="job-dept">${escapeHtml(companyName(job))} · ${escapeHtml(job.type)} · ${escapeHtml(job.setup)}</div>
            <div class="job-tags">${job.skills.slice(0, 3).map((skill) => `<span class="jtag">${escapeHtml(skill)}</span>`).join("")}</div>
          </div>
          <div class="job-right">
            <div class="pct-pill ${job.score >= 80 ? "pct-high" : "pct-mid"}">${job.score}% match</div>
            <button class="apply-btn" data-apply-job="${job.id}">${apps.some((item) => item.jobId === job.id) ? "Applied" : "Apply now"}</button>
          </div>
        </div>
      `).join("");
      recs.querySelectorAll("[data-apply-job]").forEach((button) => button.addEventListener("click", () => applyForJob(button.dataset.applyJob)));
    }
    const skillsWrap = document.getElementById("student-dashboard-skills");
    if (skillsWrap) skillsWrap.innerHTML = extractedSkills.slice(0, 6).map((skill) => `<span class="skill-tag">${escapeHtml(skill)}</span>`).join("");
    const completeness = Math.min(95, 45 + extractedSkills.length * 3 + user.experience.length * 8 + (resume.fileName ? 10 : 0));
    const bar = document.getElementById("student-dashboard-completeness-bar");
    if (bar) bar.style.width = `${completeness}%`;
    setText("#student-dashboard-completeness-text", `${completeness}% complete`);
    setText("#student-dashboard-tip", `Your job match is based on AI-extracted resume skills. Add "${suggestedSkill(user)}" to your PDF resume to improve one of your top matches.`);
  }

  function renderJobListing() {
    const user = currentUser();
    const search = (document.getElementById("job-search-input")?.value || "").trim().toLowerCase();
    const filters = state.ui.jobFilters || { types: [], companies: [], setups: [], minScore: 0 };
    const jobs = recommendedJobs(user).filter((job) => {
      const matchesSearch = `${job.title} ${companyName(job)} ${job.skills.join(" ")}`.toLowerCase().includes(search);
      const matchesType = !filters.types.length || filters.types.includes(job.type);
      const matchesCompany = !filters.companies.length || filters.companies.includes(companyName(job));
      const matchesSetup = !filters.setups.length || filters.setups.includes(job.setup);
      const matchesScore = job.score >= (filters.minScore || 0);
      return matchesSearch && matchesType && matchesCompany && matchesSetup && matchesScore;
    });
    const selectedId = jobs.some((job) => job.id === state.ui.selectedJobId) ? state.ui.selectedJobId : (jobs[0] && jobs[0].id);
    state.ui.selectedJobId = selectedId;
    saveState();
    setText("#jobs-count", `${jobs.length} opportunities found`);
    const allJobs = recommendedJobs(user);
    const filterPanel = document.getElementById("job-filter-panel");
    if (filterPanel) {
      const typeOptions = Array.from(new Set(allJobs.map((job) => job.type)));
      const companyOptions = Array.from(new Set(allJobs.map((job) => companyName(job))));
      const setupOptions = Array.from(new Set(allJobs.map((job) => job.setup)));
      const renderOptions = (group, options, selected) => options.map((option) => `<div class="filter-option ${selected.includes(option) ? "active" : ""}" data-filter-group="${group}" data-filter-value="${escapeHtml(option)}"><div class="checkbox ${selected.includes(option) ? "checked" : ""}"></div> ${escapeHtml(option)}</div>`).join("");
      filterPanel.innerHTML = `
        <div class="filter-group">
          <div class="filter-title">Job type</div>
          ${renderOptions("types", typeOptions, filters.types || [])}
        </div>
        <div class="filter-group">
          <div class="filter-title">Company</div>
          ${renderOptions("companies", companyOptions, filters.companies || [])}
        </div>
        <div class="filter-group">
          <div class="filter-title">Work setup</div>
          ${renderOptions("setups", setupOptions, filters.setups || [])}
        </div>
        <div class="filter-group">
          <div class="filter-title">Match score</div>
          <div class="filter-option ${filters.minScore === 70 ? "active" : ""}" data-score-filter="70"><div class="checkbox ${filters.minScore === 70 ? "checked" : ""}"></div> 70% and above</div>
          <div class="filter-option ${filters.minScore === 0 ? "active" : ""}" data-score-filter="0"><div class="checkbox ${filters.minScore === 0 ? "checked" : ""}"></div> Any</div>
        </div>
      `;
      filterPanel.querySelectorAll("[data-filter-group]").forEach((option) => option.addEventListener("click", () => {
        const group = option.dataset.filterGroup;
        const value = option.dataset.filterValue;
        const selected = new Set(state.ui.jobFilters[group] || []);
        if (selected.has(value)) selected.delete(value);
        else selected.add(value);
        state.ui.jobFilters[group] = Array.from(selected);
        saveState();
        renderJobListing();
      }));
      filterPanel.querySelectorAll("[data-score-filter]").forEach((option) => option.addEventListener("click", () => {
        state.ui.jobFilters.minScore = Number.parseInt(option.dataset.scoreFilter, 10) || 0;
        saveState();
        renderJobListing();
      }));
    }
    const list = document.getElementById("job-listings");
    if (list) {
      list.innerHTML = jobs.map((job) => `
        <div class="job-row ${job.id === selectedId ? "selected" : ""}" data-job-id="${job.id}">
          <div class="jr-top">
            <div><div class="jr-title">${escapeHtml(job.title)}</div><div class="jr-dept">${escapeHtml(companyName(job))}</div></div>
            <div class="pct ${job.score >= 80 ? "p-high" : "p-mid"}">${job.score}%</div>
          </div>
          <div class="jr-meta"><span class="jr-chip type">${escapeHtml(job.type)}</span><span class="jr-chip type">${escapeHtml(job.setup)}</span>${job.skills.slice(0, 3).map((skill) => `<span class="jr-chip">${escapeHtml(skill)}</span>`).join("")}</div>
        </div>
      `).join("");
      list.querySelectorAll("[data-job-id]").forEach((row) => row.addEventListener("click", () => {
        state.ui.selectedJobId = row.dataset.jobId;
        saveState();
        renderJobListing();
      }));
    }
    const job = byId(state.jobs, selectedId);
    const detailPanel = document.getElementById("job-detail-panel");
    if (!job) {
      if (detailPanel) detailPanel.innerHTML = `<div class="dp-title">No jobs match the current filters</div><div class="dp-dept">Try broadening the filters or clearing the search.</div>`;
      return;
    }
    const score = scoreJob(user, job);
    if (detailPanel) {
      const userSkills = new Set(studentSkills(user).map((skill) => skill.toLowerCase()));
      detailPanel.innerHTML = `
        <div class="dp-tag">${escapeHtml(job.type)} · ${escapeHtml(job.setup)}</div>
        <div class="dp-title">${escapeHtml(job.title)}</div>
        <div class="dp-dept">${escapeHtml(companyName(job))} · Posted ${shortDate(job.postedAt)}</div>
        <div class="dp-match-box">
          <div class="dp-match-label">Your match score</div>
          <div class="dp-match-num">${score}%</div>
          <div class="dp-bar-bg"><div class="dp-bar" style="width:${score}%"></div></div>
          <div style="font-size:0.72rem;color:var(--gc-green);margin-top:0.25rem">${score >= 80 ? "Excellent fit based on AI-extracted resume skills" : score >= 65 ? "Solid fit with room to improve" : "Resume is missing matching skills for this role"}</div>
        </div>
        <div class="dp-section">
          <div class="dp-section-label">About the role</div>
          <div class="dp-section-body">${escapeHtml(job.description)}</div>
        </div>
        <div class="dp-section">
          <div class="dp-section-label">Skill match breakdown</div>
          ${job.skills.map((skill) => `<div class="skill-match-row"><span class="skill-match-name">${escapeHtml(skill)}</span><span class="${userSkills.has(skill.toLowerCase()) ? "skill-match-yes" : "skill-match-no"}">${userSkills.has(skill.toLowerCase()) ? "✓ Found in resume" : "Not found in resume"}</span></div>`).join("")}
        </div>
        <button class="apply-btn-big" id="job-detail-apply">Apply for this role</button>
      `;
    }
    const applyBtn = document.getElementById("job-detail-apply");
    if (applyBtn) {
      const alreadyApplied = applicationsForStudent(user.id).some((item) => item.jobId === job.id);
      applyBtn.textContent = alreadyApplied ? "Already applied" : "Apply for this role";
      applyBtn.onclick = () => applyForJob(job.id);
    }
  }

  function renderApplications() {
    const user = currentUser();
    const filter = state.ui.applicationFilter || "all";
    const items = applicationsForStudent(user.id).map((app) => ({ app, job: byId(state.jobs, app.jobId) })).sort((a, b) => b.app.appliedAt.localeCompare(a.app.appliedAt));
    const summary = {
      total: items.length,
      review: items.filter((item) => item.app.status === "review").length,
      interview: items.filter((item) => item.app.status === "interview").length,
      hired: items.filter((item) => item.app.status === "hired").length,
    };
    const sumNode = document.getElementById("applications-summary");
    if (sumNode) {
      sumNode.innerHTML = `
        <div class="sum-card"><div class="sum-val">${summary.total}</div><div class="sum-label">Total applied</div></div>
        <div class="sum-card"><div class="sum-val">${summary.review}</div><div class="sum-label">Under review</div></div>
        <div class="sum-card"><div class="sum-val">${summary.interview}</div><div class="sum-label">Interview scheduled</div></div>
        <div class="sum-card"><div class="sum-val">${summary.hired}</div><div class="sum-label">Offers received</div></div>
      `;
    }
    const tabs = Array.from(document.querySelectorAll(".stab"));
    const counts = { all: items.length, pending: items.filter((i) => i.app.status === "pending").length, review: summary.review, interview: summary.interview, hired: summary.hired };
    const labels = ["All", "Pending", "Under review", "Interview", "Hired"];
    ["all", "pending", "review", "interview", "hired"].forEach((key, index) => {
      if (tabs[index]) {
        tabs[index].classList.toggle("active", filter === key);
        tabs[index].innerHTML = `${labels[index]} <span class="stab-count">${counts[key]}</span>`;
      }
    });
    const list = document.getElementById("apps-list");
    const filtered = items.filter((item) => filter === "all" || item.app.status === filter);
    if (list) {
      list.innerHTML = filtered.map(({ app, job }) => {
        const score = scoreJob(user, job);
        return `
          <div class="app-card" data-status="${app.status}">
            <div>
              <div class="app-title">${escapeHtml(job.title)}</div>
              <div class="app-dept">${escapeHtml(companyName(job))} · ${escapeHtml(job.type)} · ${escapeHtml(job.setup)}</div>
              <div class="app-meta">${job.skills.slice(0, 2).map((skill) => `<span class="app-chip">${escapeHtml(skill)}</span>`).join("")}<span class="app-chip neutral">${escapeHtml(job.type)}</span><span class="app-date">Applied ${fmtDate(app.appliedAt)}</span></div>
              <div class="timeline">${app.events.map((event) => `<div class="tl-row"><div class="tl-dot tl-done"></div><div class="tl-text"><strong>${escapeHtml(event)}</strong></div></div>`).join("")}<div class="tl-row"><div class="tl-dot tl-pending"></div><div class="tl-text">${app.status === "interview" ? "Awaiting decision" : "Next update pending"}</div></div></div>
            </div>
            <div class="app-right">
              <div class="status-pill status-${app.status}">${escapeHtml(app.status === "review" ? "Under review" : app.status === "pending" ? "Pending" : app.status === "interview" ? "Interview scheduled" : "Hired")}</div>
              <div class="match-pct">Match: <strong>${score}%</strong></div>
              ${app.status === "pending" || app.status === "review" ? `<button class="withdraw-btn" data-withdraw-id="${app.id}">Withdraw</button>` : ""}
            </div>
          </div>
        `;
      }).join("");
      list.querySelectorAll("[data-withdraw-id]").forEach((button) => button.addEventListener("click", () => {
        state.applications = state.applications.filter((item) => item.id !== button.dataset.withdrawId);
        saveState();
        renderApplications();
      }));
    }
  }

  function renderSavedJobs() {
    const user = currentUser();
    const ids = state.saved[user.id] || [];
    const jobs = ids.map((id) => byId(state.jobs, id)).filter(Boolean).map((job) => Object.assign({}, job, { score: scoreJob(user, job) }));
    setText("#saved-count", `${jobs.length} saved opportunities`);
    const grid = document.getElementById("saved-grid");
    if (grid) {
      grid.innerHTML = jobs.map((job) => `
        <div class="saved-card">
          <button class="save-btn" title="Remove from saved" data-save-job="${job.id}">♥</button>
          <div class="sc-title">${escapeHtml(job.title)}</div>
          <div class="sc-dept">${escapeHtml(companyName(job))} · ${escapeHtml(job.type)} · ${escapeHtml(job.setup)}</div>
          <div class="sc-tags">${job.skills.slice(0, 3).map((skill) => `<span class="sc-tag">${escapeHtml(skill)}</span>`).join("")}<span class="sc-tag neutral">${escapeHtml(job.type)}</span></div>
          <div style="margin-bottom:0.6rem"><span class="deadline ${job.score >= 90 ? "urgent" : ""}">Posted ${shortDate(job.postedAt)}</span></div>
          <div class="sc-footer">
            <div class="sc-match">Match: <strong>${job.score}%</strong></div>
            <div class="sc-actions"><button class="view-btn" data-view-job="${job.id}">View</button><button class="apply-btn" data-apply-job="${job.id}">Apply now</button></div>
          </div>
        </div>
      `).join("");
      grid.querySelectorAll("[data-save-job]").forEach((button) => button.addEventListener("click", () => toggleSaved(button.dataset.saveJob)));
      grid.querySelectorAll("[data-view-job]").forEach((button) => button.addEventListener("click", () => {
        state.ui.selectedJobId = button.dataset.viewJob;
        saveState();
        window.location.href = "/jobs";
      }));
      grid.querySelectorAll("[data-apply-job]").forEach((button) => button.addEventListener("click", () => applyForJob(button.dataset.applyJob)));
    }
  }

  function renderStudentProfile() {
    const user = currentUser();
    const resume = resumeForStudent(user.id);
    const extractedSkills = studentSkills(user);
    setText("#profile-name", `${user.firstName} ${user.lastName}`);
    setText("#profile-program-line", `${user.program} ${user.section} · Gordon College student`);
    const tags = document.getElementById("profile-tags");
    if (tags) tags.innerHTML = [`<span class="ph-tag">Open to opportunities</span>`, `<span class="ph-tag neutral">${escapeHtml(user.yearLevel.toLowerCase())}</span>`, ...user.preferences.slice(1).map((tag) => `<span class="ph-tag neutral">${escapeHtml(tag)}</span>`)].join("");
    const skills = document.getElementById("profile-skills");
    if (skills) {
      skills.innerHTML = extractedSkills.length
        ? extractedSkills.map((skill) => `<span class="skill-chip">${escapeHtml(skill)}</span>`).join("")
        : `<div style="font-size:0.8rem;color:var(--gc-muted);line-height:1.7">No AI-extracted skills yet. Upload a PDF resume in Skills &amp; Resume to generate your skill profile.</div>`;
    }
    const exp = document.getElementById("profile-experience");
    if (exp) exp.innerHTML = user.experience.map((item) => `<div class="exp-row"><div class="exp-title">${escapeHtml(item.title)}</div><div class="exp-sub">${escapeHtml(item.org)} · ${escapeHtml(item.dates)}</div><div class="exp-desc">${escapeHtml(item.desc)}</div></div>`).join("");
    setText("#profile-about", user.about);
    const completeness = Math.min(95, 45 + extractedSkills.length * 3 + user.experience.length * 8 + (resume.fileName ? 10 : 0));
    setText("#profile-completeness-number", `${completeness}%`);
    const compBar = document.getElementById("profile-completeness-bar");
    if (compBar) compBar.style.width = `${completeness}%`;
    setText("#profile-ai-tip", resume.fileName ? `Skills are being read from ${resume.fileName}. Add "${suggestedSkill(user)}" to your resume PDF if you want stronger matches.` : "Upload a PDF resume first so the AI can extract your skills and use them for matching.");
    const resumeCheck = document.getElementById("profile-resume-check");
    if (resumeCheck) {
      resumeCheck.innerHTML = resume.fileName ? `<span class="check-done">✓</span> Resume uploaded` : `<span class="check-todo">○</span> Resume uploaded`;
    }
    const saveButton = document.getElementById("profile-save-button");
    if (saveButton) saveButton.onclick = () => window.alert("Profile changes saved to local demo data.");
  }

  function renderLanding() {
    const topJobs = recommendedJobs(byId(state.users, "student-allyana")).slice(0, 3);
    const cards = document.getElementById("landing-match-cards");
    if (cards) {
      cards.innerHTML = `<div class="ai-badge"><div class="ai-dot"></div> AI Matching active</div>${topJobs.map((job, index) => `<div class="match-card" ${index ? 'style="background:#fff;border:0.5px solid #C0DD97"' : ""}><div class="match-header"><div class="match-title">${escapeHtml(job.title)}</div><div class="match-pct" ${index === 1 ? 'style="background:#639922"' : index === 2 ? 'style="background:#97C459;color:#27500A"' : ""}>${job.score}% match</div></div><div class="match-sub">${escapeHtml(companyName(job))} · ${escapeHtml(job.type)}</div><div class="match-bar-bg"><div class="match-bar" style="width:${job.score}%;${index === 1 ? "background:#639922;" : index === 2 ? "background:#97C459;" : ""}"></div></div><div class="match-tags">${job.skills.slice(0,3).map((skill) => `<span class="tag">${escapeHtml(skill)}</span>`).join("")}</div></div>`).join("")}`;
    }
    const stats = document.getElementById("landing-stats");
    if (stats) {
      const activeJobs = state.jobs.filter((job) => job.status === "active").length;
      const avg = Math.round(recommendedJobs(byId(state.users, "student-allyana")).slice(0, 3).reduce((sum, job) => sum + job.score, 0) / 3);
      const employers = new Set(state.jobs.map((job) => job.employerId)).size;
      stats.innerHTML = `<div class="stat"><div class="stat-num">${activeJobs}</div><div class="stat-label">Active opportunities</div></div><div class="stat"><div class="stat-num">${avg}%</div><div class="stat-label">Avg. match accuracy</div></div><div class="stat"><div class="stat-num">${employers}</div><div class="stat-label">Campus employers</div></div>`;
    }
  }

  function renderForEmployersPage() {
    const stats = document.getElementById("employer-live-stats");
    const jobsHost = document.getElementById("employer-featured-jobs");
    const activeJobs = state.jobs.filter((job) => job.status === "active");
    const applicants = state.applications.length;
    const companies = new Set(activeJobs.map((job) => companyName(job))).size;
    if (stats) {
      stats.innerHTML = `<div class="stat"><div class="stat-num">${activeJobs.length}</div><div class="stat-label">Open employer roles</div></div><div class="stat"><div class="stat-num">${applicants}</div><div class="stat-label">Applications in demo state</div></div><div class="stat"><div class="stat-num">${companies}</div><div class="stat-label">Organizations represented</div></div>`;
    }
    if (jobsHost) {
      jobsHost.innerHTML = activeJobs.slice(0, 3).map((job, index) => `<div class="match-card" ${index ? 'style="background:#fff;border:0.5px solid #C0DD97"' : ""}><div class="match-header"><div class="match-title">${escapeHtml(job.title)}</div><div class="match-pct">${applicationsForJob(job.id).length} applicants</div></div><div class="match-sub">${escapeHtml(companyName(job))} · ${escapeHtml(job.type)} · ${escapeHtml(job.setup)}</div><div class="match-tags">${job.skills.slice(0, 3).map((skill) => `<span class="tag">${escapeHtml(skill)}</span>`).join("")}</div></div>`).join("");
    }
  }

  function renderAboutPage() {
    const stats = document.getElementById("about-platform-stats");
    const features = document.getElementById("about-feature-list");
    const studentCount = students().length;
    const employerCount = state.users.filter((user) => user.role === "employer").length;
    const openJobs = state.jobs.filter((job) => job.status === "active").length;
    if (stats) {
      stats.innerHTML = `<div class="stat"><div class="stat-num">${studentCount}</div><div class="stat-label">Seeded student profiles</div></div><div class="stat"><div class="stat-num">${employerCount}</div><div class="stat-label">Employer accounts</div></div><div class="stat"><div class="stat-num">${openJobs}</div><div class="stat-label">Active openings</div></div>`;
    }
    if (features) {
      features.innerHTML = [`AI-style job matching for Gordon College students`, `Third-party employer dashboard for postings and applicants`, `Resume workflow aimed at PDF skill extraction`, `College-admin oversight across users and listings`].map((item) => `<div class="panel-row">${escapeHtml(item)}</div>`).join("");
    }
  }

  function renderAuthPage() {
    const cards = document.getElementById("auth-match-cards");
    if (cards) {
      const jobs = recommendedJobs(byId(state.users, "student-allyana")).slice(0, 3);
      cards.innerHTML = jobs.map((job, index) => `<div class="lp-card"><div class="lp-card-dot" style="${index === 1 ? "background:#639922" : index === 2 ? "background:#97C459" : ""}"></div><div><div class="lp-card-title">${escapeHtml(job.title)}</div><div class="lp-card-sub">${escapeHtml(companyName(job))} · ${escapeHtml(job.type)}</div></div><div class="lp-pct" style="${index === 1 ? "background:#639922" : index === 2 ? "background:#97C459;color:#1a2e0a" : ""}">${job.score}%</div></div>`).join("");
    }
  }

  function analyzeResumeFile(file) {
    const user = currentUser();
    const resume = resumeForStudent(user.id);
    const fileName = file ? file.name : resume.fileName || "resume.pdf";
    const baselineSkills = studentSkills(user).length ? studentSkills(user) : (user.skills || []);
    const extracted = Array.from(new Set(baselineSkills.slice(0, 6).concat([suggestedSkill(user), "Communication"]))).slice(0, 8);
    const quantifiable = [
      `Detected ${user.experience.length} experience entries that look resume-ready.`,
      "Found quantifiable phrasing suitable for ranking and screening.",
      "Flagged project-style evidence that can be turned into measurable achievements.",
    ];
    state.resumeAnalyses[user.id] = {
      fileName,
      extractedSkills: extracted,
      quantifiable,
      summary: `Demo AI analysis for ${fileName}: extracted skills are ${extracted.slice(0, 4).join(", ")}. Compatibility scoring should use these resume-derived skills. In production, the app should extract PDF text first, then use AI to identify explicit skills and whether achievements are quantifiable.`,
    };
    saveState();
  }

  function renderSkillsResume() {
    const resume = resumeForStudent(currentUser().id);
    const status = document.getElementById("resume-upload-status");
    const grid = document.getElementById("resume-skills-grid");
    const quant = document.getElementById("resume-quant-list");
    const summary = document.getElementById("resume-summary");
    const recommendation = document.getElementById("resume-recommendation");
    if (status) status.textContent = resume.fileName ? `Current file: ${resume.fileName}` : "No PDF uploaded yet.";
    if (grid) grid.innerHTML = resume.extractedSkills.length ? resume.extractedSkills.map((skill) => `<span class="skill-chip">${escapeHtml(skill)}</span>`).join("") : `<div style="font-size:0.8rem;color:var(--gc-muted)">No skills extracted yet.</div>`;
    if (quant) quant.innerHTML = resume.quantifiable.map((item) => `<div class="quant-row">${escapeHtml(item)}</div>`).join("");
    if (summary) summary.textContent = resume.summary;
    if (recommendation) recommendation.textContent = "The student profile skills and job compatibility score should come from AI analysis of the uploaded PDF resume. In this deployed MVP, the preview is simulated locally and still needs a real PDF extraction and AI backend to be reliable.";
    document.getElementById("resume-analyze-button")?.addEventListener("click", () => {
      const file = document.getElementById("resume-file-input")?.files?.[0];
      analyzeResumeFile(file);
      renderSkillsResume();
    });
  }

  function renderSettings() {
    const settings = state.settings;
    const matches = document.getElementById("setting-email-matches");
    const apps = document.getElementById("setting-email-apps");
    const profile = document.getElementById("setting-public-profile");
    const setup = document.getElementById("setting-work-setup");
    const availability = document.getElementById("setting-availability");
    if (matches) matches.checked = settings.emailMatches;
    if (apps) apps.checked = settings.emailApplications;
    if (profile) profile.checked = settings.publicProfile;
    if (setup) setup.value = settings.preferredSetup;
    if (availability) availability.value = settings.availability;
    document.getElementById("settings-save-button")?.addEventListener("click", () => {
      state.settings = {
        emailMatches: !!matches.checked,
        emailApplications: !!apps.checked,
        publicProfile: !!profile.checked,
        preferredSetup: setup.value,
        availability: availability.value.trim(),
      };
      saveState();
      window.alert("Settings saved.");
    });
  }

  function renderPublicProfile() {
    const user = currentUser();
    setText("#public-profile-name", `${user.firstName} ${user.lastName}`);
    setText("#public-profile-subtitle", `${user.program} ${user.section} · Open to campus opportunities`);
    const tags = document.getElementById("public-profile-tags");
    if (tags) tags.innerHTML = user.preferences.map((tag, index) => `<span class="ph-tag ${index ? "neutral" : ""}">${escapeHtml(tag)}</span>`).join("");
    setText("#public-profile-about", user.about);
    const skills = document.getElementById("public-profile-skills");
    if (skills) skills.innerHTML = studentSkills(user).map((skill) => `<span class="skill-chip">${escapeHtml(skill)}</span>`).join("");
    const exp = document.getElementById("public-profile-experience");
    if (exp) exp.innerHTML = user.experience.map((item) => `<div class="exp-row"><div class="exp-title">${escapeHtml(item.title)}</div><div class="exp-sub">${escapeHtml(item.org)} · ${escapeHtml(item.dates)}</div><div class="exp-desc">${escapeHtml(item.desc)}</div></div>`).join("");
  }

  function renderCurrentPage() {
    if (PAGE === "student-dashboard") renderStudentDashboard();
    if (PAGE === "job-listing") renderJobListing();
    if (PAGE === "my-applications") renderApplications();
    if (PAGE === "saved-jobs") renderSavedJobs();
    if (PAGE === "student-profile") renderStudentProfile();
    if (PAGE === "skills-resume") renderSkillsResume();
    if (PAGE === "settings") renderSettings();
    if (PAGE === "public-profile") renderPublicProfile();
  }

  function renderEmployerPosting() {
    const title = document.getElementById("posting-title");
    const type = document.getElementById("posting-job-type");
    const setup = document.getElementById("posting-work-setup");
    const schedule = document.getElementById("posting-schedule");
    const description = document.getElementById("posting-description");
    const slots = document.getElementById("posting-slots");
    const skillInput = document.getElementById("posting-skill-input");
    const company = document.getElementById("posting-company");
    const employerSettings = state.employerSettings;
    state.ui.postingDraft = state.ui.postingDraft || {
      title: "",
      company: employerSettings.companyName || employerSettings.name || "BrightPath Digital Solutions",
      type: employerSettings.defaultJobType || "Part-time",
      setup: employerSettings.defaultWorkSetup || "Flexible",
      schedule: "",
      description: "",
      slots: 1,
    };
    state.ui.postingSkills = state.ui.postingSkills || ["Communication", "Documentation"];
    title.value = state.ui.postingDraft.title;
    company.value = state.ui.postingDraft.company;
    type.value = state.ui.postingDraft.type;
    setup.value = state.ui.postingDraft.setup;
    schedule.value = state.ui.postingDraft.schedule;
    description.value = state.ui.postingDraft.description;
    slots.value = String(state.ui.postingDraft.slots);

    function syncDraft() {
      state.ui.postingDraft = {
        title: title.value.trim(),
        company: company.value,
        type: type.value,
        setup: setup.value,
        schedule: schedule.value.trim(),
        description: description.value.trim(),
        slots: Number.parseInt(slots.value, 10) || 1,
      };
      const chips = document.getElementById("posting-skill-chips");
      if (chips) {
        chips.innerHTML = state.ui.postingSkills.map((skill) => `<span class="skill-chip">${escapeHtml(skill)} <span class="skill-chip-x" data-remove-skill="${escapeHtml(skill)}">×</span></span>`).join("");
        chips.querySelectorAll("[data-remove-skill]").forEach((node) => node.addEventListener("click", () => {
          state.ui.postingSkills = state.ui.postingSkills.filter((skill) => skill !== node.dataset.removeSkill);
          syncDraft();
        }));
      }
      setText("#posting-preview-title", title.value.trim() || "New job draft");
      setText("#posting-preview-dept", `${company.value} · Posted just now`);
      const previewTags = document.getElementById("posting-preview-tags");
      if (previewTags) previewTags.innerHTML = `<span class="ptag type">${escapeHtml(type.value)}</span><span class="ptag type">${escapeHtml(setup.value)}</span>${state.ui.postingSkills.slice(0, 3).map((skill) => `<span class="ptag">${escapeHtml(skill)}</span>`).join("")}`;
      setText("#posting-preview-desc", description.value.trim() || "Your role description preview will appear here.");
      const predictions = students().map((student) => ({ student, score: scoreJob(student, { skills: state.ui.postingSkills, matchOverrides: {}, title: title.value, company: company.value, description: description.value }) })).sort((a, b) => b.score - a.score);
      const strongMatches = predictions.filter((item) => item.score >= 70).length;
      const estimate = document.getElementById("posting-match-estimate");
      if (estimate) estimate.innerHTML = `Based on the required skills, approximately <strong style="color:var(--gc-green)">${strongMatches} Gordon College students</strong> on the platform have a match score above 70% for this role.`;
      const predicted = document.getElementById("posting-predicted-matches");
      if (predicted) predicted.innerHTML = predictions.slice(0, 3).map((item) => `<div class="ap-row"><span class="ap-name">${escapeHtml(item.student.firstName)} ${escapeHtml(item.student.lastName)}</span><span class="ap-pct">${item.score}%</span></div>`).join("");
      saveState();
    }

    [title, company, type, setup, schedule, description, slots].forEach((node) => node && node.addEventListener("input", syncDraft));
    if (skillInput) {
      skillInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          const value = skillInput.value.trim();
          if (value && !state.ui.postingSkills.includes(value)) {
            state.ui.postingSkills.push(value);
            skillInput.value = "";
            syncDraft();
          }
        }
      });
    }
    document.querySelector(".submit-btn")?.addEventListener("click", () => {
      state.jobs.unshift({
        id: `job-${Date.now()}`,
        title: title.value.trim() || "Untitled job",
        company: company.value,
        type: type.value,
        setup: setup.value,
        schedule: schedule.value,
        description: description.value.trim(),
        skills: state.ui.postingSkills.slice(),
        slots: Number.parseInt(slots.value, 10) || 1,
        employerId: currentUser().id,
        postedAt: new Date().toISOString().slice(0, 10),
        status: "active",
        matchOverrides: {},
      });
      state.ui.postingDraft = null;
      state.ui.postingSkills = ["Communication", "Documentation"];
      saveState();
      window.location.href = "/employer/dashboard";
    });
    syncDraft();
  }

  function renderEmployerDashboard() {
    const employer = currentUser();
    const jobs = jobsForEmployer(employer.id);
    const activeJobs = jobs.filter((job) => job.status === "active");
    const applicants = jobs.flatMap((job) => applicationsForJob(job.id).map((app) => ({ app, job, student: byId(state.users, app.studentId), score: scoreJob(byId(state.users, app.studentId), job) }))).sort((a, b) => b.app.appliedAt.localeCompare(a.app.appliedAt));
    const metrics = document.getElementById("employer-dashboard-metrics");
    if (metrics) {
      const avg = applicants.length ? Math.round(applicants.reduce((sum, item) => sum + item.score, 0) / applicants.length) : 0;
      metrics.innerHTML = `
        <div class="metric"><div class="metric-val">${activeJobs.length}</div><div class="metric-label">Active listings</div><div class="metric-change">Live in demo data</div></div>
        <div class="metric"><div class="metric-val">${applicants.length}</div><div class="metric-label">Total applicants</div><div class="metric-change">Across all listings</div></div>
        <div class="metric"><div class="metric-val">${activeJobs.reduce((sum, job) => sum + job.slots, 0)}</div><div class="metric-label">Open slots</div><div class="metric-change">Configured on listings</div></div>
        <div class="metric"><div class="metric-val">${avg}%</div><div class="metric-label">Avg. match quality</div><div class="metric-change">Computed from applicants</div></div>
      `;
    }
    const table = document.getElementById("employer-job-table");
    if (table) {
      table.innerHTML = `<div class="jt-head"><div>Position</div><div>Status</div><div>Applicants</div><div>Slots</div><div>Actions</div></div>${jobs.map((job) => {
        const count = applicationsForJob(job.id).length;
        return `<div class="jt-row"><div><div class="jt-title">${escapeHtml(job.title)}</div><div class="jt-dept">Posted ${fmtDate(job.postedAt)}</div></div><div class="jt-status"><span class="status-dot ${job.status === "closed" ? "closed" : ""}"></span>${escapeHtml(job.status === "active" ? "Active" : "Closed")}</div><div class="jt-num">${count}</div><div class="jt-num">${job.slots}</div><div class="jt-actions"><button class="jt-btn" data-view-applicants="${job.id}">View</button></div></div>`;
      }).join("")}`;
      table.querySelectorAll("[data-view-applicants]").forEach((button) => button.addEventListener("click", () => {
        state.ui.employerSelectedJobId = button.dataset.viewApplicants;
        saveState();
        window.location.href = "/employer/applicants";
      }));
    }
    const recent = document.getElementById("recent-applicants-panel");
    if (recent) {
      recent.innerHTML = `${applicants.slice(0, 4).map((item) => `<div class="applicant-row"><div class="ap-av">${initials(item.student)}</div><div><div class="ap-name">${escapeHtml(item.student.firstName)} ${escapeHtml(item.student.lastName)}</div><div class="ap-job">${escapeHtml(item.job.title)}</div></div><div style="display:flex;flex-direction:column;align-items:flex-end;gap:2px"><div class="ap-pct">${item.score}%</div><div class="ap-time">${shortDate(item.app.appliedAt)}</div></div></div>`).join("")}<div style="text-align:center;margin-top:0.75rem"><button style="font-size:0.75rem;color:var(--gc-green);background:none;border:none;cursor:pointer;font-family:'DM Sans',sans-serif" onclick="location.href='/employer/applicants'">View all applicants →</button></div>`;
    }
    const activity = document.getElementById("recent-activity-panel");
    if (activity) {
      activity.innerHTML = applicants.slice(0, 4).map((item) => `<div class="activity-row"><div class="act-dot"></div><div>${escapeHtml(item.student.firstName)} ${escapeHtml(item.student.lastName)} applied to ${escapeHtml(item.job.title)} with a ${item.score}% match.</div></div>`).join("");
    }
  }

  function renderEmployerActiveListings() {
    const jobs = jobsForEmployer(currentUser().id);
    const table = document.getElementById("employer-active-listings-table");
    if (!table) return;
    table.innerHTML = `<div class="jt-head"><div>Position</div><div>Status</div><div>Applicants</div><div>Slots</div><div>Actions</div></div>${jobs.map((job) => `<div class="jt-row"><div><div class="jt-title">${escapeHtml(job.title)}</div><div class="jt-dept">${escapeHtml(companyName(job))} · Posted ${fmtDate(job.postedAt)}</div></div><div class="jt-status"><span class="status-dot"></span>${escapeHtml(job.status)}</div><div class="jt-num">${applicationsForJob(job.id).length}</div><div class="jt-num">${job.slots}</div><div class="jt-actions"><button class="jt-btn" data-open-job="${job.id}">Applicants</button><button class="jt-btn" data-copy-job="${job.id}">Reopen copy</button></div></div>`).join("")}`;
    table.querySelectorAll("[data-open-job]").forEach((button) => button.addEventListener("click", () => {
      state.ui.employerSelectedJobId = button.dataset.openJob;
      saveState();
      window.location.href = "/employer/applicants";
    }));
    table.querySelectorAll("[data-copy-job]").forEach((button) => button.addEventListener("click", () => {
      const original = byId(state.jobs, button.dataset.copyJob);
      state.jobs.unshift(Object.assign({}, original, { id: `job-${Date.now()}`, postedAt: new Date().toISOString().slice(0, 10) }));
      saveState();
      renderEmployerActiveListings();
    }));
  }

  function renderHiredStudents() {
    const list = document.getElementById("hired-students-list");
    if (!list) return;
    const employerJobIds = new Set(jobsForEmployer(currentUser().id).map((job) => job.id));
    const hired = state.applications.filter((app) => app.status === "hired" && employerJobIds.has(app.jobId)).map((app) => ({ app, job: byId(state.jobs, app.jobId), student: byId(state.users, app.studentId) }));
    list.innerHTML = hired.length ? hired.map((item) => `<div class="applicant-row"><div class="ap-av">${initials(item.student)}</div><div><div class="ap-name">${escapeHtml(item.student.firstName)} ${escapeHtml(item.student.lastName)}</div><div class="ap-job">${escapeHtml(item.job.title)}</div></div><div style="margin-left:auto;font-size:0.75rem;color:var(--gc-green)">Hired</div></div>`).join("") : `<div style="font-size:0.82rem;color:var(--gc-muted)">No students are marked as hired yet.</div>`;
  }

  function renderCompanyProfile() {
    const jobs = jobsForEmployer(currentUser().id);
    setText("#company-profile-summary", state.employerSettings.summary);
    const jobsNode = document.getElementById("company-profile-jobs");
    if (jobsNode) jobsNode.innerHTML = jobs.map((job) => `<div class="activity-row"><div class="act-dot"></div><div>${escapeHtml(job.title)} · ${applicationsForJob(job.id).length} applicants · ${job.slots} slot(s)</div></div>`).join("");
  }

  function renderEmployerSettings() {
    const settings = state.employerSettings;
    const name = document.getElementById("employer-setting-name");
    const summary = document.getElementById("employer-setting-summary");
    const jobType = document.getElementById("employer-setting-job-type");
    const workSetup = document.getElementById("employer-setting-work-setup");
    const applicants = document.getElementById("employer-setting-applicants");
    const expiring = document.getElementById("employer-setting-expiring");
    const publicCompany = document.getElementById("employer-setting-public");
    if (name) name.value = settings.companyName || settings.name;
    if (summary) summary.value = settings.summary;
    if (jobType) jobType.value = settings.defaultJobType;
    if (workSetup) workSetup.value = settings.defaultWorkSetup;
    if (applicants) applicants.checked = settings.emailApplicants;
    if (expiring) expiring.checked = settings.emailExpiring;
    if (publicCompany) publicCompany.checked = settings.publicCompany ?? settings.publicDepartment;
    document.getElementById("employer-settings-save")?.addEventListener("click", () => {
      state.employerSettings = {
        companyName: name.value.trim() || "BrightPath Digital Solutions",
        summary: summary.value.trim() || "Company summary pending.",
        defaultJobType: jobType.value,
        defaultWorkSetup: workSetup.value,
        emailApplicants: !!applicants.checked,
        emailExpiring: !!expiring.checked,
        publicCompany: !!publicCompany.checked,
      };
      if (state.ui.postingDraft) {
        state.ui.postingDraft.company = state.employerSettings.companyName;
        state.ui.postingDraft.type = state.employerSettings.defaultJobType;
        state.ui.postingDraft.setup = state.employerSettings.defaultWorkSetup;
      }
      saveState();
      window.alert("Employer settings saved.");
    });
  }

  function renderEmployerApplicants() {
    const employerJobs = jobsForEmployer(currentUser().id);
    if (!employerJobs.length) return;
    if (!employerJobs.some((job) => job.id === state.ui.employerSelectedJobId)) state.ui.employerSelectedJobId = employerJobs[0].id;
    const selectedJob = byId(state.jobs, state.ui.employerSelectedJobId);
    const select = document.getElementById("applicant-job-select");
    if (select) {
      select.innerHTML = employerJobs.map((job) => `<option value="${job.id}" ${job.id === selectedJob.id ? "selected" : ""}>${escapeHtml(job.title)} (${applicationsForJob(job.id).length})</option>`).join("");
      select.onchange = () => {
        state.ui.employerSelectedJobId = select.value;
        state.ui.employerSelectedApplicationId = "";
        saveState();
        renderEmployerApplicants();
      };
    }
    const apps = applicationsForJob(selectedJob.id).map((app) => ({ app, student: byId(state.users, app.studentId), score: scoreJob(byId(state.users, app.studentId), selectedJob) }));
    setText("#applicants-list-subtitle", `${apps.length} applicants across your selected listing`);
    const counts = { all: apps.length, pending: apps.filter((i) => i.app.status === "pending").length, review: apps.filter((i) => i.app.status === "review").length, interview: apps.filter((i) => i.app.status === "interview").length, hired: apps.filter((i) => i.app.status === "hired").length };
    const stageMap = { all: "All", pending: "New", review: "Review", interview: "Interview", hired: "Hired" };
    document.querySelectorAll(".stage-tabs .stab").forEach((tab) => {
      const key = tab.dataset.stageFilter;
      tab.textContent = `${stageMap[key]} (${counts[key] || 0})`;
      tab.classList.toggle("active", (state.ui.employerStageFilter || "all") === key);
      tab.onclick = () => {
        state.ui.employerStageFilter = key;
        saveState();
        renderEmployerApplicants();
      };
    });
    const visible = apps.filter((item) => (state.ui.employerStageFilter || "all") === "all" || item.app.status === state.ui.employerStageFilter);
    if (!visible.some((item) => item.app.id === state.ui.employerSelectedApplicationId)) state.ui.employerSelectedApplicationId = (visible[0] && visible[0].app.id) || "";
    const list = document.getElementById("applicants-list");
    if (list) {
      list.innerHTML = visible.map((item) => `<div class="ap-card ${item.app.id === state.ui.employerSelectedApplicationId ? "selected" : ""}" data-application-id="${item.app.id}"><div class="ap-top"><div class="ap-av-sm">${initials(item.student)}</div><div class="ap-info"><div class="ap-name">${escapeHtml(item.student.firstName)} ${escapeHtml(item.student.lastName)}</div><div class="ap-course">${escapeHtml(item.student.program)} ${escapeHtml(item.student.section)} · Applied ${shortDate(item.app.appliedAt)}</div></div><div class="ap-pct-sm ${pctClass(item.score)}">${item.score}%</div></div><div class="ap-chips">${studentSkills(item.student).slice(0, 3).map((skill) => `<span class="ap-chip-sm">${escapeHtml(skill)}</span>`).join("")}</div></div>`).join("");
      list.querySelectorAll("[data-application-id]").forEach((card) => card.addEventListener("click", () => {
        state.ui.employerSelectedApplicationId = card.dataset.applicationId;
        saveState();
        renderEmployerApplicants();
      }));
    }
    const selected = visible.find((item) => item.app.id === state.ui.employerSelectedApplicationId) || visible[0];
    if (!selected) return;
    const hasCount = selected.jobSkillsMatchCount || selectedJob.skills.filter((skill) => studentSkills(selected.student).map((s) => s.toLowerCase()).includes(skill.toLowerCase())).length;
    document.getElementById("applicant-detail-avatar").textContent = initials(selected.student);
    setText("#applicant-detail-name", `${selected.student.firstName} ${selected.student.lastName}`);
    setText("#applicant-detail-sub", `${selected.student.program} ${selected.student.section} · Gordon College · Applied ${fmtDate(selected.app.appliedAt)}`);
    const tags = document.getElementById("applicant-detail-tags");
    if (tags) tags.innerHTML = `<span class="dc-tag">Open to opportunities</span>${selected.student.preferences.slice(0, 1).map((tag) => `<span class="dc-tag">${escapeHtml(tag)}</span>`).join("")}`;
    setText("#applicant-detail-match-label", `AI match score for ${selectedJob.title}`);
    setText("#applicant-detail-match-value", `${selected.score}%`);
    document.getElementById("applicant-detail-match-bar").style.width = `${selected.score}%`;
    setText("#applicant-detail-match-note", `Strong fit — meets ${hasCount} of ${selectedJob.skills.length} required skills`);
    setText("#applicant-detail-about", selected.student.about);
    const skillBreakdown = document.getElementById("applicant-detail-skills");
    if (skillBreakdown) {
      const set = new Set(studentSkills(selected.student).map((skill) => skill.toLowerCase()));
      skillBreakdown.innerHTML = selectedJob.skills.map((skill) => `<div class="skill-row"><span>${escapeHtml(skill)}</span><span class="${set.has(skill.toLowerCase()) ? "skill-match" : "skill-miss"}">${set.has(skill.toLowerCase()) ? "✓ Found in resume" : "Not found in resume"}</span></div>`).join("");
    }
    const exp = document.getElementById("applicant-detail-experience");
    if (exp) exp.innerHTML = selected.student.experience.map((item) => `<div class="dc-sec-body"><strong style="color:var(--gc-dark)">${escapeHtml(item.title)}</strong><br>${escapeHtml(item.org)} · ${escapeHtml(item.dates)}<br>${escapeHtml(item.desc)}</div>`).join("");
    const noteArea = document.getElementById("applicant-note-area");
    if (noteArea) noteArea.value = state.notes[selected.app.id] || "";
    document.getElementById("save-applicant-note").onclick = () => {
      state.notes[selected.app.id] = noteArea.value;
      saveState();
    };
    document.querySelectorAll(".stage-btn").forEach((button) => {
      const mapping = { New: "pending", "Under review": "review", "For interview": "interview", Hired: "hired", Rejected: "rejected" };
      const label = button.textContent.trim();
      button.classList.toggle("current", mapping[label] === selected.app.status);
      button.onclick = () => {
        if (mapping[label]) {
          selected.app.status = mapping[label];
          if (!selected.app.events.includes(label)) selected.app.events.push(label);
          saveState();
          renderEmployerApplicants();
        }
      };
    });
    document.querySelector(".action-btn-green").onclick = () => { selected.app.status = "hired"; saveState(); renderEmployerApplicants(); };
    document.querySelector(".action-btn-outline").onclick = () => { selected.app.status = "interview"; if (!selected.app.events.includes("Interview scheduled")) selected.app.events.push("Interview scheduled"); saveState(); renderEmployerApplicants(); };
    document.querySelector(".action-btn-reject").onclick = () => { selected.app.status = "rejected"; saveState(); renderEmployerApplicants(); };
  }

  function initAdminPage() {
    const studentCount = students().length;
    const activeJobs = state.jobs.filter((job) => job.status === "active").length;
    const totalApps = state.applications.length;
    const avg = Math.round(state.applications.reduce((sum, app) => sum + scoreJob(byId(state.users, app.studentId), byId(state.jobs, app.jobId)), 0) / Math.max(state.applications.length, 1));
    const metricVals = document.querySelectorAll(".metric-val");
    if (metricVals[0]) metricVals[0].textContent = String(studentCount);
    if (metricVals[1]) metricVals[1].textContent = String(activeJobs);
    if (metricVals[2]) metricVals[2].textContent = totalApps.toLocaleString();
    if (metricVals[3]) metricVals[3].textContent = `${avg}%`;
    const liveBadge = document.querySelector(".live-badge");
    if (liveBadge) liveBadge.innerHTML = `<div class="live-dot"></div> Live data · ${new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}`;
    const usersTable = document.getElementById("admin-users-table");
    if (usersTable) {
      usersTable.innerHTML = state.users.slice(0, 4).map((user, index) => `<div class="t-row users-grid"><div class="u-info"><div class="u-av" style="background:${index % 2 ? "#639922" : "#3B6D11"}">${initials(user)}</div><div><div class="u-name">${escapeHtml(user.firstName)} ${escapeHtml(user.lastName)}</div><div class="u-course">${escapeHtml(user.role === "student" ? `${user.program} ${user.section}` : user.role === "employer" ? "Third-party employer" : "College admin")}</div></div></div><div><span class="role-pill ${user.role === "student" ? "rp-student" : "rp-employer"}">${escapeHtml(user.role[0].toUpperCase() + user.role.slice(1))}</span></div><div style="color:rgba(192,221,151,0.5)">${escapeHtml(user.program || organizationName(user) || "—")}</div><div style="color:rgba(192,221,151,0.5)">${shortDate("2026-04-01")}</div><div class="${index === 3 ? "status-inactive" : "status-active"}"><div class="s-dot" style="background:${index === 3 ? "rgba(192,221,151,0.2)" : "#97C459"}"></div>${index === 3 ? "Inactive" : "Active"}</div></div>`).join("");
    }
    const jobsTable = document.getElementById("admin-jobs-table");
    if (jobsTable) {
      jobsTable.innerHTML = state.jobs.filter((job) => job.status === "active").slice(0, 4).map((job) => {
        const applicants = applicationsForJob(job.id);
        const avgScore = applicants.length ? Math.round(applicants.reduce((sum, app) => sum + scoreJob(byId(state.users, app.studentId), job), 0) / applicants.length) : 0;
        return `<div class="t-row jobs-grid"><div style="color:#C0DD97;font-weight:500">${escapeHtml(job.title)}</div><div style="color:rgba(192,221,151,0.5)">${escapeHtml(companyName(job))}</div><div style="color:#97C459">${applicants.length}</div><div style="color:${avgScore >= 70 ? "#97C459" : "rgba(192,221,151,0.4)"}">${avgScore}%</div><div><span style="font-size:0.7rem;color:#97C459">● Active</span></div></div>`;
      }).join("");
    }
    const health = document.getElementById("admin-health-card");
    if (health) {
      const activeStudents = students().length;
      const activeEmployers = state.users.filter((user) => user.role === "employer").length;
      const listings = state.jobs.filter((job) => job.status === "active").length;
      const matchesToday = applicationsForStudent("student-allyana").length + 4;
      const hires = state.applications.filter((app) => app.status === "hired").length;
      health.innerHTML = `<div class="rp-row"><span>Active students</span><span class="rp-val">${activeStudents}</span></div><div class="rp-row"><span>Active employers</span><span class="rp-val">${activeEmployers}</span></div><div class="rp-row"><span>Listings live</span><span class="rp-val">${listings}</span></div><div class="rp-row"><span>Matches made today</span><span class="rp-val">${matchesToday}</span></div><div class="rp-row"><span>Hires this month</span><span class="rp-val">${hires}</span></div>`;
    }
    const alerts = document.getElementById("admin-alerts-card");
    if (alerts) {
      const lowApplicantJobs = state.jobs.filter((job) => applicationsForJob(job.id).length < 2).length;
      alerts.innerHTML = `<div class="alert-row"><div class="alert-dot alert-warn"></div><div>${lowApplicantJobs} listings have low applicant volume.</div></div><div class="alert-row"><div class="alert-dot alert-info"></div><div>AI matching engine refreshed skill suggestions from current profile data.</div></div><div class="alert-row"><div class="alert-dot alert-info"></div><div>${students().length} student accounts are available in the current demo state.</div></div>`;
    }
  }

  function showTab(tab, element) {
    document.querySelectorAll(".auth-tab").forEach((item) => item.classList.remove("active"));
    element.classList.add("active");
    document.getElementById("login-panel").style.display = tab === "login" ? "block" : "none";
    document.getElementById("signup-panel").style.display = tab === "signup" ? "block" : "none";
  }

  function selectRole(element) {
    document.querySelectorAll(".role-selector .role-card").forEach((item) => item.classList.remove("selected"));
    element.classList.add("selected");
  }

  function selectSignupRole(role) {
    state.ui.signupRole = role;
    document.getElementById("signup-student").classList.toggle("selected", role === "student");
    document.getElementById("signup-employer").classList.toggle("selected", role === "employer");
    document.getElementById("student-extras").classList.toggle("visible", role === "student");
    document.getElementById("employer-extras").classList.toggle("visible", role === "employer");
    saveState();
  }

  function filterApps(status, element) {
    state.ui.applicationFilter = status;
    saveState();
    if (element) document.querySelectorAll(".stab").forEach((tab) => tab.classList.toggle("active", tab === element));
    renderApplications();
  }

  function unsave(button) {
    if (button?.dataset?.saveJob) toggleSaved(button.dataset.saveJob);
  }

  function selectApplicant() {}

  document.addEventListener("DOMContentLoaded", () => {
    ensurePageUser();
    syncChrome();
    syncRoleActions();
    wireSidebars();
    if (PAGE === "auth") initAuthPage();
    if (PAGE === "auth") renderAuthPage();
    if (PAGE === "landing") renderLanding();
    if (PAGE === "for-employers") renderForEmployersPage();
    if (PAGE === "about") renderAboutPage();
    if (PAGE === "employer-posting") renderEmployerPosting();
    if (PAGE === "employer-dashboard") renderEmployerDashboard();
    if (PAGE === "employer-applicants") renderEmployerApplicants();
    if (PAGE === "employer-active-listings") renderEmployerActiveListings();
    if (PAGE === "hired-students") renderHiredStudents();
    if (PAGE === "company-profile") renderCompanyProfile();
    if (PAGE === "employer-settings") renderEmployerSettings();
    if (PAGE === "admin") initAdminPage();
    if (PAGE === "job-listing") document.getElementById("job-search-input")?.addEventListener("input", renderJobListing);
    renderCurrentPage();
  });

  window.showTab = showTab;
  window.selectRole = selectRole;
  window.selectSignupRole = selectSignupRole;
  window.filterApps = filterApps;
  window.unsave = unsave;
  window.selectApplicant = selectApplicant;
})();
