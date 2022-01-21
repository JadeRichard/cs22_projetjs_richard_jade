let navbar = document.querySelector("nav")
let all_navbar1 = document.querySelector("b")
let all_navbar2 = document.querySelector(".hongo>a")
let all_navbar3 = document.querySelectorAll("ul>li>a")
let header = document.querySelector("header")

navbar.classList.add("navbar_js")

window.addEventListener("scroll", () =>{
    let scrolled = window.scrollY
    console.log(scrolled)
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
