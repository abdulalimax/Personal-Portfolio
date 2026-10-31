const projectsData = [
  {
    id: 1,
    category: "FULL STACK",
    year: "2026",
    name: "RentNest Rental Platform",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80",
    snippet: "A modern full-stack rental property platform connecting tenants and landlords with property discovery, rental requests, secure payments and role-based dashboards.",
    cardTech: [
      { name: "Next.js", icon: "devicon-nextjs-plain" },
      { name: "TypeScript", icon: "devicon-typescript-plain colored" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-original colored" },
      { name: "Node.js", icon: "devicon-nodejs-plain colored" }
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "Prisma", "Stripe"],
    description: "Engineered a complete property rental marketplace with dedicated dashboards for Tenants, Landlords, and Admins. Includes JWT authentication, property CRUD workflows, and Stripe online payment processing.",
    liveUrl: "https://rentnest-frontend-eight.vercel.app",
    githubClient: "https://github.com/abdulalimax/rentnest-frontend",
    challenges: "Synchronizing Stripe checkout session callbacks with backend booking states and managing role-protected routes smoothly in Next.js App Router.",
    futureImprovements: "Adding interactive map-based property filtering, real-time tenant-landlord messaging, and automated invoice PDF generation."
  },
  {
    id: 2,
    category: "FULL STACK",
    year: "2026",
    name: "Blood Donation Platform",
    image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=900&q=80",
    snippet: "A multi-role emergency blood donation and request management platform connecting donors, recipients, and administrators with real-time status tracking.",
    cardTech: [
      { name: "Next.js", icon: "devicon-nextjs-plain" },
      { name: "TypeScript", icon: "devicon-typescript-plain colored" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-original colored" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" }
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "Prisma", "Zod", "JWT"],
    description: "Built a responsive full-stack platform featuring one-click demo role logins, donor availability filtering, emergency blood request workflows, and relational database transactions with Prisma.",
    liveUrl: "https://frontend-fullstack-project-assignme-seven.vercel.app",
    githubClient: "https://github.com/abdulalimax/Frontend-Fullstack-Project-Assignment",
    challenges: "Handling complex relational queries across donor profiles and emergency dispatches while keeping form validation strictly synchronized between Zod and the backend API.",
    futureImprovements: "Implementing geolocation-based nearest donor alerts and automated SMS notifications for critical blood requests."
  },
  {
    id: 3,
    category: "FULL STACK API",
    year: "2026",
    name: "DevPulse Issue Tracker",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    snippet: "A collaborative internal issue and feature tracking platform for software teams to report bugs, prioritize tasks, and coordinate resolutions with role permissions.",
    cardTech: [
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "TypeScript", icon: "devicon-typescript-plain colored" },
      { name: "Express.js", icon: "devicon-express-original" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" }
    ],
    techStack: ["Node.js", "TypeScript", "Express.js", "PostgreSQL", "Raw SQL", "JWT", "Bcrypt"],
    description: "Developed a high-performance issue tracking service using native PostgreSQL connection pooling and parameterized raw SQL queries with strict contributor and maintainer authorization.",
    liveUrl: "https://devpulse-rho-blue.vercel.app",
    githubClient: "https://github.com/abdulalimax/devpulse",
    challenges: "Constructing dynamic filtering, sorting, and nested reporter data aggregation using raw SQL queries without relying on an ORM.",
    futureImprovements: "Adding a drag-and-drop kanban board interface and real-time webhook notifications for team updates."
  }
];

const projectsContainer = document.getElementById("projects-container");
const modalOverlay = document.getElementById("project-modal");
const modalClose = document.getElementById("modal-close");
const modalBody = document.getElementById("modal-body");

function renderProjects() {
  projectsContainer.innerHTML = projectsData.map(proj => `
    <article class="p-card">
      <div class="p-thumb-box">
        <img src="${proj.image}" alt="${proj.name}" class="p-thumb-img" loading="lazy">
        <span class="p-badge-left"><i class="fas fa-sparkles"></i> Featured</span>
        <span class="p-badge-right"><i class="fas fa-globe"></i> Live</span>
      </div>
      <div class="p-content">
        <div class="p-meta-row">
          <span>${proj.category}</span>
          <span class="p-year">${proj.year}</span>
        </div>
        <h3 class="p-title">${proj.name}</h3>
        <p class="p-desc">${proj.snippet}</p>
        <div class="p-tech-grid">
          ${proj.cardTech.map(t => `
            <div class="p-tech-pill">
              <i class="${t.icon}"></i>
              <span>${t.name}</span>
            </div>
          `).join("")}
        </div>
        <div class="p-bottom-bar">
          <button class="btn-view-details" onclick="openProjectModal(${proj.id})">
            View More / Details <i class="fas fa-arrow-right"></i>
          </button>
          <a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-live-pill">
            <i class="fas fa-arrow-up-right-from-square"></i> Live
          </a>
        </div>
      </div>
    </article>
  `).join("");
}

window.openProjectModal = function(id) {
  const project = projectsData.find(item => item.id === id);
  if (!project) return;

  modalBody.innerHTML = `
    <h2 style="font-size: 1.65rem; font-weight: 800; margin-bottom: 0.85rem;">${project.name}</h2>
    <div class="modal-heading">Main Technology Stack Used</div>
    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;">
      ${project.techStack.map(t => `<span class="bento-tag" style="font-size: 0.8rem; padding: 0.3rem 0.75rem;">${t}</span>`).join("")}
    </div>
    <div class="modal-heading">Brief Description</div>
    <p class="modal-text">${project.description}</p>
    <div class="modal-heading">Challenges Faced While Developing</div>
    <p class="modal-text">${project.challenges}</p>
    <div class="modal-heading">Potential Improvements & Future Plans</div>
    <p class="modal-text">${project.futureImprovements}</p>
    <div style="display: flex; flex-wrap: wrap; gap: 0.85rem; margin-top: 1.75rem;">
      <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-gradient">
        <i class="fas fa-external-link-alt"></i> Live Project Link
      </a>
      <a href="${project.githubClient}" target="_blank" rel="noopener noreferrer" class="btn-dark-outline">
        <i class="fab fa-github"></i> GitHub Repository (Client)
      </a>
    </div>
  `;

  modalOverlay.classList.add("active");
  modalOverlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
};

function closeModal() {
  modalOverlay.classList.remove("active");
  modalOverlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "auto";
}

modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
    closeModal();
  }
});

const cursorGlow = document.getElementById("cursor-glow");
document.addEventListener("mousemove", (e) => {
  cursorGlow.style.left = e.clientX + "px";
  cursorGlow.style.top = e.clientY + "px";
});

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(item => item.classList.remove("active"));
    link.classList.add("active");
    navMenu.classList.remove("active");
  });
});

document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you! Your message has been sent to Md. Abdul Alim.");
  e.target.reset();
});

document.addEventListener("DOMContentLoaded", renderProjects);
