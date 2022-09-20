import React, { useContext } from "react";
import styled from "styled-components";
import { LocatonIcon, SearchIcon } from "../../assets";
import { JobsContextProvider } from "../../context/JobsProvider";

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
    border-right: 1px solid ${({theme}) => theme.border};
    border-left: 1px solid ${({theme}) => theme.border};
  }

`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-around;
  gap: .2rem;
  padding: .5rem;

  h4 {
    color: ${({theme}) => theme.normal_text_color}
  }

  @media (max-width: 983px) {

    &:first-child {
        & > *:first-child {
            display: none;
        }
    }

    &:nth-child(2), &:nth-child(3) {
        display: none;
    }

}
`;

const Input = styled.input`
  border: transparent;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.normal_text_color};
  transition: 1s color ease;
  padding-left: .4rem;

  @media (max-width: 1233px){
    & {
        font-size: .9rem;
    }
  }



`;


const Button = styled.button`
    background-color: #5964e0;
    color: white;
    font-size: 1.3rem;
    font-weight: bold;
    padding: .8rem 2rem;
    border-radius: 5px;

    &:hover {
        background-color: #939bf4;
        cursor: pointer;
    }

    @media (max-width: 1233px){
        & {
            padding: .4rem .3rem;
            font-size: 1rem;
        }
    }
`


const CheckBox = styled.input`
    height: 20px;
    width: 20px;
   



    &:checked {
        accent-color: #5964e0;
    }
`

const SearchBar = () => {
  const {
    filter,
    setFilter,
    handleFilter,
  } = useContext(JobsContextProvider);

  return (
    <StyledForm onSubmit={handleFilter}>
      <InputContainer>
        <SearchIcon />
        <Input
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
    </StyledForm>
  );
};

export default SearchBar;
