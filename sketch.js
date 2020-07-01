var canvas;
var drawings = [];
var database;
var currentPath=[];
isDrawing=false;
function setup() {
database=firebase.database();
canvas=createCanvas(800, 800);
canvas.mousePressed(startPath);
  canvas.parent('myContainer');
  canvas.mouseReleased(endPath);
 // var saveButton=("#saveButton");
 // saveButton.mousePressed(saveDrawing);
  button=createButton("save");
}
function startPath(){
  isDrawing=true;
  currentPath=[];
 drawings.push(currentPath);
}
function endPath(){
isDrawing=false;

}

function draw() {
  background(0);
  if(isDrawing){
  var point={
   x:mouseX,
    y:mouseY
  }
  currentPath.push(point);
  }  
  if(button.mousePressed){
    var saveref=database.ref('drawings');
    saveref.push(drawings);


  }
   stroke(255);
  strokeWeight(4);
  noFill();
  for(var i=0;i<drawings.length;i++){
    var path=drawings[i];
      beginShape();
 for(var k=0;k<path.length;k++){
      vertex(path[k].x,path[k].y);
    }
      endShape();
}
  
}
function saveDrawing(){

  }

