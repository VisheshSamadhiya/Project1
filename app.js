// ===========================================
// Loader
// ===========================================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }, 800);

});

// ===========================================
// Mobile Menu
// ===========================================

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

});

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});

// ===========================================
// Dark Mode
// ===========================================

const themeBtn = document.getElementById("themeBtn");

if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark");

    themeBtn.innerHTML =
    '<i class="fa-solid fa-sun"></i>';

}

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        localStorage.setItem("theme","dark");

        themeBtn.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

    }

    else{

        localStorage.setItem("theme","light");

        themeBtn.innerHTML =
        '<i class="fa-solid fa-moon"></i>';

    }

});

// ===========================================
// Fade Animation
// ===========================================

const fadeElements = document.querySelectorAll(

".skill-card,.project-card,.about,.gallery img,#contact form"

);

fadeElements.forEach(el=>{

    el.classList.add("fade");

});

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

    threshold:.2

});

fadeElements.forEach(el=>{

    observer.observe(el);

});

// ===========================================
// Counter Animation
// ===========================================

const counters=document.querySelectorAll(".about-stats h2");

const counterObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=parseInt(counter.innerText);

let current=0;

const increment=Math.ceil(target/80);

function update(){

if(current<target){

current+=increment;

counter.innerText=current+"+";

requestAnimationFrame(update);

}

else{

counter.innerText=target+"+";

}

}

update();

counterObserver.unobserve(counter);

}

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});// ===========================================
// Gallery Popup
// ===========================================

const galleryImages = document.querySelectorAll(".gallery img");

const popup = document.createElement("div");

popup.className = "image-popup";

const popupImage = document.createElement("img");

popup.appendChild(popupImage);

document.body.appendChild(popup);

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        popup.classList.add("active");

        popupImage.src = img.src;

    });

});

popup.addEventListener("click", () => {

    popup.classList.remove("active");

});

// ===========================================
// Back To Top Button
// ===========================================

const topBtn = document.createElement("button");

topBtn.id = "topBtn";

topBtn.innerHTML = "↑";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ===========================================
// Formspree Contact Form
// ===========================================

const contactForm = document.getElementById("contactForm");

const status = document.getElementById("status");

contactForm.addEventListener("submit", async function (e) {

    e.preventDefault();

    const submitBtn = contactForm.querySelector("button");

    submitBtn.disabled = true;

    submitBtn.innerHTML = "Sending...";

    status.innerHTML = "";

    try {

        const response = await fetch("https://formspree.io/f/xaqkllop", {

            method: "POST",

            body: new FormData(contactForm),

            headers: {

                Accept: "application/json"

            }

        });

        if (response.ok) {

            status.style.color = "#16a34a";

            status.innerHTML =
                "✅ Thank you! Your message has been sent successfully.";

            contactForm.reset();

        } else {

            status.style.color = "#dc2626";

            status.innerHTML =
                "❌ Failed to send your message.";

        }

    }

    catch (error) {

        console.error(error);

        status.style.color = "#dc2626";

        status.innerHTML =
            "⚠ Unable to connect to Formspree.";

    }

    submitBtn.disabled = false;

    submitBtn.innerHTML = "Send Message";

});// ===========================================
// Smooth Scrolling
// ===========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ===========================================
// Active Navigation Link
// ===========================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ===========================================
// Learn More Buttons
// ===========================================

document.querySelectorAll(".learnBtn").forEach(button => {

    button.addEventListener("click", () => {

        alert("More features will be added soon!");

    });

});

// ===========================================
// Typing Effect
// ===========================================

const heroHeading = document.querySelector(".hero h1");

if (heroHeading) {

    const text = heroHeading.innerText;

    heroHeading.innerText = "";

    let index = 0;

    function typeWriter() {

        if (index < text.length) {

            heroHeading.innerHTML += text.charAt(index);

            index++;

            setTimeout(typeWriter, 60);

        }

    }

    setTimeout(typeWriter, 500);

}

// ===========================================
// Console Welcome Message
// ===========================================

console.log("%cWelcome to MyWebsite 🚀", "color:#2563eb;font-size:20px;font-weight:bold;");
console.log("Portfolio developed with HTML, CSS and JavaScript.");