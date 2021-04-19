class Game{
    constructor(){


    }
    getState(){
       database.ref('gameState').on('value',function(data){gameState=data.val()})
    }

    updateState(state){

        database.ref('/').update({gameState:state})

    }

    async start(){
        if(gameState === 0){
            form = new Form()
            form.display()

            player = new Player()
            var playerCountRef= await database.ref("playerCount").once("value")

            if(playerCountRef.exists()){
                playerCount = playerCountRef.val()
                player.getCount()
            }
        }

            car1 = createSprite(50,200,) 
            car1.addImage(car1Img)
            car2 = createSprite(100,200,) 
            car2.addImage(car2Img)
            car3 = createSprite(150,200,) 
            car3.addImage(car3Img)
            car4 = createSprite(200,200,) 
            car4.addImage(car4Img)
            cars = [car1,car2,car3,car4]
    }

    play(){
        form.greeting.hide();
        Player.getPlayerInfo();
        if(allPlayers!=undefined){
            image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
            var x=0,y=0;
            var i=1;
            for (var plr in allPlayers) {
                x=x+200;
                y=displayHeight-allPlayers[plr].distance;
                cars[i-1].x=x;
                cars[i-1].y=y;
                if(i==player.index){
                    cars[i-1].shapeColor='red';
                    camera.position.x-displayWidth/2;
                    camera.position.y=cars[i-1].y
                }
                console.log (i,player.index)
                i+=1
            }
        }     
        if(keyDown (UP_ARROW)){

            player.distance+=10
            player.update()
        }

        player.getCarsAtEnd()

        if(player.distance>3800){
            gameState = 2
            player.rank+=1
            Player.updateCarsAtEnd(player.rank)
        }
        drawSprites();
    }

    end(){

        console.log("Game Over")
    }
}
