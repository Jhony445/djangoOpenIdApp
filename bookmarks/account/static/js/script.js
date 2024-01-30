let arbol = document.getElementById('arbol')
let arbusto = document.getElementById('arbusto')
let luna = document.getElementById('luna')
let particulas = document.getElementById('particulas')
let principal = document.getElementById('principal')
let text = document.getElementById('text');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.55 + 'px'

    luna.style.left = value * 1.5 + 'px';
    particulas.style.top = value * 1.5 + 'px';
    arbusto.style.marginLeft = value * 1.5 + 'px';
    arbol.style.left = value * -1.5 + 'px';
})

const container = document.getElementById('container')
const registerBtn = document.getElementById('register')
const loginBtn = document.getElementById('login')
const show_login = document.getElementById('show_login')
const close = document.getElementById('close')

registerBtn.addEventListener('click', () => {
    container.classList.add('active')
})

loginBtn.addEventListener('click', () => {
    container.classList.remove('active')
})

show_login.addEventListener('click', () => {
    container.style.display = 'block'
    container.classList.add('fade-in');
    container.classList.remove('fade-out');
})

close.addEventListener('click', () => {
    container.classList.add('fade-out');
    container.classList.remove('fade-in');
    setTimeout(() => {
        container.style.display = 'none'
    }, 500);
})
