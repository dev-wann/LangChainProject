'use client';

import InputComponent from '../components/InputComponent';
import LLMResultComponent from '../components/LLMResultComponent';
import useUserStore from '../stores/UserStore';

export default function LLM() {
  const setKey = useUserStore((state) => state.setKey);

  return (
    <main className='flex flex-col items-center'>
      <div className='flex flex-col items-center p-14 w-full max-w-3xl'>
        <InputComponent
          label='API key'
          placeholder='Type your OpenAI API key here.'
          updateCallback={setKey}
        />
        <LLMResultComponent />
      </div>
    </main>
  );
}
