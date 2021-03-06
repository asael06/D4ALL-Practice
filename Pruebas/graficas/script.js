var panel = document.getElementById("game")
var position = panel.getBoundingClientRect()
const x = panel.clientWidth
const y = panel.clientHeight 
var node

function main(){    
    node = document.createElement("div")
    node.className = "point"     
    panel.appendChild(node)    
}

var cont=0
function move(nodo){    
    if(cont ==  -100) cont = panel.clientWidth - 20
    nodo.style.top = `${100*(Math.cos(cont/100))+(y/3)}px`
    nodo.style.left = `${cont--}px`
}

var nImage=1
function charMove(){
    node.style.backgroundImage = `url('../Koopa/${nImage}.png')`
    nImage++
    if(nImage == 10) nImage = 1
}

var FPS = 300
setInterval(function(){
    move(node)    
},1000/FPS)

setInterval(function(){
    charMove()
},100)