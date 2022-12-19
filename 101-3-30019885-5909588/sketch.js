/*

Officer: 5909588
CaseNum: 101-3-30019885-5909588

Case 101 - The Case of Anna Lovelace
Stage 4 - The Plaza Hotel

Okay this place is more Anna’s style. Now’s our chance to find out the root of all
of this. Lets see who is Anna meeting.

Identify Anna by drawing a Teal filled rectangle with a Dark Cyan outline.
She’s the woman in the red dress of course.

Identify the man with the monocle smoking the cigar by drawing a Crimson filled
rectangle with a Medium Aquamarine outline around him.

Identify the man reading the newspaper by drawing a Lime Green filled rectangle
with a Spring Green outline around him.

Identify the woman with the dog by drawing a Turquoise filled rectangle with a
Cyan outline around her. Make sure you include the dog too.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

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
    
    //Identify Anna by drawing a Teal filled rectangle with a Dark Cyan outline.
    //She’s the woman in the red dress of course.
    fill(0,128,128,100);
    stroke(0,139,139);
    rect(1915,295,425,855);
    
    //Identify the man with the monocle smoking the cigar by drawing a Crimson filled
    //rectangle with a Medium Aquamarine outline around him.
    fill(220,20,60,100);
    stroke(102,205,170);
    rect(1520,530,275,370);

    //Identify the man reading the newspaper by drawing a Lime Green filled rectangle
    //with a Spring Green outline around him.
    fill(50,205,50,100);
    stroke(0,255,127);
    rect(15,350,310,600);

    //Identify the woman with the dog by drawing a Turquoise filled rectangle with a
    //Cyan outline around her. Make sure you include the dog too.
    fill(64,224,208,100);
    stroke(0,139,139);
    rect(1020,250,350,735);


}
