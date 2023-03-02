const menuList = [
    {id: 1 , text: "سلام" , link:"#" },
    {id: 2 , text: "سلام" , link:"#" },
    {id: 3 , text: "سلام" , link:"#" },
    {id: 4 , text: "سلام" , link:"#" },
    {id: 5 , text: "سلام" , link:"#" },
    {id: 6 , text: "سلام" , link:"#" },
    {id: 7 , text: "سلام" , link:"#" },
    {id: 8 , text: "سلام" , link:"#" },
    {id: 9 , text: "سلام" , link:"#" },
]

const allMenuItems = document.querySelectorAll(".mn-menubar")

allMenuItems.forEach(item => {
   if(menuList[+item.dataset.menu - 1]){
    item.querySelector("a").innerHTML = menuList[+item.dataset.menu - 1].text
    item.querySelector("a").href = menuList[+item.dataset.menu - 1].link
    console.log(allMenuItems)
   }
})