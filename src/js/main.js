const navbar = document.getElementById('navbar');
navbar.innerHTML = `<nav class="bem-navbar">
            <a href="#" class="bem-navbar__brand">Brand</a>
            <input type="checkbox" id="nav-toggle" class="bem-navbar__checkbox">
            <label for="nav-toggle" class="bem-navbar__toggle">☰</label>
            <ul class="bem-navbar__menu">
                <li class="bem-navbar__item">
                    <a href="#inicio" class="bem-navbar__link bem-navbar__link--active">Inicial</a>
                </li>
                <li class="bem-navbar__item">
                    <a href="#sobre" class="bem-navbar__link">Sobre</a>
                </li>
                <li class="bem-navbar__item">
                    <a href="#contato" class="bem-navbar__link">Contato</a>
                </li>
                 <li class="bem-navbar__item">
                    <a href="#servicos" class="bem-navbar__link">Serviços</a>
                </li>
            </ul>
        </nav>`


const app = document.getElementById('app');
//app.textContent ='<h1>Olá Mundo!</h1>';
const home =  `<h1> Esta é página Inicial </h1>
<p>Bem Vindo ao meu site</p>
`
const sobre = `<h1> Esta é página Sobre </h1>
<p>Este site é um exemplo de SPA usando JavaScript puro</p>
`
const contato = `<h1> Esta é página Contato </h1>
    <p>Entre em contato conosco pelo email:</p>`

const servicos = `<h1> Esta é página Serviços </h1>
    <p>Nossos serviços incluem:</p>`



window.addEventListener("hashchange", ()=>{
const rota = window.location.hash;
switch(rota){
    case '#inicio':
        app.innerHTML = home;
    break;
    case '#sobre':
        app.innerHTML = sobre;
    break;
    case '#contato':
        app.innerHTML = contato;
    break;
    case '#servicos':
        app.innerHTML = servicos;
    break;
    default:
        app.innerHTML = `<h1> Página não encontrada </h1>`;
}

})