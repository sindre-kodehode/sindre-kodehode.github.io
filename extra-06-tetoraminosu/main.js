const WIDTH = 10, HEIGHT = 20, FPS = 30, MILLI = 1000 / FPS;

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
    [ 1, 1, 1, 1 ],
  ],
]

class Piece {
  constructor( playfield ) {
    this.x         = 4;
    this.y         = 0;
    this.shape     = shapes[ Math.floor( Math.random() * shapes.length ) ];
    this.height    = this.shape.length;
    this.width     = this.shape[0].length;
    this.playfield = playfield;
    this.interval  = setInterval( () => {
      this.updateY( this.y + 1 )
      this.checkCollision();
    }, 200 );
  }

  checkCollision() { 
    if ( this.y >= HEIGHT - this.height ) {
      this.shape.forEach( ( e, i ) => {
        e.forEach( ( f, j ) => {
          this.playfield[ this.x + this.y * WIDTH + trans( j, i ) ] = !!f;
        })
      })
      this.x      = 4;
      this.y      = 0;
      this.shape  = shapes[ Math.floor( Math.random() * shapes.length ) ];
      this.height = this.shape.length;
      this.width  = this.shape[0].length;
    }
  }

  moveLeft()  { this.updateX( this.x - 1 ) }
  moveRight() { this.updateX( this.x + 1 ) }

  updateX( newX ) { this.x = Math.max( 0, Math.min( WIDTH  - this.width,  newX ) ) }
  updateY( newY ) { this.y = Math.max( 0, Math.min( HEIGHT - this.height, newY ) ) }
}

class Playfield extends Array {
  constructor() {
    super( HEIGHT * WIDTH ).fill( false );
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
        this[ this.piece.x + this.piece.y * WIDTH + trans( j, i ) ] = !!f;
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
