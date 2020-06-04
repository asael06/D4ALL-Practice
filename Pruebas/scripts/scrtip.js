var char = document.getElementById('char')
var position = char.getBoundingClientRect()
var topM = position.top
var score = document.getElementById('score')
var contScore = 0
var mario = {
    y: topM,
    vy:0,
    gravedad:10,
    salto: 60,
    vymax: 200,
    saltando:false
}
document.addEventListener('keydown', e => {
    if(e.keyCode == 32 && mario.y >= topM) jump()          
})

function jump(){       
    mario.saltando = true
    mario.vy = mario.salto               
    char.style.webkitAnimationPlayState = "none"    
    char.style.backgroundPosition = "406px -380px"      
}

function pintar(){
    char.style.top = `${mario.y}px`       
}

function gravedad(){
    if(mario.saltando == true){        

        if(mario.y - mario.vy - mario.gravedad > topM){
            mario.saltando = false
            mario.vy = 0
            mario.y = topM                        
        }
        else{            
            mario.vy -= mario.gravedad
            mario.y -= mario.vy           
        }
    }else {
        char.style.webkitAnimationPlayState = "running"
        char.style.backgroundPosition = "10px -180px"
    }
}


var FPS = 20
setInterval(function(){
    principal()
},1200/FPS)

setInterval(() => {
    score.innerHTML = contScore += 1
}, 50);

function principal(){    
    gravedad()   
    pintar()    
}

function harder(){

}