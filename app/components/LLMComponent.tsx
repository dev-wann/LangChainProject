'use client';

import { useRef, useState } from 'react';
import useUserStore from '../stores/UserStore';
import ErrorPopupComponent from './ErrorModalComponent';
import useErrorStore from '../stores/ErrorStore';
import LoadingComponent from './LoadingComponent';

export default function LLMComponent() {
  const resultRef = useRef(null);
  const [isLoading, setLoading] = useState(false);

  const key = useUserStore((state) => state.key);
  const prompt = useUserStore((state) => state.prompt);
  const getAI = useUserStore((state) => state.getAI);
  const showError = useErrorStore((state) => state.showError);
  const setErrorDescription = useErrorStore((state) => state.setDescription);

  const onClickHandler = () => {
    // error check
    if (key === '') {
      showError();
      setErrorDescription('API key is missing. Please type valid API key!');
      return;
    } else if (prompt === '') {
      showError();
      setErrorDescription('Prompt is missing. Please type valid promt!');
      return;
    }
    //process
    if (resultRef.current) {
      const ai = getAI();
      ai.predict(prompt)
        .then((res) => {
          (resultRef.current as unknown as HTMLElement).innerText =
            removeEmptyPrefix(res);
        })
        .catch((err) => {
          showError();
          setErrorDescription(String(err));
        })
        .finally(() => setLoading(false));
      setLoading(true);
    }
  };

  return (
    <>
      <div className="w-full">
        <button
          className="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded rounded-b-none"
          onClick={onClickHandler}
        >
          Generate Text
        </button>
        <div className="relative border border-t-0 border-blue-500 rounded rounded-t-none min-h-[5rem]">
          <p className="p-2 break-keep" ref={resultRef} />
          <LoadingComponent isLoading={isLoading} />
        </div>
      </div>
    </>
  );
}

function removeEmptyPrefix(str: string): string {
  while (str[0] === '\n' || str[0] === ' ') {
    str = str.slice(1);
  }
  return str;
}
