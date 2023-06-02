import { createPortal } from 'react-dom';
import { ReactNode, useEffect, useRef } from 'react';
import React from 'react';

interface ModalProps {
  toggleModal: () => void;
  blockClosing?: boolean;
  children: ReactNode;
}

export const Modal = ({ toggleModal, children, blockClosing }: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!ref.current) {
        return;
      }

      if (!event.target) {
        return;
      }

      if (!ref.current.contains(event.target as HTMLElement)) {
        toggleModal();
      }
    };

    window.addEventListener('mousedown', handleClick);

    return () => {
      window.removeEventListener('mousedown', handleClick);
    };
  }, [toggleModal]);

  return createPortal(
    <div>
      <div ref={blockClosing ? null : ref}>{children}</div>
    </div>,
    document.body
  );
};
