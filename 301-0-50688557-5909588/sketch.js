/*
The case of the Python Syndicate
Stage 1

Officer: 5909588
CaseNum: 301-0-50688557-5909588

I gotta give it to you kid, you’ve made an excellent start, but now it’s time
to take things up a level. For some time I’ve suspected that there’s something
big going down in Console City.

These cases that we’ve been working are all connected somehow. I need to use
that considerable brain of yours to work it all out. Let’s start by laying out
who we know.

Place each mugshot in its designated position by doing the following:

- Create a new variable for the X and Y coordinates of each mugshot.
    - One has already been done for you.
    - Make sure you use the same style and format for the variable name.
- Initialise the variables with the correct values. HINT: you should be able to derive these from the image commands below.
- Finally modify the each image command replacing the hard-coded values with your variables. 
- If you've got it right all six images should appear in exactly the same positions as they do now.

*/

var photoBoard;
var robbieKrayImage;
var pawelKarpinskiImage;
var countessHamiltonImage;
var rockyKrayImage;
var bonesKarpinskiImage;
var cecilKarpinskiImage;



//declare your new variables below
var pawelKarpinskiXLoc = 408;
var pawelKarpinskiYLoc = 40;

var robbieKrayXLoc = 115;
var robbieKrayYLoc = 40;

var countessHamiltonXLoc = 701;
var countessHamiltonYLoc = 40;

var rockyKrayXLoc = 115;
var rockyKrayYLoc = 309;

var bonesKarpinskiXLoc = 408;
var bonesKarpinskiYLoc = 309;

var cecilKarpinskiXLoc = 701;
var cecilKarpinskiYLoc = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	robbieKrayImage = loadImage("krayBrothers2.png");
	pawelKarpinskiImage = loadImage("karpinskiBros2.png");
	countessHamiltonImage = loadImage("countessHamilton.png");
	rockyKrayImage = loadImage("krayBrothers1.png");
	bonesKarpinskiImage = loadImage("karpinskiDog.png");
	cecilKarpinskiImage = loadImage("karpinskiBros1.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);



	//And update these image commands with your x and y coordinates.
	image(pawelKarpinskiImage, pawelKarpinskiXLoc, pawelKarpinskiYLoc);

	image(robbieKrayImage, robbieKrayXLoc, robbieKrayYLoc);
	image(countessHamiltonImage, countessHamiltonXLoc, countessHamiltonYLoc);
	image(rockyKrayImage, rockyKrayXLoc, rockyKrayYLoc);
	image(bonesKarpinskiImage, bonesKarpinskiXLoc, bonesKarpinskiYLoc);
	image(cecilKarpinskiImage, cecilKarpinskiXLoc, cecilKarpinskiYLoc);

}