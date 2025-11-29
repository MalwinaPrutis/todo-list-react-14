import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.colors.teal};
  border: none;
  margin: 0 0 0 20px;
  transition: color 0.3s;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.darkTeal};
  }

  &:active {
    color: #0a3b3b;
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.gray};
    cursor: default;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    flex-basis: 100%;
    margin: 10px;
  }
`;