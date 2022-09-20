import React from "react";
import styled from "styled-components";

const StyledOverlay = styled.div`
  position: fixed;
  inset: 0;
  height: 100vh;
  width: 100vw;
  background-color: black;
  opacity: 0.5;
  z-index: 90;

  @media (min-width: 700px){
        display: none;
    }
`;

const Overlay = ({ open, setOpen }) => {
  return open && <StyledOverlay onClick={() => setOpen(false)} />;
};

export default Overlay;
