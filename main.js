DinoSong = "";
scoreright=0;
scoreleft=0;
leftwristx=0;
leftwristy=0;
rightwristx=0;
rightwristy=0;
function preload(){
DinoSong = loadSound("music.mp3");
} 
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    dinov = createCapture(VIDEO);
    dinov.hide();
    dinoarecool = ml5.poseNet(dinov,modledino);
    dinoarecool.on('pose',gotdino);
}
function draw(){
    image(dinov,0,0,600,500);
    fill("green");
    stroke("green");
    if(scoreright>0.2){
circle(rightwristx,rightwristy,20);
if(rightwristy>0&&rightwristy<=100){
document.getElementById("dinospeed").innerHTML="speed is a loser and is equal to 0.5";
DinoSong.rate(0.5);
}
else if(rightwristy>100&&rightwristy<=200){
    document.getElementById("dinospeed").innerHTML="speed is a loser and is equal to 1";
    DinoSong.rate(1);
}
else if(rightwristy>200&&rightwristy<=300){
    document.getElementById("dinospeed").innerHTML="speed is a loser and is equal to 1.5";
    DinoSong.rate(1.5);
}
else if(rightwristy>300&&rightwristy<=400){
    document.getElementById("dinospeed").innerHTML="speed is a loser and is equal to 2";
    DinoSong.rate(2);
}
else if(rightwristy>400){
    document.getElementById("dinospeed").innerHTML="speed is a loser and is equal to 2.5";
    DinoSong.rate(2.5);
}
    }

    if(scoreleft>0.2){
        circle(leftwristx,leftwristy,20);
        z=Number(leftwristy);
        z1=floor(z);
        z2=z1/500;
        DinoSong.setvolume(z2);
        document.getElementById("volume").innerHTML="volume is a loser and is equal to "+ z2;
    }
    }
function modledino(){
    console.log ("posenet is dead and dinos are cool and i like them i do not care about anyone else saying otherwise");
}
function gotdino(answer){
    console.log(answer);
    scoreleft = answer[0].pose.keypoints[9].score;
    console.log("score of left dinowrist is"+scoreleft);
    scoreright = answer[0].pose.keypoints[10].score;
    console.log("score of right dinowrist is"+scoreright);
    leftwristx = answer[0].pose.leftWrist.x;
    console.log("left wirsts dinox is "+leftwristx);
    rightwristx = answer[0].pose.rightWrist.x;
    console.log("right wirsts dinox is "+rightwristx);
    leftwristy = answer[0].pose.leftWrist.y;
    console.log("left wirsts dinoy is "+leftwristy);
    rightwristy = answer[0].pose.rightWrist.y;
    console.log("right wirsts dinoy is "+rightwristy);
}
function play(){
    DinoSong.play();
    DinoSong.rate(1);
    DinoSong.setVolume(1);
}