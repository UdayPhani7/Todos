import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
`;

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-cyan-0);
  box-shadow: var(--shadow-lg);
  padding: 2rem 4rem 3.5rem 4rem;
  border-radius: 10px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const ModalTitle = styled.h1`
  font-size: 2rem;
  text-transform: uppercase;
  color: var(--color-cyan-700);
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.6rem;
  padding-bottom: 0.4rem;
  border-radius: 2.4rem;
  transform: translateX(1rem);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-cyan-50);
    box-shadow: var(--shadow-md);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-cyan-500);
  }
`;

const ModalContext = createContext();

function Modal({ children }) {
  const [windowName, setWindowName] = useState();

  const close = () => setWindowName("");
  const open = setWindowName;

  return (
    <ModalContext.Provider value={{ windowName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: windowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(windowName) });
}

function Window({ name, children, title }) {
  const { windowName, close } = useContext(ModalContext);

  if (name !== windowName) return null;

  return createPortal(
    <Overlay>
      <StyledModal>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <Button onClick={close}>
            <HiXMark />
          </Button>
        </ModalHeader>
        {children}
      </StyledModal>
    </Overlay>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
