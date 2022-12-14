import { defineStore } from "pinia";

export interface TableState {
  quantity: number;
  perPage: number;
  currentPage: number;
}

export const useTable = defineStore("table", {
  state: (): TableState => ({
    quantity: 100,
    perPage: 10,
    currentPage: 1,
  }),
  actions: {
    setPage(page: number) {
      this.currentPage = page;
    },
    setPerPage(perPage: number) {
      this.perPage = perPage;
      this.currentPage = 1;
    },
  },
  getters: {
    getPages(): number[] {
      return Array.from(
        { length: this.quantity / this.perPage },
        (_, i) => i + 1
      );
    },
  },
});
