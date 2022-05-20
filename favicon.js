//Variables
let canvas = document.getElementById('favicon');
let ctx = canvas.getContext('2d');
let counter = 5
let xchange = 1
let ychange = 0
let playerx = 1
let playery = 0
let applex = 8
let appley = 8
let snakelength = 1
let count = 0
const snake = []
//Functions
function set_favicon(image) {
  document.getElementById('game').href = 'back.jpg'
  document.getElementById('game').href = image
}
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function change_player(e){
  if (e == 'ArrowUp' || e == 'w') {
    xchange = 0
    ychange = -1
  }
  if (e == 'ArrowDown' || e == 's') {
    xchange = 0
    ychange = 1
  }
  if (e == 'ArrowLeft' || e == 'a') {
    xchange = -1
    ychange = 0
  }
  if (e == 'ArrowRight' || e == 'd') {
    xchange = 1
    ychange = 0
  }
}
function move_player() {
  playerx += xchange
  if (playerx < 0) {
    playerx = 15
  }
  if (playerx > 15) {
    playerx = 1 
  }
  playery += ychange
  if (playery < 0) {
    playery = 15
  }
  if (playery > 15) {
    playery = 1 
  }
}
function snake_tail() {
  snake.push(playerx)
  snake.push(playery)
  while ((snake.length/2)>snakelength)
  snake.splice(0,1)
}
function apple_check() {
  if (playerx == applex && playery == appley) {
    snakelength += 1
    while (playerx == applex && playery == appley) {
      applex = getRndInteger(0, 15)
      appley = getRndInteger(0, 15)
    }
  }
}
function engine(){
  counter = counter - 1
  if (counter < 1) {
    move_player()
    snake_tail()
    counter = 40
  } 
  draw_game()
  apple_check()
}
function draw_snake() {
  ctx.fillStyle = '#00ff00'
  count = 0
  while (count < (snake.length)-1) {
    ctx.fillRect(snake[count], snake[count+1], 1, 1);
    count += 2
  }
}
function draw_game(){
  canvas.width = canvas.width
  canvas.height = canvas.height
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#000000'
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#ff0000'
  ctx.fillRect(applex, appley, 1, 1);
  draw_snake()
  ctx.stroke()
  faviconimg = document.getElementById('favicon').toDataURL()
  set_favicon(faviconimg)
}
//Game Loop
window.addEventListener("keydown", function(i1) {
  change_player(i1.key)
})
setInterval(function(e){
  engine()
}, 10)