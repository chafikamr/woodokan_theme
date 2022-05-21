/*
 ** [ Close Side Menu Button ] 
 */

let close_btn = document.getElementById('close_mobile_sidebar');
let side_menu = document.querySelector('.left-sidebar');
let overlay = document.querySelector('#overlay');

close_btn.addEventListener("click", function() {

    if (side_menu.classList.contains('off')) {
        side_menu.classList.remove('off')
    } else {
        side_menu.classList.add('off')
        overlay.classList.remove('overlay-on')
    }


})


/*
 ** [ Open Side Menu Button ] 
 */


let open_side_menu_btn = document.getElementById('open_side_menu');
open_side_menu_btn.addEventListener('click', function() {

    if (side_menu.classList.contains('off')) {
        side_menu.classList.remove('off')

        overlay.classList.add('overlay-on')
    } else {
        side_menu.classList.add('off')


        overlay.classList.remove('overlay-on')
    }
})



// sticky Header js plugin
let w_out_sticky = document.querySelector(".w-out") // terget class or id
    // hear is  scroll logic
window.addEventListener('scroll', () => {
    window.scrollY > 200 ? w_out_sticky.classList.add("sticky-bar") : w_out_sticky.classList.remove("sticky-bar")
})


// sticky Header js plugin
let w_out_mobile_sticky = document.querySelector(".w-mobile-out") // terget class or id
    // hear is  scroll logic
window.addEventListener('scroll', () => {
    window.scrollY > 200 ? w_out_mobile_sticky.classList.add("sticky-bar") : w_out_mobile_sticky.classList.remove("sticky-bar")
})