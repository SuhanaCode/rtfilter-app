lipstickX = 0;
lipstickY = 0;

function preload(){
  lipstick = loadImage("https://i.postimg.cc/PxFvYgkv/l1.png")
}

function setup(){
  canvas = createCanvas(300 , 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300 , 300);
  video.hide();

  poseNet = ml5.poseNet(video , modelLoaded);
  poseNet.on('pose' , gotPoses);
}

function gotPoses(results){
if(results.length > 0){
  console.log(results);
  lipstickX = results[0].pose.lips.x;
  lipstickY = results[0].pose.lips.y;
}
}

function modelLoaded(){
  console.log("PoseNet is Intilized");
}

function draw(){
  image(video , 0 , 0 , 300 , 300);
  fill(255 , 0 , 0);
  stroke(255 , 0 , 0);
  circle(lipstickX , lipstickY , 20);

  image(lipstick , lipstickX , lipstickY , 30 , 30);
}

nose