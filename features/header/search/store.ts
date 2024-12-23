import type { ISelectedSearchResult, WindDirection } from "@/assets/types";

export const useSearchStore = definePiniaStore("searchStore", {
  state: () => ({
    loaded: false as boolean,
    searchValue: "" as string,
    selectedSearchResult: {
      name: "Surgut",
      lat: "61.41",
      lon: "73.24",
    } as ISelectedSearchResult,

  }),
});
