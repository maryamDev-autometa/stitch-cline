'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Button from '@/components/ui/Button';

export default function GameResultSummary() {
  const [currentMove, setCurrentMove] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const moveList = [
    { move: 'Pawn e2 to e4', player: 'white', from: [6, 4], to: [4, 4] },
    { move: 'Pawn e7 to e5', player: 'black', from: [1, 4], to: [3, 4] },
    { move: 'Knight g1 to f3', player: 'white', from: [7, 6], to: [5, 5] },
    { move: 'Knight b8 to c6', player: 'black', from: [0, 1], to: [2, 2] },
    { move: 'Bishop f1 to b5', player: 'white', from: [7, 5], to: [3, 1] },
    { move: 'Pawn a7 to a6', player: 'black', from: [1, 0], to: [2, 0] },
    { move: 'Bishop b5 to a4', player: 'white', from: [3, 1], to: [4, 0] },
    { move: 'Knight g8 to f6', player: 'black', from: [0, 6], to: [2, 5] },
    { move: 'King castles short', player: 'white', from: [7, 4], to: [7, 6] },
    { move: 'Bishop f8 to e7', player: 'black', from: [0, 5], to: [1, 4] },
  ];

  const getInitialBoard = () => [
    ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
    ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
    ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'],
  ];

  const [currentBoard, setCurrentBoard] = useState(() => getInitialBoard());

  // Update board when currentMove changes
  const updateBoardToMove = (moveIndex: number) => {
    const board = getInitialBoard();
    
    // Apply all moves up to the current move
    for (let i = 0; i < moveIndex && i < moveList.length; i++) {
      const move = moveList[i];
      if (move.from && move.to) {
        const [fromRow, fromCol] = move.from;
        const [toRow, toCol] = move.to;
        const piece = board[fromRow][fromCol];
        
        // Move the piece
        board[toRow][toCol] = piece;
        board[fromRow][fromCol] = '';
        
        // Handle special moves like castling
        if (move.move.includes('castles short')) {
          // Move rook for short castling
          if (move.player === 'white') {
            board[7][5] = board[7][7]; // Move rook from h1 to f1
            board[7][7] = '';
          } else {
            board[0][5] = board[0][7]; // Move rook from h8 to f8
            board[0][7] = '';
          }
        }
      }
    }
    
    setCurrentBoard(board);
  };

  const handlePrevious = () => {
    if (currentMove > 0) {
      setCurrentMove(currentMove - 1);
    }
  };

  const handleNext = () => {
    if (currentMove < moveList.length - 1) {
      setCurrentMove(currentMove + 1);
    }
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Update board when currentMove changes
  useEffect(() => {
    updateBoardToMove(currentMove);
  }, [currentMove]);

  const renderSquare = (row: number, col: number) => {
    const isLight = (row + col) % 2 === 0;
    const piece = currentBoard[row][col];
    
    // Determine piece color based on the piece itself, not position
    // Black pieces: ♜♞♝♛♚♟ (filled black symbols)
    // White pieces: ♖♘♗♕♔♙ (filled white symbols) - but we're using same symbols with different colors
    const isBlackPiece = piece && ['♜', '♞', '♝', '♛', '♚', '♟'].includes(piece);
    
    return (
      <div
        key={`${row}-${col}`}
        className={`flex items-center justify-center ${
          isLight ? 'bg-board-light-green' : 'bg-board-dark-green'
        }`}
      >
        {piece && (
          <span className={`text-[2.5rem] leading-none cursor-pointer ${
            isBlackPiece 
              ? 'text-gray-900 dark:text-black' 
              : 'text-gray-100 dark:text-white'
          }`}>
            {piece}
          </span>
        )}
      </div>
    );
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <Header variant="full" />
      
      <main className="flex-1 bg-background-light dark:bg-background-dark py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <button 
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-primary transition-colors mb-2"
            >
              <span className="material-symbols-outlined">arrow_back</span>
              <span>Back to Game History</span>
            </button>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Game Replay & Analysis</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">You (1350) vs Alex_D (1250) - Oct 26, 2023</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Chess Board - 2/3 width */}
            <div className="lg:col-span-2">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <div className="grid grid-cols-8 grid-rows-8 w-full aspect-square border-2 border-gray-600">
                  {Array.from({ length: 8 }, (_, row) =>
                    Array.from({ length: 8 }, (_, col) => renderSquare(row, col))
                  )}
                </div>
                
                {/* Playback Controls */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-sm p-4">
                  <div className="flex items-center justify-center gap-4">
                    <button
                      onClick={() => setCurrentMove(0)}
                      className="rounded-full bg-gray-800/50 p-3 text-white hover:bg-gray-800/80 transition-colors"
                    >
                      <span className="material-symbols-outlined">fast_rewind</span>
                    </button>
                    <button
                      onClick={handlePrevious}
                      disabled={currentMove === 0}
                      className="rounded-full bg-gray-800/50 p-3 text-white hover:bg-gray-800/80 transition-colors disabled:opacity-50"
                    >
                      <span className="material-symbols-outlined">skip_previous</span>
                    </button>
                    <button
                      onClick={handlePlayPause}
                      className="rounded-full bg-primary p-4 text-white hover:bg-blue-700 transition-colors"
                    >
                      <span className="material-symbols-outlined text-3xl">
                        {isPlaying ? 'pause' : 'play_arrow'}
                      </span>
                    </button>
                    <button
                      onClick={handleNext}
                      disabled={currentMove === moveList.length - 1}
                      className="rounded-full bg-gray-800/50 p-3 text-white hover:bg-gray-800/80 transition-colors disabled:opacity-50"
                    >
                      <span className="material-symbols-outlined">skip_next</span>
                    </button>
                    <button
                      onClick={() => setCurrentMove(moveList.length - 1)}
                      className="rounded-full bg-gray-800/50 p-3 text-white hover:bg-gray-800/80 transition-colors"
                    >
                      <span className="material-symbols-outlined">fast_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Move List - 1/3 width */}
            <div className="bg-gray-200/20 dark:bg-gray-800/20 rounded-xl p-4 flex flex-col">
              <h3 className="text-xl font-bold mb-4 px-2">Move List</h3>
              <div className="flex-grow overflow-y-auto pr-2" style={{maxHeight: '500px'}}>
                <table className="min-w-full">
                  <tbody className="divide-y divide-gray-200/10 dark:divide-gray-700/50">
                    {Array.from({ length: Math.ceil(moveList.length / 2) }, (_, i) => {
                      const whiteMove = moveList[i * 2];
                      const blackMove = moveList[i * 2 + 1];
                      const moveNumber = i + 1;
                      
                      return (
                        <tr 
                          key={i}
                          className={`hover:bg-gray-200/40 dark:hover:bg-gray-800/40 transition-colors rounded-lg ${
                            (currentMove === i * 2 || currentMove === i * 2 + 1) ? 'bg-primary/10' : ''
                          }`}
                        >
                          <td className="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-500 dark:text-gray-400">
                            {moveNumber}.
                          </td>
                          <td 
                            className={`px-2 py-2 whitespace-nowrap text-sm cursor-pointer ${
                              currentMove === i * 2 ? 'font-bold' : ''
                            }`}
                            onClick={() => setCurrentMove(i * 2)}
                          >
                            {whiteMove?.move} 
                            <span className="inline-block w-3 h-3 rounded-full bg-optimal ml-2" title="Optimal"></span>
                          </td>
                          <td 
                            className={`px-2 py-2 whitespace-nowrap text-sm cursor-pointer ${
                              currentMove === i * 2 + 1 ? 'font-bold' : ''
                            }`}
                            onClick={() => blackMove && setCurrentMove(i * 2 + 1)}
                          >
                            {blackMove?.move} 
                            {blackMove && (
                              <span className={`inline-block w-3 h-3 rounded-full ml-2 ${
                                i === 4 ? 'bg-mistake' : i === 7 ? 'bg-blunder' : 'bg-optimal'
                              }`} title={i === 4 ? 'Mistake' : i === 7 ? 'Blunder' : 'Optimal'}></span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
