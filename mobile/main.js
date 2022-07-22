SelectedBtn = "Home"
MenuOpen = false
function MenuButtonPress(btn){
    if(SelectedBtn != btn && !midnight){
        document.getElementById(SelectedBtn).className = "menuBtn"
        SelectedBtn = btn
        document.getElementById(SelectedBtn).className = "selectedBtn"
        document.getElementById("content").src = "pages/"+btn+".html"
        MenuOpen = false
        closeLoop = setInterval(CloseMenuAnimation,1)
    }
}
function OpenMenu(){
    openLoop = setInterval(OpenMenuAnimation,1)
}

function OpenMenuAnimation(){
    document.getElementById("menu").style.left = String(Number(document.getElementById("menu").style.left.replace(/[^\d.-]/g, ''))+1)+"%"
    if(document.getElementById("menu").style.left == "0%"){
        MenuOpen = true
        clearInterval(openLoop)
    }
}

function CloseMenuAnimation(){
    document.getElementById("menu").style.left = String(Number(document.getElementById("menu").style.left.replace(/[^\d.-]/g, ''))-1)+"%"
    if(document.getElementById("menu").style.left == "-90%"){
        clearInterval(closeLoop)
    }
}

function init(){
    var menu = document.getElementById('visibleMenu');

    document.addEventListener('click', function(event) {
        var isClickInsideElement = menu.contains(event.target);
        if (!isClickInsideElement && MenuOpen) {
            MenuOpen = false
            closeLoop = setInterval(CloseMenuAnimation,1)
        }
    });
}