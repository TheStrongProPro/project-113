function preload() {
    
}


function setup() {
    canvas = createCanvas(640,400)
    canvas.position(110,150)
    video = createCapture(VIDEO)
    video.hide()
}

function draw() {
    image(video, 0,0,640,480)
    fill(0,255,0)
    stroke(0,255,0)
    rect(0,0,10,400)
    rect(0,0,640,10)
    rect(630,0,10,400)
    rect(0,390,640,10)
    stroke(255,0,0)
    fill(255,0,0)
    circle(10,10,20)
    circle(630,10,20)
    circle(10,390,20)
    circle(630,390,20)
}

function take_snapshot() {
    save('photo.png')
}