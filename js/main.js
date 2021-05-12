
let mb_nav_btn = document.getElementById("mb-nav-draw");
let main_nav = document.getElementById('main_nav');
let over_lay_of_nav = document.getElementById('over_lay_of_nav');
let mb_nav_container = document.querySelector('.mb_nav_container');
let layer1_of_mb_nav = document.querySelector('.layer1');
let layer2_of_mb_nav = document.querySelector('.layer2');


let is_open = 0;



function mb_nav_bollet_style(is_open) {
    is_open == 0 ? mb_nav_btn.classList.add("mb-nav-draw_oppen") : mb_nav_btn.classList.remove('mb-nav-draw_oppen');
}
function open_mb_nav_style(is_open) {


    if (is_open == 0) {
        layer2_of_mb_nav.classList.add('layer2_more_style');
        layer1_of_mb_nav.classList.add('layer1_more_style');


        main_nav.style.right = '0%';

        main_nav.classList.add("open_mb_nav_style");
        layer1_of_mb_nav.classList.add("open_mb_nav_style");
        layer2_of_mb_nav.classList.add("open_mb_nav_style");


        main_nav.classList.remove("close_mb_nav_style");
        layer1_of_mb_nav.classList.remove("close_mb_nav_style");
        layer2_of_mb_nav.classList.remove("close_mb_nav_style");


        over_lay_of_nav.classList.add("over_lay_of_nav_on");
        over_lay_of_nav.classList.remove("over_lay_of_nav_off");

    }
    else {
        layer2_of_mb_nav.classList.remove('layer2_more_style');
        layer1_of_mb_nav.classList.remove('layer1_more_style');


        main_nav.classList.remove("open_mb_nav_style");
        layer1_of_mb_nav.classList.remove("open_mb_nav_style");
        layer2_of_mb_nav.classList.remove("open_mb_nav_style");


        main_nav.classList.add("close_mb_nav_style");
        layer1_of_mb_nav.classList.add("close_mb_nav_style");
        layer2_of_mb_nav.classList.add("close_mb_nav_style");

        main_nav.style.right = '-52%';
        over_lay_of_nav.classList.remove("over_lay_of_nav_on");
        over_lay_of_nav.classList.add("over_lay_of_nav_off");




    }
}
// ##################################################
var ok_media_for_nav = window.matchMedia("(max-width: 760px)");

function myFunction() {
    is_open = 0;
    open_mb_nav_style()
    mb_nav_bollet_style()

    x = ok_media_for_nav;
    if (x.matches) { // If media query matches
        mb_nav_btn.style.display = 'flex';
        mb_nav_container.style.visibility = 'visible'


    } else {
        mb_nav_btn.style.display = 'none';
        mb_nav_container.style.visibility = 'hidden';

    }
}

myFunction() // Call listener function at run time
ok_media_for_nav.addListener(myFunction) // Attach listener function on state changes

// ########################################################


mb_nav_btn.onclick = click_mb_nav;
// to close nav when click to over lay no nav space
over_lay_of_nav.onclick = function () {
    click_mb_nav();
}

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



// ########################################################
// scroll to top with btn
let btn_to_top = document.getElementById('btn_to_top');
let top_btn_icon = document.querySelector('#btn_to_top img');
btn_to_top.onclick = scroll_to_top;
function scroll_to_top() {
    window.scrollTo(0, 0);
}
window.addEventListener('scroll', show_top_btn_or_not);
function show_top_btn_or_not(e) {
    if (scrollY >= 800) {
        btn_to_top.style.visibility = 'visible';
        btn_to_top.style.opacity = '1';
    } else {
        btn_to_top.style.visibility = 'none';
        btn_to_top.style.opacity = '0';
    }
}
// luch function on window loading
show_top_btn_or_not();

// let btn = document.getElementById("btn");
// document.querySelector('#dark_mode_btn').addEventListener('click', function () {
//     document.body.classList.toggle('dark');
// });

function turn_dark() {
    document.body.classList.toggle('dark');
}
// #############################################################



// Selecting all the required classes from HTML to change 
var body = document.body
var check = document.querySelector('#check')
var box = document.querySelector('.box')
var ball = document.querySelector('.ball')





// Adding an eventListener function to change color everytime var check is changed.(checked & unchecked)

check.addEventListener('change', function () {
    turn_dark()
    //   conditions to apply when checkbox is checked

    if (this.checked == true) {
        box.setAttribute('style', 'background-color:white;')
        ball.setAttribute('style', 'transform:translatex(100%);')
        // body.setAttribute('style','background-color:black; color:white;') 






    }

    //   conditions to apply when checkbox is unchecked

    if (this.checked == false) {
        box.setAttribute('style', 'background-color:black; color:white;')
        ball.setAttribute('style', 'transform:translatex(0%);')







    }
})
