const $section = document.querySelectorAll('.section');
const $menu = document.querySelectorAll('.nav-menu .item')
const $menuItems = document.querySelectorAll('.list .action[href^="#"]');

const scrollToIdOnClick = (event) => {
    event.preventDefault();
    const $to = getScrollTopByHref(event.target) - 55;
    scrollToPosition($to);
};

const getScrollTopByHref = ($element) => {
    const id = $element.getAttribute('href');
    return document.querySelector(id).offsetTop;
};

const scrollToPosition = ($to) => {
    window.scroll({
        top: $to,
        behavior: "smooth"
    });
};

$menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
});

const addRemoveActive = (numberSection) => {
        $menu.forEach($item => $item.classList.remove('-active'))
        $menu[numberSection].classList.add('-active')
}

window.addEventListener('scroll', () => {
    const space = 100
    let scroll = window.scrollY
    
    if (scroll > ($section[4].offsetTop - space)) {
        addRemoveActive(4);

    } else if (scroll > ($section[3].offsetTop - 200)) {
        addRemoveActive(3);

    } else if (scroll > ($section[2].offsetTop - space)) {
        addRemoveActive(2);

    } else if (scroll > ($section[1].offsetTop - space)) {
        addRemoveActive(1);

    } else {
        addRemoveActive(0);

    }
})