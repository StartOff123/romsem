import { create } from 'zustand';

export type ModalType = 'confirmation';

interface IСonfirmationmData {
	title: string;
	confirmBtnText: string;
	onConfirm: () => void;
}

interface ModalData {
	сonfirmationmData?: IСonfirmationmData;
}

interface ModalStore {
	type: ModalType | null;
	data: ModalData;
	isOpen: boolean;
	onOpen: (type: ModalType, data?: ModalData) => void;
	onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
	type: null,
	data: {},
	isOpen: false,
	onOpen: (type, data = {}) => set({ isOpen: true, type, data }),
	onClose: () => set({ type: null, isOpen: false })
}));
