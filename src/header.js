// Fixa o header no top da pagina depois do scroll da foto do home
// e controla o fix conforme o scroll vai sendo feito na pagina

// Se scroll for maior que sua posição na pagina fixa no top caso ao contrario desfixa

const $header = document.querySelector('.header');
const $position = $header.offsetTop

const headerFix = () => {
    let $scroll = window.pageYOffset;

    if ($scroll > $position) {
        $header.classList.add('-active');
    } else {
        $header.classList.remove('-active');
    }
}

window.addEventListener('scroll', () => {
    headerFix();
});