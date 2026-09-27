/* ================= MOBILE MENU ================= */

const menuToggle =
    document.querySelector(".menu-toggle");

const nav =
    document.querySelector(".nav");

const navLinks =
    document.querySelectorAll(".nav a");


menuToggle.addEventListener("click", () => {

    nav.classList.toggle("open");

});


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("open");

    });

});



/* ================= CURRENT YEAR ================= */

document.getElementById("year").textContent =
    new Date().getFullYear();



/* ================= CONTACT FORM ================= */

const form =
    document.getElementById("contactForm");

const status =
    document.getElementById("formStatus");


form.addEventListener("submit", function(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (!name || !email || !message) {

        status.textContent =
            "Please complete all fields.";

        return;

    }


    /*
        This currently opens the visitor's
        email application.

        Later we can connect this form to
        Formspree, EmailJS, or your own backend.
    */


    const subject =
        encodeURIComponent(
            `Portfolio message from ${name}`
        );


    const body =
        encodeURIComponent(
            `${message}\n\nReply to: ${email}`
        );


    window.location.href =
        `mailto:Lihlombedaniso1@gmail.com?subject=${subject}&body=${body}`;


    status.textContent =
        "Opening your email app...";

});



/* ================= CLEAR FORM ================= */

form.addEventListener("reset", () => {

    status.textContent = "";

});