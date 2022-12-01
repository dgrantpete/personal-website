var slideNum = 1;

function updateSlides(n) {
    let slides = document.querySelectorAll(".slideshow-container>img");

    slideNum += n;

    if (slideNum > slides.length) {
        slideNum = 1;
    } else if (slideNum < 1) {
        slideNum = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        if (i == slideNum - 1) {
            slides[i].classList.add("image-active");
        } else {
            slides[i].classList.remove("image-active");
        }
    }
}

updateSlides(0);

document.getElementById("forward").addEventListener("click", function() {
    updateSlides(1);
});

document.getElementById("backward").addEventListener("click", function() {
    updateSlides(-1);
});