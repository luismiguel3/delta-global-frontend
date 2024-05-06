import { create } from "zustand";

type ModalsDashboardStore = {
  id: number | null;
  setId: (value: number) => void;
  createEdit: boolean;
  setCreateEditOpen: (value: boolean) => void;
  deleteModal: boolean;
  setDeleteModalOpen: (value: boolean) => void;
};

export const useModalsDashboardStore = create<ModalsDashboardStore>((set) => ({
  id: null,
  setId: (value: number | null) => set({ id: value }),
  createEdit: false,
  setCreateEditOpen: (value: boolean) => set({ createEdit: value }),
  deleteModal: false,
  setDeleteModalOpen: (value: boolean) => set({ deleteModal: value }),
}));
