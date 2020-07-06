var feedbackLink=document.querySelector(".contacts-button"),feedbackModal=document.querySelector(".modal-feedback"),modalClose=feedbackModal.querySelector(".modal-close-button"),feedbackForm=feedbackModal.querySelector(".feedback"),feedbackName=feedbackModal.querySelector(".feedback-name"),feedbackEmail=feedbackModal.querySelector(".feedback-email"),feedbackText=feedbackModal.querySelector(".feedback-textarea"),isStorageSupport=!0,storageName="",storageEmail="";try{storageName=localStorage.getItem("name"),storageEmail=localStorage.getItem("email")}catch(e){isStorageSupport=!1}feedbackLink.addEventListener("click",function(e){e.preventDefault(),feedbackModal.classList.add("modal-show"),storageName&&(feedbackName.value=storageName,feedbackEmail.focus()),storageEmail?(feedbackEmail.value=storageEmail,feedbackText.focus()):feedbackName.focus()}),feedbackForm.addEventListener("submit",function(e){feedbackName.value&&feedbackEmail.value&&feedbackText.value?isStorageSupport&&(localStorage.setItem("name",feedbackName.value),localStorage.setItem("email",feedbackEmail.value)):(e.preventDefault(),feedbackModal.classList.remove("modal-error"),feedbackModal.offsetWidth,feedbackModal.classList.add("modal-error"))}),modalClose.addEventListener("click",function(e){e.preventDefault(),feedbackModal.classList.remove("modal-show"),feedbackModal.classList.remove("modal-error")}),window.addEventListener("keydown",function(e){27===e.keyCode&&feedbackModal.classList.contains("modal-show")&&(e.preventDefault(),feedbackModal.classList.remove("modal-show"),feedbackModal.classList.remove("modal-error"))});var mapLink=document.querySelector(".map-image"),mapModal=document.querySelector(".map-modal"),modalClose=mapModal.querySelector(".modal-close-button");mapLink.addEventListener("click",function(e){e.preventDefault(),mapModal.classList.add("modal-show")}),modalClose.addEventListener("click",function(e){e.preventDefault(),mapModal.classList.remove("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&mapModal.classList.contains("modal-show")&&(e.preventDefault(),mapModal.classList.remove("modal-show"))});