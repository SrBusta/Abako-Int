import { useState } from "react";

interface useModalProps {
  initialState?: boolean;
  onClose?: () => void;
}

export const useModal = (
  { initialState = false, onClose: close }: useModalProps = {
    initialState: false,
  }
) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const toggle = () => {
    setIsOpen((value) => {
      if (value) onClose?.();
      return !value;
    });
  };

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = async () => {

    setIsOpen(false);

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
        close?.();
      }, 300);
    });
  };

  return { toggle, onClose, onOpen, isOpen };
};
