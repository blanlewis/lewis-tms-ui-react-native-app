import { ReactNode } from "react";
import { Portal, Dialog } from "react-native-paper";

interface CustomModalProps {
  readonly open: boolean;
  readonly onClose: () => void;
  readonly modalContent: ReactNode;
}

const CustomModal = ({
  open,
  onClose,
  modalContent,
}: CustomModalProps) => {
  return (
    <Portal>
      <Dialog
        visible={open}
        onDismiss={onClose}
      >
        <Dialog.Content>
          {modalContent}
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
};

export default CustomModal;