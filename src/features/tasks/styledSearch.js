import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 20px 0;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  border-radius: 5px;
  font-size: 16px;
`;