const projectCards = document.querySelectorAll(".project-card");
const modal = document.querySelector("#project-modal");
const modalTitle = document.querySelector("#modal-title");
const modalImage = document.querySelector("#modal-image");
const modalDescription = document.querySelector("#modal-description");
const closeButton = document.querySelector(".modal-close");
const modalBg = document.querySelector(".modal-bg");
const revealSteps = document.querySelectorAll(".reveal-step");

projectCards.forEach(function(card) {
  card.addEventListener("click", function() {
    modalTitle.textContent = card.dataset.title;
    modalImage.src = card.dataset.image;
    modalImage.alt = card.dataset.title;
    modalDescription.textContent = card.dataset.description;

    modal.classList.add("open");

    revealSteps.forEach(function(step) {
      step.classList.remove("visible");
    });

    revealSteps.forEach(function(step, index) {
      setTimeout(function() {
        step.classList.add("visible");
      }, index * 200);
    });
  });
});

function closeModal() {
  if (modal) {
    modal.classList.remove("open");
  }
}

if (closeButton) {
  closeButton.addEventListener("click", closeModal);
}

if (modalBg) {
  modalBg.addEventListener("click", closeModal);
}

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeModal();
  }
});

const contactForm = document.querySelector(".contact-form");
const formMessage = document.querySelector("#form-message");

if (contactForm) {
  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    formMessage.textContent = "message ready. connect this form before final submission.";
    contactForm.reset();
  });
}