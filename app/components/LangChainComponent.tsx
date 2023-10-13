'use client';

import { useRef } from 'react';
import useUserStore from '../stores/UserStore';

interface Props {
  key: string;
}

export default function LangChainComponent(props: Props) {
  const resultRef = useRef(null);
  const key = useUserStore((state) => state.key);
  const prompt = useUserStore((state) => state.prompt);
  const getAI = useUserStore((state) => state.getAI);

  const onClickHandler = () => {
    if (resultRef.current) {
      const ai = getAI();
      ai.predict(prompt).then((res) => {
        (resultRef.current as unknown as HTMLElement).innerText = res;
      });
    }
  };

  return (
    <>
      <button
        className="w-20 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={onClickHandler}
      >
        Run
      </button>
      <div className="pt-4 text-lg font-bold ">Result</div>
      <div ref={resultRef} />
    </>
  );
}
