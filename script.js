// ===============================
// DARK / LIGHT MODE
// ===============================

function toggleMode() {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
}


// Load saved theme when page opens
document.addEventListener("DOMContentLoaded", function () {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
    }


    // ===============================
    // ACTIVE NAVBAR LINK
    // ===============================

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", function () {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 160;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });

        navLinks.forEach(function (link) {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                "#" + currentSection
            ) {
                link.classList.add("active");
            }

        });

    });


    // ===============================
    // SCROLL REVEAL ANIMATION
    // ===============================

    const revealElements = document.querySelectorAll(
        ".card, .project-card, .about-container, .contact-form"
    );

    revealElements.forEach(function (element) {
        element.classList.add("reveal");
    });


    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(function (element) {
        observer.observe(element);
    });

});


// ===============================
// ARDUINO PROJECT MODAL
// ===============================

function openArduinoProject() {

    const modal = document.getElementById("arduinoModal");

    if (modal) {
        modal.style.display = "block";

        document.body.style.overflow = "hidden";
    }

}


function closeArduinoProject() {

    const modal = document.getElementById("arduinoModal");

    if (modal) {

        modal.style.display = "none";

        document.body.style.overflow = "auto";


        // Stop the video when modal closes
        const video = modal.querySelector("video");

        if (video) {
            video.pause();
        }

    }

}


// Close modal when clicking outside it
window.addEventListener("click", function (event) {

    const modal = document.getElementById("arduinoModal");

    if (modal && event.target === modal) {
        closeArduinoProject();
    }

});


// Close modal using Escape key
document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closeArduinoProject();
    }

});