const botaoMenu = document.querySelector('.cabecalho__menu');
const menu = document.querySelector('.menu-lateral');

let visivel = false
botaoMenu.addEventListener('click', () => {
    if (visivel) {
        menu.classList.remove('menu-lateral--ativo')
    } else {
        menu.classList.add('menu-lateral--ativo');
    }
    visivel = !visivel
})

botaoMenu.addEventListener('blur', () => {
    setTimeout(function(){
        menu.classList.remove('menu-lateral--ativo')
    }, 10)
})