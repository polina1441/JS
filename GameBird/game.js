var cvs = document.getElementById("canvas");
var context = cvs.getContext("2d")

var score = 0

var bird = new Image()
var backGround = new Image()
var foreGround = new Image()
var pipeUp = new Image()
var pipeBottom = new Image()

var fly = new Audio()
var score_audio = new Audio()

bird.src = "img/flappy_bird_bird.png"
backGround.src = "img/flappy_bird_bg.png"
foreGround.src = "img/flappy_bird_fg.png"
pipeUp.src = "img/flappy_bird_pipeUp.png"
pipeBottom.src = "img/flappy_bird_pipeBottom.png"
score_audio.src = "songs/score.mp3"
fly.src = "songs/fly.mp3"

var gap = 90
var xPos = 25
var yPos = 150
var grav = 1.5

document.addEventListener("keydown", moveUp)
function moveUp(){
    yPos -= 25
    fly.play()
}
var pipe = []
pipe[0] = {
    x : cvs.width,
    y : 0
}
function draw(){
    context.drawImage(backGround, 0, 0)
    for (var i=0; i < pipe.length; i++){
        context.drawImage(pipeUp, pipe[i].x, pipe[i].y)
        context.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap)
        pipe[i].x--

        if (pipe[i].x == 125){
            pipe.push({
                x : cvs.width,
                y : Math.floor(Math.random() * pipeUp.height) - pipeUp.height
            })
        }

    if (xPos + bird.width >= pipe[i].x
        && xPos <=pipe[i].x + pipeUp.width
        && (yPos <=pipe[i].y + pipeUp.height
            || yPos + bird.height >= pipe[i].y + pipeUp.height + gap)
    || yPos + bird.height >= cvs.height - foreGround.height){
        location.reload()
    }
    if (pipe[i].x == 5){
        score += 10
        score_audio.play()
    }
}
    context.drawImage(foreGround, 0, cvs.height - foreGround.height)
    context.drawImage(bird, xPos, yPos)

    yPos += grav
    context.fillStyle = "#000"
    context.font = "24px Verdana"
    context.fillText("Score: " + score, 10, cvs.height - bird.height)
    requestAnimationFrame(draw)
}
pipeBottom.onload = draw