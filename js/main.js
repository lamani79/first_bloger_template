
let mb_nav_btn = document.getElementById("mb-nav-draw");
let main_nav = document.getElementById('main_nav');
let over_lay_of_nav = document.getElementById('over_lay_of_nav');
let is_open = 0;
function mb_nav_bollet_style(is_open) {
    is_open == 0 ? mb_nav_btn.classList.add("mb-nav-draw_oppen") : mb_nav_btn.classList.remove('mb-nav-draw_oppen');
}
function open_mb_nav_style(is_open) {
    if (is_open == 0) {
        main_nav.style.right = '0%';
        over_lay_of_nav.classList.add("over_lay_of_nav_on");
        over_lay_of_nav.classList.remove("over_lay_of_nav_off");

    }
    else {
        main_nav.style.right = '-52%';
        over_lay_of_nav.classList.remove("over_lay_of_nav_on");
        over_lay_of_nav.classList.add("over_lay_of_nav_off");



    }
}
// ##################################################
var ok_media_for_nav = window.matchMedia("(max-width: 576px)");

function myFunction() {
    is_open = 0;
    open_mb_nav_style()
    mb_nav_bollet_style()

    x = ok_media_for_nav;
    if (x.matches) { // If media query matches
        mb_nav_btn.style.display = 'flex';

    } else {
        mb_nav_btn.style.display = 'none';
    }
}

myFunction() // Call listener function at run time
ok_media_for_nav.addListener(myFunction) // Attach listener function on state changes

// ########################################################






mb_nav_btn.onclick = click_mb_nav;

function click_mb_nav() {
    if (is_open == 0) {
        mb_nav_bollet_style(is_open);
        open_mb_nav_style(is_open);
        is_open = 1;
    }
    else {
        mb_nav_bollet_style(is_open);
        open_mb_nav_style(is_open);
        is_open = 0;

    }


}
