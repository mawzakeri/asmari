const $ = document
const slideHegith = window.innerHeight
const slidesContainer = $.querySelector(".slides")
const slidesPage = $.querySelectorAll(".page-slide")
let translateRange = 0;
let activePageSlide = 1;
let trunDots = true;
const dotSlider = $.querySelectorAll(".dot")
const sidebar = $.querySelector(".sidebar")
const closeAside = $.querySelector(".close-aside") 
const firstTopSide = $.querySelector(".first-top__side")
const secTopSide = $.querySelector(".sec-top__side")
const conteryFlag = $.querySelector(".contery-flag")
const pgfItems = $.querySelectorAll(".pgf-item") // items in page four !
const sidebarMobile = $.querySelector(".fake-sidebar")
const closeMenuBtn = $.querySelector(".close-menubar")
const pgfiItems = $.querySelector(".pgfi-items")
const pgfiPrevIcon = $.querySelector("#arrow-prev")
const pgfiNextIcon = $.querySelector("#arrow-next")
const listSlideNav = $.querySelectorAll(".list-slide__nav")
const pageNumber = $.querySelector("#page-number")
const pageSlideContainer = $.querySelector("#pgf-cont")
const pgfiInfo = $.querySelectorAll(".pgfi-item__info")

let translated = 0
let prevTouchPosition = 0
pressed = false
let wheelRange = 0

pgfiNextIcon.addEventListener("click" , () => {
    let maxTranslate = (pgfiItems.children[0].offsetWidth * 4) + (70 * 3)
    translated += pgfiItems.children[0].offsetWidth + 70
    if(translated < maxTranslate){
        pgfiItems.style.transform = `translateX(${translated}px)`
        pgfiPrevIcon.classList.add("active")
    }
    if(translated >= (maxTranslate - pgfiItems.children[0].offsetWidth)){
        pgfiNextIcon.classList.remove("active")
    }
    else{
        pgfiNextIcon.classList.add("active")
    }
})

pgfiPrevIcon.addEventListener("click" , () =>{
    translated -= pgfiItems.children[0].offsetWidth + 70
    if(translated + pgfiItems.children[0].offsetWidth > 0){
        pgfiItems.style.transform = `translateX(${translated}px)`
        pgfiNextIcon.classList.add("active")
        pgfiPrevIcon.classList.add("active")
    }
    if(translated - pgfiItems.children[0].offsetWidth <= 0){
        pgfiNextIcon.classList.add("active")
        pgfiPrevIcon.classList.remove("active")
    }
})

listSlideNav.forEach(slide => {
    slide.addEventListener("click" , e => {
        if(trunDots){
            listSlideNav.forEach(slide2 => {
                slide2.classList.remove("active")
            })
            if(e.target.nodeName === "LI"){
                siwpeSlide(e.target , dotSlider , "nav")
                e.target.classList.add("active")
            }
                
            else {
                siwpeSlide(e.target.parentElement , dotSlider , "nav")
                e.target.parentElement.classList.add("active")
            } 
        }       
    })
})

slidesContainer.addEventListener("touchstart" , e => {
    prevTouchPosition = e.touches[0].screenY
    pressed = true
})

slidesContainer.addEventListener("touchend" , e => {
    pressed = false
})

slidesContainer.addEventListener("touchmove" , e => {
    if(pressed){
        let target
        if(prevTouchPosition > e.touches[0].screenY){
            // paiin
            slidesPage.forEach(slide => {
                if(+slide.dataset.page === +activePageSlide + 1){
                    target = slide
                }
            })
            if(target)
                siwpeSlide(target , dotSlider , "key")
        }
        else{
            //bala
            slidesPage.forEach(slide => {
                if(+slide.dataset.page === activePageSlide -1){
                    target = slide
                }
            })
            if(target)
                siwpeSlide(target , dotSlider , "key")
        }
    }
})

slidesContainer.addEventListener("wheel" , e => {
    wheelRange += 1
    if(wheelRange === 6){
        wheelRange = 0  
        let targetSlide
        slidesPage.forEach(slide => {
            if(e.wheelDeltaY === -120){
                if(slide.dataset.page == +activePageSlide + 1){
                    targetSlide = slide
                    siwpeSlide(targetSlide , dotSlider , "wheel")
                    wheelRange = 0
                }        
            }
            else {
                if(slide.dataset.page == +activePageSlide - 1){
                    targetSlide = slide
                    siwpeSlide(targetSlide , dotSlider , "wheel")
                    wheelRange = 0
                }     
            }
        })
    }
})

const pgfItemImages = [
    "assets/images/map.png",
    "assets/images/map-link-baje.png",
    "assets/images/map (1).png"
]
const menubar = $.querySelector(".menu-bar")
const menuBtn = $.querySelector(".menu-btn")

closeMenuBtn.addEventListener("click" , () => {
    menubar.classList.remove("active")
    sidebarMobile.style.width = "65px"
})
menuBtn.addEventListener("click" , () => {
    menubar.classList.add("active")
    setTimeout( () => {
        sidebarMobile.style.width = "0px"
    } , 800)
})


pgfItems.forEach(pgfItem => pgfItem.addEventListener("click" , e => showThisImage(e.target)))
firstTopSide.addEventListener("mousemove" , e => firstTopSideAnimation(e.target))
firstTopSide.addEventListener("mouseleave" , e => firstTopSideEndAnimation(e.target))
secTopSide.addEventListener("mousemove" , e => secTopSideAnimation(e.target))
secTopSide.addEventListener("mouseleave" , e => secTopSideEndAnimation(e.target))

function showThisImage(target){
    let targetItem
    conteryFlag.classList.remove("contery-flag__active")
    setTimeout(() => {
        if(target.nodeName === "DIV"){
            targetItem = target
            conteryFlag.src= pgfItemImages[targetItem.dataset.img - 1]
            conteryFlag.classList.add("contery-flag__active")
        }
        else{
            targetItem = target.parentElement
            conteryFlag.src= pgfItemImages[targetItem.dataset.img - 1]
            conteryFlag.classList.add("contery-flag__active")
        }
    } , 500)
}

dotSlider.forEach(dot => {
    dot.addEventListener("click" , e => siwpeSlide(e.target , dotSlider , "click"))
})

window.addEventListener("keyup" , e => {
    let oldActiveSldie
    let newActiveSldie
    slidesPage.forEach(slide => {
        if(slide.className.includes("active")){
            oldActiveSldie = slide
        }
    })
    if(e.key === "ArrowDown"){
        slidesPage.forEach(slide => {
            if(+slide.dataset.page - 1 === +oldActiveSldie.dataset.page)
                newActiveSldie = slide
        })
        siwpeSlide(newActiveSldie , dotSlider , "key")
    }
    else if(e.key === "ArrowUp"){
        slidesPage.forEach(slide => {
            if(+slide.dataset.page + 1 === +oldActiveSldie.dataset.page)
                newActiveSldie = slide
        })
        siwpeSlide(newActiveSldie , dotSlider , "key")
    }

})

window.addEventListener("load" , () => {
    slidesPage[0].classList.add("active")
    sidebar.classList.add("active-load")
})

function siwpeSlide(target , dots , status){
    if(trunDots){
        dots.forEach(dot => {
            dot.classList.remove("active")
        })
        if(status === "click"){
            slidesPage.forEach(slide => {
                if(slide.dataset.page === target.dataset.page){
                    activeSlide(slide)
                    activePageSlide = slide.dataset.page
                    target.classList.add("active")
                }
                else{
                    slide.classList.remove("more-delay")
                    slide.classList.remove("active")
                }
            })
        }
        else if(status === "key" || status === "wheel"){
            slidesPage.forEach(slide => {
                slide.classList.remove("more-delay")
                slide.classList.remove("active")
            })
            activeSlide(target)
            activePageSlide = target.dataset.page
            target.classList.add("active")
            dots.forEach(dot => {
                if(dot.dataset.page === target.dataset.page)
                    dot.classList.add("active")
            })
        }
        else if(status === "nav"){
            let targetSlide
            slidesPage.forEach(slide => {
                slide.classList.remove("more-delay")
                slide.classList.remove("active")
                if(slide.dataset.page == target.dataset.page){
                    targetSlide = slide
                }
            })
            activeSlide(targetSlide)
            activePageSlide = target.dataset.page
            targetSlide.classList.add("active")
            dots.forEach(dot => {
                if(dot.dataset.page === target.dataset.page)
                    dot.classList.add("active")
            })
        }
        listSlideNav.forEach(slide2 => {
            slide2.classList.remove("active")
            if(slide2.dataset.page == activePageSlide)
                slide2.classList.add("active")
        })

        pageNumber.classList.add("active")
        setTimeout(() => {
            pageNumber.innerHTML = `0${activePageSlide}`
        } , 350)
        setTimeout(() => {
            pageNumber.classList.remove("active")
        } , 800)
    }
}

function activeSlide(slide){
    translateRange = Math.floor(slide.getBoundingClientRect().y + translateRange)
    console.log(translateRange)
    if(slide.dataset.page > activePageSlide + 2 || slide.dataset.page < activePageSlide - 2){
        slide.classList.add("more-delay")
    }
    trunDots = false;
    setTimeout(() => {
        slide.classList.add("active")
        slidesContainer.style.transform = `translateY(-${translateRange}px)`
    } , 500)
    setTimeout(()=> {
        trunDots = true
    } , 1500)
}

sidebar.addEventListener("click" , e => showSideBar(e.target))

function showSideBar(target){
    if(window.innerWidth < 992 && target.nodeName != "I" && !target.className.includes("close-aside")){
        sidebar.classList.add("active")
    }
}

closeAside.addEventListener("click" , () => {
    sidebar.classList.remove("active")
})

function secTopSideAnimation(){
    let tragetSide = $.querySelector(".sec-top__side")
    tragetSide.classList.add("active")
}

function secTopSideEndAnimation(target){
    target.classList.remove("active")
}

function firstTopSideAnimation(target){
    let tragetSide = $.querySelector(".first-top__side")
    tragetSide.classList.add("active")
}

function firstTopSideEndAnimation(target){
    target.classList.remove("active")
}

window.addEventListener("resize" , () => {
    let currentWidth = pageSlideContainer.clientWidth
    pgfiInfo.forEach(item => {
        item.style.maxWidth = `${currentWidth - 155}px`
    })
})// just for setup width for an element => .pgfi-item