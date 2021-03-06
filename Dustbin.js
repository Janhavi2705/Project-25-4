class Dustbin {
    constructor(x, y, width, height) {
      var options = {
          isStatic:true,
          'restitution':0.8,
          'friction':1,
          'density':1.0
      }
      this.x=x;
      this.y= y;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.dustImage=loadImage("dustbingreen.png");
      World.add(world, this.body);
    }
    display(){
      image (this.dustImage,this.x,this.y,this.width,this.height);
     // image(this.dustimage, 0,0,this.width, this.height/2)
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(255);
      rect(this.x, this.y, this.width, this.height);
      pop();
    }
  };
  