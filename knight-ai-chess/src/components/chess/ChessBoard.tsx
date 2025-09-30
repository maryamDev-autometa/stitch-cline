'use client';

import { useState, useCallback } from 'react';
import { chessPieces, initialChessBoard } from '@/lib/design-system';
import { ChessAI } from '@/lib/chess-ai';
import Modal from '@/components/ui/Modal';
import Button from '@/components/ui/Button';

interface Position {
  row: number;
  col: number;
}

interface ChessBoardProps {
  className?: string;
  interactive?: boolean;
  onCapturedPiecesChange?: (capturedPieces: {white: string[], black: string[]}) => void;
  onMoveHistoryChange?: (moveHistory: string[]) => void;
  onCurrentPlayerChange?: (currentPlayer: 'white' | 'black') => void;
}

export default function ChessBoard({ 
  className = '', 
  interactive = true,
  onCapturedPiecesChange,
  onMoveHistoryChange,
  onCurrentPlayerChange
}: ChessBoardProps) {
  const [board, setBoard] = useState(() => initialChessBoard.map(row => [...row]));
  const [selectedSquare, setSelectedSquare] = useState<Position | null>(null);
  const [draggedPiece, setDraggedPiece] = useState<{ piece: string; from: Position } | null>(null);
  const [validMoves, setValidMoves] = useState<Position[]>([]);
  const [chessAI] = useState(() => new ChessAI('AIzaSyDhkVQDhkVQDhkVQDhkVQDhkVQDhkVQDhk')); // Replace with actual Gemini API key
  const [moveCount, setMoveCount] = useState(0);
  const [showMatchModal, setShowMatchModal] = useState(false);
  const [isFullMatch, setIsFullMatch] = useState(false);
  const [capturedPieces, setCapturedPieces] = useState<{white: string[], black: string[]}>({white: [], black: []});
  const [moveHistory, setMoveHistory] = useState<string[]>([]);
  const [currentPlayer, setCurrentPlayer] = useState<'white' | 'black'>('white');

  const isValidMove = (from: Position, to: Position): boolean => {
    // Use ChessAI to validate if the move is legal
    const validMoves = chessAI.getValidMoves(board, from.row, from.col);
    return validMoves.some(move => move.row === to.row && move.col === to.col);
  };

  const getValidMoves = (position: Position): Position[] => {
    // Use proper chess move validation from ChessAI
    return chessAI.getValidMoves(board, position.row, position.col);
  };

  const handleSquareClick = (row: number, col: number) => {
    if (!interactive) return;
    
    const clickedPosition = { row, col };
    
    if (selectedSquare) {
      // Try to move piece
      if (isValidMove(selectedSquare, clickedPosition)) {
        movePiece(selectedSquare, clickedPosition);
      }
      setSelectedSquare(null);
      setValidMoves([]);
    } else {
      // Select piece
      const piece = board[row][col];
      if (piece) {
        setSelectedSquare(clickedPosition);
        setValidMoves(getValidMoves(clickedPosition));
      }
    }
  };

  const movePiece = (from: Position, to: Position) => {
    const piece = board[from.row][from.col];
    const capturedPiece = board[to.row][to.col];
    const isWhitePiece = piece === piece.toUpperCase();
    
    // Convert positions to chess notation
    const fromNotation = String.fromCharCode(97 + from.col) + (8 - from.row);
    const toNotation = String.fromCharCode(97 + to.col) + (8 - to.row);
    const pieceSymbol = chessPieces[piece as keyof typeof chessPieces];
    const playerColor = isWhitePiece ? 'White' : 'Black';
    
    // Create descriptive move notation
    let moveNotation = '';
    if (capturedPiece) {
      const capturedPieceSymbol = chessPieces[capturedPiece as keyof typeof chessPieces];
      const capturedPlayerColor = capturedPiece === capturedPiece.toUpperCase() ? 'White' : 'Black';
      moveNotation = `${playerColor} kills ${capturedPlayerColor} ${capturedPieceSymbol} at ${toNotation}`;
    } else {
      moveNotation = `${playerColor} moves ${pieceSymbol} from ${fromNotation} to ${toNotation}`;
    }

    setBoard(prevBoard => {
      const newBoard = prevBoard.map(row => [...row]);
      newBoard[to.row][to.col] = piece;
      newBoard[from.row][from.col] = '';
      return newBoard;
    });

    // Track captured pieces
    if (capturedPiece) {
      setCapturedPieces(prev => {
        const isWhiteCapturing = isWhitePiece;
        const newCapturedPieces = isWhiteCapturing 
          ? { ...prev, black: [...prev.black, capturedPiece] }
          : { ...prev, white: [...prev.white, capturedPiece] };
        
        // Call callback
        onCapturedPiecesChange?.(newCapturedPieces);
        return newCapturedPieces;
      });
    }

    // Add move to history
    setMoveHistory(prev => {
      const newMoveHistory = [...prev, moveNotation];
      onMoveHistoryChange?.(newMoveHistory);
      return newMoveHistory;
    });

    // Switch current player
    setCurrentPlayer(prev => {
      const newCurrentPlayer = prev === 'white' ? 'black' : 'white';
      onCurrentPlayerChange?.(newCurrentPlayer);
      return newCurrentPlayer;
    });

    // Increment move count and check if we should show the match popup
    const newMoveCount = moveCount + 1;
    setMoveCount(newMoveCount);

    // Show popup after 6-8 moves (3-4 moves from each side)
    if (!isFullMatch && newMoveCount >= 6 && newMoveCount <= 8) {
      setShowMatchModal(true);
    }
  };

  const [showGameTypeDropdown, setShowGameTypeDropdown] = useState(false);

  const handleStartMatch = () => {
    setShowGameTypeDropdown(true);
  };

  const handleContinuePractice = () => {
    setShowMatchModal(false);
  };

  const handleGameTypeSelect = (gameType: string) => {
    setShowMatchModal(false);
    setShowGameTypeDropdown(false);
    setIsFullMatch(true);
    
    // Navigate to the selected game type setup
    switch (gameType) {
      case 'human-vs-human':
        window.location.href = '/setup/human-vs-human';
        break;
      case 'human-vs-ai':
        window.location.href = '/setup/human-vs-ai';
        break;
      case 'ai-vs-ai':
        window.location.href = '/setup/ai-vs-ai';
        break;
    }
  };

  const handleDragStart = (e: React.DragEvent, row: number, col: number) => {
    const piece = board[row][col];
    if (piece) {
      setDraggedPiece({ piece, from: { row, col } });
      setValidMoves(getValidMoves({ row, col }));
      e.dataTransfer.effectAllowed = 'move';
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent, row: number, col: number) => {
    e.preventDefault();
    if (draggedPiece && isValidMove(draggedPiece.from, { row, col })) {
      movePiece(draggedPiece.from, { row, col });
    }
    setDraggedPiece(null);
    setValidMoves([]);
  };

  const renderSquare = (row: number, col: number) => {
    const isLight = (row + col) % 2 !== 0;
    const piece = board[row][col];
    const isSelected = selectedSquare?.row === row && selectedSquare?.col === col;
    const isValidMoveSquare = validMoves.some(move => move.row === row && move.col === col);
    const isDraggedFrom = draggedPiece?.from.row === row && draggedPiece?.from.col === col;
    
    const squareClasses = [
      'flex items-center justify-center relative transition-all duration-200',
      isLight ? 'bg-board-light' : 'bg-board-dark',
      isSelected && 'ring-4 ring-primary ring-opacity-60',
      isDraggedFrom && 'opacity-50',
      'hover:brightness-110'
    ].filter(Boolean).join(' ');

    return (
      <div
        key={`${row}-${col}`}
        className={squareClasses}
        onClick={() => handleSquareClick(row, col)}
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e, row, col)}
      >
        {/* Valid move indicator */}
        {isValidMoveSquare && !piece && (
          <div className="w-4 h-4 bg-primary rounded-full opacity-60" />
        )}
        {isValidMoveSquare && piece && (
          <div className="absolute inset-0 border-4 border-primary rounded opacity-60" />
        )}
        
        {/* Chess piece */}
        {piece && (
          <span
            className={`text-4xl md:text-5xl select-none transition-transform ${
              interactive 
                ? 'cursor-grab active:cursor-grabbing hover:scale-110' 
                : 'cursor-default'
            } ${
              'rnbqkp'.includes(piece) 
                ? 'text-black drop-shadow-sm' 
                : 'text-white white-piece drop-shadow-sm'
            }`}
            draggable={interactive}
            onDragStart={interactive ? (e) => handleDragStart(e, row, col) : undefined}
          >
            {chessPieces[piece as keyof typeof chessPieces]}
          </span>
        )}
      </div>
    );
  };

  return (
    <>
      <div className={`w-full max-w-2xl aspect-square ${className}`}>
        <div className="grid grid-cols-8 grid-rows-8 w-full h-full rounded-lg overflow-hidden shadow-2xl border-2 border-gray-300 dark:border-gray-600">
          {Array.from({ length: 8 }, (_, row) =>
            Array.from({ length: 8 }, (_, col) => renderSquare(row, col))
          )}
        </div>
      </div>

      {/* Play a Match Modal */}
      <Modal
        isOpen={showMatchModal}
        onClose={handleContinuePractice}
        title={showGameTypeDropdown ? "Choose Game Type" : "Ready for a Real Match?"}
        actions={
          showGameTypeDropdown ? (
            <Button variant="secondary" onClick={() => setShowGameTypeDropdown(false)}>
              Back
            </Button>
          ) : (
            <>
              <Button variant="secondary" onClick={handleContinuePractice}>
                Continue Practice
              </Button>
              <Button variant="primary" onClick={handleStartMatch}>
                <span className="material-symbols-outlined mr-2">sports_esports</span>
                Play a Match
              </Button>
            </>
          )
        }
      >
        {showGameTypeDropdown ? (
          <div className="space-y-3">
            <p className="text-center text-gray-600 dark:text-gray-300 mb-4">
              Select your preferred game mode:
            </p>
            
            <button
              onClick={() => handleGameTypeSelect('human-vs-human')}
              className="w-full p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center gap-3"
            >
              <span className="material-symbols-outlined text-2xl text-blue-500">people</span>
              <div className="text-left">
                <div className="font-semibold text-gray-900 dark:text-white">Human vs Human</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Play against a friend locally</div>
              </div>
            </button>

            <button
              onClick={() => handleGameTypeSelect('human-vs-ai')}
              className="w-full p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center gap-3"
            >
              <span className="material-symbols-outlined text-2xl text-green-500">smart_toy</span>
              <div className="text-left">
                <div className="font-semibold text-gray-900 dark:text-white">Human vs AI</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Challenge the AI opponent</div>
              </div>
            </button>

            <button
              onClick={() => handleGameTypeSelect('ai-vs-ai')}
              className="w-full p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center gap-3"
            >
              <span className="material-symbols-outlined text-2xl text-purple-500">psychology</span>
              <div className="text-left">
                <div className="font-semibold text-gray-900 dark:text-white">AI vs AI</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Watch AI models compete</div>
              </div>
            </button>
          </div>
        ) : (
          <div className="text-center">
            <div className="mb-4">
              <span className="material-symbols-outlined text-4xl text-primary mb-2 block">
                emoji_events
              </span>
            </div>
            <p className="text-lg mb-2">
              Great opening moves! You've completed {moveCount} moves.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Would you like to start a competitive match or continue practicing with these pieces?
            </p>
          </div>
        )}
      </Modal>
    </>
  );
}
