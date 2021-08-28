class Paper{
            constructor(x,y){

                var options = {
                    //isStatic:false,
                    restitution:0.5,
                    density:0.3,
                    friction:1.0,
                };
                this.body = Bodies.circle(x,y,10,options);
                World.add(world, this.body)
            }

            display(){
                var pos = this.body.position;
                fill('cyan');
                ellipseMode(RADIUS);
                ellipse(pos.x, pos.y, 10, 10);
            }

}