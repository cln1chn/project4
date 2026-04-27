// quiet interaction portfolio javascript

const modal = document.querySelector("#project-modal");
const modalTitle = document.querySelector("#modal-title");
const modalImage = document.querySelector("#modal-image");
const modalDescription = document.querySelector("#modal-description");
const revealSteps = document.querySelectorAll(".reveal-step");
const projectCards = document.querySelectorAll(".project-card");
const closeButtons = document.querySelectorAll("[data-close-modal]");
const contactForm = document.querySelector("#contact-form");
const formNote = document.querySelector("#form-note");

// opens the project modal and reveals title, image, and paragraph in order
function openProjectModal(card) {
  if (!modal) return;

  modalTitle.textContent = card.dataset.title || "project title";
  modalImage.src = card.dataset.image || "";
  modalImage.alt = card.dataset.alt || "project image";
  modalDescription.textContent = card.dataset.description || "project description goes here.";

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  // reset previous reveal state
  revealSteps.forEach((step) => {
    step.classList.remove("is-visible");
  });

  // staged reveal: title first, image second, text third
  revealSteps.forEach((step, index) => {
    setTimeout(() => {
      step.classList.add("is-visible");
    }, index * 180);
  });

  const closeButton = modal.querySelector(".modal-close");
  if (closeButton) closeButton.focus();
}

function closeProjectModal() {
  if (!modal) return;

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";

  revealSteps.forEach((step) => {
    step.classList.remove("is-visible");
  });
}

projectCards.forEach((card) => {
  card.addEventListener("click", () => openProjectModal(card));
});

closeButtons.forEach((button) => {
  button.addEventListener("click", closeProjectModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeProjectModal();
  }
});

// simple front-end form feedback
// this does not actually send an email unless you connect it to a service later
if (contactForm && formNote) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formNote.textContent = "message ready. connect this form to a service before final submission.";
    contactForm.reset();
  });
}
