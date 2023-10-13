'use client';

import { OpenAI } from 'langchain/llms/openai';
import { useRef } from 'react';

interface Props {
  key: string;
}

export default function LangChainComponent(props: Props) {
  const resultRef = useRef(null);
  // const llm = new OpenAI({
  //   openAIApiKey: props.key,
  // });
  const onClickHandler = () => {
    if (resultRef.current) {
      // 임시 테스트 용도
      (resultRef.current as HTMLElement).innerText = `Your key: ${'key'}
      Your promt: ${'prompt'}`;
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
