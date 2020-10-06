let wheat1, wheat2, tomato1, tomato2, lettuce1, lettuce2, cattle1, cattle2, cow1, cow2;
var bgcolor;
var stage;
var vegelevel = [];
var steaklevel, cheeselevel;
var vegeenergy = [];
var cattles = [];
var steakenergy, cheeseenergy;
var loc;
var t;
var pictureFilenames = [
  "assets/wheat1.jpg",
  "assets/wheat2.jpg",
  "assets/tomato1.jpg",
  "assets/tomato2.jpg",
  "assets/lettuce1.jpg",
  "assets/lettuce2.jpg",
  "assets/cattle1.jpg",
  "assets/cattle2.jpg",
  "assets/cow1.jpg",
  "assets/cow2.jpg"
]

function preload(){
  wheat1 = loadImage(pictureFilenames[0]);
  wheat2 = loadImage(pictureFilenames[1]);
  tomato1 = loadImage(pictureFilenames[2]);
  tomato2 = loadImage(pictureFilenames[3]);
  lettuce1 = loadImage(pictureFilenames[4]);
  lettuce2 = loadImage(pictureFilenames[5]);
  cattle1 = loadImage(pictureFilenames[6]);
  cattle2 = loadImage(pictureFilenames[7]);
  cow1 = loadImage(pictureFilenames[8]);
  cow2 = loadImage(pictureFilenames[9]);
}

function setup() {
  // add your setup code here
  createCanvas(windowWidth, windowHeight);
  bgcolor = (0,0,0);
  stage = 0;
  vegelevel = [0,0,0];
  steaklevel = 0;
  cheeselevel = 0;
  vegeenergy = [0,0,0];
  cattles = [0,0,0];
  steakenergy = 0;
  cheeseenergy = 0;
  loc = (width-100)/8;
  t=0;
}

function draw() {
  // add your draw code here
  if(vegeenergy[0]==1&&vegeenergy[1]==1&&vegeenergy[2]==1&&steakenergy==1&&cheeseenergy==1){
    stage=0;
    drawstage();
    drawfinal(t);
    if(t<=height/2){
      t=t+3;
    }   
  }else{
    drawstage();
    if(stage==1){
      if(vegelevel[0]>=1&&vegelevel[1]>=1&&vegeenergy[2]>=1){
        drawwand(mouseX,mouseY);
      }else{
        drawwatering(mouseX,mouseY);
      }
      if(vegelevel[0]>=2){
        vegeenergy[0]=1;
      }
      if(vegelevel[1]>=2){
        vegeenergy[1]=1;
      }
      if(vegelevel[2]>=2){
        vegeenergy[2]=1;
      }
    }
  }
  
}

// when you hit the spacebar, what's currently on the canvas will be saved (as a
// "thumbnail.png" file) to your downloads folder
function keyTyped() {
  if (key === " ") {
    saveCanvas("thumbnail.png");
  }
}

function drawburger(x,y){
  push();
  noStroke();
  fill(255,159,0);
  ellipse(x,y,200,150);
  fill(bgcolor);
  rect(x-100,y,200,75);
  fill(0,255,0);
  rect(x-100,y+40,200,10);
  fill(147,73,0);
  rect(x-100,y+50,200,40);
  fill(255,0,0);
  ellipse(x-60,y+40,70,40);
  ellipse(x+30,y+40,70,40);
  fill(147,73,0);
  rect(x-100,y,200,40);
  fill(255,159,0);
  rect(x-100,y+90,200,50);
  fill(255,255,0);
  triangle(x-60,y,x+40,y,x-10,y+30);
  triangle(x-20,y+90,x+80,y+90,x+30,y+120);
  pop();
}

function drawsun(x,y){
  push();
  stroke(255,255,0);
  fill(255,255,0);
  ellipse(x,y,100,100);
  line(x-55, y, x-80, y);
  line(x+55, y, x+80, y);
  line(x, y-55, x, y-80);
  line(x, y+55, x, y+80);
  line(x-70, y-70, x-50, y-50);
  line(x+70, y+70, x+50, y+50);
  line(x-70, y+70, x-50, y+50);
  line(x+70, y-70, x+50, y-50);
  pop();
}

function drawwatering(x,y){
  noStroke();
  fill(0,255,255);
  ellipse(x+20,y,40,40);
  fill(bgcolor);
  ellipse(x+20,y,35,35);
  fill(0,255,255);
  rect(x,y,40,50);
  quad(x,y+50,x,y+40,x-50,y,x-60,y);
}

function drwarope(x,y){
  push();
  stroke(164,82,0);
  strokeWeight(10);
  noFill();
  ellipse(x,y,100,70);
  line(x,y+35,x+10,y+100);
  pop();
}

function drawwand(x,y){
  push();
  stroke(0);
  strokeWeight(10);
  line(x,y,x+20,y+100);
  strokeWeight(5);
  stroke(255,0,0);
  line(x-10,y-5,x-25,y-20);
  stroke(0,255,0);
  line(x,y-10,x-2,y-30);
  stroke(0,0,255);
  line(x+10,y-5,x+25,y-20);
  pop();
}

function drawgrass(x,y){
  stroke(0);
  line(x,y,x-20,y-30);
  line(x-20,y-30, x+8,y-15);
  line(x+8,y-15,x+15,y-50);
  line(x+15,y-50,x+22,y-15);
  line(x+22,y-15,x+50,y-30);
  line(x+50,y-30,x+30,y);
}

function drawreturn(x,y){
  fill(0);
  triangle(x,y,x+40,y-40,x+40,y+40);
  rect(x+40,y-20,60,40);
  textSize(30);
  text("return", x+20,y+60);
}

function drawenergy(){
  push();
  fill(0);
  rect(0,0,100,height);
  if(steakenergy==0){
    stroke(147,73,0);
    noFill();
    rect(0,height/3,100,height/3);
  }else{
    noStroke();
    fill(147,73,0);
    rect(0,height/3,100,height/3);
  }
  if(cheeseenergy==0){
    stroke(255,242,0);
    noFill();
    rect(0,0,100,height/3);
  }else{
    noStroke();
    fill(255,242,0);
    rect(0,0,100,height/3);
  }
  if(vegeenergy[0]==0){
    stroke(255,131,6);
    noFill();
    rect(0,height-height/9,100,height/9);
  }else{
    noStroke();
    fill(255,242,0);
    rect(0,height-height/9,100,height/9);
  }
  if(vegeenergy[1]==0){
    stroke(255,0,0);
    noFill();
    rect(0,height-2*height/9,100,height/9);
  }else{
    noStroke();
    fill(255,0,0);
    rect(0,height-2*height/9,100,height/9);
  }
  if(vegeenergy[2]==0){
    stroke(0,255,0);
    noFill();
    rect(0,height-height/3,100,height/9);
  }else{
    noStroke();
    fill(0,255,0);
    rect(0,height-height/3,100,height/9);
  }
  fill(255);
  textSize(30);
  text("Burger", 0,50);
  text("Energy", 0,80);
  pop();
}

function drawstage(){
  if(stage==0){
    background(bgcolor);
    drawenergy();

    push();
    fill(255);
    textStyle(BOLDITALIC);
    textSize(50);
    text("Do U Know How", width/2-200, 100);
    text("a", width/2-200, 220);
    pop();

    drawburger(width/2-50, 210);

    push();
    fill(113,0,225);
    textSize(70);
    textStyle(BOLD);
    text("'GROW'?", width/2+70, 230);
    pop();

    push();
    noStroke();
    fill(166,83,0);
    rect(150,height/2+100,200,80);
    fill(128,255,0);
    rect(width/2-150, height-150, 300,80);
    fill(255,242,0);
    rect(width-350, height/2+100, 300, 80);
    pop();

    push();
    textStyle(BOLD);
    textSize(30);
    if(vegeenergy[0]!=1&&vegeenergy[1]!=1&&vegeenergy[2]!=1){
      fill(0,255,0);
      text("Vege Energy", 155, height/2+150);
    }else{
      fill(255,0,0);
      text("Complete!", 155, height/2+150);
    }
    if(steakenergy!=1){
      fill(147,73,0);
      text("Steak Energy", width/2-100, height-100);
    }else{
      fill(255,0,0);
      text("Complete!", width/2-100, height-100);
    }
    if(cheeseenergy!=1){
      fill(0);
      text("Cheese Energy", width-320, height/2+150);
    }else{
      text("Complete!", width-320, height/2+150);
    } 
    pop();

    image(wheat1, 150, height/2-100,200,200);
    image(cattle1, width/2-150, height-350,300,200);
    image(cow1, width-350,height/2-100,300,200);
  }else if(stage==1){
    push();
    noStroke();
    fill(128,255,255);
    rect(0,0,width,height/3);
    fill(166,83,0);
    rect(0,2*height/3, width,height/3);
    fill(255);
    rect(0,height/3,width,height/3);
    pop()
    drawenergy();
    drawreturn(110,60);
    drawsun(width-150,150);
    if(vegelevel[0]==0){
      image(wheat1, 100+loc,2*height/3, 200,200);
    }else{
      image(wheat2, 100+loc,2*height/3-100, 150,200);
    }
    if(vegelevel[1]==0){
      image(tomato1, 100+loc*3, 2*height/3,200,200);
    }else{
      image(tomato2, 100+loc*3, 2*height/3-100,200,200);
    }
    if(vegelevel[2]==0){
      image(lettuce1, width-3*loc, 2*height/3,150,200);
    }else{
      image(lettuce2, width-3*loc, 2*height/3-100,200,200);
    }
  }else if(stage==2){
    background(128,255,0);
    drawgrass(width/2-200,300);
    drawgrass(200,height-300);
    drawgrass(width-400,height/2);
    if(steaklevel==0){
      image(cattle1, width/2,100,300,200);
      image(cattle1, 400,height-300,300,200);
      image(cattle1, width-300,height-300,300,200);
      drwarope(mouseX,mouseY);
    }else{
      if(cattles[0]==1){
        image(cattle2, width/2,100,300,200);
      }else if(cattles[1]==1){
        image(cattle2, 400,height-300,300,200);
      }else{
        image(cattle2, width-300,height-300,300,200);
      }
      drawwand(mouseX,mouseY);
    }
    drawenergy();
    drawreturn(110,60);
  }else{
    background(255,242,0);
    if(cheeselevel==0){
      image(cow1,width/2-300,height/2-200,600,400);
    }else{
      image(cow2,width/2-300,height/2-200,600,400);
      drawwand(mouseX,mouseY);
    }
    drawenergy();
    drawreturn(110,60);
  }
}

function mousePressed(){
  if(stage==0){
    if(mouseX>=150&&
      mouseX<=350&&
      mouseY>=height/2-100&&
      mouseY<=height/2+180){
        stage=1;
      }else if(mouseX>=width/2-150&&
        mouseX<=width/2+150&&
        mouseY>=height-350&&
        mouseY<=height-70){
          stage=2;
      }else if(mouseX>=width-350&&
        mouseX<=width-50&&
        mouseY>=height/2-100&&
        mouseY<=height+180){
          stage=3;
        }
  }else{
    if(mouseX>=110&&
      mouseX<=210&&
      mouseY>=20&&
      mouseY<=100){
        stage = 0;
      }
    
    if(stage==1){
      if(mouseX>=100+loc&&
      mouseX<=300+loc&&
      mouseY>=2*height/3&&
      mouseY<=2*height/3+200){
        if(vegelevel[0]==0){
          vegelevel[0]=1;
        }
      }
      if(mouseX>=100+loc&&
        mouseX<=250+loc&&
        mouseY>=2*height/3-100&&
        mouseY<=2*height/3+100){
          if(vegelevel[0]==1){
            vegelevel[0]=2;
          }
        }
      if(mouseX>=100+loc*3&&
        mouseX<=300+loc*3&&
        mouseY>=2*height/3&&
        mouseY<=2*height/3+200){
          if(vegelevel[1]==0){
            vegelevel[1]=1;
          }
      }
      if(mouseX>=100+loc*3&&
        mouseX<=300+loc*3&&
        mouseY>=2*height/3-100&&
        mouseY<=2*height/3+100){
          if(vegelevel[1]==1){
            vegelevel[1]=2;
          }
      }
      if(mouseX>=width-loc*3&&
        mouseX<=width-loc*3+150&&
        mouseY>=2*height/3&&
        mouseY<=2*height/3+200){
          if(vegelevel[2]==0){
            vegelevel[2]=1;
          }
      }
      if(mouseX>=width-loc*3&&
        mouseX<=width-loc*3+200&&
        mouseY>=2*height/3-100&&
        mouseY<=2*height/3+100){
          if(vegelevel[2]==1){
            vegelevel[2]=2;
          }
      }
    }
    if(stage==2){
      if(mouseX>=width/2&&
        mouseX<=width/2+300&&
        mouseY>=100&&
        mouseY<=300){
          if(steaklevel==0){
            steaklevel=1;
            cattles[0]=1;
          }else{
            if(cattles[0]==1){
              steakenergy=1;
            }
          }
      }
      if(mouseX>=400&&
        mouseX<=700&&
        mouseY>=height-300&&
        mouseY<=height-100){
          if(steaklevel==0){
            steaklevel=1;
            cattles[1]=1;
          }else{
            if(cattles[1]==1){
              steakenergy=1;
            }
          }
      }
      if(mouseX>=width-300&&
        mouseX<=width&&
        mouseY>=height-300&&
        mouseY<=height-100){
          if(steaklevel==0){
            steaklevel=1;
            cattles[2]=1;
          }else{
            if(cattles[2]==1){
              steakenergy=1;
            }
          }
      }
    }
    if(stage==3){
      if(mouseX>=300||mouseY>=200){
        if(cheeselevel==0){
          cheeselevel=1;
        }else{
          cheeseenergy=1;
        }
      }
    }
  }
}
