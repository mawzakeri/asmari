
let menuItemCollapse
const menuCollapseContainer = document.querySelector(".menubar-select__items")
let activeCollapseItems = 1;
const menuItemsData = [
    {page: 1 , title:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از بیمه، و با استفاده از طراحان گرافیک است، چاپگرها" , text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از بیمه، و با استفاده از طراحان گرافیک است، چاپگرها"},
    {page: 1 , title:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از بیمه، و با استفاده از طراحان گرافیک است، چاپگرها" , text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از بیمه، و با استفاده از طراحان گرافیک است، چاپگرها"},
    {page: 1 , title:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از بیمه، و با استفاده از طراحان گرافیک است، چاپگرها" , text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از بیمه، و با استفاده از طراحان گرافیک است، چاپگرها"},
    {page: 2 , title:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از بیمه، و با استفاده از طراحان گرافیک است، چاپگرها" , text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از بیمه، و با استفاده از طراحان گرافیک است، چاپگرها"},
    {page: 2 , title:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از بیمه، و با استفاده از طراحان گرافیک است، چاپگرها" , text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از بیمه، و با استفاده از طراحان گرافیک است، چاپگرها"},
    {page: 2 , title:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از بیمه، و با استفاده از طراحان گرافیک است، چاپگرها" , text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از بیمه، و با استفاده از طراحان گرافیک است، چاپگرها"},
    {page: 3 , title:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از بیمه، و با استفاده از طراحان گرافیک است، چاپگرها" , text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از بیمه، و با استفاده از طراحان گرافیک است، چاپگرها"},
    {page: 3 , title:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از بیمه، و با استفاده از طراحان گرافیک است، چاپگرها" , text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از بیمه، و با استفاده از طراحان گرافیک است، چاپگرها"},
    {page: 3 , title:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از بیمه، و با استفاده از طراحان گرافیک است، چاپگرها" , text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از بیمه، و با استفاده از طراحان گرافیک است، چاپگرها"},
    {page: 4 , title:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از بیمه، و با استفاده از طراحان گرافیک است، چاپگرها" , text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از بیمه، و با استفاده از طراحان گرافیک است، چاپگرها"},
    {page: 4 , title:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از بیمه، و با استفاده از طراحان گرافیک است، چاپگرها" , text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از بیمه، و با استفاده از طراحان گرافیک است، چاپگرها"},
    {page: 4 , title:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از بیمه، و با استفاده از طراحان گرافیک است، چاپگرها" , text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از بیمه، و با استفاده از طراحان گرافیک است، چاپگرها"},
    {page: 5 , title:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از بیمه، و با استفاده از طراحان گرافیک است، چاپگرها" , text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از بیمه، و با استفاده از طراحان گرافیک است، چاپگرها"},
    {page: 5 , title:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از بیمه، و با استفاده از طراحان گرافیک است، چاپگرها" , text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از بیمه، و با استفاده از طراحان گرافیک است، چاپگرها"},
    {page: 5 , title:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از بیمه، و با استفاده از طراحان گرافیک است، چاپگرها" , text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از بیمه، و با استفاده از طراحان گرافیک است، چاپگرها"},
    {page: 6 , title:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از بیمه، و با استفاده از طراحان گرافیک است، چاپگرها" , text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از بیمه، و با استفاده از طراحان گرافیک است، چاپگرها"},
    {page: 6 , title:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از بیمه، و با استفاده از طراحان گرافیک است، چاپگرها" , text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از بیمه، و با استفاده از طراحان گرافیک است، چاپگرها"},
    {page: 6 , title:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از بیمه، و با استفاده از طراحان گرافیک است، چاپگرها" , text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از بیمه، و با استفاده از طراحان گرافیک است، چاپگرها"},
]/// when add one OBJ at this array...
///adding a collapse box whith this information
const mnsListItem = document.querySelectorAll(".mns-list__item")


mnsListItem.forEach(list => {
    list.addEventListener("click" , e => {
        mnsListItem.forEach(item => {
            item.classList.remove("active")
        })
        activeCollapseItems = +e.target.dataset.page
        e.target.classList.add("active")
        handleItemsMenu()
    })
})// Add/remove the active line for the menu bar and display its child boxes

window.onload = () => {
    handleItemsMenu()
} // setup list in DOM when Loading

function handleItemsMenu(){
    menuCollapseContainer.innerHTML = ""
    menuItemsData.forEach(item => {
        if(activeCollapseItems == item.page){
            insertItemMenuDOM(item)
        }
    })
}// for update list


function insertItemMenuDOM(item){
    menuCollapseContainer.classList.remove("active")
    menuCollapseContainer.innerHTML += `
            <div class="mns-item" data-collapse="true">
                <div class="mns-item__title">
                    <p class="bold-text">
                        ${item.title}
                    </p>
                    <i class="fa icon-plus"></i>
                </div>
                <div class="collapsed">
                    <div class="collapsed-para">
                        <p class="para">
                            ${item.text}
                        </p>
                    </div>
                </div>
            </div>
    `
    menuItemCollapse = document.querySelectorAll(".mns-item__title")
    menuItemCollapse.forEach(itemx => {
        itemx.addEventListener("click" , e => expendMenu(e , item))
    })
    setTimeout(() => {
        menuCollapseContainer.classList.add("active")
    } , 400)
}//make box in DOM whith array info

function expendMenu(e , item){
    if(e.target.nodeName == "I" || e.target.nodeName == "P"){
        target = e.target.parentElement.parentElement
    }
    else{
        target = e.target.parentElement
    }
    if(target.dataset.collapse == "true"){
        target.querySelector(".fa").classList.remove("icon-plus")
        target.querySelector(".fa").classList.add("icon-minus")
        target.dataset.collapse = "false";
        target.classList.add("active")
        let targetMenu = target.querySelector(".collapsed")
        let para = targetMenu.querySelector(".para")
        let heightMenu = para.clientHeight + 45
        targetMenu.style.height = `${heightMenu}px`
    }
    else{
        target.querySelector(".fa").classList.remove("icon-minus")
        target.querySelector(".fa").classList.add("icon-plus")
        let targetMenu = target.querySelector(".collapsed")
        target.dataset.collapse = "true";
        target.classList.remove("active")
        targetMenu.style.height = `0px`
    }
}// click to a Box and expend it !
