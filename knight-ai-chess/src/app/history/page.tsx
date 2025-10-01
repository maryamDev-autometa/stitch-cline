'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Container from '@/components/layout/Container';
import Input from '@/components/forms/Input';
import Button from '@/components/ui/Button';

interface GameResult {
  id: string;
  opponent: string;
  opponentElo: number;
  date: string;
  outcome: 'win' | 'loss' | 'draw';
  duration: string;
  avatar: string;
}

export default function GameHistoryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [outcomeFilter, setOutcomeFilter] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  const gameResults: GameResult[] = [
    {
      id: '1',
      opponent: 'Alex_D',
      opponentElo: 1250,
      date: 'Oct 26, 2023',
      outcome: 'win',
      duration: '15:32',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-KGp3tUi5crrSvldh6wlaFTBjxIyV2LeoiEr3JBiFCeP5AStEKw8K0Vf8E31D4Wt4jNbavTJHvlcNCCnn9WNhcX2VTNkFnduVkfVH4WDwfh3O-CwmZOxpIy8VSOROvKktzpC9Fay6swqnWmEo75tvf6knK7v-QamiQwvA_yVp_njBhkqFBGZFGuYyxfLc1Id7QWatD95DJ47q580VBtO8YaOS9bBzQmGELJ331tbejOx84RGmb5LC9XnEKv2Dl12EgcijiJEhVWc'
    },
    {
      id: '2',
      opponent: 'ChessQueen7',
      opponentElo: 1400,
      date: 'Oct 25, 2023',
      outcome: 'loss',
      duration: '22:10',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-KGp3tUi5crrSvldh6wlaFTBjxIyV2LeoiEr3JBiFCeP5AStEKw8K0Vf8E31D4Wt4jNbavTJHvlcNCCnn9WNhcX2VTNkFnduVkfVH4WDwfh3O-CwmZOxpIy8VSOROvKktzpC9Fay6swqnWmEo75tvf6knK7v-QamiQwvA_yVp_njBhkqFBGZFGuYyxfLc1Id7QWatD95DJ47q580VBtO8YaOS9bBzQmGELJ331tbejOx84RGmb5LC9XnEKv2Dl12EgcijiJEhVWc'
    },
    {
      id: '3',
      opponent: 'RookMaster',
      opponentElo: 1320,
      date: 'Oct 24, 2023',
      outcome: 'draw',
      duration: '30:00',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-KGp3tUi5crrSvldh6wlaFTBjxIyV2LeoiEr3JBiFCeP5AStEKw8K0Vf8E31D4Wt4jNbavTJHvlcNCCnn9WNhcX2VTNkFnduVkfVH4WDwfh3O-CwmZOxpIy8VSOROvKktzpC9Fay6swqnWmEo75tvf6knK7v-QamiQwvA_yVp_njBhkqFBGZFGuYyxfLc1Id7QWatD95DJ47q580VBtO8YaOS9bBzQmGELJ331tbejOx84RGmb5LC9XnEKv2Dl12EgcijiJEhVWc'
    },
    {
      id: '4',
      opponent: 'PawnStar',
      opponentElo: 1100,
      date: 'Oct 23, 2023',
      outcome: 'win',
      duration: '12:45',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-KGp3tUi5crrSvldh6wlaFTBjxIyV2LeoiEr3JBiFCeP5AStEKw8K0Vf8E31D4Wt4jNbavTJHvlcNCCnn9WNhcX2VTNkFnduVkfVH4WDwfh3O-CwmZOxpIy8VSOROvKktzpC9Fay6swqnWmEo75tvf6knK7v-QamiQwvA_yVp_njBhkqFBGZFGuYyxfLc1Id7QWatD95DJ47q580VBtO8YaOS9bBzQmGELJ331tbejOx84RGmb5LC9XnEKv2Dl12EgcijiJEhVWc'
    },
    {
      id: '5',
      opponent: 'KnightRider',
      opponentElo: 1550,
      date: 'Oct 22, 2023',
      outcome: 'loss',
      duration: '18:55',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-KGp3tUi5crrSvldh6wlaFTBjxIyV2LeoiEr3JBiFCeP5AStEKw8K0Vf8E31D4Wt4jNbavTJHvlcNCCnn9WNhcX2VTNkFnduVkfVH4WDwfh3O-CwmZOxpIy8VSOROvKktzpC9Fay6swqnWmEo75tvf6knK7v-QamiQwvA_yVp_njBhkqFBGZFGuYyxfLc1Id7QWatD95DJ47q580VBtO8YaOS9bBzQmGELJ331tbejOx84RGmb5LC9XnEKv2Dl12EgcijiJEhVWc'
    }
  ];

  const getOutcomeBadge = (outcome: 'win' | 'loss' | 'draw') => {
    const variants = {
      win: 'bg-win/10 text-win',
      loss: 'bg-loss/10 text-loss',
      draw: 'bg-draw/10 text-draw'
    };

    const labels = {
      win: 'Win',
      loss: 'Loss',
      draw: 'Draw'
    };

    return (
      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium leading-5 ${variants[outcome]}`}>
        {labels[outcome]}
      </span>
    );
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header variant="full" />
      
      <main className="flex-1 bg-background-light dark:bg-background-dark py-12">
        <Container size="xl">
          {/* Page Header */}
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Game History</h2>
            <div className="flex items-center gap-4">
              {/* Search Input */}
              <div className="relative">
                <Input
                  variant="search"
                  placeholder="Search games..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              {/* Filters */}
              <div className="flex items-center gap-2">
                <select 
                  value={outcomeFilter}
                  onChange={(e) => setOutcomeFilter(e.target.value)}
                  className="rounded-lg border border-gray-200/10 dark:border-gray-700/50 bg-gray-200/30 dark:bg-gray-800/30 py-2 px-3 text-sm focus:border-primary focus:ring-primary"
                >
                  <option value="all">All Outcomes</option>
                  <option value="wins">Wins</option>
                  <option value="losses">Losses</option>
                  <option value="draws">Draws</option>
                </select>
                
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="rounded-lg border border-gray-200/10 dark:border-gray-700/50 bg-gray-200/30 dark:bg-gray-800/30 py-2 px-3 text-sm focus:border-primary focus:ring-primary"
                >
                  <option value="date">Sort by Date</option>
                  <option value="duration">Sort by Duration</option>
                </select>
              </div>
            </div>
          </div>

          {/* Data Table */}
          <div className="overflow-hidden rounded-xl border border-gray-200/10 dark:border-gray-700/50">
            <table className="min-w-full divide-y divide-gray-200/10 dark:divide-gray-700/50">
              <thead className="bg-gray-200/30 dark:bg-gray-800/30">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Opponent
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Outcome
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Duration
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">View Game</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200/10 dark:divide-gray-700/50 bg-gray-200/20 dark:bg-gray-800/20">
                {gameResults.map((game) => (
                  <tr key={game.id} className="hover:bg-gray-200/40 dark:hover:bg-gray-800/40 transition-colors">
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="flex items-center">
                        <div 
                          className="h-10 w-10 flex-shrink-0 rounded-full bg-cover bg-center"
                          style={{ backgroundImage: `url("${game.avatar}")` }}
                        />
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">{game.opponent}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">{game.opponentElo} Elo</div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                      {game.date}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {getOutcomeBadge(game.outcome)}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                      {game.duration}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                      <a href="/game-result" className="text-primary hover:underline">
                        View Game
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Showing 1 to 5 of 20 results
            </p>
            <div className="flex items-center gap-2">
              <Button variant="pagination" disabled>
                Previous
              </Button>
              <Button variant="pagination">
                Next
              </Button>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}
