function setup() {
	createCanvas(windowWidth, windowHeight);
	
	background(50);


}

function draw() {

	//create a variable
	// store a scaled mouseX to it

	// map function takes 5 arguments:
	// a value, an input range for that value,
	// and an output range for that argument.
	var scaledX = map(mouseX, 0, width, 0, 255); 
	var scaledY = map(mouseY, 0, height, 0, 255);

	fill(scaledX,0, scaledY);
	

}

//happens when the mouse is dragged
function mouseDragged(){

	//fill(255);
	noStroke();
	//draw circle at mouse position
	ellipse(mouseX, mouseY, 100, 100);




}