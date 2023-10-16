'use client';

import InputComponent from './components/InputComponent';
import LLMComponent from './components/LLMComponent';
import useUserStore from './stores/UserStore';

export default function Home() {
  const setKey = useUserStore((state) => state.setKey);
  const setPrompt = useUserStore((state) => state.setPrompt);

  return (
    <main className="flex flex-col items-center">
      <div className="flex flex-col items-center p-14 w-full max-w-3xl">
        <InputComponent
          label="API key"
          placeholder="Type your OpenAI API key here."
          updateCallback={setKey}
        />
        <InputComponent
          label="Prompt"
          placeholder="Type your prompt here."
          updateCallback={setPrompt}
        />
        <LLMComponent key="key" />
      </div>
    </main>
  );
}
