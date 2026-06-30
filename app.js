// ==========================
// Loader
// ==========================

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    setTimeout(() => {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);

    }, 800);
});

// ==========================
// Mobile Menu
// ==========================

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Close menu after clicking a link

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});

// ==========================
// Dark Mode
// ==========================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const icon = themeBtn.querySelector("i");

    if (document.body.classList.contains("dark")) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

});

// ==========================
// FAQ Accordion
// ==========================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".question");

    question.addEventListener("click", () => {

        faqItems.forEach(i => {

            if (i !== item) {
                i.classList.remove("active");
            }

        });

        item.classList.toggle("active");

    });

});

// ==========================
// Counter Animation
// ==========================

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = +counter.dataset.target;

            let current = 0;

            const speed = target / 100;

            const update = () => {

                if (current < target) {

                    current += speed;

                    counter.innerText = Math.ceil(current);

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target;

                }

            };

            update();

            counterObserver.unobserve(counter);

        }

    });

}, {
    threshold: .5
});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

// ==========================
// Scroll Animation
// ==========================

const elements = document.querySelectorAll(
    ".card, .about-container, .gallery img, .faq-item, form"
);

elements.forEach(el => {

    el.classList.add("fade");

});

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: .15
});

elements.forEach(el => observer.observe(el));

// ==========================
// Back To Top Button
// ==========================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

Object.assign(topBtn.style, {

    position: "fixed",
    bottom: "25px",
    right: "25px",
    width: "55px",
    height: "55px",
    borderRadius: "50%",
    border: "none",
    background: "#2563eb",
    color: "#fff",
    fontSize: "22px",
    cursor: "pointer",
    display: "none",
    zIndex: "999"

});

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

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

// ==========================
// Gallery Image Popup
// ==========================

const images = document.querySelectorAll(".gallery img");

const popup = document.createElement("div");

popup.style.cssText = `
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,.85);
display:none;
justify-content:center;
align-items:center;
z-index:9999;
cursor:pointer;
`;

const popupImg = document.createElement("img");

popupImg.style.cssText = `
max-width:90%;
max-height:90%;
border-radius:15px;
box-shadow:0 20px 60px rgba(0,0,0,.5);
`;

popup.appendChild(popupImg);

document.body.appendChild(popup);

images.forEach(img => {

    img.addEventListener("click", () => {

        popup.style.display = "flex";

        popupImg.src = img.src;

    });

});

popup.addEventListener("click", () => {

    popup.style.display = "none";

});

// ==========================
// Contact Form
// ==========================

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("✅ Thank you! Your message has been received.");

    form.reset();

});