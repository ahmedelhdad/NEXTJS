import { create } from 'zustand';

const useUserStore = create((set) => ({
  user:null,
  setUser:(user) => set({ user }),
  post: null,
  setPost: (post) => set({ post }),
  comment:null,
  setComment:(comment) => set({ comment }),
  relatedPosts:null,
  setRelatedPosts :(relatedPosts) => set({ relatedPosts }),
  newPost:null,
  setNewPost:(newPost) => set({ newPost }),
  SearchData: null,
  setSearchData:(SearchData) => set({ SearchData }),
}));

export default useUserStore;
