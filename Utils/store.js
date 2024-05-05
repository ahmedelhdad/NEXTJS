import { create } from "zustand";

const useStore = create((set) => ({
 post: {},
  setNewpost: (post) => set({ post })
}));

export default useStore;