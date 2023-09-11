window.addEventListener('click', function (event) {
    if (event.target.hasAttribute('data-card')) {
        const card = event.target.closest('.pizza__catalog');

        const productInfo = {
            id: pizza__catalog.dataset.id,
            imgSrc: pizza__catalog.querySelector('.pizza__imag').getAttribute('src'),
            title: pizza__catalog.querySelector('.pizza__wrapper').innerText,
            itemsInBox: pizza__catalog.querySelector('.pizza__title').innerText,
            price: pizza__catalog.querySelector('.pizza__price').innerText,
        };
    }
});