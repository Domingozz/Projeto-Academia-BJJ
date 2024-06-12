const imgMenu = document.querySelector(".menu")


function toggleMenu() {
    const menuLateral = document.getElementById('menu-lateral');
    menuLateral.classList.toggle('expandido');
}

imgMenu.addEventListener("click", (ev)=> {
    toggleMenu()
})

imgClose = document.querySelector(".menu-close")

imgClose.addEventListener("click", ()=>{
    toggleMenu()
})