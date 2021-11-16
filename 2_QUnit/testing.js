import { Point } from './geom2D.js';

p1 = new Point(2,3);
alert(p1.x + "," + p1.y)
p1.suma(new Point(5,5));
alert(p1.x + "," + p1.y)

QUnit.test( "TestSuma2D", function( assert ) {
    p1 = new Point(2,3);
    p1.suma(new Point(5,5));
    var result = square(2);
    assert.equal( p1.x, "7", "x coordinate must be 7." );
    assert.equal( p1.y, "8", "x coordinate must be 8." );

    p1 = new Point(0,0);
    p1.suma(new Point(-1,-1));
    var result = square(2);
    assert.equal( p1.x, "-1", "x coordinate must be -1." );
    assert.equal( p1.y, "-1", "x coordinate must be -1." );

});

    
