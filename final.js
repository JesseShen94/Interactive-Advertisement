function drawfinal(s){
    fill(255*random(1),255*random(1),255*random(1));
    if(s<=height/2){
        rect(0,height-s*2,100,s*2);
    }else{
        rect(0,0,100,height);
    }
    fill(0);
    rect(100,0,width,height);
    push();
    rectMode(CENTER);
    fill(2, 164, 139);
    stroke(2, 164, 139);
    rect(width/2, height/2, s*2, s, 20);
    pop();
    if(s>=height/2){
        drawburger(width/2-s-100, height/2);
        fill(0,255,0);
        textSize(50);
        textStyle(BOLD);
        text("Energy Burger", width/2-s/2+10, height/4+40);
        fill(0);
        textSize(29);
        textStyle(NORMAL);
        text("100% Fresh!(Almostly catch the cattle before made)", width/2-s, height/4+100);
        text("100% Hand made!(Even the pictures)", width/2-s,height/4+140);
        text("100% Healthy ingredients!(We do what you just did)", width/2-s, height/4+180);
        textSize(50);
        fill(255);
        textStyle(BOLDITALIC);
        text("COME ON &", width/2-s+50, height/4+250);
        text("TAKE YOUR ENERGY!", width/2-180, height/4+320);
    }
}