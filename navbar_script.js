document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");

    menuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Close menu when a link is clicked
    const links = document.querySelectorAll(".nav-links a");
    links.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
        });
    });
});
