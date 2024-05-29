let largura = 550
let altura = 400
let xbolinha = 200
let ybolinha = 200
let xraquete = 5
let yraquete = altura/2
let xraqueteop = 535
let yraqueteop = 200
let raquetelarg = 10
let raquetealt = 100
let diametro = 30
let raio = diametro/2
let xvelocidade = 5
let yvelocidade = 5
let yvelocidadeop;
let colidiu = false
let minhapontuacao = 0
let pontuacaoop = 0

function setup() {
  createCanvas(largura,altura);
}

function draw() {
  background(0);
createcircle();
movimentobolinha();
 bateevolta(); 
criaraquete();
sobedesce();
colisaoraquete();
criaraqueteop ();
  movimentoop();
  colisaoraqueteop(); 
  criaplacar();
  marcaponto();
}

function createcircle(){circle(xbolinha,ybolinha,diametro)}
function movimentobolinha(){xbolinha += xvelocidade
ybolinha += yvelocidade}
function bateevolta (){ if (xbolinha + raio > largura || xbolinha - raio < 0)
xvelocidade *= -1
 if (ybolinha + raio > 400 || ybolinha - raio < 0)
yvelocidade *= -1}
function criaraquete(){

rect(xraquete,yraquete,raquetelarg,raquetealt)}

function sobedesce(){
if (keyIsDown(UP_ARROW))
yraquete -= 10
if (keyIsDown(DOWN_ARROW))
yraquete += 10}
function colisaoraquete(){if (xraquete + raquetelarg > xbolinha - raio &&
   ybolinha - raio < yraquete + raquetealt &&
    ybolinha + raio > yraquete) 
xvelocidade *= -1}
function criaraqueteop(){
  rect(xraqueteop,yraqueteop,raquetelarg,raquetealt)
} 
function movimentoop (){
  yvelocidadeop = ybolinha - yraqueteop - raquetelarg/2 -111
  yraqueteop += yvelocidadeop
}
function colisaoraqueteop(){
 colidiu = collideRectCircle(xraqueteop, yraqueteop,raquetelarg,raquetealt,xbolinha,ybolinha,diametro)
  if (colidiu)
xvelocidade *= -1
}
function criaplacar (){
  fill(color(255,140,0)) 
  rect(194,10,50,40)
  rect (350,10,50,40)
  fill(255)
  
  text (pontuacaoop, 360, 40)
  fill(255)
  textSize(40)
  text (minhapontuacao, 200, 40)
}
function marcaponto() {
  if (xbolinha < 15)
    pontuacaoop += 1
  if (xbolinha > 535)
     minhapontuacao += 1
}
