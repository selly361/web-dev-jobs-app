import React, { useContext, useState } from "react";
import styled from "styled-components";
import { FilterIcon, LocatonIcon, SearchIcon } from "../../assets";
import { JobsContextProvider } from "../../context/JobsProvider";
import Modal from "../Modal/Modal";
import Overlay from "../Modal/Overlay";

const StyledForm = styled.form`
  width: 100%;
  height: 12vh;
  background-color: ${({ theme }) => theme.element.bg};
  transition: 1s ease;
  transition-property: background-color, border;
  border-radius: 5px;
  transform: translate(0, -50%);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  div:nth-child(2) {
    border-right: 1px solid ${({ theme }) => theme.border};
    border-left: 1px solid ${({ theme }) => theme.border};
  }

  @media (max-width: 700px) {
    & {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-around;
  gap: 0.2rem;
  padding: 0.5rem;

  h4 {
    color: ${({ theme }) => theme.normal_text_color};
  }

  @media (max-width: 700px) {
    &:first-child {
      & > *:first-child {
        display: none;
      }
    }

    &:nth-child(2),
    &:nth-child(3) {
      display: none;
    }
  }
`;

const Input = styled.input`
  border: transparent;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.normal_text_color};
  transition: 1s color ease;
  padding-left: 0.4rem;

  @media (max-width: 1200px) {
    & {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 679px) {
    &.searchInput {
      font-size: 1.3rem;
      width: 100%;
    }
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

const Button = styled(NormalButton)`
  @media (max-width: 1200px) {
    & {
      padding: 0.6rem 0.5rem;
      font-size: 1rem;
    }
  }
`;

const CheckBox = styled.input`
  height: 20px;
  width: 20px;

  &:checked {
    accent-color: #5964e0;
  }
`;

const MobileFilterButtonContainer = styled.div`
  display: none;

  @media (max-width: 700px) {
    display: block;
    width: max-content;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: end;
    padding-right: 0.4rem;
  }
`;

const MobileButton = styled(NormalButton)`
  padding: 0.4rem 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;

  svg path {
    fill: #fff;
  }
`;

const SearchBar = () => {
  const { filter, setFilter, handleFilter } = useContext(JobsContextProvider);
  const [open, setOpen] = useState(false);
  // FilterIcon
  return (
    <>
      <StyledForm onSubmit={handleFilter}>
        <InputContainer>
          <SearchIcon />
          <Input
            className="searchInput"
            name="title"
            value={filter?.title}
            onChange={(e) =>
              setFilter((prev) => ({ ...prev, title: e.target.value }))
            }
            placeholder="Filter by title..."
          />
        </InputContainer>
        <InputContainer>
          <LocatonIcon />
          <Input
            className="locationInput"
            name="location"
            onChange={(e) =>
              setFilter((prev) => ({ ...prev, location: e.target.value }))
            }
            value={filter?.location}
            placeholder="Filter by location..."
          />
        </InputContainer>
        <InputContainer>
          <CheckBox
            name="checkbox"
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
          <Button>Search</Button>
        </InputContainer>
        <MobileFilterButtonContainer>
          <FilterIcon onClick={() => setOpen(true)} />
          <MobileButton>
            <SearchIcon />
          </MobileButton>
        </MobileFilterButtonContainer>
      </StyledForm>
      <Modal
        open={open}
        setOpen={setOpen}
        handleFilter={handleFilter}
        filter={filter}
        setFilter={setFilter}
      />
      <Overlay open={open} setOpen={setOpen} />
    </>
  );
};

export default SearchBar;
