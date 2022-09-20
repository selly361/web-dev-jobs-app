import styled from "styled-components";
import HeaderBg from "../../assets/desktop/bg-pattern-header.svg";
import MobHeaderBg from "../../assets/mobile/bg-pattern-header.svg";
import TabHeaderBg from "../../assets/tablet/bg-pattern-header.svg";
import { LogoIcon } from "../../assets";

export const StyledHeader = styled.header`
  width: 100vw;
  height: 28vh;
  background: url(${HeaderBg}) no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1233px) {
    background: url(${TabHeaderBg}) no-repeat;
    width: 100vw;
    margin: auto;
    background-size: 80vw;
    background-position: center;

  }

  @media (max-width: 983px) {
    background: url(${MobHeaderBg}) no-repeat;
    background-position: center;
    background-size: 60vw;
    background-position: center;

}
`;


// width: 80vw;
// min-height: 90vh;
// margin: auto;
// display: flex;
// flex-flow: column;
// gap: 3rem;

// @media (max-width: 1233px) {
//   width: 65vw;
// }



export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80vw;

  @media (max-width: 1233px){
    width: 65vw;
  }

  @media (max-width: 983px) {
  width: 40vw;
}
`;

export const Toggler = styled.button`
  width: 55px;
  height: 25px;
  background-color: white;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 0 0.3rem;

  &:hover {
    cursor: pointer;
  }
`;

export const Logo = styled(LogoIcon)`

 @media (max-width: 983px) {
   transform: scale(0.8);
}

`

export const ToggleDot = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #5964e0;
  transition: margin 300ms linear;

  &.dark {
    margin-left: 30px;
  }

  &.light {
    margin-right: 30px;
  }
`;

export const ThemeToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;