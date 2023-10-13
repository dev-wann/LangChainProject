'use client';

import InputComponent from './components/InputComponent';
import LangChainComponent from './components/LangChainComponent';
import useUserStore from './stores/UserStore';

export default function Home() {
  const { setKey, setPrompt } = useUserStore();

  return (
    <main className="p-14">
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
      <LangChainComponent key="key" />
    </main>
  );
}
