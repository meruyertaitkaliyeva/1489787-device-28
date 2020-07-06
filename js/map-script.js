var mapLink = document.querySelector(".map-image");
var mapModal = document.querySelector(".map-modal");
var modalClose = mapModal.querySelector(".modal-close-button");


mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapModal.classList.add("modal-show");
});

modalClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapModal.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (mapModal.classList.contains("modal-show")) {
            evt.preventDefault();
            mapModal.classList.remove("modal-show");
        }
    }
});