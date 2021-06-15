var song="";
rightWristX="";
rightWristY="";
leftWristX="";
leftWristY="";
function preload(){
    song=loadSound("music.mp3");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.centre();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}
function draw(){
    image(video,0,0,600,500);
}
function play(){
    song.play();
    
}
function gotPoses(results){
if (results.length>0){
    console.log(results)
    scoreRightWrist=results[0].pose.keypoints[10].score;
    scoreLeftWrist=results[0].pose.keypoints[9].score;
    console.log("scoreRightWrist="+scoreRightWrist+"scoreLeftWrist="+scoreLeftWrist);

    rightWristX=results[0].pose.rightWrist.x;
    leftWristX=results[0].pose.leftWrist.x;
    rightWristY=results[0].pose.rightWrist.y
    leftWristY=results[0].pose.leftWrist.y;
    console.log("right wrist x="+rightWristX+"right wrist y="+rightWristY+"left wrist x="+leftWristX+"left wrist y="+leftWristY);
    
}
}