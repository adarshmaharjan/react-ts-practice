import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  isOpen: boolean;
}
const initialModalState: ModalState = {
  isOpen: false,
};
const modalSlice = createSlice({
  name: "modal",
  initialState: initialModalState,
  reducers: {
    openModal: (state: ModalState) => {
      state.isOpen = true;
    },
    closeModal: (state: ModalState) => {
      state.isOpen = false;
    },
  },
});
export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
