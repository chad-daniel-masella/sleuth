/*
201 - The case of Judge Hopper
Stage 4 - The warehouse

Officer: 5909588
CaseNum: 201-3-23260076-5909588

As you enter the ALGOL warehouse you are struck by the most horrendous stench - it’s not the fish. Lying amongst piles of fish carcasses you find the body of Judge Hopper. Gathering yourself together, you tie a handkerchief around your nose and mouth and quickly set about recording the evidence.

Draw around the Judge’s body ...

HINT: You should only need around 20 vertices to draw round the judge. Make sure you close your shape!

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  beginShape()
  endShape()
  vertex()

*/

var img;

function preload()
{
    img = loadImage('scene.png');
}

function setup()
{
    createCanvas(img.width,img.height);
}

function draw()
{

    image(img,0,0);
    stroke(255, 0, 0);
    strokeWeight(3);
    noFill();

    // write the code to draw around the Judge's body below
    beginShape();
    vertex(505,374);
    vertex(506,319);
    vertex(440,357);
    vertex(447,293);
    vertex(513,273);
    vertex(554,301);
    vertex(648,145);
    vertex(670,157);
    vertex(695,124);
    vertex(694,62);
    vertex(832,165);
    vertex(788,174);
    vertex(788,210);
    vertex(652,392);
    vertex(783,501);
    vertex(724,535);
    vertex(648,460);
    vertex(541,480);
    vertex(517,410);
    vertex(505,374);
    endShape();


    //A helpful mouse pointer
	push();
        fill(255,69,0);
        noStroke();
        text(mouseX + "," + mouseY, mouseX,mouseY);
    pop();

}
