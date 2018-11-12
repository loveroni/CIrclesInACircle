
function setup() {
  createCanvas(500,500);
  background(223, 209, 190);
}

function draw() {
fill(60,130,114,50);
noStroke();
quad(91,0,165,0,500,304,500,500);

fill(203,164,107,50);
noStroke();
quad(462,0,500,0,55,500,0,379);
triangle(0,500,55,500,0,379);

//smallC
fill(171,36,51);
stroke(0);
ellipse(229, 69, 10,10);

//pinkC
if (mouseIsPressed) {
    fill(random(0,255),random(0,255),random(0,255),100);
    ellipse(191, 152, 100,100);
}
fill(228,153,163,100);
stroke(20);
ellipse(191, 152, 100,100);

//redC
if (mouseIsPressed) {
    fill(random(0,255),random(0,255),random(0,255),100);
ellipse(255, 179, 80,80);
}
fill(171,36,51,100);
stroke(20);
ellipse(255, 179, 80,80);

//purpleC
if (mouseIsPressed) {
    fill(random(0,255),random(0,255),random(0,255),100);
    ellipse(341, 140, 60,60);
}
else{
fill(115,66,85,100);
stroke(50);
ellipse(341, 140, 60,60);
}

//betweenRedPurple
if (mouseIsPressed) {
fill(random(0,255),random(0,255),random(0,255),200);
ellipse(304, 164, 30,30);
}
else{
fill(21,22,26,200);
stroke(0);
ellipse(304, 164, 30,30);
}

//green
if (mouseIsPressed) {
   fill(random(0,255),random(0,255),random(0,255),100);
stroke(50);
ellipse(190, 207, 60,60);
}else{
fill(127,155,136,100);
stroke(50);
ellipse(190, 207, 60,60);
}

//biggreen
if (mouseIsPressed) {
fill(random(0,255),random(0,255),random(0,255),150);
stroke(50);
ellipse(235, 270, 150,150);
}
else{
fill(70,70,50,150);
stroke(50);
ellipse(235, 270, 150,150);
}


//midgreen
if (mouseIsPressed) {
fill(random(0,255),random(0,255),random(0,255),100);
stroke(70);
ellipse(335, 236, 120,120);
}
else{
fill(26,103,84,100);
stroke(70);
ellipse(335, 236, 120,120);
}

//middgreentop
fill(23,29,32,200);
stroke(0);
ellipse(342, 206, 25,25);

//midgreentop2
fill(23,29,32,100);
stroke(20);
ellipse(385, 242, 50,50);

//yellow
if (mouseIsPressed) {
fill(random(0,255),random(0,255),random(0,255),100);
stroke(50);
ellipse(193, 278, 120,120);
fill(random(0,255),197,random(0,255),100);
stroke(50);
ellipse(317, 315, 80,80);
}
else{
fill(228,197,95,100);
stroke(50);
ellipse(193, 278, 120,120);
fill(228,197,95,100);
stroke(50);
ellipse(317, 315, 80,80);
}

//redeyestroke
stroke(0);
noFill();
ellipse(229, 235, 59,59);
ellipse(229, 235, 60,60);
ellipse(229, 235, 61,61);
ellipse(229, 235, 62,62);
//redeye
if (mouseIsPressed) {
fill(random(0,255),random(0,255),random(0,255),120);
stroke(0);
ellipse(229, 235, 58,58);
fill(0);
stroke(0);
ellipse(229, 235, 15,15);
}
else{
fill(184,29,40,120);
stroke(0);
ellipse(229, 235, 58,58);
fill(0);
stroke(0);
ellipse(229, 235, 15,15);
}
//smallgreen2
if (mouseIsPressed) {
fill(random(0,255),random(0,255),random(0,255),100);
stroke(0);
ellipse(137, 298, 40,40);
}
else{
fill(101,148,123,100);
stroke(0);
ellipse(137, 298, 40,40);
}

//stroke
ellipse(137, 298, 38,38);
ellipse(137, 298, 39,39);
ellipse(137, 298, 41,41);

//smallred
if (mouseIsPressed) {
fill(random(0,255),random(0,255),random(0,255),150);
stroke(70);
ellipse(180, 331, 50,50);
}else{
fill(184,29,40,150);
stroke(70);
ellipse(180, 331, 50,50);
}

//smallblack
fill(31,34,35,200);
stroke(0);
ellipse(340, 340, 20,20);

//smallred
fill(184,29,40,200);
stroke(0);
ellipse(252, 302, 15,15);

//leftred
if (mouseIsPressed) {
fill(random(0,255),random(0,255),random(0,255),200);
stroke(0);
ellipse(101, 235, 25,25);
}else{
fill(184,29,40,200);
stroke(0);
ellipse(101, 235, 25,25);
//leftredstroke
noFill();
stroke(0);
ellipse(101, 235, 26,26);
ellipse(101, 235, 27,27);
ellipse(101, 235, 28,28);
ellipse(101, 235, 29,29);
ellipse(101, 235, 30,30);
ellipse(101, 235, 31,31);
ellipse(101, 235, 32,32);
ellipse(101, 235, 33,33);
}

//downsmallred
if (mouseIsPressed) {
fill(random(0,255),random(0,255),random(0,255),70);
stroke(0);
ellipse(238, 353, 10,10);
}else{
fill(184,29,40,70);
stroke(0);
ellipse(238, 353, 10,10);
}

//downsmallpur
fill(43,34,24,70);
ellipse(204, 365,5,5);

//downleftred
if (mouseIsPressed) {
fill(random(0,255),random(0,255),random(0,255),30);
stroke(184,29,40,40);
ellipse(107, 365, 30,30);
}else{
fill(184,29,40,30);
stroke(184,29,40,40);
ellipse(107, 365, 30,30);
}

//downrityel
if (mouseIsPressed) {
fill(random(0,255),random(0,255),random(0,255),30);
stroke(100);
ellipse(296, 373, 13,13);
}else{
fill(206,160,88,30);
stroke(100);
ellipse(296, 373, 13,13);
}

//downritpul
fill(123,80,87,100);
stroke(0);
ellipse(390, 364, 20,20);

//downpul
if (mouseIsPressed) {
fill(random(0,255),random(0,255),random(0,255),100);
stroke(0);
ellipse(273, 411, 30,30);
}else{
fill(196,123,118,100);
stroke(0);
ellipse(273, 411, 30,30);
}

//bigstroke
noFill();
stroke(0);
ellipse(250, 250, 450,450);
stroke(0);
ellipse(250, 250, 449,449);
stroke(0);
ellipse(250, 250, 448,448);
ellipse(250, 250, 447,447);
ellipse(250, 250, 446,446);
ellipse(250, 250, 445,445);
ellipse(250, 250, 444,444);
ellipse(250, 250, 443,443);
ellipse(250, 250, 442,442);
ellipse(250, 250, 441,441);
ellipse(250, 250, 439,439);
ellipse(250, 250, 438,438);
ellipse(250, 250, 437,437);
ellipse(250, 250, 436,436);
ellipse(250, 250, 435,435);
ellipse(250, 250, 434,434);
ellipse(250, 250, 433,433);
ellipse(250, 250, 432,432);
ellipse(250, 250, 431,431);
ellipse(250, 250, 430,430);
ellipse(250, 250, 429,429);
ellipse(250, 250, 428,428);
ellipse(250, 250, 427,427);
ellipse(250, 250, 426,426);
ellipse(250, 250, 425,425);

//line
stroke(30);
line(148,100,416,296);
line(111,130,417,182);
line(276,108,110,324);
line(350,85,160,406);
stroke(50);
line(357,106,309,414);
line(368,164,370,370);
line(62,256,422,327);
line(93,278,341,406);
line(85,275,231,141);
stroke(80);
line(66,207,405,296);
stroke(80);
line(67,214,401,307);
stroke(80,60);
line(368,97,315,430);
stroke(80,50);
line(322,281,303,406);
stroke(80,50);
line(128,405,306,157);
stroke(80);
line(140,406,312,153);
stroke(80);
line(88,301,394,336);

//shortline
stroke(0);
line(262,102,279,128);
line(255,112,275,136);
line(364,183,386,183);
line(365,190,393,190);
line(143,364,212,403);
line(118,388,217,371);
stroke(80,50);
line(88,197,67,232);
line(97,197,72,229);
line(127,212,118,243);
line(290,396,336,368);
line(293,403,340,375);
line(297,411,343,381);


}

function keyPressed(){
  background(random(0,255), random(0,255), random(0,255));
}