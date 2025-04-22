document.addEventListener("DOMContentLoaded", function () {
    var portfolioSwiper = new Swiper('.swiper-container', {
        slidesPerView: 1.5, 
        spaceBetween: 20,
        loop: true,
        centeredSlides: true, 
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: false,
        allowTouchMove: true,
        loopAdditionalSlides: 3,
        breakpoints: {
            768: { slidesPerView: 2, centeredSlides: true },
            1024: { slidesPerView: 2.5, centeredSlides: true }
        }
    });
});


    
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); 

        let name = document.querySelector(".contact-form input[type='text']").value.trim();
        let email = document.querySelector(".contact-form input[type='email']").value.trim();
        let message = document.querySelector(".contact-form textarea").value.trim();
        let isValid = true;

        clearErrors();

        if (name === "") {
            showError(".contact-form input[type='text']", "Name is required.");
            isValid = false;
        }

        let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (email === "") {
            showError(".contact-form input[type='email']", "Email is required.");
            isValid = false;
        } else if (!emailPattern.test(email)) {
            showError(".contact-form input[type='email']", "Enter a valid email address.");
            isValid = false;
        }

        if (message.length < 10) {
            showError(".contact-form textarea", "Message must be at least 10 characters.");
            isValid = false;
        }

        if (isValid) {
            showPopup("Message Sent Successfully!!");
            document.querySelector(".contact-form").reset();
        }
    });
});


function showError(selector, message) {
    let inputField = document.querySelector(selector);
    let errorMessage = document.createElement("small");
    errorMessage.textContent = message;
    errorMessage.classList.add("error-message");
    inputField.parentNode.insertBefore(errorMessage, inputField.nextSibling);
}


function clearErrors() {
    document.querySelectorAll(".error-message").forEach(error => error.remove());
}


function showPopup(message) {
    let popup = document.createElement("div");
    popup.classList.add("popup-message");
    popup.textContent = message;
    document.body.appendChild(popup);

    
    setTimeout(() => {
        popup.classList.add("fade-out");
        setTimeout(() => popup.remove(), 500);
    }, 2000);
}



    document.getElementById("dark-mode-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    console.log("Dark mode toggled!");
    });

