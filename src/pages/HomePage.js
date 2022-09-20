import React from "react";
import styled from "styled-components";
import Cards from "../components/Cards/Cards";
import SearchBar from "../components/SearchBar/SearchBar";

const Container = styled.main`
  width: 80vw;
  min-height: 90vh;
  margin: auto;
  display: flex;
  flex-flow: column;
  gap: 3rem;

  @media (max-width: 1233px) {
    width: 65vw;
  }

  @media (max-width: 983px) {
    width: 40vw;
  }
`;

const HomePage = () => {
  return (
    <Container>
      <SearchBar />
      <Cards />
    </Container>
  );
};

export default HomePage;
