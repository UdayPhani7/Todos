import styled from "styled-components";
import TodoItem from "../components/TodoItem";
import { useEffect, useRef, useState } from "react";

const TodosContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;

  @media screen and (max-width: 576px) {
    width: 80vw;
    width: 1rem 3rem;
  }

  @media screen and (min-width: 576px) and (max-width: 992px) {
    width: 90vw;
    padding: 1.5rem 6rem;
  }

  @media screen and (min-width: 992px) {
    width: 70vw;
    padding: 2rem 8rem;
  }
`;

const Heading = styled.h2`
  font-size: 2.4rem;
  margin-bottom: 1rem;
`;

const TodosList = styled.ul`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding-right: 5px;
  gap: 2rem;

  &::-webkit-scrollbar {
    width: 0;
  }

  &.scrolling::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-cyan-100);
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--color-cyan-200);
  }
`;

export default function Todos({ todos }) {
  const todoListRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const todosList = todoListRef.current;
    let scrollTimeout;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    };

    todosList.addEventListener("scroll", handleScroll);
    return () => {
      todosList.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <TodosContainer>
      <Heading>Tasks</Heading>
      <TodosList ref={todoListRef} className={isScrolling ? "scrolling" : ""}>
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} />
        ))}
      </TodosList>
    </TodosContainer>
  );
}
