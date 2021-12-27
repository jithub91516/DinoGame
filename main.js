var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

var dino = {
  x : 10,
  y :200,
  width : 50,
  height : 50,
  draw(){
    ctx.fillStyle = 'green';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
dino.draw();

class Cactus{
  constructor(){
    this.x = 500;
    this.y = 200;
    this.width = 50;
    this.height = 50;
  }
  draw(){
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

var cactus = new Cactus();
cactus.draw();

var timer = 0;
var cactus여러개 = [];
var 점프timer = 0;

function runByAllFrame(){
  requestAnimationFrame(runByAllFrame);

  timer++;

  ctx.clearRect(0,0, canvas.width, canvas.height);

  if(timer % 144 ===0){
    var cactus = new Cactus();
    cactus여러개.push(cactus);
  }

  cactus여러개.forEach((a, i, o)=>{

    if(a.x < 0){
      o.splice(i,1);
    }

    // a.x--;
    a.draw();
  });

  if(점프중 == true){
    dino.y -= 5;
    점프timer++;
  }
  if(점프중 == false){
    if(dino.y < 200){
      dino.y += 3;
    }
  }

  if(점프timer > 100){
    점프중 = false;
    점프timer = 0;
  }

  dino.draw();
}

runByAllFrame();

var 점프중 = false;

document.addEventListener('keydown', function(e){
  if(e.code === 'Space'){
    점프중 = true;
  }
})