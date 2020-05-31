var panel = document.getElementById("plano")
var position = panel.getBoundingClientRect()
const x = panel.clientWidth
const y = panel.clientHeight 
var node

console.log(x,y)

function main(){    
    node = document.createElement("div")
    node.className = "point"     
    panel.appendChild(node)    
}

var cont=0
function move(nodo){    
    if(cont ==  0) cont = panel.clientWidth - 20
    nodo.style.top = `${100*(Math.cos(cont/50))+(y/2)}px`
    nodo.style.left = `${cont--}px`
}

var nImage=1
function charMove(){
    node.style.backgroundImage = `url('../Koopa/${nImage}.png')`
    nImage++
    if(nImage == 10) nImage = 1
}

var FPS = 100
setInterval(function(){
    move(node)    
},1000/FPS)

setInterval(function(){
    charMove()
},100)