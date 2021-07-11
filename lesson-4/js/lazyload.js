const images = document.querySelectorAll("[data-src]");

function preloadImage(img){
    const src = img.getAttribute("data-src");
    if(!src) {
        return;
    }
    img.classList.add('loading');
    img.onload = function() {
        img.classList.remove('loading');
        img.classList.add('loaded');
    };
    img.src = src;
}

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 100px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    });
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
});