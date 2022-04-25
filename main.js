/*Abre e fecha menu ao clicar no icone*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll("nav .toggle")

for(const element of toggle){
    element.addEventListener('click', ()=>{
        nav.classList.toggle('show')
    })
}

/*quando clica em item do menu, esconde o menu*/
const links = document.querySelectorAll('nav ul li a')

for(const link of links){
    link.addEventListener('click', () => {
        nav.classList.remove('show')
    })
}