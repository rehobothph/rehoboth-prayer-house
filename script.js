// =======================================
// REHOBOTH PRAYER HOUSE WEBSITE SCRIPT
// =======================================

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

            const target = document.querySelector(this.getAttribute("href"));

            if(target){

                e.preventDefault();

                target.scrollIntoView({
                    behavior:"smooth"
                });

            }

        });

    });



    // Active Menu

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navigation a");


    window.addEventListener("scroll",()=>{

        let current="";


        sections.forEach(section=>{

            const top = section.offsetTop - 150;
            const height = section.clientHeight;


            if(window.scrollY >= top){

                current = section.getAttribute("id");

            }

        });



        navLinks.forEach(link=>{

            link.classList.remove("active");


            if(link.getAttribute("href") === "#" + current){

                link.classList.add("active");

            }

        });


    });




    // Scroll Animation

    const observer = new IntersectionObserver(entries=>{


        entries.forEach(entry=>{


            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }


        });


    },{
        threshold:0.15
    });



    document.querySelectorAll(
        ".section,.service-card,.contact-card,.about-grid,.pastor-card,.word-card,.online-card,.email-card,.location-card"
    )
    .forEach(item=>{

        item.classList.add("hidden");

        observer.observe(item);

    });





    // Button Ripple Effect

    document.querySelectorAll(
        ".btn,.online-btn,.email-btn,.location-btn,.form-submit-btn"
    )
    .forEach(button=>{


        button.addEventListener("click",function(e){


            const ripple = document.createElement("span");


            const size = Math.max(
                this.clientWidth,
                this.clientHeight
            );


            ripple.style.width = size+"px";
            ripple.style.height = size+"px";


            ripple.style.left =
            e.clientX - this.offsetLeft - size/2 +"px";


            ripple.style.top =
            e.clientY - this.offsetTop - size/2 +"px";


            ripple.classList.add("ripple");


            this.appendChild(ripple);



            setTimeout(()=>{

                ripple.remove();

            },600);



        });


    });



});





// =======================================
// BACK TO TOP BUTTON
// =======================================


const topButton = document.createElement("button");


topButton.innerHTML = "↑";


topButton.className = "backToTop";


document.body.appendChild(topButton);



window.addEventListener("scroll",()=>{


    if(window.scrollY > 400){

        topButton.classList.add("showTop");

    }else{

        topButton.classList.remove("showTop");

    }


});



topButton.addEventListener("click",()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});