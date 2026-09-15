// ======================================
// PORTFOLIO JAVASCRIPT
// Part 3.1
// ======================================


// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

    if (navLinks.classList.contains("show")) {
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }

});


// ===============================
// STICKY NAVBAR
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "rgba(5,8,22,.95)";
        header.style.boxShadow = "0 8px 30px rgba(0,0,0,.35)";
        header.style.transition = ".4s";

    } else {

        header.style.background = "rgba(8,15,35,.6)";
        header.style.boxShadow = "none";

    }

});



// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

        navLinks.classList.remove("show");

        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

    });

});



// ===============================
// ACTIVE MENU
// ===============================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 150;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") == "#" + current){

            link.classList.add("active");

        }

    });

});



// ===============================
// SCROLL REVEAL
// ===============================

const revealElements = document.querySelectorAll(

".title,.about-container,.skill-card,.timeline-box,.experience-card,.project-card,.service,.certificate"

);

function reveal(){

    revealElements.forEach(item=>{

        const windowHeight = window.innerHeight;

        const top = item.getBoundingClientRect().top;

        if(top < windowHeight - 120){

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll",reveal);

reveal();



// ===============================
// HERO ANIMATION
// ===============================

window.addEventListener("load",()=>{

    document.querySelector(".hero-content").style.opacity="1";
    document.querySelector(".hero-content").style.transform="translateY(0)";

    document.querySelector(".hero-image").style.opacity="1";
    document.querySelector(".hero-image").style.transform="translateY(0)";

});



// ===============================
// INITIAL STYLE
// ===============================

document.querySelector(".hero-content").style.opacity="0";
document.querySelector(".hero-content").style.transform="translateY(60px)";
document.querySelector(".hero-content").style.transition="1s";

document.querySelector(".hero-image").style.opacity="0";
document.querySelector(".hero-image").style.transform="translateY(60px)";
document.querySelector(".hero-image").style.transition="1.2s";



// ===============================
// PROJECT HOVER EFFECT
// ===============================

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.background =

`radial-gradient(circle at ${x}px ${y}px,
rgba(0,229,255,.18),
rgba(255,255,255,.05))`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="rgba(255,255,255,.05)";

    });

});



// ===============================
// SKILL CARD EFFECT
// ===============================

const skillCards = document.querySelectorAll(".skill-card");

skillCards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-12px) scale(1.03)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0) scale(1)";

    });

});



// ===============================
// BUTTON RIPPLE EFFECT
// ===============================

const buttons = document.querySelectorAll(".btn,.btn2");

buttons.forEach(button=>{

button.addEventListener("click",function(e){

const circle = document.createElement("span");

const x = e.clientX - e.target.offsetLeft;

const y = e.clientY - e.target.offsetTop;

circle.style.left = x + "px";
circle.style.top = y + "px";

circle.classList.add("ripple");

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});



// ===============================
// CONSOLE MESSAGE
// ===============================

console.log("%cWelcome to Hari's Portfolio 🚀",
"color:#00e5ff;font-size:20px;font-weight:bold;");

// ======================================
// PART 3.2 - FINAL JAVASCRIPT
// ======================================


// ======================================
// TYPING ANIMATION
// ======================================

const typingElement = document.querySelector(".typing");

if (typingElement) {

    const words = [
        "Front-End Developer",
        "UI Designer",
        "Email Campaign Designer",
        "JavaScript Developer",
        "Web Designer"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typingEffect() {

        const currentWord = words[wordIndex];

        if (!deleting) {

            typingElement.textContent = currentWord.substring(0, charIndex++);
        } else {

            typingElement.textContent = currentWord.substring(0, charIndex--);
        }

        let speed = deleting ? 50 : 100;

        if (!deleting && charIndex === currentWord.length + 1) {

            deleting = true;
            speed = 1500;

        } else if (deleting && charIndex === 0) {

            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            speed = 400;
        }

        setTimeout(typingEffect, speed);
    }

    typingEffect();
}



// ======================================
// COUNTER ANIMATION
// ======================================

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;
            const target = Number(counter.dataset.target);

            let count = 0;

            const update = () => {

                const increment = Math.ceil(target / 100);

                count += increment;

                if (count >= target) {

                    counter.innerText = target;
                } else {

                    counter.innerText = count;
                    requestAnimationFrame(update);
                }

            };

            update();

            counterObserver.unobserve(counter);

        }

    });

}, { threshold: 0.5 });

counters.forEach(counter => counterObserver.observe(counter));




// ======================================
// BACK TO TOP BUTTON
// ======================================

const backTop = document.querySelector(".back-top");

window.addEventListener("scroll", () => {

    if (!backTop) return;

    if (window.scrollY > 400) {

        backTop.classList.add("show-top");

    } else {

        backTop.classList.remove("show-top");

    }

});

if (backTop) {

    backTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}



// ======================================
// SCROLL PROGRESS BAR
// ======================================

const progress = document.querySelector(".progress-bar");

window.addEventListener("scroll", () => {

    if (!progress) return;

    const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progressHeight =
        (window.pageYOffset / totalHeight) * 100;

    progress.style.width = progressHeight + "%";

});




// ======================================
// LOADING SCREEN
// ======================================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if (!loader) return;

    loader.style.opacity = "0";

    loader.style.visibility = "hidden";

});




// ======================================
// CONTACT FORM
// ======================================

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("✅ Thank you! Your message has been sent.");

        form.reset();

    });

}




// ======================================
// RANDOM FLOATING ANIMATION
// ======================================

const floating = document.querySelectorAll(
".service,.project-card,.certificate"
);

floating.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transition = ".4s";
        card.style.transform = "translateY(-15px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});




// ======================================
// CURSOR GLOW
// ======================================

const glow = document.createElement("div");

glow.classList.add("cursor-glow");

document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});




// ======================================
// CURRENT YEAR
// ======================================

const year = document.querySelector(".year");

if (year) {

    year.textContent = new Date().getFullYear();

}



// ======================================
// PAGE FADE
// ======================================

document.body.style.opacity = "0";

window.onload = () => {

    document.body.style.transition = "opacity .8s";

    document.body.style.opacity = "1";

};




// ======================================
// END
// ======================================

console.log("Portfolio Loaded Successfully 🚀");