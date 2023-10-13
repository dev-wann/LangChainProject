'use client';

import { createContext } from 'react';
import InputComponent from './components/InputComponent';
import LangChainComponent from './components/LangChainComponent';

export default function Home() {
  return (
    <main className="p-14">
      <InputComponent
        label="API key"
        placeholder="Type your OpenAI API key here."
      />
      <InputComponent label="Prompt" placeholder="Type your prompt here." />
      <LangChainComponent key="key" />
    </main>
  );
}
