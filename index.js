var slideNum = 1;

function updateSlides(n) {
    /* Could have the below variable in global scope for marginally better performance,
    but by keeping it here images can be added or removed without requiring a page refresh. */
    let slides = document.querySelectorAll(".slideshow-container img");

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

// Call immediatedly to show first slide (so that "image-active" doesn't need to be added to the HTML)
updateSlides(0);

document.querySelector("#forward>span").addEventListener("click", () => {
    updateSlides(1);
});

document.querySelector("#backward>span").addEventListener("click", () => {
    updateSlides(-1);
});