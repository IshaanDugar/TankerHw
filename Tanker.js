class Tanker {
  constructor(x, y, width, height) {
      var options = {
      isStatic: true
     }

     this.body = Bodies.rect(x, y, width, height, options);

     this.width = width;
     this.height = height;
     World.add(world, this.body);
    }

    display(){
      // Draw the tanker the way you like.
      // You could also use an image if you want a specific look

      var pos = this.body.position;;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      stroke(0);
      strokeWeight(2);
      rect(pos.x, pos.y, this.width, this.height);
      pop();

  }
}
