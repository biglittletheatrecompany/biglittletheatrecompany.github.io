const PHOTONUM = 49
selectedPhoto = 0
photoSelected = false
function renderPhotos(){
    for(i=0; i<PHOTONUM; i++){
        document.body.innerHTML += "<img src='../Gallery/img"+i+".jpg' style='height: 20vw; z-index: 1; padding: 1%' onclick='selectPhoto("+i+")' id='img"+i+"'>"
    }
}
function selectPhoto(id){
    selectedPhoto = id
    displayedPhoto = id
    currentScroll = document.documentElement.scrollTop
    oldDimensions = {h: document.getElementById("img"+id).offsetHeight,w: document.getElementById("img"+id).offsetWidth}
    document.getElementById("img"+selectedPhoto).style.zIndex = "2"
    document.getElementById("img"+id).style.height = window.innerHeight*0.9+"px"
    pos = document.getElementById("img"+id).getBoundingClientRect()
    var tempPos = []
    for(i=0; i<PHOTONUM; i++){
        tempPos.push(document.getElementById("img"+i).getBoundingClientRect())
    }
    for(i=0; i<PHOTONUM; i++){
        document.getElementById("img"+i).style.left = String(tempPos[i].left) + "px"
        document.getElementById("img"+i).style.top = String(tempPos[i].top) + "px"
        document.getElementById("img"+i).style.position = "absolute"
        if(i != id){
            document.getElementById("img"+i).style.display = "none"

        }
    }
    const buttons = document.querySelectorAll('.selectedImageButtons');
    buttons.forEach(button => {
        button.style.opacity = '0.4';
    })
    setTimeout(move, 1, id, String((window.innerWidth/2) - (oldDimensions.w*(window.innerHeight*0.9/oldDimensions.h))/2) + "px", "5%")
    
}

function move(id, x, y){
    document.getElementById("img"+id).style.left = x
    document.getElementById("img"+id).style.top = y
}

function EndMove(id){
    for(i=0; i<PHOTONUM; i++){
        document.getElementById("img"+i).style.position = "static"
        document.getElementById("img"+i).style.display = "initial"
    }
    document.documentElement.scrollTop = currentScroll
    document.getElementById("img"+selectedPhoto).style.zIndex = "1"
}

function deselect(){
    document.getElementById("img"+selectedPhoto).src = "../Gallery/img"+selectedPhoto+".jpg"
    document.getElementById("img"+selectedPhoto).style.height = "20vw"
    document.getElementById("img"+selectedPhoto).style.top = String(pos.top) + "px"
    document.getElementById("img"+selectedPhoto).style.top = String(pos.top) + "px"
    const buttons = document.querySelectorAll('.selectedImageButtons');
    buttons.forEach(button => {
        button.style.opacity = '0';
    })
    for(i=0; i<PHOTONUM; i++){
        document.getElementById("img"+i).style.display = "initial"
    }
    setTimeout(move, 1, selectedPhoto, String(pos.left)+"px", String(pos.top)+"px")
    setTimeout(EndMove, 500, "img"+selectedPhoto)
}

function changeImage(direction){
    displayedPhoto += direction
    console.log(displayedPhoto)
    if(displayedPhoto < 0){
        displayedPhoto = PHOTONUM-1
    }
    if(displayedPhoto > PHOTONUM-1){
        displayedPhoto = 0
    }
    console.log(displayedPhoto)
    document.getElementById("img"+selectedPhoto).src = "../Gallery/img"+displayedPhoto+".jpg"
    move(selectedPhoto, String((window.innerWidth/2) - (document.getElementById("img"+selectedPhoto).width)/2) + "px", "5%")
}