function preload(){
    img = loadImage('BALLER.webp')
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(600, 250);

    tint_color = "";
}

function draw() {
    image(img, 260, 175, 150, 120)
    
        tint(tint_color);
        fill(0, 128, 0);
        stroke(0, 128, 0);
        circle(75, 50, 70);
    
        tint(tint_color);
        fill(0, 128, 0);
        stroke(0, 128, 0);
        circle(325, 70, 90);
    
        tint(tint_color);
        fill(0, 128, 0);
        stroke(0, 128, 0);
        circle(575, 50, 70);
    
        tint(tint_color);
        fill(0, 128, 0);
        stroke(0, 128, 0);
        circle(575, 225, 90);
    
        tint(tint_color);
        fill(0, 128, 0);
        stroke(0, 128, 0);
        circle(75, 225, 90);
    
        tint(tint_color);
        fill(0, 128, 0);
        stroke(0, 128, 0);
        circle(325, 405, 90);
    
        tint(tint_color);
        fill(0, 128, 0);
        stroke(0, 128, 0);
        circle(75, 400, 70);
    
        tint(tint_color);
        fill(0, 128, 0);
        stroke(0, 128, 0);
        circle(575, 400, 70)
}

function take_snapshot(){
    save('student_name.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}
