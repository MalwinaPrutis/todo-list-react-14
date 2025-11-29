import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavigationContainer = styled.nav`
  background-color: ${({ theme }) => theme.colors.teal};
  padding: 15px 30px;
  display: flex;
  justify-content: center;
  gap: 40px;
`;

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
  transition: 0.3s;

  &.active {
    text-decoration: underline;
    font-weight: 700;
  }

  &:hover {
    opacity: 0.8;
  }
`;