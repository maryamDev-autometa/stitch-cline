'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/layout/Header';
import ChessBoard from '@/components/chess/ChessBoard';
import Modal from '@/components/ui/Modal';
import Button from '@/components/ui/Button';

export default function ChessboardPage() {
  const searchParams = useSearchParams();
  const gameMode = searchParams.get('mode') || 'human';
  const whitePlayer = searchParams.get('whitePlayer') || 'White Player';
  const blackPlayer = searchParams.get('blackPlayer') || 'Black Player';
  const autoStart = searchParams.get('autoStart') === 'true';
  const isAIvsAI = gameMode === 'ai-vs-ai';
  
  const [currentPlayer, setCurrentPlayer] = useState<'white' | 'black'>('white');
  const [capturedPieces, setCapturedPieces] = useState<{white: string[], black: string[]}>({white: [], black: []});
  const [moveHistory, setMoveHistory] = useState<string[]>([]);
  const [gameStarted, setGameStarted] = useState(autoStart);
  const [showBattleInfo, setShowBattleInfo] = useState(autoStart);

  // Auto-start game if coming from setup page
  useEffect(() => {
    if (autoStart && !gameStarted) {
      setGameStarted(true);
      setShowBattleInfo(true);
      // Add initial battle message to move history
      if (gameMode === 'ai-vs-ai') {
        setMoveHistory([`🤖 AI Battle Started: ${whitePlayer} vs ${blackPlayer}`]);
      }
    }
  }, [autoStart, gameStarted, gameMode, whitePlayer, blackPlayer]);

  const handleCapturedPiecesChange = (newCapturedPieces: {white: string[], black: string[]}) => {
    setCapturedPieces(newCapturedPieces);
  };

  const handleMoveHistoryChange = (newMoveHistory: string[]) => {
    setMoveHistory(newMoveHistory);
  };

  const handleCurrentPlayerChange = (newCurrentPlayer: 'white' | 'black') => {
    setCurrentPlayer(newCurrentPlayer);
  };

  return (
    <div className="flex h-screen w-full flex-col">
      <Header variant="standard" />
      
      <main className="flex flex-1 items-stretch p-4 sm:p-6 lg:p-8">
        {/* Left Side - Captured White Pieces */}
        <div className="w-24 flex flex-col items-center">
          <h3 className="text-sm font-semibold text-white mb-2">Captured</h3>
          <div className="flex flex-wrap gap-1 justify-center">
            {capturedPieces.white.map((piece, index) => (
              <span 
                key={index} 
                className="text-2xl text-white"
                title={`Captured ${piece}`}
                style={{ 
                  filter: 'drop-shadow(1px 1px 1px rgba(0,0,0,0.8))',
                  WebkitTextStroke: '1px black'
                }}
              >
                {piece === 'r' ? '♜' : piece === 'n' ? '♞' : piece === 'b' ? '♝' : 
                 piece === 'q' ? '♛' : piece === 'k' ? '♚' : piece === 'p' ? '♟' : 
                 piece === 'R' ? '♜' : piece === 'N' ? '♞' : piece === 'B' ? '♝' : 
                 piece === 'Q' ? '♛' : piece === 'K' ? '♚' : '♟'}
              </span>
            ))}
          </div>
        </div>

        {/* Chess Board */}
        <div className="flex flex-1 items-center justify-center">
          <ChessBoard 
            interactive={!isAIvsAI}
            isBattle={autoStart}
            onCapturedPiecesChange={handleCapturedPiecesChange}
            onMoveHistoryChange={handleMoveHistoryChange}
            onCurrentPlayerChange={handleCurrentPlayerChange}
          />
        </div>

        {/* Right Side - Captured Black Pieces */}
        <div className="w-24 flex flex-col items-center">
          <h3 className="text-sm font-semibold text-white mb-2">Captured</h3>
          <div className="flex flex-wrap gap-1 justify-center">
            {capturedPieces.black.map((piece, index) => (
              <span 
                key={index} 
                className="text-2xl text-black"
                title={`Captured ${piece}`}
              >
                {piece === 'r' ? '♜' : piece === 'n' ? '♞' : piece === 'b' ? '♝' : 
                 piece === 'q' ? '♛' : piece === 'k' ? '♚' : piece === 'p' ? '♟' : 
                 piece === 'R' ? '♜' : piece === 'N' ? '♞' : piece === 'B' ? '♝' : 
                 piece === 'Q' ? '♛' : piece === 'K' ? '♚' : '♟'}
              </span>
            ))}
          </div>
        </div>

        {/* Game Sidebar */}
        <aside className="w-80 flex-shrink-0 ml-8 bg-background-dark/50 dark:bg-background-dark/80 rounded-lg shadow-xl flex flex-col">
          {/* Game Info Header */}
          <div className="p-4 border-b border-gray-700/50">
            <h2 className="text-lg font-semibold text-white">Game Info</h2>
          </div>

          {/* Game Status */}
          <div className="flex-1 p-4 space-y-4">
            {/* Turn Indicator */}
            <div className="flex justify-between items-center bg-background-dark/70 p-3 rounded-lg">
              <span className="text-gray-400">Turn</span>
              <div className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded-full ${
                  currentPlayer === 'white' ? 'bg-white' : 'bg-gray-800'
                }`}></div>
                <span className="font-bold text-white">
                  {currentPlayer === 'white' ? "White's Turn" : "Black's Turn"}
                </span>
              </div>
            </div>

            {/* Player Info & Timers */}
            <div className="flex justify-between items-center bg-background-dark/70 p-3 rounded-lg">
              <div className="flex flex-col">
                <span className="text-gray-400 text-xs">White</span>
                <span className="text-white font-semibold text-sm truncate max-w-32" title={whitePlayer}>
                  {whitePlayer}
                </span>
              </div>
              <span className="font-mono text-lg font-bold text-white">05:00</span>
            </div>

            <div className="flex justify-between items-center bg-background-dark/70 p-3 rounded-lg">
              <div className="flex flex-col">
                <span className="text-gray-400 text-xs">Black</span>
                <span className="text-white font-semibold text-sm truncate max-w-32" title={blackPlayer}>
                  {blackPlayer}
                </span>
              </div>
              <span className="font-mono text-lg font-bold text-white">05:00</span>
            </div>
          </div>

          {/* Move History */}
          <div className="flex-1 p-4 border-t border-gray-700/50 flex flex-col">
            <h3 className="text-md font-semibold text-white mb-2">Move History</h3>
            <div className="flex-1 bg-background-dark/70 rounded-lg p-2 overflow-y-auto max-h-40">
              {moveHistory.length > 0 ? (
                <ol className="text-gray-300 font-mono text-sm space-y-1">
                  {moveHistory.map((move, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-6 text-gray-500">{index + 1}.</span> 
                      <span>{move}</span>
                    </li>
                  ))}
                </ol>
              ) : (
                <p className="text-gray-500 text-sm italic">No moves yet</p>
              )}
            </div>
          </div>

          {/* View Past Games */}
          <div className="p-4 border-t border-gray-700/50">
            <Button 
              variant="secondary" 
              fullWidth
              onClick={() => window.location.href = '/game-history/summary'}
              className="flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">history</span>
              View Past Games
            </Button>
          </div>
        </aside>
      </main>
    </div>
  );
}
