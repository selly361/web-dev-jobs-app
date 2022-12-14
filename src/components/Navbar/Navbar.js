import { Link } from "react-router-dom";
import { MoonIcon, SunIcon } from "../../assets";
import {
  StyledHeader,
  ToggleDot,
  Toggler,
  Navigation,
  ThemeToggleWrapper,
  Logo,
} from "./styles";



const Navbar = ({ theme, setTheme }) => {

  return (
    <StyledHeader>
      <Navigation>
        <Link to="/">
          <Logo />
        </Link>
        <ThemeToggleWrapper>
          <SunIcon />
          <Toggler
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <ToggleDot className={theme} />
          </Toggler>
          <MoonIcon />
        </ThemeToggleWrapper>
      </Navigation>
    </StyledHeader>
  );
};

export default Navbar;
