import styled from "styled-components";
import TaskItem from "../components/TaskItem";
import AddTask from "../components/AddTask";
import ScrollBar from "../components/ScrollBar";
import { ImFilesEmpty } from "react-icons/im";

const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;

  @media screen and (max-width: 576px) {
    width: 90vw;
    padding: 1rem;
  }

  @media screen and (min-width: 576px) and (max-width: 992px) {
    width: 80vw;
    padding: 1.5rem 6rem;
  }

  @media screen and (min-width: 992px) {
    width: 70vw;
    padding: 2rem 8rem;
  }
`;

const TaskHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  margin-bottom: 1.2rem;
`;

const Heading = styled.h2`
  font-size: 2.4rem;
`;

const TasksList = styled.ul`
  display: flex;
  flex-direction: column;
  padding-right: 5px;
  gap: 2rem;
`;

const NoTasksFound = styled.div`
  display: flex;
  height: 40vh;
  justify-content: center;
  align-items: center;
  color: var(--color-cyan-500);

  h1 {
    font-size: 2rem;
  }

  & svg {
    width: 3rem;
    height: 3rem;
  }
`;

export default function Tasks({ tasks }) {
  return (
    <TasksContainer>
      <div>
        <TaskHeader>
          <Heading>Tasks</Heading>
          <AddTask />
        </TaskHeader>
      </div>
      {tasks.length ? (
        <ScrollBar>
          <TasksList>
            {tasks.map((task, index) => (
              <TaskItem key={index} task={task} />
            ))}
          </TasksList>
        </ScrollBar>
      ) : (
        <NoTasksFound>
          <ImFilesEmpty />
          &nbsp;
          <h1>No Tasks found</h1>
        </NoTasksFound>
      )}
    </TasksContainer>
  );
}
