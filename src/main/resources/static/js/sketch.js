function setup() { 
  createCanvas(1000, 1000);  
}

function draw() { 
  if (mouseIsPressed === true) { 
    fill(0,0,0);            
    ellipse(mouseX, mouseY, 20, 20);
  } 
  if (mouseIsPressed === false) { 
    fill(255,255,255);          
  }
}
