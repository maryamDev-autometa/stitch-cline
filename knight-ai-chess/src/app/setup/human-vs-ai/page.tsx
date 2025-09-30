'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import Input from '@/components/forms/Input';

export default function HumanVsAISetupPage() {
  const [formData, setFormData] = useState({
    humanName: '',
    aiModel: 'gemini_2.5_flash',
    difficulty: 'intermediate',
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
    console.log('Human vs AI setup:', formData);
    // Navigate to Human vs AI game
    window.location.href = '/play?mode=human-vs-ai';
  };

  const aiModels = [
    { value: 'gemini_2.5_flash', label: 'Gemini 2.5 Flash' },
    { value: 'gemini_1.5_flash', label: 'Gemini 1.5 Flash' },
    { value: 'opus_4', label: 'Opus 4' },
    { value: 'opus_4.1', label: 'Opus 4.1' },
    { value: 'qwen', label: 'Qwen' }
  ];

  const difficulties = [
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header variant="standard" />
      
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <Container size="lg" className="w-full space-y-8">
          {/* Page Title */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Prepare for Battle</h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Configure your match against the AI.</p>
          </div>

          {/* Player Setup */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-start gap-8">
            {/* Human Player */}
            <div className="bg-background-light dark:bg-background-dark p-6 rounded-xl shadow-lg dark:shadow-2xl flex flex-col items-center space-y-4">
              <span className="material-symbols-outlined text-6xl text-gray-400">person</span>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Human</h3>
              <div className="w-full">
                <Input
                  placeholder="Your Name"
                  name="humanName"
                  value={formData.humanName}
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

            {/* AI Player */}
            <div className="bg-background-light dark:bg-background-dark p-6 rounded-xl shadow-lg dark:shadow-2xl flex flex-col items-center space-y-4">
              <span className="material-symbols-outlined text-6xl text-gray-400">smart_toy</span>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">AI</h3>
              
              {/* AI Model Selection */}
              <fieldset className="w-full">
                <legend className="sr-only">AI Model</legend>
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {aiModels.map((model) => (
                    <label
                      key={model.value}
                      className="relative flex items-center justify-center px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 has-[:checked]:ring-primary has-[:checked]:bg-primary/10"
                    >
                      <input
                        type="radio"
                        name="aiModel"
                        value={model.value}
                        checked={formData.aiModel === model.value}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {model.label}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>
          </div>

          {/* Game Configuration */}
          <div className="max-w-xl mx-auto w-full space-y-6 pt-8">
            {/* Difficulty Selection */}
            <fieldset>
              <legend className="text-lg font-semibold text-gray-900 dark:text-white text-center">Difficulty</legend>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {difficulties.map((difficulty) => (
                  <label
                    key={difficulty.value}
                    className="relative flex items-center justify-center px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 has-[:checked]:bg-primary has-[:checked]:text-white has-[:checked]:border-transparent"
                  >
                    <input
                      type="radio"
                      name="difficulty"
                      value={difficulty.value}
                      checked={formData.difficulty === difficulty.value}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <span className="font-medium">{difficulty.label}</span>
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
                  <span className="text-base text-gray-700 dark:text-gray-300">Use opening book</span>
                </label>
                <label className="flex items-center gap-x-3">
                  <input
                    type="checkbox"
                    name="useEndgameTablebase"
                    checked={formData.useEndgameTablebase}
                    onChange={handleInputChange}
                    className="h-5 w-5 rounded border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-primary focus:ring-primary/50 form-checkbox"
                  />
                  <span className="text-base text-gray-700 dark:text-gray-300">Use endgame tablebase</span>
                </label>
              </div>
            </fieldset>

            {/* Start Game Button */}
            <div>
              <Button type="submit" fullWidth onClick={handleSubmit}>
                Start Game
              </Button>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}
