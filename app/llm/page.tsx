"use client";

import ApiKeyComponent from "../components/ApiKeyComponent";
import LLMResultComponent from "../components/LLMResultComponent";
import useUserStore from "../stores/UserStore";

export default function LLM() {
  const setKey = useUserStore((state) => state.setKey);

  return (
    <main className="flex flex-col items-center">
      <div className="flex flex-col items-center p-14 w-full max-w-3xl">
        <ApiKeyComponent />
        <LLMResultComponent />
      </div>
    </main>
  );
}
