import React from 'react';
import ReactDOM from 'react-dom';
import ModalOverlay from './ModalOverlay';
import Backdrop from './Backdrop';


interface ModalProps {
  onHideModal: () => void;
  children: React.ReactNode;
}


const portalElement = document.getElementById('overlay');

const Modal: React.FC<ModalProps> = (props) => {
  if (!portalElement) return null; // Ensure portalElement exists before rendering

  return (
    <>
      {ReactDOM.createPortal(<Backdrop onHideModal={props.onHideModal} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
