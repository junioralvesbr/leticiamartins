const $sections = document.querySelectorAll('.sections');
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

console.log($sections[3].offsetTop)