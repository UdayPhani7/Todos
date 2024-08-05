import Modal from "./Model";
import { MdNoteAdd } from "react-icons/md";
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
    width: 1.8rem;
    height: 1.8rem;
  }
`;

const AddTaskForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  @media screen and (max-width: 576px) {
    width: 70vw;
  }

  @media screen and (min-width: 576px) and (max-width: 992px) {
    width: 60vw;
  }

  @media screen and (min-width: 992px) {
    width: 45vw;
  }
`;

const FormControl = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
`;

const FormLabel = styled.label`
  font-size: 1.1rem;
  letter-spacing: -0.05rem;
  font-weight: 500;
  text-transform: uppercase;
  color: var(--color-cyan-600);
  background-color: var(--color-cyan-0);
  padding: 0 10px;
  position: absolute;
  top: 0;
  left: 15px;
  transform: translate(0, -50%);
  transition: all 0.1s ease;
`;

const FormInput = styled.input`
  outline: none;
  width: 80%;
  font-size: 1.8rem;
  color: var(--color-cyan-600);
  border: 2px solid var(--color-cyan-100);
  background-color: var(--color-cyan-0);
  padding: 8px 20px;
  border-radius: 10px;
  resize: none;

  @media screen and (max-width: 576px) {
    width: 35rem;
  }

  @media screen and (min-width: 576px) and (max-width: 992px) {
    width: 40rem;
  }

  @media screen and (min-width: 992px) {
    width: 45rem;
  }

  &:focus + label,
  &:hover + label {
    font-size: 1.3rem;
    letter-spacing: 0.05rem;
    transition: all 0.1s ease;
    transform: translate(-5px, -85%);
  }
`;

export default function AddTask() {
  return (
    <Modal>
      <Modal.Open opens="add-task-form">
        <AddTaskButton>
          <MdNoteAdd /> &nbsp; Add Task
        </AddTaskButton>
      </Modal.Open>
      <Modal.Window name="add-task-form" title="Add Task">
        <AddTaskForm>
          <FormControl>
            <FormInput type="text" id="title" required />
            <FormLabel htmlFor="title">title</FormLabel>
          </FormControl>
          <FormControl>
            <FormInput as="textarea" rows="3" id="description" />
            <FormLabel htmlFor="description">description</FormLabel>
          </FormControl>
          <FormControl>
            <FormInput type="date" id="deadline" />
            <FormLabel htmlFor="deadline">deadline</FormLabel>
          </FormControl>
          <FormControl>
            <FormInput type="time" id="time" />
            <FormLabel htmlFor="time">time</FormLabel>
          </FormControl>
        </AddTaskForm>
      </Modal.Window>
    </Modal>
  );
}
