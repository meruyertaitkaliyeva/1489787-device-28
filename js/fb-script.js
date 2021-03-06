var feedbackLink = document.querySelector(".contacts-button");
var feedbackModal = document.querySelector(".modal-feedback");
var modalClose = feedbackModal.querySelector(".modal-close-button");
var feedbackForm = feedbackModal.querySelector(".feedback");
var feedbackName = feedbackModal.querySelector(".feedback-name");
var feedbackEmail = feedbackModal.querySelector(".feedback-email");
var feedbackText = feedbackModal.querySelector(".feedback-textarea");
var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try {
    storageName = localStorage.getItem("name");
    storageEmail = localStorage.getItem("email");
} catch (err) {
    isStorageSupport = false;
}

feedbackLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackModal.classList.add("modal-show");
    if (storageName) {
        feedbackName.value = storageName;
        feedbackEmail.focus();
    }
    if (storageEmail) {
        feedbackEmail.value = storageEmail;
        feedbackText.focus();
    } else {
        feedbackName.focus();
    }
});

feedbackForm.addEventListener("submit", function (evt) {
    if (!feedbackName.value || !feedbackEmail.value || !feedbackText.value) {
        evt.preventDefault();
        feedbackModal.classList.remove("modal-error");
        feedbackModal.offsetWidth = feedbackModal.offsetWidth;
        feedbackModal.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("name", feedbackName.value);
            localStorage.setItem("email", feedbackEmail.value);
        }
    }
});

modalClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackModal.classList.remove("modal-show");
    feedbackModal.classList.remove("modal-error");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (feedbackModal.classList.contains("modal-show")) {
            evt.preventDefault();
            feedbackModal.classList.remove("modal-show");
            feedbackModal.classList.remove("modal-error");
        }
    }
});
