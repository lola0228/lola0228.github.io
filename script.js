"use strict";

(() => {
  const content = window.siteContent;
  if (!content) return;

  // Use textContent, not HTML, so edited text cannot accidentally insert markup.
  document.querySelectorAll("[data-content]").forEach((element) => {
    const value = element.dataset.content.split(".").reduce((object, key) => object?.[key], content);
    if (typeof value === "string") element.textContent = value;
  });
  document.title = content.site.title;
  document.querySelector('meta[name="description"]').content = content.site.description;
  document.getElementById("year").textContent = new Date().getFullYear();
  const heroImage = document.getElementById("hero-image");
  heroImage.src = content.hero.image;
  heroImage.alt = content.hero.imageAlt;

  const makeElement = (tag, className, text) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  };

  const about = document.getElementById("about-paragraphs");
  about.replaceChildren(...content.about.paragraphs.map((text) => makeElement("p", "", text)));

  const notes = document.getElementById("notes-grid");
  content.notes.items.forEach((note, index) => {
    const article = makeElement("article", "note-card");
    const top = makeElement("div", "note-top");
    top.append(makeElement("span", "eyebrow", note.label), makeElement("span", "note-number", String(index + 1).padStart(2, "0")));
    article.append(top, makeElement("h3", "", note.title), makeElement("p", "", note.text));
    notes.append(article);
  });

  const email = content.contact.email.trim();
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    const emailLink = document.getElementById("contact-email");
    emailLink.href = `mailto:${encodeURIComponent(email)}`;
    emailLink.hidden = false;
    document.getElementById("contact-placeholder").hidden = true;
  }

  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("main-nav");
  menuToggle.hidden = false;
  const closeMenu = () => {
    menuToggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  };
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") !== "true";
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    nav.classList.toggle("is-open", isOpen);
  });
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
      closeMenu();
      menuToggle.focus();
    }
  });
  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
  });
  window.matchMedia("(min-width: 761px)").addEventListener("change", closeMenu);

  const gallery = document.getElementById("gallery");
  const filters = document.getElementById("gallery-filters");
  const count = document.getElementById("gallery-count");
  const dialog = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  let visibleItems = content.gallery;
  let currentIndex = 0;
  let returnFocus = null;

  const showPicture = (index) => {
    currentIndex = (index + visibleItems.length) % visibleItems.length;
    const item = visibleItems[currentIndex];
    lightboxImage.src = item.image;
    lightboxImage.alt = item.alt;
    document.getElementById("lightbox-title").textContent = item.title;
    document.getElementById("lightbox-caption").textContent = item.caption;
    document.getElementById("lightbox-prev").disabled = visibleItems.length < 2;
    document.getElementById("lightbox-next").disabled = visibleItems.length < 2;
  };
  const openPicture = (index, trigger) => {
    returnFocus = trigger;
    showPicture(index);
    dialog.showModal();
    document.body.classList.add("dialog-open");
    document.getElementById("lightbox-close").focus();
  };

  const renderGallery = (category = null) => {
    visibleItems = category === null ? content.gallery : content.gallery.filter((item) => item.category === category);
    gallery.replaceChildren();
    visibleItems.forEach((item, index) => {
      const card = makeElement("article", "gallery-card");
      const button = makeElement("button", "gallery-image-button");
      button.type = "button";
      button.setAttribute("aria-label", `View ${item.title}`);
      const image = makeElement("img");
      image.src = item.image;
      image.alt = item.alt;
      image.width = 800;
      image.height = 1000;
      image.loading = "lazy";
      image.decoding = "async";
      const arrow = makeElement("span", "gallery-arrow", "↗");
      arrow.setAttribute("aria-hidden", "true");
      button.append(image, arrow);
      button.addEventListener("click", () => openPicture(index, button));
      const details = makeElement("div", "gallery-details");
      details.append(makeElement("h3", "", item.title), makeElement("span", "", item.category));
      card.append(button, details);
      gallery.append(card);
    });
    count.textContent = `${String(visibleItems.length).padStart(2, "0")} ${visibleItems.length === 1 ? "MOMENT" : "MOMENTS"}`;
    if (!visibleItems.length) gallery.append(makeElement("p", "empty-state", "A little room for what’s coming next. Pictures will appear here soon."));
  };

  const categories = [null, ...new Set(content.gallery.map((item) => item.category))];
  categories.forEach((category) => {
    const button = makeElement("button", "filter-button", category === null ? "All moments" : category);
    button.type = "button";
    button.setAttribute("aria-pressed", String(category === null));
    button.addEventListener("click", () => {
      filters.querySelectorAll("button").forEach((filter) => filter.setAttribute("aria-pressed", String(filter === button)));
      renderGallery(category);
    });
    filters.append(button);
  });
  renderGallery();

  document.getElementById("lightbox-close").addEventListener("click", () => dialog.close());
  document.getElementById("lightbox-prev").addEventListener("click", () => showPicture(currentIndex - 1));
  document.getElementById("lightbox-next").addEventListener("click", () => showPicture(currentIndex + 1));
  dialog.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      dialog.close();
    }
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      showPicture(currentIndex + (event.key === "ArrowLeft" ? -1 : 1));
    }
  });
  dialog.addEventListener("click", (event) => {
    const bounds = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
  });
  dialog.addEventListener("close", () => {
    document.body.classList.remove("dialog-open");
    returnFocus?.focus();
  });
})();