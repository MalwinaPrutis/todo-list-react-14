import { NavigationContainer, StyledNavLink } from "./styled";
import { toTasks, toAuthor } from "../../routes";

const Navigation = () => (
  <NavigationContainer>
    <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
    <StyledNavLink to={toAuthor()}>O autorze</StyledNavLink>
  </NavigationContainer>
);

export default Navigation;