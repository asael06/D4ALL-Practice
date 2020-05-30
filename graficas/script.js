var panel = document.getElementById("plano")
var position = panel.getBoundingClientRect()
const x = panel.clientWidth
const y = panel.clientHeight 
var node,node2,node3

console.log(x,y)

function main(){    
    node = document.createElement("div")
    node.className = "point"     
    panel.appendChild(node)
    node2 = document.createElement("div")
    node2.className = "point"     
    //panel.appendChild(node2)
}
var FPS = 100
setInterval(function(){
    move(node)
    //move2(node2)
},1000/FPS)

var cont=0
var cont2=0
function move(nodo){    
    if(cont ==  0) cont = panel.clientWidth - 20
    nodo.style.top = `${100*(Math.cos(cont/50))+(y/2)}px`
    nodo.style.left = `${cont--}px`
}

function move2(nodo){    
    if(cont2 ==  0) cont2 = panel.clientWidth - 20
    nodo.style.top = `${-100*Math.cos(cont2/20)+(y/2)}px`
    nodo.style.left = `${cont2--}px`
}