const WIDTH = 12, HEIGHT = 21, FPS = 30, MILLI = 1000 / FPS;

const trans = ( x, y ) => y * WIDTH + x;

const shapes = [
  [
    [ 0, 1, 0 ],
    [ 1, 1, 1 ],
  ],
  [
    [ 1, 1, 0 ],
    [ 0, 1, 1 ],
  ],
  [
    [ 0, 1, 1 ],
    [ 1, 1, 0 ],
  ],
  [
    [ 1, 0, 0 ],
    [ 1, 1, 1 ],
  ],
  [
    [ 0, 0, 1 ],
    [ 1, 1, 1 ],
  ],
  [
    [ 1, 1 ],
    [ 1, 1 ],
  ],
  [
    [ 1, 1, 1, 1 ],
  ],
]

class Piece {
  constructor( playfield ) {
    this.reset();
    this.playfield = playfield;
    this.interval  = setInterval( () => {
      this.y++;
      this.checkCollision();
    }, 200 );
  }

  reset() {
    this.x      = 4;
    this.y      = 0;
    this.shape  = shapes[ Math.floor( Math.random() * shapes.length ) ];
    this.height = this.shape.length;
    this.width  = this.shape[0].length;
  }

  draw() {
    this.shape.forEach( ( e, i ) => {
      e.forEach( ( f, j ) => {
        const k = this.x + this.y * WIDTH + trans( j, i );
        this.playfield[ k ] = this.playfield[ k ] || f;
      })
    })
  }

  checkCollision() { 
    let collision = false;

    this.shape.forEach( ( e, i ) => {
      e.forEach( ( f, j ) => {
        const k = this.x + this.y * WIDTH + trans( j, i );
        if ( this.playfield[ k ] && f ) collision = true;
      })
    })

    if ( collision ) {
      this.y--;
      this.draw();
      this.reset();
    }
  }

  checkCollisionX() {
    let collision = false;

    this.shape.forEach( ( e, i ) => {
      e.forEach( ( f, j ) => {
        const k = this.x + this.y * WIDTH + trans( j, i );
        if ( this.playfield[ k ] && f ) collision = true;
      })
    })
    
    console.log( collision );
    return collision;
  }

  moveLeft()  { 
    this.x--;
    if ( this.checkCollisionX() )
      this.x++;
  }

  moveRight() {
    this.x++;
    if ( this.checkCollisionX() )
      this.x--;
  }
}

class Playfield extends Array {
  constructor() {
    super( HEIGHT * WIDTH ).fill( false );

    for ( let i = 0; i < HEIGHT * WIDTH; i += WIDTH )
      this[ i ] = true;

    for ( let i = WIDTH - 1; i < HEIGHT * WIDTH; i += WIDTH )
      this[ i ] = true;

    for ( let i = WIDTH * HEIGHT - WIDTH; i < HEIGHT * WIDTH; i++ )
      this[ i ] = true;
  }
}

class Buffer extends Array {
  constructor( piece, playfield ) {
    super( HEIGHT * WIDTH ).fill( false );
    this.piece     = piece;
    this.playfield = playfield;
  }

  render() {
    this.playfield.forEach( ( e, i ) => {
      this[ i ] = e;
    })

    this.piece.shape.forEach( ( e, i ) => {
      e.forEach( ( f, j ) => {
        const k = this.piece.x + this.piece.y * WIDTH + trans( j, i );
        this[ k ] = this[ k ] || f;
      })
    })

    this.forEach( ( _, i ) =>
      cells[ i ].className = buffer[ i ] ? "active" : ""
    )
  }
}

const cells = Array( HEIGHT * WIDTH ).fill().map( () =>
    document.createElement( "td" ) );

const rows = Array( HEIGHT ).fill().map( () =>
  document.createElement( "tr" ) );

rows.forEach( ( row, i ) => row.append(
  ...cells.slice( i * WIDTH, i * WIDTH + WIDTH ) ) );

const table = document.createElement( "table" );

table.append( ...rows );
document.body.append( table );

const playfield = new Playfield();
const piece     = new Piece( playfield );
const buffer    = new Buffer( piece, playfield );

setInterval( () => {
  buffer.render();
}, MILLI );

document.addEventListener( "keydown", ({ key }) => {
  switch( key ) {
    case "ArrowLeft"  : piece.moveLeft()  ; break ;
    case "ArrowRight" : piece.moveRight() ; break ;
}});
