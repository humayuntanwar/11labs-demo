'use client';

import React, { useState } from 'react';
import ApiKeyInput from '../components/ApiKeyInput';
import TextToSpeech from '../components/TextToSpeech';

export default function Home() {
  const [apiKey, setApiKey] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            ElevenLabs Text to Speech
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Convert your text into natural-sounding speech using ElevenLabs' advanced AI voice technology.
          </p>
        </div>

        <ApiKeyInput onApiKeyChange={setApiKey} />
        
        {apiKey && <TextToSpeech apiKey={apiKey} />}
        
        {!apiKey && (
          <div className="max-w-2xl mx-auto p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <div className="flex items-center space-x-3">
              <div className="text-yellow-600 dark:text-yellow-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-yellow-800 dark:text-yellow-200">
                  API Key Required
                </h3>
                <p className="text-yellow-700 dark:text-yellow-300">
                  Please enter your ElevenLabs API key above to start using the text-to-speech converter.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
