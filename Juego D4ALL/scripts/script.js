var char = document.getElementById('char')
var pnl = document.getElementById('game')
var score = document.getElementById('score')
var position = char.getBoundingClientRect()
var topM = 220
var contScore = 0
var x = pnl.clientWidth
var y = pnl.clientHeight
var node = document.createElement("div")


var mario = {
    y: topM,
    vy:0,
    gravedad:10,
    salto: 60,
    vymax: 200,
    saltando:false,
    dead: false
}

var enemy = {
    px: x,
    py: (y/2),
    imgs: 'url(../img/)'    
}

function createEnemy(){    
    node.className = "point"     
    pnl.appendChild(node)
    node.style.left = `${enemy.px}px`    
    node.style.top = `${enemy.py}px`        
}

var contE = pnl.clientWidth - 20
function moveEnemy(){    
    if(contE <= -100) contE = pnl.clientWidth - 20
    node.style.top = `${100*(Math.cos(contE/200))+(y/3)}px`
    node.style.left = `${contE-=30}px`
}

document.addEventListener('keydown', e => {
    if(e.keyCode == 32 && mario.y >= topM) 
        if(mario.dead == false) jump() 
    if(e.keyCode == 10 && mario.dead) reload()
})

function reload(){location.reload(true)}

function jump(){       
    mario.saltando = true
    mario.vy = mario.salto                         
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
    }
}

var step = 0
function walking(){
    if(mario.saltando){
        char.style.backgroundImage = `url(../img/Mario/3.png)`    
    }else{
        char.style.backgroundImage = `url(../img/Mario/${step++}.png)`    
        char.style.backgroundImage = `url(../img/Mario/${step}.png)`
        if(step == 2)step = 0
    }
}

var enemyFPS = 1
function enemyAnimation(){
    node.style.backgroundImage = `url(../img/Koopa/${enemyFPS}.png) `    
    enemyFPS++
    if(enemyFPS == 10) enemyFPS = 1
}

function principal(){    
    gravedad()   
    pintar()    
}

function nodesX(a){
    if(a.getBoundingClientRect().left <= 350 && a.getBoundingClientRect().left >= 270)
        return true
    else return false
}

function nodesY(a,b){
    if(a.getBoundingClientRect().top >= 260 && (b.getBoundingClientRect().top >= 193 && b.getBoundingClientRect().top <= 273))
        return true
    else return false
}

function scoreCounter(){
    contScore += 100
    score.innerHTML = 'score: '+contScore
}

var FPS = 10
var interval = setInterval(function(){  
    principal()
    moveEnemy()  
    scoreCounter()
    if(nodesY(node,char))
        if(nodesX(node))
        {
            pnl.style.animationPlayState = 'paused'
            char.style.backgroundImage = `url(../img/Mario/5.png)`        
            clearInterval(interval2)
            clearInterval(interval)
            mario.dead = true        
        }    
},1000/FPS)


var interval2 = setInterval(() => {
    enemyAnimation()
    walking()   
}, 100);



