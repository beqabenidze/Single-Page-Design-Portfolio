const leftArrow = document.querySelector('#left');
const rightArrow = document.querySelector('#right');
const slider = document.querySelector('.slider');
const image = slider.querySelectorAll('img');



rightArrow.addEventListener('click', () => {
    let lastImg = image[0].src;
    image[0].src = image[1].src;
    image[1].src = image[2].src;
    image[2].src = image[3].src;
    image[3].src = image[4].src;
    image[4].src = lastImg;
})

leftArrow.addEventListener('click', () => {
    let lastImg = image[4].src;
    image[4].src = image[3].src;
    image[3].src = image[2].src;
    image[2].src = image[1].src;
    image[1].src = image[0].src;
    image[0].src = lastImg;
})



