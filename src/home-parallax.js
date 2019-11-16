// The script takes the position of the photo relative to a top and when hover scroll
// applies divide the scroll by 6 and apply to position Y of the image

const parallax = () => {
    const $home = document.querySelector('.home');
    let $scroll = window.pageYOffset;
    $home.style.backgroundPositionY = `-${$scroll / 6}px`
};

window.addEventListener('scroll', () => {
    parallax();
});
