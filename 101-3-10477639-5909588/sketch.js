/*

Officer: 5909588
CaseNum: 101-3-10477639-5909588

Case 101 - The Case of Anna Lovelace
Stage 4 - The Plaza Hotel

Okay this place is more Anna’s style. Now’s our chance to find out the root of all
of this. Lets see who is Anna meeting.

Identify Anna by drawing a Dark Goldenrod filled rectangle with a Light Sea Green outline.
She’s the woman in the red dress of course.

Identify the man with the monocle smoking the cigar by drawing a Turquoise filled
rectangle with a Goldenrod outline around him.

Identify the man reading the newspaper by drawing a Orange filled rectangle
with a Indigo outline around him.

Identify the woman with the dog by drawing a Midnight Blue filled rectangle with a
Red outline around her. Make sure you include the dog too.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.
  stroke() Use r,g,b values between 0 and 255.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	strokeWeight(2);
}

function draw()
{
	image(img,0,0);

	//Write your code below here ...



	//A helpful mouse pointer
	push();
		fill(0);
		noStroke();
		text(mouseX + "," + mouseY, mouseX,mouseY);
	pop();


}
