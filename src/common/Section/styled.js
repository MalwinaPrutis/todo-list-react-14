import styled from "styled-components";

export const Wrapper = styled.section`
  margin: 20px 0;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 5px ${({ theme }) => theme.colors.borderGray};
  border-radius: 4px;
`;

export const Header = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderGray};
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  padding: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    grid-template-columns: 1fr;
    row-gap: 10px;
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  margin: 0;
  color: ${({ theme }) => theme.colors.black};
`;

export const Body = styled.div`
  padding: 20px;
  color: ${({ theme }) => theme.colors.black};
  line-height: 1.6;

  h2 {
    font-size: 22px;
    margin: 0 0 10px;
  }

  p {
    margin: 0;
    text-align: justify;
  }
`;

