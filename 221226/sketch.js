var fx = []
var fy = []
var fs = []
var fa = []
var fb = []
var fc = []
var fn 
var song
var songIsplay=false
var amp
var vol=0
var m_x,m_y
var mosueIsplay=true
var myRec = new p5.SpeechRec();
var result
function preload(){
  song = loadSound(" BLACKPINK - ‘Typa Girl’ (Official Audio).mp3");
}
function mousePressed(){
  if(!songIsplay){
  song.play()
  songIsplay = true
  amp=new p5.Amplitude() 
  }
  else{
    song.pause()
    songIsplay = false
  } 

}


function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES)
    fn = 3
    for( var i =0;i<fn;i++){
    fs [i] = random(200,300)
    fx [i] = random(100,width)
    fy [i] = random(100,height)
    fa [i] = random(0,255)
    fb [i] = random(0,255)
    fc [i] = random(0,255)
}
    }

function draw() {
background(220)
for(var j=0;j<fn;j++)
{
push()
translate(fx[j],fy[j])
let ft = fs[j]
 
noStroke()
 fill(fa[j],fb[j],fc[j])
 ellipse(0,0,ft)//身
 fill(fb[j],fc[j],fa[j])
 ellipse(0,-ft/2,ft/2,ft/3)//頭
 ellipse(ft/3,ft/2,ft/3)//右腳
 ellipse(-ft/3,ft/2,ft/3)//左腳
 ellipse(ft/2,-ft/5,ft/2,ft/4)
 ellipse(-ft/2,-ft/5,ft/2,ft/4)

fill(fc[j],fa[j],fb[j])
triangle(0,-ft/0.75,-ft/3,-ft/1.65,ft/3,-ft/1.65)
 //右眼
 fill(0)
 ellipse(-ft/5+map(mouseX,0,width,-ft/40,ft/12),-ft/1.75+map(mouseY,0,height,-ft/40,ft/12),ft/20)
 ellipse(ft/5+map(mouseX,0,width,-ft/40,ft/12),-ft/1.75+map(mouseY,0,height,-ft/40,ft/12),ft/20)

 fill(255,0,0)
  arc(0,-ft/2.15,ft/5,ft/4,0,180)
  fill("#CDA581")
  if(mouseIsPressed)
  {
  arc(0,-ft/2,ft/2,ft/10,0,180)
  }
  else
  {
  arc(0,-ft/2,ft/2,ft/5,0,180)
  }
  if(!songIsplay){
    arc(0,-ft/2,ft/2,ft/5,0,180)
  }
  else{
    vol = amp.getLevel()
    arc(0,-ft/2,ft/2,map(vol,0,0.1,ft/8,ft/6),0,180)
  }
noFill()
pop()
}
}