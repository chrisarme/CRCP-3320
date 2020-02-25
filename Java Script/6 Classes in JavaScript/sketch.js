let circle;
let circles = [];

function setup()
{
    createCanvas(windowWidth, windowHeight);
    circle = new Circle(500, 500);

    for (let i = 0; i < 20; i++)
    {
        circles[i] = new Circle(random(0, windowWidth), random(0, windowHeight));
    }
}

function draw()
{
    background(255);
    circle.display();
    circle.fade();

    for (let i = 0; i < circles.length; i++)
    {
        circles[i].display();
        circles[i].fade();

        if (circles[i].alpha <= 0)
        {
            circles[i] = new Circle(random(0, windowWidth), random(0, windowHeight));
        }
    }
}

function mousePressed()
{
    circles.push(new Circle(mouseX, mouseY));
}
