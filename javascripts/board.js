import { NullPiece, Piece } from './pieces/piece';

class Board {
    constructor() {
        this.board = this.fillBoard();
    }

    createArray() {
        let newArr = [];

        for ( let i = 0; i < 8; i++ ) {
            let subArr = new Array(8);
            newArr.push(subArr);
        }

        return newArr;
    }

    fillBoard() {
        let board = this.createArray();

        for ( let i = 0; i < board.length; i++ ) {
            for (let j = 0; j < board[0].length; j++ ) {
                board[i][j] = new NullPiece({ pos: [i,j], board: board });
            }
        }

        return board;
    }
}