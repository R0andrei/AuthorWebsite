//dropdown button global

$(document).ready(function () {
    $("#dbutton").hover(function () {
        $("#drop").toggle()
    });
});

//dropdown button mobile

$(document).ready(function () {
    $(".burger").click(function () {
        $(".nav-mob").toggle()
    });
});

//carousel

var slideIndex = 1;
showSlides(slideIndex);
sTimer = setInterval(function () { auto() }, 4000);
function auto() {
    slideIndex++;
    if (slideIndex > 3) { slideIndex = 1 }
    showSlides(slideIndex);
}

function currentSlide(n) {
    clearInterval(sTimer);
    showSlides(slideIndex = n);
    sTimer = setInterval(function () { auto() }, 4000);
}

function showSlides(x) {
    let i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Form validation

function sendMail(mail) {
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mail.value.match(mailFormat)) {
        alert("Mesaj trimis");
    }
    else {
        alert("Adresa de email incorecta");
    }
}