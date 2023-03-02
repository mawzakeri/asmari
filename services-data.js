
const servicesItems = [
    {id:1 , title:"das" , desc:"das" , img:"https://asmari-insurance.com/wp-content/uploads/2020/09/Hazine-Shakhs-Sales.png"},
    {id:2 , title:"das" , desc:"das" , img:"https://asmari-insurance.com/wp-content/uploads/2020/09/Hazine-Shakhs-Sales.png"},
    {id:3 , title:"das" , desc:"das" , img:"https://asmari-insurance.com/wp-content/uploads/2020/09/Hazine-Shakhs-Sales.png"},
    {id:4 , title:"das" , desc:"das" , img:"https://asmari-insurance.com/wp-content/uploads/2020/09/Hazine-Shakhs-Sales.png"},
    {id:5 , title:"das" , desc:"das" , img:"https://asmari-insurance.com/wp-content/uploads/2020/09/Hazine-Shakhs-Sales.png"},
    {id:6 , title:"das" , desc:"das" , img:"https://asmari-insurance.com/wp-content/uploads/2020/09/Hazine-Shakhs-Sales.png"},
    {id:7 , title:"das" , desc:"das" , img:"https://asmari-insurance.com/wp-content/uploads/2020/09/Hazine-Shakhs-Sales.png"},
    {id:8 , title:"das" , desc:"das" , img:"https://asmari-insurance.com/wp-content/uploads/2020/09/Hazine-Shakhs-Sales.png"},
    {id:9 , title:"سلام 1" , desc:"das" , img:"https://asmari-insurance.com/wp-content/uploads/2020/09/Hazine-Shakhs-Sales.png"},
    {id:10 , title:"das" , desc:"das" , img:"https://asmari-insurance.com/wp-content/uploads/2020/09/Hazine-Shakhs-Sales.png"},
    {id:11, title:"das" , desc:"das" , img:"https://asmari-insurance.com/wp-content/uploads/2020/09/Hazine-Shakhs-Sales.png"},
    {id:12 , title:"das" , desc:"das" , img:"https://asmari-insurance.com/wp-content/uploads/2020/09/Hazine-Shakhs-Sales.png"},
    {id:13 , title:"das" , desc:"das" , img:"https://asmari-insurance.com/wp-content/uploads/2020/09/Hazine-Shakhs-Sales.png"},
    {id:14 , title:"das" , desc:"das" , img:"https://asmari-insurance.com/wp-content/uploads/2020/09/Hazine-Shakhs-Sales.png"},
    {id:15 , title:"das" , desc:"das" , img:"https://asmari-insurance.com/wp-content/uploads/2020/09/Hazine-Shakhs-Sales.png"},
    {id:16 , title:"das" , desc:"das" , img:"https://asmari-insurance.com/wp-content/uploads/2020/09/Hazine-Shakhs-Sales.png"},
    {id:17 , title:"das" , desc:"das" , img:"https://asmari-insurance.com/wp-content/uploads/2020/09/Hazine-Shakhs-Sales.png"},
    {id:18 , title:"das" , desc:"das" , img:"https://asmari-insurance.com/wp-content/uploads/2020/09/Hazine-Shakhs-Sales.png"},
    {id:19 , title:"das" , desc:"das" , img:"https://asmari-insurance.com/wp-content/uploads/2020/09/Hazine-Shakhs-Sales.png"},
    {id:20 , title:"das" , desc:"das" , img:"https://asmari-insurance.com/wp-content/uploads/2020/09/Hazine-Shakhs-Sales.png"},
    {id:21 , title:"das" , desc:"das" , img:"https://asmari-insurance.com/wp-content/uploads/2020/09/Hazine-Shakhs-Sales.png"},
    {id:22 , title:"سلام 2" , desc:"das" , img:"https://asmari-insurance.com/wp-content/uploads/2020/09/Hazine-Shakhs-Sales.png"},
    {id:23 , title:"das" , desc:"das" , img:"https://asmari-insurance.com/wp-content/uploads/2020/09/Hazine-Shakhs-Sales.png"},
    {id:24 , title:"das" , desc:"das" , img:"https://asmari-insurance.com/wp-content/uploads/2020/09/Hazine-Shakhs-Sales.png"},
]// this array have some OBJ
//any OBJ have Box Info and to add a OBJ to here...
//It is added dynamically to DOM
const pageNumbers = document.querySelectorAll(".page-number")
let pageActive = 1;
let lastPage = Math.floor(servicesItems.length / 12)
const servicesParent = document.querySelector(".e-serivce__container")
const nextPage = document.querySelector("#next-page")
const prevPage = document.querySelector("#prev-page")
const fadeAnimate = document.querySelector(".fade-animate")

nextPage.addEventListener("click" , e => {
    if(pageActive != lastPage){
        if(e.target.nodeName == "I"){
            servicesParent.innerHTML = ""
            e.target.parentElement.classList.remove("active")
            prevPage.parentElement.classList.add("active")
            pageActive++
            handlePageItems()
        }
        else{
            servicesParent.innerHTML = ""
            e.target.classList.remove("active")
            prevPage.parentElement.classList.add("active")
            pageActive++
            handlePageItems()
        }
        pageNumbers.forEach(page => {
            page.parentElement.classList.remove("active")
        })
        pageNumbers.forEach(page => {
            if(page.dataset.page == pageActive){
                page.parentElement.classList.add("active")
            }
        })
    }
})

prevPage.addEventListener("click" , e => {
    if(pageActive != 1){
        if(e.target.nodeName == "I"){
            servicesParent.innerHTML = ""
            e.target.parentElement.classList.remove("active")
            nextPage.parentElement.classList.add("active")
            pageActive--
            handlePageItems()
        }
        else{
            servicesParent.innerHTML = ""
            e.target.classList.remove("active")
            nextPage.parentElement.classList.add("active")
            pageActive--
            handlePageItems()
        }
        pageNumbers.forEach(page => {
            page.parentElement.classList.remove("active")
        })
        pageNumbers.forEach(page => {
            if(page.dataset.page == pageActive){
                page.parentElement.classList.add("active")
            }
        })
    }
})

// handling Click at pagination key

window.onload = () => {
    handlePageItems()
}

pageNumbers.forEach(page => {
    page.addEventListener("click" , e => {
        pageNumbers.forEach(page => {
            page.parentElement.classList.remove('active')
        })
        if(e.target.dataset.page == 1 && pageActive != +e.target.dataset.page){
            servicesParent.innerHTML = ""
            pageActive = 1
            handlePageItems()
        }
        else if(e.target.dataset.page == 2 && pageActive != +e.target.dataset.page){
            servicesParent.innerHTML = ""
            pageActive = 2
            handlePageItems()
        }
        e.target.parentElement.classList.add("active")
        prevPage.parentElement.classList.remove("active")
        nextPage.parentElement.classList.remove("active")
        if(pageActive == lastPage && pageActive != 1){
            prevPage.parentElement.classList.add("active")
        }
        else if(pageActive != lastPage){
            nextPage.parentElement.classList.add("active")
        }
    })
})// show info when click at pagination items

function handlePageItems(){
    fadeAnimate.classList.remove("active")
    servicesItems.forEach(item => {
        if(pageActive == 1 && item.id <= 12)
             insertItemDOM(item)
        else if(pageActive == 2 && item.id > 12 && item.id <= 24)
             insertItemDOM(item)
    })
    setTimeout(() => {
        fadeAnimate.classList.add("active")
    } , 300)
}

function insertItemDOM(item){
    servicesParent.innerHTML += `
        <div class="pgc-content__item">
            <img id="service-img" src="${item.img}" alt="">
            <div class="content-item__desc">
                <a id="service-title" class="head-line__link" href="#">پرتال بیمه شدگان<i class="icon-angle-left fade-angle__show"></i></a>
                <p id="service-desc">${item.desc}</p>
            </div>
        </div>
    `
}
///Insert Boxs to DOM whith array info