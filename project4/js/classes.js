class Room extends PIXI.Sprite{





    //pass in connections to other rooms
    //layout is a 2d array that puts in obstacles and stuff. height:20 width:10
    constructor(left,right,up,down,layout){
        this.left = left;
        this.right = right;
        this.up = up;
        this.down = down;
        this.layout = layout;
        //super("roomimage");
    }



}