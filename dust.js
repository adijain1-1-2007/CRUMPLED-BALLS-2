class Dust {
    constructor(x,y)
    {
        
        this.x=x
        this.y=y
        this.w=200
        this.h=213
        this.t=15
        this.angle=0
        var options={
            isStatic:true
        }
        this.image=loadImage("dustbingreen.png");
        this.bBody=Bodies.rectangle(this.x,this.y,this.w,this.t,options)
        this.Body=Bodies.rectangle(this.x-this.w/2,this.y-this.h/2,this.t,this.h,options)
        this.rBody=Bodies.rectangle(this.x+this.w/2,this.y-this.h/2,this.t,this.h,options)
        Matter.Body.setAngle(this.Body,this.angle)
        Matter.Body.setAngle(this.rBody,-1*this.angle)

        World.add(world,this.bBody)
        World.add(world,this.Body)
        World.add(world,this.rBody)

    }
    display()  {
        
    var bPos=this.bBody.position;
    var lPos=this.Body.position;
    var rPos=this.rBody.position;
    
    push()
    translate(bPos.x,bPos.y)
    imageMode(CENTER);
    strokeWeight(3);
    fill("purple")
   //rect (0,0,this.w,this.t)
   image(this.image,0,-this.h/2,this.w,this.h)
    pop()

    
    push()
    translate(lPos.x,lPos.y)
    rectMode(CENTER);
    strokeWeight(3);
    fill("purple")
    rotate(this.angle)
   // rect(0,0,this.t,this.h)       
    pop()

    push()
    translate(rPos.x,rPos.y)
    rectMode(CENTER);
    strokeWeight(3);
    fill("purple")
    rotate(-1*this.angle)    
    //rect(0,0,this.t,this.h)   

    pop()


    }
}