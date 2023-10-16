import { create } from 'zustand';

interface ErrorState {
  show: number;
  description: string;
  showError: () => void;
  setDescription: (desc: string) => void;
}

const useErrorStore = create<ErrorState>((set, get) => ({
  show: 0,
  description: '',
  showError: () => set({ show: get().show + 1 }),
  setDescription: (desc: string) => set({ description: desc }),
}));

export default useErrorStore;
