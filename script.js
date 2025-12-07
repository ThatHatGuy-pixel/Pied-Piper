// ===========================
// DATA SETUP
// ===========================

// PORTFOLIO PROJECTS
// NOTE: Replace the `thumbnail` and `heroMedia.src` with paths to YOUR files.
// Example image location: "assets/images/hero-banner.jpg"
const portfolioProjects = [
  {
    id: "proj-1",
    title: "Hero Character Sculpt",
    category: "3D Art",
    date: "2025-08-12",
    summary: "High-res sculpt of main hero with full facial blendshapes.",
    description: `
      This project showcases the main hero character for the game.
      Topology is clean enough for both cinematics and real-time gameplay.
      Sculpted in ZBrush/Blender, retopo in Maya, textured in Substance Painter.
    `,
    tags: ["3D", "Character", "High Poly"],
    thumbnail: "assets/images/hero-character-thumb.jpg", // REPLACE
    heroMedia: {
      type: "image", // "image" or "video"
      src: "assets/images/hero-character-full.jpg", // REPLACE
      note: "Main hero render (1920x1080 recommended)."
    }
  },
  {
    id: "proj-2",
    title: "Hand-Painted Environment",
    category: "Environment",
    date: "2025-06-03",
    summary: "Stylised forest environment concept with hand-painted textures.",
    description: `
      A modular environment kit built to support several level layouts.
      Hand-painted textures give it a storybook/Iyashikei vibe.
    `,
    tags: ["Environment", "Hand Painted", "Level Design"],
    thumbnail: "assets/images/forest-env-thumb.jpg", // REPLACE
    heroMedia: {
      type: "image",
      src: "assets/images/forest-env-full.jpg", // REPLACE
      note: "Environment wide shot (1920x1080 recommended)."
    }
  },
  {
    id: "proj-3",
    title: "Combat Prototype Demo",
    category: "Game Dev",
    date: "2025-05-01",
    summary: "Unity combat prototype showing combo chains and hit reactions.",
    description: `
      Implementation of basic lock-on, target switching, and combo chains.
      Includes basic enemy AI, stagger system, and limited invincibility frames.
    `,
    tags: ["Unity", "Gameplay", "Prototype"],
    thumbnail: "assets/images/combat-proto-thumb.jpg", // REPLACE
    heroMedia: {
      type: "video",
      src: "assets/video/combat-demo.mp4", // REPLACE
      note: "Short 15-60s gameplay reel (MP4)."
    }
  }
];

// BLOG POSTS
// You can add more posts here or change the text.
// Only 200 characters of each post are shown in the main blog list.
const blogPosts = [
  {
    id: "post-1",
    title: "Dev Log 01 – Getting Started",
    date: "2025-03-14",
    tags: ["devlog", "unity", "planning"],
    content: `
      Today I officially started the project. First step was setting up
      version control and creating a super bare-bones prototype: just a cube
      you can move around in a graybox level.

      The main goals were:
      - Confirm that my engine installs actually work.
      - Make a test scene to try out different camera angles.
      - Explore some simple lighting setups for the future.

      I also wrote down a loose roadmap: prototype → vertical slice → content build.
    `
  },
  {
    id: "post-2",
    title: "Figuring Out My Art Style",
    date: "2025-04-22",
    tags: ["art", "style", "concept"],
    content: `
      I've been stuck between wanting realistic detail and loving the look of
      simplified, stylised characters. I tried painting over some screenshots
      today and discovered that exaggerated shapes plus soft lighting is the
      direction that feels most like "me".

      Biggest lesson: do style tests on small pieces first, not a full scene.
    `
  },
  {
    id: "post-3",
    title: "First Combat Prototype Test",
    date: "2025-05-03",
    tags: ["combat", "prototype", "feedback"],
    content: `
      I put the combat prototype in front of a few friends and watched them play
      without giving instructions. Immediately, I saw the pain points:
      unclear hit feedback, and the camera felt a bit dizzy on lock-on turns.

      I made notes for fixes: heavier screen shake on hits, clearer enemy telegraphs,
      and slightly slower camera rotation while locked on.
    `
  }
];

// MEDIA LIBRARY INDEX
// Update these lists to match your real files on disk.
const mediaIndex = {
  images: [
    {
      path: "assets/images/hero-character-full.jpg", // REPLACE
      description: "Hero character main render (1920x1080). Used in portfolio modal."
    },
    {
      path: "assets/images/forest-env-full.jpg", // REPLACE
      description: "Forest environment wide shot. Used in portfolio modal."
    },
    {
      path: "assets/images/hero-character-thumb.jpg", // REPLACE
      description: "Thumbnail for hero character project (approx 600x340)."
    },
    {
      path: "assets/images/forest-env-thumb.jpg", // REPLACE
      description: "Thumbnail for environment project (approx 600x340)."
    },
    {
      path: "assets/images/combat-proto-thumb.jpg", // REPLACE
      description: "Thumbnail for combat prototype project."
    }
  ],
  sprites: [
    {
      path: "assets/sprites/main-character-idle.png", // REPLACE
      description: "Sprite sheet – main character idle animation."
    },
    {
      path: "assets/sprites/coin-spin.png", // REPLACE
      description: "UI/collectible coin spin animation sprite sheet."
    }
  ],
  video: [
    {
      path: "assets/video/combat-demo.mp4", // REPLACE
      description: "Short combat demo reel used in portfolio modal."
    }
  ],
  audio: [
    {
      path: "assets/audio/main-theme.mp3", // REPLACE
      description: "Main menu theme track."
    },
    {
      path: "assets/audio/jump-sfx.wav", // REPLACE
      description: "Jump sound effect."
    }
  ]
};

// TIMELINE EXAMPLE (auto-populates dashboard)
const timelineItems = [
  {
    date: "2025-03-14",
    title: "Project Initialized",
    note: "Created first prototype scene & set up Git."
  },
  {
    date: "2025-04-02",
    title: "First Character Sculpt",
    note: "Blocked out main hero and tested facial expressions."
  },
  {
    date: "2025-05-03",
    title: "Combat Prototype Milestone",
    note: "Core combo system & dodging implemented."
  },
  {
    date: "2025-06-30",
    title: "Environment Style Locked",
    note: "Decided on hand-painted, stylised look."
  }
];

// PLANNER STORAGE KEY
const STORAGE_KEYS = {
  settings: "ccc-settings-v1",
  notes: "ccc-notes-v1",
  tasks: "ccc-tasks-v1"
};

// ===========================
// INIT
// ===========================
document.addEventListener("DOMContentLoaded", () => {
  cacheElements();
  attachNavHandlers();
  renderMetrics();
  renderTimeline();
  renderPortfolio();
  renderBlog();
  renderMediaLibrary();
  initSettingsFromStorage();
  initNotesFromStorage();
  initTasksFromStorage();
  attachGlobalSearch();
  attachPlannerHandlers();
  attachModalHandlers();
  attachSettingsHandlers();
});

// ===========================
// ELEMENT CACHE
// ===========================
const els = {};

function cacheElements() {
  els.navLinks = document.querySelectorAll(".nav-link");
  els.sections = document.querySelectorAll(".section");
  els.pageTitle = document.getElementById("pageTitle");

  els.metricProjects = document.getElementById("metricProjects");
  els.metricPosts = document.getElementById("metricPosts");
  els.metricMedia = document.getElementById("metricMedia");
  els.focusModeStatus = document.getElementById("focusModeStatus");

  els.timelineList = document.getElementById("timelineList");
  els.quickNotes = document.getElementById("quickNotes");

  els.portfolioFilters = document.getElementById("portfolioFilters");
  els.portfolioGrid = document.getElementById("portfolioGrid");
  els.portfolioSearchInput = document.getElementById("portfolioSearchInput");

  els.blogList = document.getElementById("blogList");
  els.blogSearchInput = document.getElementById("blogSearchInput");
  els.blogTagFilter = document.getElementById("blogTagFilter");

  els.mediaImages = document.getElementById("mediaImages");
  els.mediaSprites = document.getElementById("mediaSprites");
  els.mediaVideo = document.getElementById("mediaVideo");
  els.mediaAudio = document.getElementById("mediaAudio");

  els.newTaskTitle = document.getElementById("newTaskTitle");
  els.addTaskButton = document.getElementById("addTaskButton");
  els.plannerTodo = document.getElementById("plannerTodo");
  els.plannerDoing = document.getElementById("plannerDoing");
  els.plannerDone = document.getElementById("plannerDone");

  els.themeToggle = document.getElementById("themeToggle");
  els.settingsThemeToggle = document.getElementById("settingsThemeToggle");
  els.accentColorPicker = document.getElementById("accentColorPicker");
  els.fontSizeSlider = document.getElementById("fontSizeSlider");
  els.fontSizeValue = document.getElementById("fontSizeValue");
  els.focusModeCheckbox = document.getElementById("focusModeCheckbox");
  els.resetAllButton = document.getElementById("resetAllButton");

  els.globalSearchInput = document.getElementById("globalSearchInput");
  els.globalSearchClear = document.getElementById("globalSearchClear");

  els.modalOverlay = document.getElementById("modalOverlay");
  els.modalClose = document.getElementById("modalClose");
  els.modalContent = document.getElementById("modalContent");
}

// ===========================
// NAV / ROUTING
// ===========================
function attachNavHandlers() {
  els.navLinks.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.section;
      showSection(target);
      els.navLinks.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  // Theme toggle in sidebar
  els.themeToggle.addEventListener("click", toggleTheme);
}

function showSection(sectionName) {
  els.sections.forEach((sec) => {
    if (sec.id === `section-${sectionName}`) {
      sec.classList.add("active");
    } else {
      sec.classList.remove("active");
    }
  });

  // Set title text
  const nameMap = {
    dashboard: "Dashboard",
    portfolio: "Portfolio",
    blog: "Blog",
    media: "Media Library",
    planner: "Project Planner",
    settings: "Settings"
  };
  els.pageTitle.textContent = nameMap[sectionName] || "Dashboard";
}

// ===========================
// METRICS + TIMELINE
// ===========================
function renderMetrics() {
  els.metricProjects.textContent = portfolioProjects.length;
  els.metricPosts.textContent = blogPosts.length;
  const totalMedia =
    mediaIndex.images.length +
    mediaIndex.sprites.length +
    mediaIndex.video.length +
    mediaIndex.audio.length;
  els.metricMedia.textContent = totalMedia;

  const focusOn = document.body.classList.contains("focus-mode");
  els.focusModeStatus.textContent = focusOn ? "ON" : "OFF";
}

function renderTimeline() {
  els.timelineList.innerHTML = "";
  timelineItems.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div class="timeline-title">${item.title}</div>
      <div class="timeline-meta">${item.date} — ${item.note}</div>
    `;
    els.timelineList.appendChild(li);
  });
}

// ===========================
// NOTES
// ===========================
function initNotesFromStorage() {
  const saved = localStorage.getItem(STORAGE_KEYS.notes);
  if (saved) {
    els.quickNotes.value = saved;
  }
  els.quickNotes.addEventListener("input", () => {
    localStorage.setItem(STORAGE_KEYS.notes, els.quickNotes.value);
  });
}

// ===========================
// PORTFOLIO
// ===========================
let activePortfolioFilter = "All";

function renderPortfolio() {
  // Build category list
  const categories = Array.from(
    new Set(portfolioProjects.map((p) => p.category))
  );
  const allCats = ["All", ...categories];

  els.portfolioFilters.innerHTML = "";
  allCats.forEach((cat) => {
    const btn = document.createElement("button");
    btn.className = "chip" + (cat === activePortfolioFilter ? " active" : "");
    btn.textContent = cat;
    btn.addEventListener("click", () => {
      activePortfolioFilter = cat;
      renderPortfolio();
    });
    els.portfolioFilters.appendChild(btn);
  });

  // Render cards
  const search = (els.portfolioSearchInput.value || "").toLowerCase();
  els.portfolioGrid.innerHTML = "";
  portfolioProjects
    .filter((p) => {
      const matchesCategory =
        activePortfolioFilter === "All" ||
        p.category === activePortfolioFilter;
      const matchesSearch =
        p.title.toLowerCase().includes(search) ||
        p.tags.some((t) => t.toLowerCase().includes(search));
      return matchesCategory && matchesSearch;
    })
    .forEach((project) => {
      const card = document.createElement("article");
      card.className = "card portfolio-card";
      card.innerHTML = `
        <div class="portfolio-thumb">
          <img src="${project.thumbnail}" alt="Thumbnail for ${project.title}">
          <span class="portfolio-thumb-label">${project.category}</span>
        </div>
        <h3 class="portfolio-title">${project.title}</h3>
        <div class="portfolio-meta">${project.date} · ${
        project.summary
      }</div>
        <div class="tag-row">
          ${project.tags
            .map((tag) => `<span class="tag">#${escapeHtml(tag)}</span>`)
            .join("")}
        </div>
        <div class="card-actions">
          <button class="button" data-project-id="${
            project.id
          }">View Details</button>
        </div>
      `;
      card
        .querySelector("button")
        .addEventListener("click", () => openProjectModal(project));
      els.portfolioGrid.appendChild(card);
    });

  // Search handler
  els.portfolioSearchInput.removeEventListener("input", portfolioSearchHandler);
  els.portfolioSearchInput.addEventListener("input", portfolioSearchHandler);
}

function portfolioSearchHandler() {
  renderPortfolio();
}

function openProjectModal(project) {
  els.modalContent.innerHTML = `
    <h2 class="modal-title">${project.title}</h2>
    <p class="modal-meta">${project.date} · ${project.category}</p>
    <div class="modal-body">
      <p>${project.description.trim()}</p>
      <p><strong>Tags:</strong> ${project.tags
        .map((t) => `#${escapeHtml(t)}`)
        .join(" ")}</p>
      <p><strong>Hero media note:</strong> ${
        project.heroMedia.note
      } (Replace src in <code>script.js</code> for project <code>${
    project.id
  }</code>.)</p>
      ${
        project.heroMedia.type === "video"
          ? `
          <div class="modal-image-wrapper">
            <video src="${project.heroMedia.src}" controls></video>
          </div>
        `
          : `
          <div class="modal-image-wrapper">
            <img src="${project.heroMedia.src}" alt="Hero media for ${
              project.title
            }">
          </div>
        `
      }
    </div>
  `;
  showModal();
}

// ===========================
// BLOG
// ===========================
function renderBlog() {
  // Build tag filter options
  const allTags = new Set();
  blogPosts.forEach((post) => post.tags.forEach((t) => allTags.add(t)));
  const existingOptions = Array.from(els.blogTagFilter.options).map(
    (o) => o.value
  );
  allTags.forEach((tag) => {
    if (!existingOptions.includes(tag)) {
      const opt = document.createElement("option");
      opt.value = tag;
      opt.textContent = `#${tag}`;
      els.blogTagFilter.appendChild(opt);
    }
  });

  const search = (els.blogSearchInput.value || "").toLowerCase();
  const selectedTag = els.blogTagFilter.value;

  els.blogList.innerHTML = "";
  blogPosts
    .filter((post) => {
      const matchesTag =
        selectedTag === "all" || post.tags.includes(selectedTag);
      const matchesSearch =
        post.title.toLowerCase().includes(search) ||
        post.content.toLowerCase().includes(search);
      return matchesTag && matchesSearch;
    })
    .forEach((post) => {
      const card = document.createElement("article");
      card.className = "blog-card";
      const excerpt = post.content.trim().slice(0, 200) + "... read more";
      card.innerHTML = `
        <div class="blog-title-row">
          <h3 class="blog-title">${post.title}</h3>
          <span class="blog-meta">${post.date}</span>
        </div>
        <p class="blog-excerpt">${escapeHtml(excerpt)}</p>
        <div class="blog-tags">
          ${post.tags
            .map((tag) => `<span class="tag">#${escapeHtml(tag)}</span>`)
            .join("")}
        </div>
        <div class="card-actions">
          <button class="button" data-post-id="${
            post.id
          }">Open Full Post</button>
        </div>
      `;
      card
        .querySelector("button")
        .addEventListener("click", () => openBlogModal(post));
      els.blogList.appendChild(card);
    });

  els.blogSearchInput.removeEventListener("input", blogSearchHandler);
  els.blogSearchInput.addEventListener("input", blogSearchHandler);
  els.blogTagFilter.removeEventListener("change", blogSearchHandler);
  els.blogTagFilter.addEventListener("change", blogSearchHandler);
}

function blogSearchHandler() {
  renderBlog();
}

function openBlogModal(post) {
  els.modalContent.innerHTML = `
    <h2 class="modal-title">${post.title}</h2>
    <p class="modal-meta">${post.date} · ${post.tags
    .map((t) => `#${escapeHtml(t)}`)
    .join(" ")}</p>
    <div class="modal-body">
      <p>${post.content.trim().replace(/\n\s*\n/g, "</p><p>")}</p>
      <p><em>Edit this post in <code>script.js</code> under blogPosts → id "${
        post.id
      }".</em></p>
    </div>
  `;
  showModal();
}

// ===========================
// MEDIA LIBRARY
// ===========================
function renderMediaLibrary() {
  renderMediaList(els.mediaImages, mediaIndex.images);
  renderMediaList(els.mediaSprites, mediaIndex.sprites);
  renderMediaList(els.mediaVideo, mediaIndex.video);
  renderMediaList(els.mediaAudio, mediaIndex.audio);
}

function renderMediaList(container, items) {
  container.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `<code>${item.path}</code> – ${escapeHtml(
      item.description
    )}`;
    container.appendChild(li);
  });
}

// ===========================
// PLANNER (Tasks)
// ===========================
let tasks = [];

function initTasksFromStorage() {
  const saved = localStorage.getItem(STORAGE_KEYS.tasks);
  if (saved) {
    tasks = JSON.parse(saved);
  } else {
    // Starter tasks
    tasks = [
      {
        id: "task-1",
        title: "Block out main menu UI layout",
        status: "todo"
      },
      {
        id: "task-2",
        title: "Polish hero run cycle animation",
        status: "doing"
      },
      {
        id: "task-3",
        title: "Record combat prototype capture",
        status: "done"
      }
    ];
  }
  renderTasks();
}

function attachPlannerHandlers() {
  els.addTaskButton.addEventListener("click", () => {
    const title = els.newTaskTitle.value.trim();
    if (!title) return;
    const newTask = {
      id: `task-${Date.now()}`,
      title,
      status: "todo"
    };
    tasks.push(newTask);
    els.newTaskTitle.value = "";
    saveTasks();
    renderTasks();
  });

  // Allow Enter key to add task
  els.newTaskTitle.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      els.addTaskButton.click();
    }
  });
}

function renderTasks() {
  els.plannerTodo.innerHTML = "";
  els.plannerDoing.innerHTML = "";
  els.plannerDone.innerHTML = "";

  tasks.forEach((task) => {
    const card = document.createElement("div");
    card.className = "task-card";
    card.draggable = true;
    card.dataset.taskId = task.id;
    card.innerHTML = `
      <div class="task-title">${escapeHtml(task.title)}</div>
      <button class="task-delete" title="Delete task">&times;</button>
    `;

    card
      .querySelector(".task-delete")
      .addEventListener("click", () => deleteTask(task.id));

    // Drag handlers
    card.addEventListener("dragstart", taskDragStart);
    card.addEventListener("dragend", taskDragEnd);

    if (task.status === "todo") {
      els.plannerTodo.appendChild(card);
    } else if (task.status === "doing") {
      els.plannerDoing.appendChild(card);
    } else {
      els.plannerDone.appendChild(card);
    }
  });

  // Dropzones
  [els.plannerTodo, els.plannerDoing, els.plannerDone].forEach((zone) => {
    zone.addEventListener("dragover", taskDragOver);
    zone.addEventListener("drop", taskDrop);
    zone.addEventListener("dragleave", taskDragLeave);
  });

  saveTasks();
}

function deleteTask(id) {
  tasks = tasks.filter((t) => t.id !== id);
  saveTasks();
  renderTasks();
}

function saveTasks() {
  localStorage.setItem(STORAGE_KEYS.tasks, JSON.stringify(tasks));
}

// Drag and drop handlers
let draggedTaskId = null;

function taskDragStart(e) {
  draggedTaskId = e.currentTarget.dataset.taskId;
  e.dataTransfer.effectAllowed = "move";
  setTimeout(() => {
    e.currentTarget.style.opacity = "0.4";
  }, 0);
}

function taskDragEnd(e) {
  e.currentTarget.style.opacity = "";
  draggedTaskId = null;
}

function taskDragOver(e) {
  e.preventDefault();
  e.currentTarget.style.background = "rgba(56, 189, 248, 0.08)";
}

function taskDrop(e) {
  e.preventDefault();
  e.currentTarget.style.background = "rgba(15, 23, 42, 0.65)";
  const status = e.currentTarget.parentElement.dataset.status || "todo";
  tasks = tasks.map((t) =>
    t.id === draggedTaskId ? { ...t, status } : t
  );
  saveTasks();
  renderTasks();
}

function taskDragLeave(e) {
  e.currentTarget.style.background = "rgba(15, 23, 42, 0.65)";
}

// ===========================
// SETTINGS
// ===========================
let settings = {
  theme: "dark",
  accent: "#38bdf8",
  fontSize: 16,
  focusMode: false
};

function initSettingsFromStorage() {
  const saved = localStorage.getItem(STORAGE_KEYS.settings);
  if (saved) {
    settings = { ...settings, ...JSON.parse(saved) };
  }

  // Apply theme
  document.documentElement.setAttribute("data-theme", settings.theme);

  // Apply accent color
  document.documentElement.style.setProperty("--accent", settings.accent);
  document.documentElement.style.setProperty(
    "--accent-soft",
    hexToSoft(settings.accent)
  );
  if (els.accentColorPicker) {
    els.accentColorPicker.value = settings.accent;
  }

  // Apply font size
  document.documentElement.style.setProperty(
    "--font-size-base",
    settings.fontSize + "px"
  );
  if (els.fontSizeSlider) {
    els.fontSizeSlider.value = settings.fontSize;
    els.fontSizeValue.textContent = settings.fontSize;
  }

  // Focus mode
  if (settings.focusMode) {
    document.body.classList.add("focus-mode");
  } else {
    document.body.classList.remove("focus-mode");
  }
  if (els.focusModeCheckbox) {
    els.focusModeCheckbox.checked = settings.focusMode;
  }

  renderMetrics(); // Update focus mode metric
}

function attachSettingsHandlers() {
  if (els.settingsThemeToggle) {
    els.settingsThemeToggle.addEventListener("click", toggleTheme);
  }

  if (els.accentColorPicker) {
    els.accentColorPicker.addEventListener("change", (e) => {
      settings.accent = e.target.value;
      document.documentElement.style.setProperty("--accent", settings.accent);
      document.documentElement.style.setProperty(
        "--accent-soft",
        hexToSoft(settings.accent)
      );
      saveSettings();
    });
  }

  if (els.fontSizeSlider) {
    els.fontSizeSlider.addEventListener("input", (e) => {
      const size = parseInt(e.target.value, 10);
      settings.fontSize = size;
      els.fontSizeValue.textContent = size;
      document.documentElement.style.setProperty(
        "--font-size-base",
        size + "px"
      );
      saveSettings();
    });
  }

  if (els.focusModeCheckbox) {
    els.focusModeCheckbox.addEventListener("change", (e) => {
      settings.focusMode = e.target.checked;
      if (settings.focusMode) {
        document.body.classList.add("focus-mode");
      } else {
        document.body.classList.remove("focus-mode");
      }
      saveSettings();
      renderMetrics();
    });
  }

  if (els.resetAllButton) {
    els.resetAllButton.addEventListener("click", () => {
      if (
        confirm(
          "Reset everything? This clears settings, notes, and tasks stored in this browser."
        )
      ) {
        localStorage.removeItem(STORAGE_KEYS.settings);
        localStorage.removeItem(STORAGE_KEYS.notes);
        localStorage.removeItem(STORAGE_KEYS.tasks);
        location.reload();
      }
    });
  }
}

function toggleTheme() {
  settings.theme = settings.theme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", settings.theme);
  saveSettings();
}

function saveSettings() {
  localStorage.setItem(STORAGE_KEYS.settings, JSON.stringify(settings));
}

// Convert hex accent to softer rgba-ish string (rough fake)
function hexToSoft(hex) {
  // very rough conversion just to generate a soft background color
  return "rgba(56,189,248,0.1)";
}

// ===========================
// GLOBAL SEARCH (Header)
// ===========================
function attachGlobalSearch() {
  if (!els.globalSearchInput) return;

  els.globalSearchInput.addEventListener("input", () => {
    const query = els.globalSearchInput.value.trim().toLowerCase();
    if (!query) {
      renderPortfolio();
      renderBlog();
      return;
    }

    // Switch to dashboard or keep section? We'll just live-filter on current lists.
    // Portfolio search
    els.portfolioSearchInput.value = query;
    renderPortfolio();

    // Blog search
    els.blogSearchInput.value = query;
    renderBlog();
  });

  els.globalSearchClear.addEventListener("click", () => {
    els.globalSearchInput.value = "";
    els.portfolioSearchInput.value = "";
    els.blogSearchInput.value = "";
    renderPortfolio();
    renderBlog();
  });
}

// ===========================
// MODAL HANDLING
// ===========================
function attachModalHandlers() {
  els.modalClose.addEventListener("click", hideModal);
  els.modalOverlay.addEventListener("click", (e) => {
    if (e.target === els.modalOverlay) hideModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") hideModal();
  });
}

function showModal() {
  els.modalOverlay.classList.remove("hidden");
}

function hideModal() {
  els.modalOverlay.classList.add("hidden");
}

// ===========================
// UTILS
// ===========================
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
