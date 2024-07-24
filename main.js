const swiper = new Swiper(".swiper", {
    pagination: {
        el: ".swiper-pagination"
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    loop: true,
    autoplay: {
        delay: 3000,
    },
});

