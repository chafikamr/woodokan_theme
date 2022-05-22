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



/*
 ** sticky Header js plugin
 */

let w_out_sticky = document.querySelector(".w-out")
let header_1 = document.querySelector(".header-1")
window.addEventListener('scroll', () => {
    window.scrollY > 120 ? header_1.classList.add("sticky-bar") : header_1.classList.remove("sticky-bar")

})