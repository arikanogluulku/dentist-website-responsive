var menuBtn = document.getElementById("menuBtn").addEventListener("click",menuOprtn)
var sideNav = document.getElementById("sideNav")
var menu= document.getElementById("menu")

sideNav.style.right ="-200px"

function menuOprtn(){
    if(sideNav.style.right=="-200px"){
        sideNav.style.right="0";
        menu.src="assets/close.png";
    }else{
        sideNav.style.right="-200px"
        menu.src="assets/menu.png";
    }
}