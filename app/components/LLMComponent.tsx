'use client';

import { useRef } from 'react';
import useUserStore from '../stores/UserStore';

interface Props {
  key: string;
}

export default function LLMComponent(props: Props) {
  const resultRef = useRef(null);
  const key = useUserStore((state) => state.key);
  const prompt = useUserStore((state) => state.prompt);
  const getAI = useUserStore((state) => state.getAI);

  const onClickHandler = () => {
    if (resultRef.current) {
      const ai = getAI();
      ai.predict(prompt).then((res) => {
        (resultRef.current as unknown as HTMLElement).innerText =
          removeEmptyPrefix(res);
      });
    }
  };

  return (
    <div className="w-full">
      <button
        className="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded rounded-b-none"
        onClick={onClickHandler}
      >
        Generate Text
      </button>
      <div className="border border-t-0 border-blue-500 rounded rounded-t-none min-h-[5rem]">
        <p className="p-2" ref={resultRef} />
      </div>
    </div>
  );
}

function removeEmptyPrefix(str: string): string {
  while (str[0] === '\n' || str[0] === ' ') {
    str = str.slice(1);
  }
  return str;
}
