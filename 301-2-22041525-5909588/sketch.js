/*
The case of the Python Syndicate
Stage 3


Officer: 5909588
CaseNum: 301-2-22041525-5909588

Right kid let’s work out which of our ‘friends’ is connected to the syndicate.

- An object for Bones Karpinski has been declared and initialised
- Position each mugshot relative to Bones Karpinski
- Do this by modifying the x and y parameters of each image command to use the x and y properties from the Bones Karpinski object.
- You will need to combine add and subtract operators with the relevant property for each parameter.
- If you've got it right, then all six images should appear in exactly the same positions as they do now.

REMEMBER:
- Do not create any new variables
- Do not change the values of the properties for Bones Karpinski 
- Do not add any additional commands

*/

var photoBoard;
var robbie_kray_img;
var cecil_karpinski_img;
var bones_karpinski_img;
var rocky_kray_img;
var ada_lovelace_img;
var anna_karpinski_img;

var bones_karpinski_obj;




function preload()
{
	photoBoard = loadImage('photoBoard.png');
	robbie_kray_img = loadImage("krayBrothers2.png");
	cecil_karpinski_img = loadImage("karpinskiBros1.png");
	bones_karpinski_img = loadImage("karpinskiDog.png");
	rocky_kray_img = loadImage("krayBrothers1.png");
	ada_lovelace_img = loadImage("ada.png");
	anna_karpinski_img = loadImage("karpinskiWoman.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	bones_karpinski_obj = {
		x: 701,
		y: 40,
		image: bones_karpinski_img
	};
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(bones_karpinski_obj.image, bones_karpinski_obj.x, bones_karpinski_obj.y);
    
    /*
	image(robbie_kray_img, 115, 40);
	image(cecil_karpinski_img, 408, 40);
	image(rocky_kray_img, 115, 309);
	image(ada_lovelace_img, 408, 309);
	image(anna_karpinski_img, 701, 309);
    */
    
    image(robbie_kray_img, bones_karpinski_obj.x-586, bones_karpinski_obj.y);
	image(cecil_karpinski_img, bones_karpinski_obj.x-293, bones_karpinski_obj.y);
	image(rocky_kray_img, bones_karpinski_obj.x-586, bones_karpinski_obj.y+269);
	image(ada_lovelace_img, bones_karpinski_obj.x-293, bones_karpinski_obj.y+269);
	image(anna_karpinski_img, bones_karpinski_obj.x, bones_karpinski_obj.y+269);
    
    

}