interface ChessPosition {
  board: string[][];
  currentPlayer: 'white' | 'black';
  moveHistory: string[];
}

interface ChessMove {
  from: { row: number; col: number };
  to: { row: number; col: number };
  piece: string;
  notation: string;
  evaluation: string;
}

export class ChessAI {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async getMagnusMove(position: ChessPosition): Promise<ChessMove | null> {
    const systemPrompt = `You are Magnus Carlsen, the world chess champion. You have an exceptional understanding of chess strategy, tactics, and endgames. Analyze the current position and suggest the best move with your characteristic playing style - aggressive, precise, and strategically sound.

Always respond in this exact JSON format:
{
  "move": {
    "from": {"row": 0, "col": 4},
    "to": {"row": 0, "col": 6},
    "notation": "O-O"
  },
  "evaluation": "This castling move secures the king's safety while connecting the rooks. A fundamental principle in the opening phase.",
  "confidence": "95%"
}`;

    const boardDescription = this.describeBoardPosition(position);
    
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${this.apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `${systemPrompt}\n\nCurrent position:\n${boardDescription}\n\nCurrent player: ${position.currentPlayer}\nMove history: ${position.moveHistory.join(', ')}\n\nWhat is your best move as Magnus Carlsen?`
            }]
          }]
        })
      });

      if (!response.ok) {
        throw new Error(`Gemini API error: ${response.status}`);
      }

      const data = await response.json();
      const aiResponse = data.candidates[0].content.parts[0].text;
      
      // Parse the JSON response
      const jsonMatch = aiResponse.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const moveData = JSON.parse(jsonMatch[0]);
        return {
          from: moveData.move.from,
          to: moveData.move.to,
          piece: position.board[moveData.move.from.row][moveData.move.from.col],
          notation: moveData.move.notation,
          evaluation: moveData.evaluation
        };
      }
    } catch (error) {
      console.error('Chess AI error:', error);
    }

    return null;
  }

  getValidMoves(board: string[][], fromRow: number, fromCol: number): { row: number; col: number }[] {
    const piece = board[fromRow][fromCol];
    if (!piece) return [];

    const moves: { row: number; col: number }[] = [];
    const isWhite = piece === piece.toUpperCase();

    // Basic move validation for each piece type
    const pieceType = piece.toLowerCase();
    
    switch (pieceType) {
      case 'p': // Pawn
        moves.push(...this.getPawnMoves(board, fromRow, fromCol, isWhite));
        break;
      case 'r': // Rook
        moves.push(...this.getRookMoves(board, fromRow, fromCol, isWhite));
        break;
      case 'n': // Knight
        moves.push(...this.getKnightMoves(board, fromRow, fromCol, isWhite));
        break;
      case 'b': // Bishop
        moves.push(...this.getBishopMoves(board, fromRow, fromCol, isWhite));
        break;
      case 'q': // Queen
        moves.push(...this.getQueenMoves(board, fromRow, fromCol, isWhite));
        break;
      case 'k': // King
        moves.push(...this.getKingMoves(board, fromRow, fromCol, isWhite));
        break;
    }

    return moves.filter(move => this.isValidSquare(move.row, move.col));
  }

  private describeBoardPosition(position: ChessPosition): string {
    let description = "Board position (8x8, a1=bottom-left):\n";
    
    for (let row = 0; row < 8; row++) {
      const rank = 8 - row;
      let rankDescription = `${rank}: `;
      
      for (let col = 0; col < 8; col++) {
        const piece = position.board[row][col];
        const file = String.fromCharCode(97 + col); // a-h
        
        if (piece) {
          const pieceName = this.getPieceName(piece);
          rankDescription += `${file}${rank}=${pieceName} `;
        }
      }
      
      description += rankDescription + "\n";
    }
    
    return description;
  }

  private getPieceName(piece: string): string {
    const isWhite = piece === piece.toUpperCase();
    const color = isWhite ? 'W' : 'B';
    
    const pieceNames: { [key: string]: string } = {
      'p': 'Pawn',
      'r': 'Rook', 
      'n': 'Knight',
      'b': 'Bishop',
      'q': 'Queen',
      'k': 'King'
    };
    
    return `${color}${pieceNames[piece.toLowerCase()]}`;
  }

  private getPawnMoves(board: string[][], row: number, col: number, isWhite: boolean): { row: number; col: number }[] {
    const moves: { row: number; col: number }[] = [];
    const direction = isWhite ? -1 : 1;
    const startRow = isWhite ? 6 : 1;

    // Forward move
    if (this.isValidSquare(row + direction, col) && !board[row + direction][col]) {
      moves.push({ row: row + direction, col });
      
      // Double move from starting position
      if (row === startRow && !board[row + 2 * direction][col]) {
        moves.push({ row: row + 2 * direction, col });
      }
    }

    // Captures
    for (const captureCol of [col - 1, col + 1]) {
      if (this.isValidSquare(row + direction, captureCol)) {
        const targetPiece = board[row + direction][captureCol];
        if (targetPiece && (targetPiece === targetPiece.toUpperCase()) !== isWhite) {
          moves.push({ row: row + direction, col: captureCol });
        }
      }
    }

    return moves;
  }

  private getRookMoves(board: string[][], row: number, col: number, isWhite: boolean): { row: number; col: number }[] {
    const moves: { row: number; col: number }[] = [];
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    for (const [dRow, dCol] of directions) {
      for (let i = 1; i < 8; i++) {
        const newRow = row + i * dRow;
        const newCol = col + i * dCol;

        if (!this.isValidSquare(newRow, newCol)) break;

        const targetPiece = board[newRow][newCol];
        if (!targetPiece) {
          moves.push({ row: newRow, col: newCol });
        } else {
          if ((targetPiece === targetPiece.toUpperCase()) !== isWhite) {
            moves.push({ row: newRow, col: newCol });
          }
          break;
        }
      }
    }

    return moves;
  }

  private getKnightMoves(board: string[][], row: number, col: number, isWhite: boolean): { row: number; col: number }[] {
    const moves: { row: number; col: number }[] = [];
    const knightMoves = [
      [-2, -1], [-2, 1], [-1, -2], [-1, 2],
      [1, -2], [1, 2], [2, -1], [2, 1]
    ];

    for (const [dRow, dCol] of knightMoves) {
      const newRow = row + dRow;
      const newCol = col + dCol;

      if (this.isValidSquare(newRow, newCol)) {
        const targetPiece = board[newRow][newCol];
        if (!targetPiece || (targetPiece === targetPiece.toUpperCase()) !== isWhite) {
          moves.push({ row: newRow, col: newCol });
        }
      }
    }

    return moves;
  }

  private getBishopMoves(board: string[][], row: number, col: number, isWhite: boolean): { row: number; col: number }[] {
    const moves: { row: number; col: number }[] = [];
    const directions = [[1, 1], [1, -1], [-1, 1], [-1, -1]];

    for (const [dRow, dCol] of directions) {
      for (let i = 1; i < 8; i++) {
        const newRow = row + i * dRow;
        const newCol = col + i * dCol;

        if (!this.isValidSquare(newRow, newCol)) break;

        const targetPiece = board[newRow][newCol];
        if (!targetPiece) {
          moves.push({ row: newRow, col: newCol });
        } else {
          if ((targetPiece === targetPiece.toUpperCase()) !== isWhite) {
            moves.push({ row: newRow, col: newCol });
          }
          break;
        }
      }
    }

    return moves;
  }

  private getQueenMoves(board: string[][], row: number, col: number, isWhite: boolean): { row: number; col: number }[] {
    return [
      ...this.getRookMoves(board, row, col, isWhite),
      ...this.getBishopMoves(board, row, col, isWhite)
    ];
  }

  private getKingMoves(board: string[][], row: number, col: number, isWhite: boolean): { row: number; col: number }[] {
    const moves: { row: number; col: number }[] = [];
    const directions = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1],           [0, 1],
      [1, -1],  [1, 0],  [1, 1]
    ];

    for (const [dRow, dCol] of directions) {
      const newRow = row + dRow;
      const newCol = col + dCol;

      if (this.isValidSquare(newRow, newCol)) {
        const targetPiece = board[newRow][newCol];
        if (!targetPiece || (targetPiece === targetPiece.toUpperCase()) !== isWhite) {
          moves.push({ row: newRow, col: newCol });
        }
      }
    }

    return moves;
  }

  private isValidSquare(row: number, col: number): boolean {
    return row >= 0 && row < 8 && col >= 0 && col < 8;
  }
}
