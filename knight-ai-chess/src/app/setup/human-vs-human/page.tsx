'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import Input from '@/components/forms/Input';

export default function HumanVsHumanSetupPage() {
  const [formData, setFormData] = useState({
    player1Name: '',
    player2Name: '',
    timeControl: '10+0',
    useOpeningBook: false,
    useEndgameTablebase: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Human vs Human setup:', formData);
    
    // Use player names or defaults
    const whitePlayer = formData.player1Name || 'Player 1';
    const blackPlayer = formData.player2Name || 'Player 2';
    
    // Navigate to Human vs Human game with player data
    const params = new URLSearchParams({
      mode: 'human-vs-human',
      whitePlayer,
      blackPlayer,
      timeControl: formData.timeControl || '5+0',
      autoStart: 'true'
    });
    
    window.location.href = `/play?${params.toString()}`;
  };

  const timeControls = [
    { value: '1+0', label: '1 minute' },
    { value: '3+0', label: '3 minutes' },
    { value: '5+0', label: '5 minutes' },
    { value: '10+0', label: '10 minutes' },
    { value: '15+10', label: '15+10' },
    { value: '30+0', label: '30 minutes' }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header variant="standard" />
      
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <Container size="lg" className="w-full space-y-8">
          {/* Page Title */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Local Multiplayer</h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Set up a game for two players on this device.</p>
          </div>

          {/* Player Setup */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-start gap-8">
            {/* Player 1 */}
            <div className="bg-background-light dark:bg-background-dark p-6 rounded-xl shadow-lg dark:shadow-2xl flex flex-col items-center space-y-4">
              <span className="material-symbols-outlined text-6xl text-gray-400">person</span>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Player 1 (White)</h3>
              <div className="w-full">
                <Input
                  placeholder="Player 1 Name"
                  name="player1Name"
                  value={formData.player1Name}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* VS Indicator */}
            <div className="flex items-center justify-center h-full pt-16">
              <span className="material-symbols-outlined text-6xl text-gray-500 dark:text-gray-400 transform -rotate-45">
                swords
              </span>
            </div>

            {/* Player 2 */}
            <div className="bg-background-light dark:bg-background-dark p-6 rounded-xl shadow-lg dark:shadow-2xl flex flex-col items-center space-y-4">
              <span className="material-symbols-outlined text-6xl text-gray-400">person</span>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Player 2 (Black)</h3>
              <div className="w-full">
                <Input
                  placeholder="Player 2 Name"
                  name="player2Name"
                  value={formData.player2Name}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          {/* Game Configuration */}
          <div className="max-w-xl mx-auto w-full space-y-6 pt-8">
            {/* Time Control Selection */}
            <fieldset>
              <legend className="text-lg font-semibold text-gray-900 dark:text-white text-center">Time Control</legend>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {timeControls.map((timeControl) => (
                  <label
                    key={timeControl.value}
                    className="relative flex items-center justify-center px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 has-[:checked]:bg-primary has-[:checked]:text-white has-[:checked]:border-transparent"
                  >
                    <input
                      type="radio"
                      name="timeControl"
                      value={timeControl.value}
                      checked={formData.timeControl === timeControl.value}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <span className="font-medium">{timeControl.label}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            {/* Game Settings */}
            <fieldset>
              <legend className="text-lg font-semibold text-gray-900 dark:text-white text-center">Game Settings</legend>
              <div className="mt-4 flex justify-center space-x-6">
                <label className="flex items-center gap-x-3">
                  <input
                    type="checkbox"
                    name="useOpeningBook"
                    checked={formData.useOpeningBook}
                    onChange={handleInputChange}
                    className="h-5 w-5 rounded border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-primary focus:ring-primary/50 form-checkbox"
                  />
                  <span className="text-base text-gray-700 dark:text-gray-300">Show opening hints</span>
                </label>
                <label className="flex items-center gap-x-3">
                  <input
                    type="checkbox"
                    name="useEndgameTablebase"
                    checked={formData.useEndgameTablebase}
                    onChange={handleInputChange}
                    className="h-5 w-5 rounded border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-primary focus:ring-primary/50 form-checkbox"
                  />
                  <span className="text-base text-gray-700 dark:text-gray-300">Enable move analysis</span>
                </label>
              </div>
            </fieldset>

            {/* Start Game Button */}
            <div>
              <Button type="submit" fullWidth onClick={handleSubmit}>
                Start Local Game
              </Button>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}
