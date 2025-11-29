import styled from "styled-components";

export const ExampleTasksButton = styled.button`
  background: none;
  border: none;
  color: teal;
  font-size: 16px;
  cursor: pointer;
  transition: color 0.2s, opacity 0.2s;
  align-self: center;

  &:hover {
    color: hsl(180, 100%, 35%);
  }

  &:active {
    color: hsl(180, 100%, 25%);
  }

  &:disabled {
    color: #aaa;
    cursor: not-allowed;
    opacity: 0.6;
  }
`;