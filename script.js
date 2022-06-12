let body=document.querySelector("body")

let mainMenuOpenButton=document.querySelector(".menu__button")
let mainMenuCloseButton=document.querySelector(".menu__cancel")
let overlay=document.querySelector(".overlay")

let mainMenuItems=document.querySelector(".menu__items")

let featureSubmenuButton=document.querySelector(".feature__button")
let companySubmenuButton=document.querySelector(".company__button")

let featureSubmenuItems=document.querySelector(".menu__feature__items")
let companySubmenuItems=document.querySelector(".menu__company__items")

let menuSubItems=document.querySelectorAll(".menu__items__select")



mainMenuOpenButton.addEventListener("click",openMainMenu)
mainMenuCloseButton.addEventListener("click",closeMainMenu)

featureSubmenuButton.addEventListener("click",featureSubmenu)
companySubmenuButton.addEventListener("click",companySubmenu)

menuSubItems.forEach(a=>{
    if(window.outerWidth<800)
    {
        a.addEventListener("click",closeMainMenu)
    }
    })

function openMainMenu(){
    mainMenuItems.style.display="block"
    overlay.style.display="block"
    body.style.overflow="hidden"
    document.documentElement.scrollTop=0
}

function closeMainMenu(){
    mainMenuItems.style.display="none"
    overlay.style.display="none"
    body.style.overflow="auto"
}


function featureSubmenu(){
    featureSubmenuItems.classList.toggle("menu__submenu"); 
    featureSubmenuButton.classList.toggle("opened")
}

function companySubmenu(){
    companySubmenuItems.classList.toggle("menu__submenu"); 
    companySubmenuButton.classList.toggle("opened")
}