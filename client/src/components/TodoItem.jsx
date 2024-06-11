import styled from "styled-components";
import { SlOptionsVertical } from "react-icons/sl";

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-radius: 5px;
  padding: 0.7rem 1.4rem;
  box-shadow: var(--shadow-sm);
  background-color: var(--color-cyan-0);
  border: 2px solid var(--color-cyan-50);
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const TaskName = styled.p`
  font-weight: 600;
  font-size: 1.6rem;
  color: var(--color-silver-700);
`;

const Deadline = styled.p`
  font-size: 1rem;
  font-style: italic;
  color: var(--color-red-100);
`;

const StatusIndicator = styled.span`
  content: " ";
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background-color: ${(props) => props.color};
  border-radius: 1rem;
`;

const OptionsButton = styled.button`
  background-color: transparent;
  color: white;
  outline: none;
  border: none;
`;

export default function TodoItem({ todo }) {
  const { task, deadline, status } = todo;
  let indicatorColor = "";
  switch (status) {
    case "backlog":
      indicatorColor = "var(--color-red-100)";
      break;
    case "to-do":
      indicatorColor = "var(--color-yellow-100)";
      break;
    case "active":
      indicatorColor = "var(--color-green-100)";
      break;
    case "done":
      indicatorColor = "var(--color-blue-100)";
      break;
    default:
      indicatorColor = "var(--color-silver-100)";
  }
  return (
    <ListItem>
      <ItemDetails>
        <TaskName>
          <StatusIndicator color={indicatorColor} /> {task}
        </TaskName>
        <Deadline>deadline: {deadline}</Deadline>
      </ItemDetails>
      <OptionsButton>
        <SlOptionsVertical />
      </OptionsButton>
    </ListItem>
  );
}
