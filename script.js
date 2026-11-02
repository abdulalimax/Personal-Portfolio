// Top 3 Core Projects Data with strict assignment requirements
const projectsData = [
  {
    id: 1,
    category: "FULL STACK MARKETPLACE",
    year: "2026",
    name: "RentNest Rental Platform",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80",
    snippet: "A comprehensive rental property ecosystem connecting tenants and landlords with real-time property discovery, secure Stripe payments, and role-based administrative dashboards.",
    cardTech: [
      { name: "Next.js", icon: "devicon-nextjs-plain" },
      { name: "TypeScript", icon: "devicon-typescript-plain colored" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-original colored" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" }
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "Stripe API", "JWT"],
    description: "Architected a dual-sided marketplace enabling landlords to list verified properties and prospective tenants to request rentals. Features JWT role authorization, transactional database queries, and frictionless online payment checkouts with Stripe.",
    liveUrl: "https://rentnest-frontend-eight.vercel.app",
    githubClient: "https://github.com/abdulalimax/rentnest-frontend",
    challenges: "Handling asynchronous Stripe webhook verification safely while keeping inventory states synchronized across concurrent booking requests in Prisma.",
    futureImprovements: "Integrating interactive Mapbox coordinates for neighborhood explorations and introducing in-app real-time tenant-landlord messaging."
  },
  {
    id: 2,
    category: "EMERGENCY PLATFORM",
    year: "2026",
    name: "Blood Donation & Rescue Platform",
    image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=900&q=80",
    snippet: "A mission-critical emergency blood request network bridging active donors with urgent medical recipients via real-time eligibility matching and hospital tracking.",
    cardTech: [
      { name: "Next.js", icon: "devicon-nextjs-plain" },
      { name: "TypeScript", icon: "devicon-typescript-plain colored" },
      { name: "Express.js", icon: "devicon-express-original" },
      { name: "Prisma", icon: "devicon-prisma-original colored" }
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "Prisma", "Zod", "JWT Auth"],
    description: "Designed and implemented an emergency donation portal equipped with instant demo credentials, blood group eligibility filtering, request dispatches, and relational data structures with PostgreSQL.",
    liveUrl: "https://frontend-fullstack-project-assignme-seven.vercel.app",
    githubClient: "https://github.com/abdulalimax/Frontend-Fullstack-Project-Assignment",
    challenges: "Enforcing rigorous schema validations across emergency forms and maintaining sub-second query performance for active donor lookup across medical districts.",
    futureImprovements: "Deploying automated SMS broadcast alerts via Twilio and live geolocation radius donor notifications."
  },
  {
    id: 3,
    category: "SOFTWARE ENGINEERING",
    year: "2026",
    name: "DevPulse Issue Tracker",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    snippet: "A high-throughput internal bug reporting and feature prioritization platform built for agile development teams to triage tickets and coordinate resolutions.",
    cardTech: [
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "TypeScript", icon: "devicon-typescript-plain colored" },
      { name: "Express.js", icon: "devicon-express-original" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" }
    ],
    techStack: ["Node.js", "TypeScript", "Express.js", "PostgreSQL", "Raw SQL Queries", "JWT", "Bcrypt"],
    description: "Engineered a robust issue dispatch service utilizing parameterized raw SQL statements, dedicated connection pooling, and strict role permissions for contributors, reviewers, and maintainers.",
    liveUrl: "https://devpulse-rho-blue.vercel.app",
    githubClient: "https://github.com/abdulalimax/devpulse",
    challenges: "Building composite filtering, multi-column sorting, and nested reporter metadata aggregation purely in raw SQL without reliance on query builders or ORMs.",
    futureImprovements: "Building a drag-and-drop interactive sprint board and GitHub Webhooks synchronization for automatic commit ticket closing."
  }
];

// Interactive Dynamic Canvas Particles Effect
const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 0.45;
    this.vy = (Math.random() - 0.5) * 0.45;
    this.radius = Math.random() * 1.6 + 0.8;
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(99, 102, 241, 0.45)";
    ctx.fill();
  }
}

function initParticles() {
  particles = [];
  const count = Math.min(Math.floor(window.innerWidth / 18), 70);
  for (let i = 0; i < count; i++) {
    particles.push(new Particle());
  }
}
initParticles();

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(99, 102, 241, ${0.18 * (1 - dist / 120)})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(animateParticles);
}
animateParticles();

// Interactive Typewriter
const twRoles = [
  "Full-Stack Software Engineer",
  "Next.js & TypeScript Specialist",
  "Scalable Backend & API Architect"
];
let twIndex = 0;
let charIndex = 0;
let isDeleting = false;
const twElement = document.getElementById("typewriter");

function typeEffect() {
  const currentText = twRoles[twIndex];
  if (isDeleting) {
    twElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    twElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = isDeleting ? 40 : 85;

  if (!isDeleting && charIndex === currentText.length) {
    typeSpeed = 1800;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    twIndex = (twIndex + 1) % twRoles.length;
    typeSpeed = 400;
  }

  setTimeout(typeEffect, typeSpeed);
}
typeEffect();

// Projects Render
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
        <span class="p-badge-right"><i class="fas fa-circle-dot"></i> Live</span>
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
            <i class="fas fa-arrow-up-right-from-square"></i> Live Link
          </a>
        </div>
      </div>
    </article>
  `).join("");
}

// Modal View details logic
window.openProjectModal = function(id) {
  const project = projectsData.find(item => item.id === id);
  if (!project) return;

  modalBody.innerHTML = `
    <h2 style="font-size: 1.75rem; font-weight: 800; margin-bottom: 0.85rem; color: #ffffff;">${project.name}</h2>
    
    <div class="modal-heading">Main Technology Stack Used</div>
    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.1rem;">
      ${project.techStack.map(t => `<span class="bento-tag" style="font-size: 0.82rem; padding: 0.35rem 0.8rem;">${t}</span>`).join("")}
    </div>
    
    <div class="modal-heading">Brief Description</div>
    <p class="modal-text">${project.description}</p>
    
    <div class="modal-heading">Challenges Faced While Developing</div>
    <p class="modal-text">${project.challenges}</p>
    
    <div class="modal-heading">Potential Improvements & Future Plans</div>
    <p class="modal-text">${project.futureImprovements}</p>
    
    <div style="display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 2rem;">
      <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-gradient">
        <i class="fas fa-external-link-alt"></i> Live Project Link
      </a>
      <a href="${project.githubClient}" target="_blank" rel="noopener noreferrer" class="btn-glass">
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

// Spotlight Cursor Follower
const cursorGlow = document.getElementById("cursor-glow");
document.addEventListener("mousemove", (e) => {
  cursorGlow.style.left = e.clientX + "px";
  cursorGlow.style.top = e.clientY + "px";
});

// Mobile Navbar Toggle & Smooth Active State
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

// Form Submission Toast
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you! Your message has been sent successfully to Md. Abdul Alim.");
  e.target.reset();
});

document.addEventListener("DOMContentLoaded", renderProjects);
