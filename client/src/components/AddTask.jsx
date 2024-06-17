import Modal from "./Model";
import { IoIosAdd } from "react-icons/io";
import styled from "styled-components";

const AddTaskButton = styled.button`
  background-color: var(--color-cyan-200);
  border: 2px solid var(--color-cyan-100);
  border-radius: 4px;
  box-shadow: var(--shadow-md);
  color: var(--color-cyan-900);
  font-size: 1.4rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;

  & svg {
    width: 2rem;
    height: 2rem;
  }
`;

export default function AddTask() {
  return (
    <Modal>
      <Modal.Open opens="add-task-form">
        <AddTaskButton>
          <IoIosAdd /> Add Task
        </AddTaskButton>
      </Modal.Open>
      <Modal.Window name="add-task-form">
        <h1>Hi</h1>
      </Modal.Window>
    </Modal>
  );
}
