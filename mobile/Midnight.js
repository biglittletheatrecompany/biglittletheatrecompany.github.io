midnight = false
function checkMidnight(){
    time = new Date()
    if(time.getHours() == 0 && time.getMinutes() == 0){
        console.log("midnight")
        if(!midnight){
            document.getElementById("content").src = "pages/midnight.html"
        }
        midnight = true
    }else{
        if(midnight){
            document.getElementById("content").src = "pages/"+SelectedBtn+".html"
            midnight = false
        }
    }
}
setInterval(checkMidnight,1000)