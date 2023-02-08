noseX=0;
noseY=0;
function preload(){
    mustache = loadImage('https://i.postimg.cc/85v94LZB/png-clipart-handlebar-moustache-beard-moustache-fashion-monochrome-thumbnail.png');
}
function setup(){
    canvas= createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide()
    poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotposes)
}

function gotposes(results){
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x =" + results[0].pose.nose.x);
        console.log("nose y =" + results[0].pose.nose.y);
        noseX = results[0].pose.nose.x = 15;
        noseY = results[0].pose.nose.y = 15;
    }
}
function modelLoaded(){
    console.log('poseNet Is Initialized');
}
function draw(){
image(video,0, 0, 300, 300);
image(mustache, noseX, noseY, 30, 30)
full(255,0,0)
stroke(255,0,0)
circle(noseX,noseY,20)
}
function take_snapshot(){
    save('myFilterimage.png')
}