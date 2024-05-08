import { create } from "zustand";

type ModalsDashboardStore = {
  id: number | null;
  setId: (value: number | null) => void;
  detailsModal: boolean;
  setDetailsModalOpen: (value: boolean) => void;
  createEditModal: boolean;
  setCreateEditOpen: (value: boolean) => void;
  deleteModal: boolean;
  setDeleteModalOpen: (value: boolean) => void;
};

export const useModalsDashboardStore = create<ModalsDashboardStore>((set) => ({
  id: null,
  detailsModal: false,
  createEditModal: false,
  deleteModal: false,
  setId: (value: number | null) => set({ id: value }),
  setDetailsModalOpen: (value: boolean) => set({ detailsModal: value }),
  setCreateEditOpen: (value: boolean) => set({ createEditModal: value }),
  setDeleteModalOpen: (value: boolean) => set({ deleteModal: value }),
}));
