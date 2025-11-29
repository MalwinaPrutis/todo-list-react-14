import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 800px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.gray100};
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 20px 0;
`;

export const TaskBlock = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px 25px;
  box-shadow: 0 0 5px ${({ theme }) => theme.colors.borderGray};
  border-radius: 4px;
  margin: 0;
`;

export const TaskTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  color: ${({ theme }) => theme.colors.black};
`;

export const TaskStatus = styled.p`
  font-size: 18px;
  margin: 0;
  color: ${({ theme }) => theme.colors.gray700};
`;
