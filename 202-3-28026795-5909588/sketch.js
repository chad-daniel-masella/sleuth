/*

Officer: 5909588
CaseNum: 202-3-28026795-5909588

Case 202 - The case of Bob and Daisy - stage 4

Here’s the final letter from Daisy (aka. Woz). Decode it to uncover the
final details about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Purple filled text with a Chartreuse outline in Diggity font (see https://www.w3.org/TR/css3-iccprof#numerical).
Only comment out text commands - leave fill & stroke, push and pop commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	Ballpointprint = loadFont('Ballpointprint.ttf');
	Melissa = loadFont('Melissa.otf');
	Diggity = loadFont('Diggity.ttf');
	RonsFont = loadFont('RonsFont.ttf');
}

function setup()
{
	createCanvas(676,487);
	textSize(31);
}

function draw()
{
	background(255);

	fill(0,128,0);
	stroke(255,0,255);
	textFont(Ballpointprint);
	//text("of", 91,209);
	fill(34,139,34);
	stroke(0,0,128);
	textFont(Diggity);
	//text("sometimes.", 127,242);
	fill(107,142,35);
	stroke(139,0,139);
	//text("our", 514,93);
	fill(65,105,225);
	stroke(160,82,45);
	textFont(RonsFont);
	//text("the", 265,278);
	fill(50,205,50);
	stroke(50,205,50);
	textFont(Melissa);
	//text("you", 628,170);
	fill(0,255,127);
	stroke(0,0,255);
	//text("out.", 541,170);
	fill(255,69,0);
	stroke(32,178,170);
	//text("silen", 314,278);
	fill(0,139,139);
	stroke(255,69,0);
	textFont(Ballpointprint);
	//text("away", 140,170);
	fill(139,0,139);
	stroke(178,34,34);
	textFont(RonsFont);
	//text("this", 457,170);
	fill(50,205,50);
	stroke(0,255,255);
	//text("so,", 266,209);
	push();
	fill(152,251,152);
	stroke(218,165,32);
	textFont(Ballpointprint);
	//text("not", 276,242);
	pop();
	stroke(255,215,0);
	textFont(Ballpointprint);
	//text("a", 251,170);
	fill(75,0,130);
	stroke(199,21,133);
	textFont(Melissa);
	//text("so", 8,242);
	fill(100,149,237);
	stroke(160,82,45);
	textFont(Diggity);
	//text("longer", 112,93);
	fill(123,104,238);
	stroke(34,139,34);
	textFont(Ballpointprint);
	//text("secre", 168,278);
	fill(32,178,170);
	stroke(255,215,0);
	textFont(Melissa);
	//text("I", 17,93);
	fill(0,255,127);
	stroke(46,139,87);
	//text("yours,", 109,340);
	fill(255,99,71);
	stroke(0,0,205);
	textFont(Ballpointprint);
	//text("how", 381,242);
	fill(210,105,30);
	stroke(128,0,128);
	//text("cash.", 468,209);
	push();
	fill(173,255,47);
	stroke(0,250,154);
	textFont(RonsFont);
	//text("can", 346,209);
	pop();
	stroke(127,255,0);
	textFont(RonsFont);
	//text("take", 14,278);
	fill(233,150,122);
	stroke(153,50,204);
	textFont(Melissa);
	//text("Perh", 460,132);
	fill(210,105,30);
	stroke(0,255,255);
	//text("sort", 412,170);
	fill(32,178,170);
	stroke(218,165,32);
	textFont(Diggity);
	//text("can", 560,242);
	fill(255,165,0);
	stroke(0,128,128);
	//text("?", 191,132);
	fill(123,104,238);
	stroke(25,25,112);
	//text("Are", 577,170);
	fill(0,100,0);
	stroke(128,0,0);
	textFont(Ballpointprint);
	//text("?", 85,278);
	fill(34,139,34);
	stroke(153,50,204);
	textFont(RonsFont);
	//text("are", 588,209);
	fill(147,112,219);
	stroke(0,0,205);
	//text("short", 16,209);
	push();
	fill(186,85,211);
	stroke(128,128,0);
	textFont(Diggity);
	//text("?", 436,132);
	pop();
	stroke(46,139,87);
	//text("me", 389,132);
	push();
	fill(139,69,19);
	stroke(128,0,0);
	textFont(Ballpointprint);
	//text("send", 400,209);
	pop();
	fill(240,128,128);
	//text("darl", 51,31);
	fill(0,0,205);
	stroke(107,142,35);
	textFont(Diggity);
	//text("can", 33,93);
	fill(178,34,34);
	stroke(0,255,255);
	textFont(Melissa);
	//text("I'm", 241,242);
	push();
	fill(218,165,32);
	stroke(128,128,0);
	textFont(Ballpointprint);
	//text("continual", 312,93);
	pop();
	stroke(128,0,128);
	//text("avoiding", 315,132);
	fill(233,150,122);
	stroke(0,100,0);
	textFont(Diggity);
	//text("Are", 215,132);
	push();
	fill(100,149,237);
	stroke(0,128,0);
	textFont(Ballpointprint);
	//text("ak", 318,170);
	pop();
	fill(0,128,128);
	stroke(178,34,34);
	textFont(Ballpointprint);
	//text("I", 308,209);
	fill(0,100,0);
	stroke(0,0,205);
	textFont(Diggity);
	//text("all", 512,170);
	fill(184,134,11);
	stroke(160,82,45);
	textFont(Ballpointprint);
	//text("ever", 41,340);
	fill(64,224,208);
	stroke(255,165,0);
	textFont(RonsFont);
	//text("You", 533,209);
	fill(100,149,237);
	stroke(255,255,0);
	textFont(Melissa);
	//text("I", 544,242);
	fill(255,255,0);
	stroke(0,206,209);
	textFont(Ballpointprint);
	//text("you", 266,132);
	fill(210,105,30);
	stroke(199,21,133);
	//text("For", 7,340);
	fill(128,0,128);
	stroke(255,140,0);
	textFont(Diggity);
	//text("no", 79,93);
	fill(154,205,50);
	stroke(165,42,42);
	textFont(RonsFont);
	//text("should", 16,170);
	push();
	fill(72,209,204);
	stroke(25,25,112);
	textFont(Melissa);
	//text("ys.", 443,93);
	pop();
	fill(144,238,144);
	textFont(Melissa);
	//text("much", 434,242);
	fill(240,230,140);
	stroke(139,69,19);
	textFont(RonsFont);
	//text("ing", 105,31);
	push();
	fill(135,206,250);
	stroke(107,142,35);
	textFont(Diggity);
	//text("Daisy", 7,402);
	pop();
	fill(75,0,130);
	stroke(255,215,0);
	//text("Is", 474,93);
	fill(255,0,0);
	stroke(128,128,0);
	textFont(Ballpointprint);
	//text("Bob,", 149,31);
	fill(184,134,11);
	stroke(128,0,0);
	textFont(RonsFont);
	//text("If", 225,209);
	push();
	fill(0,128,0);
	stroke(0,250,154);
	textFont(Diggity);
	//text("these", 245,93);
	pop();
	fill(222,184,135);
	stroke(107,142,35);
	textFont(Diggity);
	//text("The", 119,278);
	fill(0,0,128);
	stroke(0,0,255);
	//text("more", 483,242);
	fill(0,255,127);
	stroke(0,0,205);
	textFont(Melissa);
	//text("ce.", 350,278);
	fill(128,0,128);
	stroke(127,255,0);
	textFont(Diggity);
	text("money", 133,209);
	text("go", 108,170);
	fill(139,0,0);
	stroke(0,250,154);
	textFont(RonsFont);
	//text("?", 203,209);
	fill(128,0,128);
	stroke(0,0,205);
	textFont(Diggity);
	//text("relationship", 16,132);
	push();
	stroke(127,255,0);
	text("ignore", 178,93);
	pop();
	stroke(127,255,0);
	text("safe", 134,132);
	text("for", 206,170);
	fill(139,0,139);
	stroke(0,0,205);
	textFont(Ballpointprint);
	//text("we", 537,132);
	fill(127,255,0);
	stroke(0,255,255);
	textFont(Melissa);
	//text("My", 17,31);
	fill(128,128,0);
	stroke(0,139,139);
	//text("dela", 411,93);
	fill(148,0,211);
	stroke(210,105,30);
	textFont(Ballpointprint);
	//text("ts,", 227,278);
	fill(106,90,205);
	stroke(0,128,128);
	textFont(RonsFont);
	//text("x", 69,402);
	fill(186,85,211);
	stroke(0,100,0);
	textFont(Ballpointprint);
	//text("bre", 279,170);
	fill(0,0,255);
	stroke(0,0,139);
	textFont(Diggity);
	//text("guarded", 36,242);
	fill(160,82,45);
	stroke(0,128,128);
	textFont(Melissa);
	//text("aps", 498,132);
	fill(152,251,152);
	stroke(0,128,0);
	textFont(Ballpointprint);
	//text("sure", 321,242);
	fill(199,21,133);
	stroke(0,0,255);
	//text("and", 358,170);



}
