const $menuItems = document.querySelectorAll('.list .action[href^="#"]');

const scrollToIdOnClick = (event) => {
    event.preventDefault();
    const $to = getScrollTopByHref(event.target) - 55;
    scrollToPosition($to);
    activeMenu(event)
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

const activeMenu = (event) => {
    const $menu = document.querySelectorAll('.nav-menu .item');
    const $activeMenu = event.path[1];

    $menu.forEach(item => {
        item.classList.remove('-active');
    })

    $activeMenu.classList.add('-active');
}

$menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
});

