'use client';

import { useState, useCallback } from 'react';
import { chessPieces, initialChessBoard } from '@/lib/design-system';
import Button from '@/components/ui/Button';

interface Move {
  number: number;
  white: string;
  black?: string;
  whiteQuality?: 'optimal' | 'good' | 'mistake' | 'blunder';
  blackQuality?: 'optimal' | 'good' | 'mistake' | 'blunder';
}

interface GameResultSummaryProps {
  playerName?: string;
  playerElo?: number;
  opponentName?: string;
  opponentElo?: number;
  gameDate?: string;
  gameResult?: 'win' | 'loss' | 'draw';
  moves?: Move[];
}

const sampleMoves: Move[] = [
  { number: 1, white: 'e4', black: 'e5', whiteQuality: 'optimal', blackQuality: 'optimal' },
  { number: 2, white: 'Nf3', black: 'Nc6', whiteQuality: 'optimal', blackQuality: 'optimal' },
  { number: 3, white: 'Bb5', black: 'a6', whiteQuality: 'optimal', blackQuality: 'optimal' },
  { number: 4, white: 'Ba4', black: 'Nf6', whiteQuality: 'optimal', blackQuality: 'optimal' },
  { number: 5, white: 'O-O', black: 'Be7', whiteQuality: 'mistake', blackQuality: 'optimal' },
  { number: 6, white: 'Re1', black: 'b5', whiteQuality: 'optimal', blackQuality: 'optimal' },
  { number: 7, white: 'Bb3', black: 'd6', whiteQuality: 'optimal', blackQuality: 'optimal' },
  { number: 8, white: 'c3', black: 'O-O', whiteQuality: 'optimal', blackQuality: 'blunder' },
  { number: 9, white: 'h3', black: 'Na5', whiteQuality: 'optimal', blackQuality: 'optimal' },
  { number: 10, white: 'Bc2', black: 'c5', whiteQuality: 'optimal', blackQuality: 'optimal' },
];

export default function GameResultSummary({
  playerName = "You (1350)",
  opponentName = "Alex_D (1250)",
  gameDate = "Oct 26, 2023",
  gameResult = "win",
  moves = sampleMoves,
}: GameResultSummaryProps) {
  const [currentMoveIndex, setCurrentMoveIndex] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [board, setBoard] = useState(() => initialChessBoard.map(row => [...row]));

  const getQualityColor = (quality?: string) => {
    switch (quality) {
      case 'optimal': return 'bg-green-500';
      case 'good': return 'bg-blue-500';
      case 'mistake': return 'bg-orange-500';
      case 'blunder': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getQualityTitle = (quality?: string) => {
    switch (quality) {
      case 'optimal': return 'Optimal';
      case 'good': return 'Good';
      case 'mistake': return 'Mistake';
      case 'blunder': return 'Blunder';
      default: return 'Unknown';
    }
  };

  const handlePreviousMove = () => {
    if (currentMoveIndex > 0) {
      setCurrentMoveIndex(currentMoveIndex - 1);
    }
  };

  const handleNextMove = () => {
    if (currentMoveIndex < moves.length) {
      setCurrentMoveIndex(currentMoveIndex + 1);
    }
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleGoToStart = () => {
    setCurrentMoveIndex(0);
  };

  const handleGoToEnd = () => {
    setCurrentMoveIndex(moves.length);
  };

  const renderSquare = (row: number, col: number) => {
    const isLight = (row + col) % 2 !== 0;
    const piece = board[row][col];
    
    const squareClasses = [
      'flex items-center justify-center relative transition-all duration-200',
      isLight ? 'bg-[#e9edc9]' : 'bg-[#769656]',
    ].filter(Boolean).join(' ');

    return (
      <div key={`${row}-${col}`} className={squareClasses}>
        {piece && (
          <span
            className={`text-3xl md:text-4xl select-none ${
              'rnbqkp'.includes(piece) 
                ? 'text-black drop-shadow-sm' 
                : 'text-white drop-shadow-sm'
            }`}
          >
            {chessPieces[piece as keyof typeof chessPieces]}
          </span>
        )}
      </div>
    );
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      {/* Header */}
      <header className="border-b border-gray-200/10 dark:border-gray-700/50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Knight AI</h1>
          </div>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6">
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Play</a>
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Learn</a>
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Community</a>
              <a className="text-sm font-medium text-primary" href="#">Game History</a>
            </nav>
            <button className="rounded-lg bg-gray-200/50 dark:bg-gray-700/50 p-2 hover:bg-gray-200/80 dark:hover:bg-gray-700/80 transition-colors">
              <span className="material-symbols-outlined">settings</span>
            </button>
            <div 
              className="h-10 w-10 rounded-full bg-cover bg-center" 
              style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD-TnE17Hp7KSgDbMLwqpJOXSFesLdffDNkE-uPrN6smnYcZTMg2hM4rOdSEtAlZYVv-sehbgBd3lZHfs_Ld6DmLWHW7GZx59x0CpyNrvYEUp3YUOqU5ERzRGmU9NndUIrE4Hu30pdGyRMTPQ6wWlTLzOnB9dhQCeOfVY3EbFlZRdLY5x2MW6llBFW2Oyk9UEtD3_Du6eO0-R2jySx3CG6LDDHjn9ajQpvUe6Mo9HXPV-yaEzv2_Jz09U5E0oB0uVAmMj0XxN2131A")'}}
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 bg-background-light dark:bg-background-dark py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Back Navigation */}
          <div className="mb-6">
            <a className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined">arrow_back</span>
              <span>Back to Game History</span>
            </a>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">Game Replay & Analysis</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">{playerName} vs {opponentName} - {gameDate}</p>
          </div>

          {/* Game Board and Move List Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Chess Board */}
            <div className="lg:col-span-2">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <div className="grid grid-cols-8 grid-rows-8 w-full aspect-square border-2 border-gray-400 dark:border-gray-600">
                  {Array.from({ length: 8 }, (_, row) =>
                    Array.from({ length: 8 }, (_, col) => renderSquare(row, col))
                  )}
                </div>
                
                {/* Game Controls */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-sm p-4">
                  <div className="flex items-center justify-center gap-4">
                    <button 
                      onClick={handleGoToStart}
                      className="rounded-full bg-gray-800/50 p-3 text-white hover:bg-gray-800/80 transition-colors"
                    >
                      <span className="material-symbols-outlined">fast_rewind</span>
                    </button>
                    <button 
                      onClick={handlePreviousMove}
                      className="rounded-full bg-gray-800/50 p-3 text-white hover:bg-gray-800/80 transition-colors"
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
                      onClick={handleNextMove}
                      className="rounded-full bg-gray-800/50 p-3 text-white hover:bg-gray-800/80 transition-colors"
                    >
                      <span className="material-symbols-outlined">skip_next</span>
                    </button>
                    <button 
                      onClick={handleGoToEnd}
                      className="rounded-full bg-gray-800/50 p-3 text-white hover:bg-gray-800/80 transition-colors"
                    >
                      <span className="material-symbols-outlined">fast_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Move List */}
            <div className="bg-gray-200/20 dark:bg-gray-800/20 rounded-xl p-4 flex flex-col">
              <h3 className="text-xl font-bold mb-4 px-2 text-gray-900 dark:text-white">Move List</h3>
              <div className="flex-grow overflow-y-auto pr-2" style={{maxHeight: '500px'}}>
                <table className="min-w-full">
                  <tbody className="divide-y divide-gray-200/10 dark:divide-gray-700/50">
                    {moves.map((move) => (
                      <tr 
                        key={move.number} 
                        className={`hover:bg-gray-200/40 dark:hover:bg-gray-800/40 transition-colors rounded-lg ${
                          currentMoveIndex === move.number ? 'bg-primary/10' : ''
                        }`}
                      >
                        <td className="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-500 dark:text-gray-400">
                          {move.number}.
                        </td>
                        <td className={`px-2 py-2 whitespace-nowrap text-sm text-gray-900 dark:text-white ${
                          currentMoveIndex === move.number ? 'font-bold' : ''
                        }`}>
                          {move.white}
                          {move.whiteQuality && (
                            <span 
                              className={`inline-block w-3 h-3 rounded-full ml-2 ${getQualityColor(move.whiteQuality)}`}
                              title={getQualityTitle(move.whiteQuality)}
                            />
                          )}
                        </td>
                        <td className="px-2 py-2 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                          {move.black}
                          {move.blackQuality && (
                            <span 
                              className={`inline-block w-3 h-3 rounded-full ml-2 ${getQualityColor(move.blackQuality)}`}
                              title={getQualityTitle(move.blackQuality)}
                            />
                          )}
                        </td>
                      </tr>
                    ))}
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