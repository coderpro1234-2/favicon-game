let canvas = document.getElementById('favicon');
let ctx = canvas.getContext('2d');
let faviconimg = ''
let pl1x = 0
let pl1y = 0
let plx = 8
let ply = 8
let e = ""
draw_player()
function set_favicon(image) {
  document.getElementById('game').href = 'back.jpg'
  document.getElementById('game').href = image
}
function draw_player() {
  canvas.width = canvas.width
  canvas.height = canvas.height
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#000000'
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(plx, ply, 4, 4);
  ctx.stroke()
  faviconimg = document.getElementById('favicon').toDataURL()
  set_favicon(faviconimg)
}
function move_player(e) {
  if (e == "w" || e == "ArrowUp") {
    if (ground == 'yes') {
      pl1y = -0.3
      ground = 'no'
    }
  }
  if (e == "a" || e == "ArrowLeft") {
    pl1x -= 0.5
  }
  if (e == "d" || e == "ArrowRight") {
    pl1x += 0.5
  }
}
function move() {
  pl1y += 0.01
  pl1x = pl1x * 0.6
  plx += pl1x
  if (plx > canvas.width-4) {
    if (ground == 'no') {
      pl1y = -0.2
      pl1x = -0.8
    }
    else {
      plx = canvas.width-4
      pl1x = 0
    }
  }
  if (plx < 0) {
    if (ground == 'no') {
      pl1y = -0.2
      pl1x = 0.8
    }
    else {
      plx = 0
      pl1x = 0
    }
  }
  ply += pl1y
  if (ply > canvas.height-4) {
    ply = canvas.height-4
    pl1y = 0
    ground = 'yes'
  }
  if (ply < 0) {
    ply = 0
    pl1y = 0
  }
  draw_player()
}
window.addEventListener("keydown", function(e) {
  move_player(e.key)
})
setInterval(function(e){
  move()
}, 10)