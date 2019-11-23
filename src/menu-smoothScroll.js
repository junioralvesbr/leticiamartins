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
    console.log(numberSection);
        $menu.forEach($item => $item.classList.remove('-active'))
        $menu[numberSection].classList.add('-active')
}

window.addEventListener('scroll', () => {
    let scroll = (window.scrollY + 500)
    
    if ((scroll > $section[0].offsetTop) && (scroll < $section[1].offsetTop)) {
        addRemoveActive(0)

    } else if ((scroll > $section[1].offsetTop) && (scroll < $section[2].offsetTop)) {
        addRemoveActive(1)

    } else if ((scroll > $section[2].offsetTop) && (scroll < $section[3].offsetTop)) {
        addRemoveActive(2)

    } else if ((scroll > $section[3].offsetTop) && (scroll < $section[4].offsetTop)) {
        addRemoveActive(3)

    } else {
        addRemoveActive(4)
    }
})