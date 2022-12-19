/*
The case of the Python Syndicate
Stage 2


Officer: 5909588
CaseNum: 301-1-85523887-5909588

- Word on the street is that there is a new gang in town - The Python Syndicate.
It seems my bones were correct on this one. I need you to organise the gang
around the suspected leader Anna Karpinski

- The variables for Anna Karpinski have been declared and initialised.
- This time you are NOT allowed to create any new variables.
- Instead you must position each mug shot relative to Anna Karpinski
- To do this you will need to control the positions of the mugshots by adding/subtracting hard-coded values to the appropriate Anna Karpinski variable for each parameter.
- If you've got it right all six images should appear in exactly the same positions as they do now.

REMEMBER:
- Do not create any new variables
- Do not change the values of the variables for Anna Karpinski 
- Do not add any additional commands

*/

var photoBoard;
var rocky_kray_image;
var pawel_karpinski_image;
var anna_karpinski_image;
var cecil_karpinski_image;
var bones_karpinski_image;
var robbie_kray_image;


var anna_karpinski_coordinate_x = 701;
var anna_karpinski_coordinate_y = 40;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	rocky_kray_image = loadImage("krayBrothers1.png");
	pawel_karpinski_image = loadImage("karpinskiBros2.png");
	anna_karpinski_image = loadImage("karpinskiWoman.png");
	cecil_karpinski_image = loadImage("karpinskiBros1.png");
	bones_karpinski_image = loadImage("karpinskiDog.png");
	robbie_kray_image = loadImage("krayBrothers2.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(anna_karpinski_image, anna_karpinski_coordinate_x, anna_karpinski_coordinate_y);

	/*image(rocky_kray_image, 115, 40);
	image(pawel_karpinski_image, 408, 40);
	image(cecil_karpinski_image, 115, 309);
	image(bones_karpinski_image, 408, 309);
	image(robbie_kray_image, 701, 309);
    */
    
    image(rocky_kray_image, anna_karpinski_coordinate_x-586, anna_karpinski_coordinate_y);
	image(pawel_karpinski_image, anna_karpinski_coordinate_x-293, anna_karpinski_coordinate_y);
	image(cecil_karpinski_image, anna_karpinski_coordinate_x-586, anna_karpinski_coordinate_y+269);
	image(bones_karpinski_image, anna_karpinski_coordinate_x-293, anna_karpinski_coordinate_y+269);
	image(robbie_kray_image, anna_karpinski_coordinate_x, anna_karpinski_coordinate_y+269);
    
    

}