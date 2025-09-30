'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/layout/Header';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import { chessPieces, initialChessBoard } from '@/lib/design-system';

export default function GameSummaryPage() {
  const params = useParams();
  const gameId = params.id as string;
  
  const [board] = useState(initialChessBoard);
  const [selectedMove, setSelectedMove] = useState(0);

  // Mock game data
  const gameData = {
    id: gameId,
    players: {
      white: { name: 'Alex_D', elo: 1250 },
      black: { name: 'ChessQueen7', elo: 1400 }
    },
    result: 'win' as const,
    date: 'Oct 26, 2023',
    duration: '15:32',
    moves: [
      { number: 1, white: 'e4', black: 'e5', notation: '1. e4 e5' },
      { number: 2, white: 'Nf3', black: 'Nc6', notation: '2. Nf3 Nc6' },
      { number: 3, white: 'Bb5', black: 'a6', notation: '3. Bb5 a6' },
      { number: 4, white: 'Ba4', black: 'Nf6', notation: '4. Ba4 Nf6' },
      { number: 5, white: 'O-O', black: 'Be7', notation: '5. O-O Be7' },
      { number: 6, white: 'Re1', black: 'b5', notation: '6. Re1 b5' },
      { number: 7, white: 'Bb3', black: 'O-O', notation: '7. Bb3 O-O' },
      { number: 8, white: 'c3', black: 'd5', notation: '8. c3 d5' }
    ]
  };

  const renderSquare = (row: number, col: number) => {
    const isLight = (row + col) % 2 !== 0;
    const piece = board[row][col];
    const squareClass = `flex items-center justify-center ${
      isLight ? 'bg-board-light' : 'bg-board-dark'
    }`;

    return (
      <div key={`${row}-${col}`} className={squareClass}>
        {piece && (
          <span 
            className={`text-3xl md:text-4xl ${
              'rnbqkp'.includes(piece) 
                ? 'text-black' 
                : 'text-white white-piece'
            }`}
          >
            {chessPieces[piece as keyof typeof chessPieces]}
          </span>
        )}
      </div>
    );
  };

  const getResultBadge = (result: 'win' | 'loss' | 'draw') => {
    const variants = {
      win: 'bg-win/10 text-win',
      loss: 'bg-loss/10 text-loss',
      draw: 'bg-draw/10 text-draw'
    };

    const labels = {
      win: 'Victory',
      loss: 'Defeat',
      draw: 'Draw'
    };

    return (
      <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${variants[result]}`}>
        {labels[result]}
      </span>
    );
  };

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header variant="standard" />
      
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        <Container size="xl">
          {/* Game Header */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Game Analysis</h1>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Game #{gameId} • {gameData.date} • Duration: {gameData.duration}
              </p>
            </div>
            {getResultBadge(gameData.result)}
          </div>

          {/* Players Info */}
          <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-white rounded-full border border-gray-300"></div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">{gameData.players.white.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{gameData.players.white.elo} Elo</p>
                  </div>
                </div>
                <span className="text-2xl font-bold text-gray-900 dark:text-white">1</span>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gray-800 dark:bg-gray-200 rounded-full"></div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">{gameData.players.black.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{gameData.players.black.elo} Elo</p>
                  </div>
                </div>
                <span className="text-2xl font-bold text-gray-900 dark:text-white">0</span>
              </div>
            </div>
          </div>

          {/* Game Board and Moves */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8">
            {/* Chess Board */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-lg aspect-square">
                <div className="grid grid-cols-8 grid-rows-8 w-full h-full rounded-lg overflow-hidden shadow-xl">
                  {Array.from({ length: 8 }, (_, row) =>
                    Array.from({ length: 8 }, (_, col) => renderSquare(row, col))
                  )}
                </div>
              </div>
            </div>

            {/* Move List */}
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Game Moves</h3>
              </div>
              
              <div className="p-4 max-h-96 overflow-y-auto">
                <div className="space-y-2">
                  {gameData.moves.map((move, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedMove(index)}
                      className={`w-full text-left p-2 rounded transition-colors ${
                        selectedMove === index
                          ? 'bg-primary/10 text-primary'
                          : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white'
                      }`}
                    >
                      <span className="font-mono text-sm">{move.notation}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex gap-2">
                  <Button variant="secondary" size="sm" className="flex-1">
                    <span className="material-symbols-outlined text-sm">skip_previous</span>
                    Start
                  </Button>
                  <Button variant="secondary" size="sm" className="flex-1">
                    <span className="material-symbols-outlined text-sm">skip_next</span>
                    End
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex justify-center gap-4">
            <Button variant="secondary">
              <span className="material-symbols-outlined mr-2">download</span>
              Download PGN
            </Button>
            <Button variant="secondary">
              <span className="material-symbols-outlined mr-2">share</span>
              Share Game
            </Button>
            <Button>
              <span className="material-symbols-outlined mr-2">replay</span>
              Play Again
            </Button>
          </div>
        </Container>
      </main>
    </div>
  );
}
