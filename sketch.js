var car,wall;
var speed,weight;

function setup() {
  createCanvas(1200,400);
  wall = createSprite(1100, 200, 50, height/2);
  wall.shapeColor= (80,80,80);
  car = createSprite(100,200,50,50);

  speed = random(55,90);
  weight = random(400,1500);

  car.velocityX=speed;
}

function draw() {
  background("black");  
 
  if(wall.x-car.x < (wall.width/2+car.width/2)){
  var deformation = 0.5*weight*speed*speed/22500;
  car.velocityX = 0;
   if(deformation>180){
    car.shapeColor = ("red");
    }
     if(deformation<180 && deformation>100){
    car.shapeColor = ("yellow");  
  }

   if(deformation<100){
    car.shapeColor = ("green"); 
   }

  } 
 drawSprites();
 
 textSize(10);
 fill("white")
 text("IF DEFORMATION IS LESS THAN 100, THEN GREEN ,IF MORE THAN 100 AND LESS THAN 180 THEN YELLOW,IF MORE THAN 180 THEN RED ",50,100);
 text("GREEN === GOOD ,YELLOW === NORMAL,RED === DANGER",50,140); 
   


}