const navbarMenu = document.querySelector(".navbar .links");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn");
const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");

// Function to close the login popup
function closePopup() {
    document.body.classList.remove("show-popup");
}

// Show login popup
showPopupBtn.addEventListener("click", () => {
    document.body.classList.add("show-popup");
});

// Hide login popup
hidePopupBtn.addEventListener("click", () => {
    closePopup();
});

// Show or hide signup form
signupLoginLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === 'signup-link' ? 'add' : 'remove']("show-signup");
    });
});

// Listen for login success message from server
window.addEventListener('message', function(event) {
    if (event.data === 'loginSuccess') {
        closePopup();
    }
});
