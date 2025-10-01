'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';

export default function AIVsAISetupPage() {
  const [formData, setFormData] = useState({
    ai1Model: 'gemini_2.5_flash',
    ai1Difficulty: 'intermediate',
    ai2Model: 'opus_4',
    ai2Difficulty: 'intermediate',
    matchType: 'single',
    timeControl: '5+0'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('AI vs AI setup:', formData);
    
    // Get display names for the AI models
    const ai1Name = aiModels.find(model => model.value === formData.ai1Model)?.label || formData.ai1Model;
    const ai2Name = aiModels.find(model => model.value === formData.ai2Model)?.label || formData.ai2Model;
    
    // Navigate to AI vs AI game with player data
    const params = new URLSearchParams({
      mode: 'ai-vs-ai',
      whitePlayer: ai1Name,
      blackPlayer: ai2Name,
      ai1Model: formData.ai1Model,
      ai1Difficulty: formData.ai1Difficulty,
      ai2Model: formData.ai2Model,
      ai2Difficulty: formData.ai2Difficulty,
      matchType: formData.matchType,
      timeControl: formData.timeControl,
      autoStart: 'true'
    });
    
    window.location.href = `/active-game/play?${params.toString()}`;
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

  const matchTypes = [
    { value: 'single', label: 'Single Game' },
    { value: 'match', label: 'Best of 3' },
    { value: 'tournament', label: 'Round Robin' }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header variant="standard" />
      
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <Container size="lg" className="w-full space-y-8">
          {/* Page Title */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">AI Battle Arena</h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Watch AI models compete against each other.</p>
          </div>

          {/* AI Setup */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-start gap-8">
            {/* AI 1 */}
            <div className="bg-background-light dark:bg-background-dark p-6 rounded-xl shadow-lg dark:shadow-2xl flex flex-col items-center space-y-4">
              <span className="material-symbols-outlined text-6xl text-blue-400">smart_toy</span>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">AI Player 1 (White)</h3>
              
              {/* AI 1 Model Selection */}
              <fieldset className="w-full">
                <legend className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">AI Model</legend>
                <div className="grid grid-cols-2 gap-2">
                  {aiModels.map((model) => (
                    <label
                      key={`ai1-${model.value}`}
                      className="relative flex items-center justify-center px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 has-[:checked]:ring-primary has-[:checked]:bg-primary/10"
                    >
                      <input
                        type="radio"
                        name="ai1Model"
                        value={model.value}
                        checked={formData.ai1Model === model.value}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <span className="text-xs font-medium text-gray-900 dark:text-white">
                        {model.label}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>

              {/* AI 1 Difficulty */}
              <fieldset className="w-full">
                <legend className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Difficulty</legend>
                <div className="grid grid-cols-3 gap-2">
                  {difficulties.map((difficulty) => (
                    <label
                      key={`ai1-diff-${difficulty.value}`}
                      className="relative flex items-center justify-center px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 has-[:checked]:bg-primary has-[:checked]:text-white has-[:checked]:border-transparent"
                    >
                      <input
                        type="radio"
                        name="ai1Difficulty"
                        value={difficulty.value}
                        checked={formData.ai1Difficulty === difficulty.value}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <span className="text-xs font-medium">{difficulty.label}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>

            {/* VS Indicator */}
            <div className="flex items-center justify-center h-full pt-16">
              <span className="material-symbols-outlined text-6xl text-gray-500 dark:text-gray-400 transform -rotate-45">
                swords
              </span>
            </div>

            {/* AI 2 */}
            <div className="bg-background-light dark:bg-background-dark p-6 rounded-xl shadow-lg dark:shadow-2xl flex flex-col items-center space-y-4">
              <span className="material-symbols-outlined text-6xl text-red-400">smart_toy</span>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">AI Player 2 (Black)</h3>
              
              {/* AI 2 Model Selection */}
              <fieldset className="w-full">
                <legend className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">AI Model</legend>
                <div className="grid grid-cols-2 gap-2">
                  {aiModels.map((model) => (
                    <label
                      key={`ai2-${model.value}`}
                      className="relative flex items-center justify-center px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 has-[:checked]:ring-primary has-[:checked]:bg-primary/10"
                    >
                      <input
                        type="radio"
                        name="ai2Model"
                        value={model.value}
                        checked={formData.ai2Model === model.value}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <span className="text-xs font-medium text-gray-900 dark:text-white">
                        {model.label}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>

              {/* AI 2 Difficulty */}
              <fieldset className="w-full">
                <legend className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Difficulty</legend>
                <div className="grid grid-cols-3 gap-2">
                  {difficulties.map((difficulty) => (
                    <label
                      key={`ai2-diff-${difficulty.value}`}
                      className="relative flex items-center justify-center px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 has-[:checked]:bg-primary has-[:checked]:text-white has-[:checked]:border-transparent"
                    >
                      <input
                        type="radio"
                        name="ai2Difficulty"
                        value={difficulty.value}
                        checked={formData.ai2Difficulty === difficulty.value}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <span className="text-xs font-medium">{difficulty.label}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>
          </div>

          {/* Match Configuration */}
          <div className="max-w-xl mx-auto w-full space-y-6 pt-8">
            {/* Match Type */}
            <fieldset>
              <legend className="text-lg font-semibold text-gray-900 dark:text-white text-center">Match Type</legend>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {matchTypes.map((matchType) => (
                  <label
                    key={matchType.value}
                    className="relative flex items-center justify-center px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 has-[:checked]:bg-primary has-[:checked]:text-white has-[:checked]:border-transparent"
                  >
                    <input
                      type="radio"
                      name="matchType"
                      value={matchType.value}
                      checked={formData.matchType === matchType.value}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <span className="font-medium text-sm">{matchType.label}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            {/* Start Match Button */}
            <div>
              <Button type="submit" fullWidth onClick={handleSubmit}>
                Start AI Battle
              </Button>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}
