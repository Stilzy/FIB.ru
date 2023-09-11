new Swiper ('.image-slider, card__news', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
});

document.getElementById("open-model-btn").addEventListener("click", function(){
    document.getElementById("my-modal").classList.add("open")
});











