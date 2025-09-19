const projectsData = [
  {
    title: "E-commerce website",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    link: "https://ud-store.vercel.app/",
    category: "Web Development",
    description:
      "A fully functional e-commerce platform with product listings, shopping cart, and payment processing.",
  },
  {
    title: "Logistics website",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    link: "https://clarion-group.vercel.app/",
    category: "Web Design",
    description:
      "A logistics company website with service information, tracking system, and customer portal.",
  },
  {
    title: "NGO website",
    image:
      "https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    link: "https://saddle-light.vercel.app/",
    category: "Web Development",
    description:
      "A website for a non-profit organization showcasing their mission, projects, and donation system.",
  },
  {
    title: "To-do App",
    image:
      "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    link: "https://todo-green-iota-29.vercel.app/",
    category: "Web App",
    description:
      "A task management application with create, read, update, and delete functionality.",
  },
  {
    title: "Learning Platform",
    image:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    link: "https://ipaja-tech-lab.vercel.app/",
    category: "Web Development",
    description:
      "An educational platform with course listings, user profiles, and progress tracking.",
  },
  {
    title: "Child Care",
    image:
      "https://images.unsplash.com/photo-1531844251246-9a1bf6ae78a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    link: "https://tymex-five.vercel.app/",
    category: "Web Design",
    description:
      "A website for a child care service with information about programs, staff, and enrollment process.",
  },
];

// DOM elements
const projectsGrid = document.getElementById("projects-grid");
const filterButtons = document.querySelectorAll(".filter-btn");
const searchInput = document.getElementById("search-input");

// Current filter state
let currentFilter = "all";
let searchQuery = "";

// Render projects based on current filter and search
function renderProjects() {
  // Clear the grid
  projectsGrid.innerHTML = "";

  // Filter projects based on category and search query
  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory =
      currentFilter === "all" || project.category === currentFilter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Display projects or no results message
  if (filteredProjects.length === 0) {
    projectsGrid.innerHTML = `
                    <div class="no-results">
                        <i class="fas fa-search"></i>
                        <h3>No projects found</h3>
                        <p>Try adjusting your search or filter criteria</p>
                    </div>
                `;
    return;
  }

  // Render filtered projects
  filteredProjects.forEach((project) => {
    const projectElement = document.createElement("div");
    projectElement.className = "project-card";
    projectElement.innerHTML = `
                    <img src="${project.image}" alt="${project.title}" class="project-img">
                    <div class="project-content">
                        <span class="project-category">${project.category}</span>
                        <h3 class="project-title">${project.title}</h3>
                        <p class="project-description">${project.description}</p>
                        <a href="${project.link}" target="_blank" class="project-link">View Project</a>
                    </div>
                `;
    projectsGrid.appendChild(projectElement);
  });
}

// Set up event listeners
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Update active button
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    // Update filter and render
    currentFilter = button.dataset.filter;
    renderProjects();
  });
});

searchInput.addEventListener("input", () => {
  searchQuery = searchInput.value;
  renderProjects();
});

// Initial render
renderProjects();
