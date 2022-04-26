difference = "";

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,520);
    canvas.position(560,160);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is intialized');
}

function draw(){
    background('#d477d4');
    fill("#b981f8");
    stroke("#b981f8");
    document.getElementById("text_here").innerHTML = "Font size of the text will be = " + difference + "px";
    textSize(difference);
    text("Krisha", 50, 100)
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
    }
}

