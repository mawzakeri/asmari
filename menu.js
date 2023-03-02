const $ = document
const menubarInside = $.querySelector(".menu-bar")
const menuBtnInside = $.querySelector(".org-menu")
const closeMenuBtnInside = $.querySelector(".close-menubar")

menuBtnInside.addEventListener("click" , () => {
    menubarInside.classList.add("active")
    console.log("as")
})
closeMenuBtnInside.addEventListener("click" , () => {
    menubarInside.classList.remove("active")
})
