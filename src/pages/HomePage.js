import { motion } from "framer-motion";
import React, { useContext } from "react";
import styled from "styled-components";
import Cards from "../components/Cards/Cards";
import SearchBar from "../components/SearchBar/SearchBar";
import { JobsContextProvider } from "../context/JobsProvider";
import { pageAnimation } from "../global-styles/GlobalStyles";

const Container = styled(motion.main)`
  width: 80vw;
  margin: auto;
  display: flex;
  flex-flow: column;
  gap: 3rem;
  padding-bottom: 2rem;

  @media (max-width: 1233px) {
    width: 800px;
  }


  @media (max-width: 100px){

  }

  @media (max-width: 860px) {
    width: 90vw;
  }
`;

const MoreButton = styled.button`
  background-color: #5964e0;
  color: rgb(255, 255, 255);
  font-weight: bold;
  padding: 1rem 0.5rem;
  border-radius: 5px;
  margin: auto;
  width: 100px;
  display: block;

  &:hover {
    cursor: pointer;
    background-color: #939bf4;
  }
`;

const ButtonContainer = styled.div``;

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const HomePage = () => {
  const { hideButton, handleLoadMore } = useContext(JobsContextProvider);

  return (
    <>
      <Container
      variants={pageAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
      >
        <SearchBar />
        <Cards />
        {!hideButton && (
          <ButtonContainer>
            <MoreButton onClick={handleLoadMore}>Load More</MoreButton>
          </ButtonContainer>
        )}
      </Container>
    </>
  );
};

export default HomePage;
