// =======================================
// REHOBOTH PRAYER HOUSE WEBSITE SCRIPT
// =======================================

// 1. WHATSAPP FORM SUBMISSION FUNCTION
function sendToWhatsApp(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const place = document.getElementById('place').value;
    const message = document.getElementById('message').value;

    const whatsappText = "🙏 *PRAYER REQUEST / CONTACT FORM*%0A%0A" +
                       "👤 *ಹೆಸರು:* " + encodeURIComponent(name) + "%0A" +
                       "📞 *ಫೋನ್:* " + encodeURIComponent(phone) + "%0A" +
                       "📍 *ಸ್ಥಳ:* " + encodeURIComponent(place) + "%0A%0A" +
                       "📝 *ಪ್ರಾರ್ಥನಾ ವಿನಂತಿ:*%0A" + encodeURIComponent(message);

    const whatsappURL = "https://wa.me/917353609920?text=" + whatsappText;

    window.open(whatsappURL, '_blank');
}

// 2. DOM CONTENT LOADED EVENTS
document.addEventListener("DOMContentLoaded", () => {

    // Page Loaded
    document.body.classList.add("loaded");

    // Sticky Header
    const header = document.querySelector(".header");
    if(header){
        window.addEventListener("scroll", () => {
            if(window.scrollY > 60){
                header.classList.add("header-scroll");
            }else{
                header.classList.remove("header-scroll");
            }
        });
    }

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", function(e){
            const href = this.getAttribute("href");
            if(href === "#") return;

            const target = document.querySelector(href);
            if(target){
                e.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Active Menu Highlight
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navigation a");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const top = section.offsetTop - 150;
            if(window.scrollY >= top){
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if(link.getAttribute("href") === "#" + current){
                link.classList.add("active");
            }
        });
    });

    // Scroll Animation (IntersectionObserver)
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.15
    });

    document.querySelectorAll(
        ".section, .service-card, .contact-card, .about-grid, .pastor-card, .word-card, .online-card, .email-card, .location-card"
    ).forEach(item => {
        item.classList.add("hidden");
        observer.observe(item);
    });

    // Button Ripple Effect
    document.querySelectorAll(
        ".btn, .online-btn, .email-btn, .location-btn, .form-submit-btn"
    ).forEach(button => {
        button.addEventListener("click", function(e){
            const ripple = document.createElement("span");
            const rect = this.getBoundingClientRect();

            const size = Math.max(rect.width, rect.height);
            ripple.style.width = size + "px";
            ripple.style.height = size + "px";

            ripple.style.left = e.clientX - rect.left - size / 2 + "px";
            ripple.style.top = e.clientY - rect.top - size / 2 + "px";

            ripple.classList.add("ripple");
            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Back to Top Button Creation
    const topButton = document.createElement("button");
    topButton.innerHTML = "↑";
    topButton.className = "backToTop";
    document.body.appendChild(topButton);

    window.addEventListener("scroll", () => {
        if(window.scrollY > 400){
            topButton.classList.add("showTop");
        }else{
            topButton.classList.remove("showTop");
        }
    });

    topButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

});
