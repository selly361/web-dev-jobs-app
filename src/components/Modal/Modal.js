import React, { useEffect } from "react";
import styled from "styled-components";
import { FilterIcon, LocatonIcon, SearchIcon } from "../../assets";

const StyledModal = styled.form`
  width: 80vw;
  height: 250px;
  background-color: ${({ theme }) => theme.element.bg};
  position: absolute;
  z-index: 100;
  inset: 0;
  margin: auto;
  border-radius: 10px;
  display: flex;
  flex-flow: column;
  padding: 1rem;
  justify-content: space-around;

  @media (min-width: 700px) {
    display: none;
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-around;
  gap: 0.5rem;
  padding: 0.5rem;
  width: max-content;


  h4 {
    color: ${({ theme }) => theme.normal_text_color};
  }


`;

const Input = styled.input`
  border: transparent;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.normal_text_color};
  transition: 1s color ease;
  padding-left: 0.4rem;


`;

const CheckBox = styled.input`
  height: 20px;
  width: 20px;

  &:checked {
    accent-color: #5964e0;
  }
`;

const NormalButton = styled.button`
  background-color: #5964e0;
  color: white;
  font-size: 1.3rem;
  font-weight: bold;
  padding: 0.8rem 2rem;
  border-radius: 5px;

  &:hover {
    background-color: #939bf4;
    cursor: pointer;
  }
`;

const Modal = ({ open, setOpen, handleFilter, filter, setFilter }) => {
  useEffect(() => {
    if (open) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "";

      }


  }, [open])

  return (
    open && (
      <StyledModal onSubmit={(e) => {
        handleFilter(e)
        setOpen(false)
        setFilter({})
      }}>
        <InputContainer>
          <LocatonIcon />
          <Input
            onChange={(e) =>
              setFilter((prev) => ({ ...prev, location: e.target.value }))
            }
            value={filter?.location}
            placeholder="Filter by location..."
          />
        </InputContainer>
        <InputContainer>
          <CheckBox
            type="checkbox"
            value={filter?.fullTime}
            onChange={(e) =>
              setFilter((prev) => ({
                ...prev,
                fullTime: e.target.checked,
              }))
            }
          />
          <h4>Full Time</h4>
        </InputContainer>
        <NormalButton>Search</NormalButton>
      </StyledModal>
    )
  );
};

export default Modal;
