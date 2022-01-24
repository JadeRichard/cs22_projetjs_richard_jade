let navbar = document.querySelector("nav")
let all_navbar1 = document.querySelector("b")
let all_navbar2 = document.querySelector(".hongo>a")
let all_navbar3 = document.querySelectorAll("ul>li>a")
let header = document.querySelector("header")

navbar.classList.add("navbar_js")

window.addEventListener("scroll", () =>{
    let scrolled = window.scrollY
    if (scrolled >= 1000){
        navbar.classList.add("navbar_js_bg")
        all_navbar1.classList.add("navbar_js_bg")
        all_navbar2.classList.add("navbar_js_bg")
        all_navbar3.forEach(element => {
            element.classList.add("navbar_js_bgw")
        })
    } else {
        navbar.classList.remove("navbar_js_bg")
        all_navbar1.classList.remove("navbar_js_bg")
        all_navbar2.classList.remove("navbar_js_bg")
        all_navbar3.forEach(element => {
            element.classList.remove("navbar_js_bgw")
        })
    }
})

let modal = document.querySelector("#modal")

let section_3 = document.querySelector(".section_3")
section_3.style.height = "fit-content"
let title_1 = document.createElement("h2")
title_1.textContent = "Recent Products"
let title_p = document.createElement("p")
title_p.textContent = "Lorem Ipsum is symply dummy text of the printing and typesetting industry printing and industry"
let full_title = document.createElement("div")
let rowb = document.createElement("div")
rowb.setAttribute("class","row")
title_1.style.width = "fit-content"
title_1.style.margin = "auto"
title_p.style.width = "400px"
title_p.style.textAlign = "center"
title_p.style.margin = "auto"
title_p.style.color = "#00000078"
full_title.appendChild(title_1)
full_title.appendChild(title_p)
rowb.appendChild(full_title)
rowb.style.padding = "100px 0px 100px 0px"
section_3.appendChild(rowb)
let products = [
    {
        nom : "Textured Sweater",
        prix : "$50.00", 
        img : "./../../public/img/fashion/1.jpg"
    },
    {
        nom : "Traveller Shirt",
        prix : "$510.00", 
        img : "./../../public/img/fashion/3.jpg"
    },
    {
        nom : "Crewneck Sweatshirt",
        prix : "$20.00 - $50.00", 
        img : "./../../public/img/fashion/5.jpg"
    },
    {
        nom : "Skinny Trousers",
        prix : "160.00", 
        img : "./../../public/img/fashion/7.jpg"
    },
    {
        nom : "High Neck Sweater",
        prix : "$35.00", 
        img : "./../../public/img/fashion/9.jpg"
    },
    {
        nom : "Sleeve Sweater",
        prix : "$120.00", 
        img : "./../../public/img/fashion/11.jpg"
    },
    {
        nom : "Pocket Sweatshirt",
        prix : "$4100.00", 
        img : "./../../public/img/fashion/13.jpg"
    },
    {
        nom : "Top With Pleated",
        prix : "$20.00 - $50.00", 
        img : "./../../public/img/fashion/15.jpg"
    },
    {
        nom : "Cotton Sweater",
        prix : "$155.00", 
        img : "./../../public/img/fashion/17.jpg"
    },
    {
        nom : "Texture Plain Regular",
        prix : "$7.00", 
        img : "./../../public/img/fashion/19.jpg"
    },

]

let product_alt = ["./../../public/img/fashion/2.jpg","./../../public/img/fashion/4.jpg","./../../public/img/fashion/6.jpg","./../../public/img/fashion/8.jpg","./../../public/img/fashion/10.jpg","./../../public/img/fashion/12.jpg","./../../public/img/fashion/14.jpg","./../../public/img/fashion/16.jpg","./../../public/img/fashion/18.jpg","./../../public/img/fashion/20.jpg"]

let container = document.createElement("div")
let row = document.createElement("div")
let row2 = document.createElement("div")
row.setAttribute("class", "row")
row2.setAttribute("class", "row")
container.setAttribute("class", "container")
container.style.height = "fit-content"
container.style.display = "flex"
container.style.justifyContent = "center"
container.style.flexWrap = "wrap"

let img_div1 = document.createElement("div")
let img_div2 = document.createElement("div")
let img_div3 = document.createElement("div")
let img_div4 = document.createElement("div")
let img_div5 = document.createElement("div")
let img_div6 = document.createElement("div")
let img_div7 = document.createElement("div")
let img_div8 = document.createElement("div")
let img_div9 = document.createElement("div")
let img_div10 = document.createElement("div")

let img_divs = [img_div1, img_div2, img_div3, img_div4, img_div5, img_div6, img_div7, img_div8, img_div9, img_div10]

for (let i = 0; i < 10; i++) {
    section_3.appendChild(container)
    container.appendChild(img_divs[i])
    
}


let n_h = document.querySelector("#nav_heart")
    n_h.style.position = "relative"
    
let count_h = document.createElement("span")
n_h.appendChild(count_h)
let i_h = 0

let n_b = document.querySelector("#nav_basket")
n_b.style.position = "relative"
    
let count_b = document.createElement("span")
n_b.appendChild(count_b)
let i_b = 0


img_divs.forEach(e => {
    e.style.height = "300px"
    e.style.width = "240px"
    e.style.marginRight = "10px"
    e.style.marginBottom = "100px"
    e.style.marginTop = "50px"
    e.style.display = "flex"
    e.style.flexDirection = "column"
    e.style.justifyContent = "center"
    e.style.alignItems = "center"
    let img_inside = document.createElement("img")
    let p_inside = document.createElement("p")
    let span_inside = document.createElement("span")
    e.appendChild(img_inside)
    e.appendChild(p_inside)
    e.appendChild(span_inside)
});
let get_img = document.querySelectorAll(".container>div>img")
for (let i = 0; i < 10; i++) {
    let get_p = document.querySelectorAll(".section_3>.container>div>p")
    let get_span = document.querySelectorAll(".section_3>.container>div>span")
    get_img[i].setAttribute("src", products[i].img) 
    get_img[i].style.height = img_divs[i].style.height
    get_p[i].innerText = products[i].nom
    get_span[i].innerText = products[i].prix
    get_p[i].style.width = "fit-content"
    get_p[i].style.marginTop = "10px"
    get_p[i].style.marginBottom = "0px"
    get_p[i].style.fontWeight = "bold"
    get_span[i].style.color = "#00000078"
    let black_div = document.createElement("div")
    black_div.style.height = "40px", 
    black_div.style.width = "240px"
    black_div.style.backgroundColor = "black"
    black_div.style.position = "absolute"
    black_div.style.marginTop = "204px"
    let bd_div = document.createElement("i")
    let bd_div2 = document.createElement("i")
    black_div.appendChild(bd_div)
    black_div.appendChild(bd_div2)
    bd_div.style.margin = "0px"
    bd_div2.style.margin = "0px"
    black_div.style.display = "flex"
    black_div.style.justifyContent = "space-around"
    black_div.style.alignItems = "center"
    bd_div.style.color = "white"
    bd_div.setAttribute("class", "far fa-heart")
    bd_div2.style.color = "white"
    bd_div2.setAttribute("class", "fas fa-cart-arrow-down")
    

    bd_div.addEventListener("click", () =>{
        i_h++
        count_h.style.marginLeft = "8px"
        count_h.style.padding = "8px 10px 8px 10px"
        count_h.style.borderRadius = "100%"
        count_h.style.backgroundColor = "#ffffff9d"
        count_h.innerText = i_h
    })

    bd_div2.addEventListener("click", () =>{
        i_b++
        count_b.style.marginLeft = "8px"
        count_b.style.padding = "8px 13px 8px 13px"
        count_b.style.borderRadius = "100%"
        count_b.style.backgroundColor = "#ffffff9d"
        count_b.innerText = i_b
    })
    
    count_h.style.fontSize = "12px"
    count_b.style.fontSize = "12px"
    count_b.style.fontWeight = "normal"

    
    img_divs[i].addEventListener("mouseover", () =>{
        get_img[i].setAttribute("src", product_alt[i])
        img_divs[i].appendChild(black_div)
        
    })
    img_divs[i].addEventListener("mouseleave", () =>{
        get_img[i].setAttribute("src", products[i].img)
        img_divs[i].removeChild(black_div)
    })
    
}


const sliders = document.querySelectorAll(".btns>i");
const slides = document.querySelector(".carousel_2");



let section_4 = document.querySelector(".section_4>.center>.carousel>.carousel_2>.col-3")

if (section_4.clientWidth <= 150) {
    console.log("coucou");
    sliders.forEach(e => {
        e.addEventListener("click", () => {
            e.classList.remove("active")
            if (e.classList.contains("first")) {
                slides.style.transform = "translateX(0vw)";
                e.classList.add("active");
              } else if (e.classList.contains("second")) {
                slides.style.transform = "translateX(-22vw)";
              }
        })
    });

} else {
    sliders.forEach(e => {
        e.addEventListener("click", () => {
            e.classList.remove("active")
            if (e.classList.contains("first")) {
                slides.style.transform = "translateX(0vw)";
                e.classList.add("active");
              } else if (e.classList.contains("second")) {
                slides.style.transform = "translateX(-17%)";
              }
        })
    });
}

let toggle = document.querySelector(".fa-adjust")

toggle.addEventListener("click", () =>{
    let section_1 = document.querySelector(".section_1")
    let section_1p = document.querySelectorAll(".small")
    section_1.classList.toggle("dark");
    section_1p.forEach(element => {
        
        element.classList.toggle("dark");
    });
    let section_2 = document.querySelector(".section_2")
    let section_2p = document.querySelectorAll(".title")
    section_2.classList.toggle("dark");
    let section_3 = document.querySelector(".section_3")
    section_3.classList.toggle("dark_alt");
    
    let section_4 = document.querySelector(".section_4")
    section_4.classList.toggle("dark_test");
    let section_5 = document.querySelector(".section_5")
    section_5.classList.toggle("dark_alt");
    let section_6 = document.querySelector(".section_6")
    section_6.classList.toggle("dark");
    let section_7 = document.querySelector(".section_7")
    section_7.classList.toggle("dark_alt");
    let section_8 = document.querySelector(".section_8")
    section_8.classList.toggle("dark");
    let section_9 = document.querySelector(".section_9")
    section_9.classList.toggle("dark");
    section_2p.forEach(element => {
        
        element.classList.toggle("dark");
    });
    
    

})
/* function darkmode() {
    let all = document.querySelectorAll("body").children
    all.classList.toggle("dark");
  } */