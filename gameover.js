function GameOver()
{

    this.setup = function()
    
    {
         createCanvas(750, 450);
    
    }

    this.draw = function()    {
    background(255);    
    
        fill("black");
        textSize( map( sin(frameCount * 0.1), 0, 1, 24, 32) );
        textAlign(CENTER);
        text("GAME OVER", width / 2, height / 2);

        textSize(12);
        text("Score: " + oGame.score(), width / 2, height / 2 + 20);
        text("Press any key to restart game...", width / 2, height - 20);
    }

    this.keyPressed = function()
    {
        this.sceneManager.showScene( Intro );
    }
}
