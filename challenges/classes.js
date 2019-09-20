// 1. Copy and paste your prototype in here and refactor into class syntax.

//  2's added to remove already defined errors
class CuboidMaker2{
   constructor( l, w, h ) {
   this.length = l;
   this.width = w;
   this.height = h;
   }
   volume() { return this.length * this.width * this.height; }
   surfaceArea() { 
      return 2 * ( this.length * this.width + this.length * this.height + this.width * this.height );
   }
}

const cuboid2 = new CuboidMaker2( 4, 5, 5 );


// Test your volume and surfaceArea methods by uncommenting the logs below:
log( cuboid2.volume() ); // 100
log( cuboid2.surfaceArea() ); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CubeMaker extends CuboidMaker2{
   constructor( side ){
      super( side, side, side );
      this.side = side;
   }
   volume() {  return this.side**3; }
   surfaceArea() { return 6 * this.side**2 ; }
}

const cube = new CubeMaker( 5 );

log( cube.volume() ); // 125
log( cube.surfaceArea() ); // 150