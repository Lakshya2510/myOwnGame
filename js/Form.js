class Form{

    constructor(){

        this.input=createInput("name")
        this.button=createButton("play")
        this.title=createElement("h2")
        this.greeting=createElement("h3")
    }

    display(){

        this.input.position(200,200)
        this.button.position(200,400)
        this.title.html("Car Racing Game")
        this.title.position(200,100)
        this.button.mousePressed(()=>
        {this.input.hide();
        this.button.hide();
        player.name=this.input.value();
        playerCount+=1;
        player.index=playerCount
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hi "+player.name)
        this.greeting.position(200,300)})
    }

}