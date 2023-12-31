import { create } from 'zustand';
import { OpenAI } from 'langchain/llms/openai';

interface UserState {
  key: string;
  prompt: string;
  _ai: null | OpenAI;
  setKey: (nKey: string) => void;
  setPrompt: (nPrompt: string) => void;
  getAI: () => OpenAI;
}

const useUserStore = create<UserState>((set, get) => ({
  key: '',
  prompt: '',
  _ai: null,

  setKey: (nKey: string) => set({ key: nKey, _ai: null }),
  setPrompt: (nPrompt: string) => set({ prompt: nPrompt }),
  getAI: () => {
    let ai = get()._ai;
    if (ai === null) {
      ai = new OpenAI({ openAIApiKey: get().key });
      set({ _ai: ai });
    }
    return ai;
  },
}));

export default useUserStore;
