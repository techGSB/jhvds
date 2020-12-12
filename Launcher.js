class   Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB : pointB,
            stiffness: 0.04,
            length: 20
        }


        this.pointB = pointB
        this.slingShot = Constraint.create(options);
        World.add(world, this.slingShot);
    }

   

    attach(body){
        this.slingShot.bodyA = body;
    }
    

fly()
{this.slingShot.bodyA = null;} 


  

    display(){
      
        if(this.slingShot.bodyA)
        {var pointA = this.slingShot.bodyA;
            var pointB = this.slingShot.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }

     
        
            
       
    }
    
}
