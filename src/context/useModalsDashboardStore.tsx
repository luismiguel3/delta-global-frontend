import { create } from "zustand";

type ModalsDashboardStore = {
  id: number | null;
  setId: (value: number) => void;
  createEditModal: boolean;
  setCreateEditOpen: (value: boolean) => void;
  deleteModal: boolean;
  setDeleteModalOpen: (value: boolean) => void;
};

export const useModalsDashboardStore = create<ModalsDashboardStore>((set) => ({
  id: null,
  setId: (value: number | null) => set({ id: value }),
  createEditModal: false,
  setCreateEditOpen: (value: boolean) => set({ createEditModal: value }),
  deleteModal: false,
  setDeleteModalOpen: (value: boolean) => set({ deleteModal: value }),
}));
