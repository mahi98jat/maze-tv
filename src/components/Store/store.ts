import { create } from "zustand";
import { StoreProps } from "./types";

export const useAppStore = create<StoreProps>((set) => ({
  searchParams: "",
  setSearchParams: (str: string) => set({ searchParams: str }),

  searchResults: [],
  setSearchResults: (data) => set({ searchResults: data }),

  resetSearch: () => set({ searchResults: undefined, searchParams: undefined }),
}));
