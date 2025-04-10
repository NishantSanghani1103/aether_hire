$('#indrustiesSlider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    smartSpeed:1000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})
$('#serviceSlider').owlCarousel({
    loop: true,
    margin: 25,
    nav: true,
    dots: false,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})
$('#clientSlider').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
})

let arrrow = document.querySelector(".arrrow");
arrrow.style.display = "none"
window.addEventListener("scroll", () => {
    if (window.scrollY >= 100) {
        arrrow.style.display = "block";
    } else {

        arrrow.style.display = "none";
    }
})