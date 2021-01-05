class Box {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.2,
          'density':0.5,
          isStatic:false
      }
      this.body = Bodies.rectangle(x, y, 40, 50, options);
      this.width = 40;
      this.height = 50;
      this.visibility=255;
      //this.ran=Math.round(random(200,255));
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      if(this.body.speed<3)
      {push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(2);
      stroke("lightgreen");
      
      //fill(0,0,this.ran);
      rect(0, 0, this.width, this.height);
      pop();}
      else{
        push()
       World.remove(world,this.body)
        this.visibility=this.visibility-5;
        tint(255,this.visibility);
        pop()
      }
    }
    score()
    {
      if(this.visibility<255 &&this.visibility>0){
        score+=1;

      }
       
      
    }
  };
  