noseX = 0;
noseY = 0;


function preload(){
    lipstick = loadImage("https://i.postimg.cc/YCPBbQkx/Lip-filter.png");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video,0,0, 300, 300)
    image(lipstick, noseX - 15, noseY +10, 30, 30);
}

function takeSanpshot(){
    save('MyClownFace.png');
}

function modelLoaded(){
    console.log('PoseNet is Initialised');
}

function gotPoses(results){
    if(results.length > 0)
    {
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose y = " + noseY);
        console.log("nose x = " + noseX);
    }
}