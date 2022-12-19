/*
The case of the Python Syndicate
Stage 4

Officer: 5909588
CaseNum: 301-3-66813717-5909588

To really crack the Python Syndicate we need to go in deep. I want to understand
all the connections. I have the data but it’s a mess and I need you to sort it out.

- Organise each syndicate member into a new object. 
    - I’ve done one for you as an example.
    - Be sure to replicate the naming conventions for your own objects.
- Modify the image commands to make them use the new objects you created.
- Once you have done this you can delete the old variables.
- If you've got it right, then all six images should appear in exactly the same positions as they do now.

*/

var photoBoard;
var pawel_karpinski_img;
var anna_karpinski_img;
var cecil_karpinski_img;
var bones_karpinski_img;
var ada_lovelace_img;
var rocky_kray_img;

var cecil_karpinski_object;


//declare your new objects below

var pawel_karpinski;
var anna_karpinski;
var bones_karpinski;
var ada_lovelace;
var rocky_kray;




var rocky_kray_x_coordinate = 701;
var rocky_kray_y_coordinate = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	pawel_karpinski_img = loadImage("karpinskiBros2.png");
	anna_karpinski_img = loadImage("karpinskiWoman.png");
	cecil_karpinski_img = loadImage("karpinskiBros1.png");
	bones_karpinski_img = loadImage("karpinskiDog.png");
	ada_lovelace_img = loadImage("ada.png");
	rocky_kray_img = loadImage("krayBrothers1.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	cecil_karpinski_object = {
		x: 701,
		y: 40,
		image: cecil_karpinski_img
	};



	//define your new objects below
    anna_karpinski_object = {
        x: 408,
        y: 40,
        img: anna_karpinski_img
    }
    
    pawel_karpinski_object = {
        x: 115,
        y: 40,
        img: pawel_karpinski_img
    }
    
    bones_karpinski_object = {
        x: 115,
        y: 309,
        img: bones_karpinski_img
    }
    
    ada_lovelace_object = {
        x: 408,
        y: 309,
        img: ada_lovelace_img
    }
    
    rocky_kray_object = {
        x: 701,
        y: 309,
        img: rocky_kray_img
    }
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(pawel_karpinski_object.img, pawel_karpinski_object.x, pawel_karpinski_object.y);
	image(anna_karpinski_object.img, anna_karpinski_object.x, anna_karpinski_object.y);
	image(cecil_karpinski_object.image, cecil_karpinski_object.x, cecil_karpinski_object.y);
	image(bones_karpinski_object.img, bones_karpinski_object.x, bones_karpinski_object.y);
	image(ada_lovelace_object.img, ada_lovelace_object.x, ada_lovelace_object.y);
	image(rocky_kray_object.img, rocky_kray_object.x, rocky_kray_object.y);


}