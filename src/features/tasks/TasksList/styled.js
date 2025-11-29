import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderGray};
  word-break: break-word;
`;

export const Content = styled.span`
  ${({ $done }) =>
    $done &&
    css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button`
  border: none;
  width: 30px;
  height: 30px;
  padding: 0;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white};
  transition: background 0.3s;
  cursor: pointer;

  ${({ $toggleDone, theme }) =>
    $toggleDone &&
    css`
      background: ${theme.colors.green};
      &:hover {
        background: ${theme.colors.greenHover};
      }
      &:active {
        background: ${theme.colors.greenActive};
      }
    `}

  ${({ $remove, theme }) =>
    $remove &&
    css`
      background: ${theme.colors.red};
      &:hover {
        background: ${theme.colors.redHover};
      }
      &:active {
        background: ${theme.colors.redActive};
      }
    `}
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.teal};
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.tealHover};
    text-decoration: none;
  }

  &:visited {
    color: ${({ theme }) => theme.colors.teal};
  }
`;