class Dustbin {
  constructor(x, y) {
    var options = {
        'isStatic': true
    }
    this.dwidth = 200;
    this.dheight = 100;
    this.thickness = 20;
    this.bodyb = Bodies.rectangle(x, y, this.dwidth,this.thickness, options);
    World.add(world,this.bodyb);
    this.bodyl = Bodies.rectangle(x-100,y-50,this.thickness,this.dheight,options);
    World.add(world,this.bodyl);
    this.bodyr = Bodies.rectangle(x+100,y-50,this.thickness, this.dheight, options);
    World.add(world,this.bodyr);
    this.bodyb.width = width;
    this.bodyb.height = height;
    
    
  }
  display(){
    push ();
    translate(this.bodyb.position.x,this.bodyb.position.y); 
    rectMode(CENTER); strokeWeight(3); fill(255,0,255); 
   rect(0,0,this.dwidth,this.thickness);
    pop ();

    push ();
    translate(this.bodyl.position.x,this.bodyl.position.y); 
    rectMode(CENTER); strokeWeight(3); fill(255,0,255); 
   rect(0,0,this.thickness,this.dheight);
    pop ();

    push ();
    translate(this.bodyr.position.x,this.bodyr.position.y); 
    rectMode(CENTER); strokeWeight(3); fill(255,0,255); 
   rect(0,0,this.thickness,this.dheight);
    pop ();
  }
};