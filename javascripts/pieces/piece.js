class Piece {
    constructor(options) {
        this.color = options.color;
        this.pos = options.pos;
        this.board = options.board;
    }
}

class NullPiece extends Piece {
    constructor(options) {
        options.color = null;
        super(options);
    }
}