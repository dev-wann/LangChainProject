import { create } from 'zustand';

interface UserState {
  key: string;
  setKey: (nKey: string) => void;
  prompt: string;
  setPrompt: (nPrompt: string) => void;
}

const useUserStore = create<UserState>((set) => ({
  key: '',
  setKey: (nKey: string) => set({ key: nKey }),
  prompt: '',
  setPrompt: (nPrompt: string) => set({ prompt: nPrompt }),
}));

export default useUserStore;
