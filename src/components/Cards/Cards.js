import React, { useContext } from "react";
import styled from "styled-components";
import { JobsContextProvider } from "../../context/JobsProvider";
import Card from "../Card/Card";

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto;
  row-gap: 4rem;
  place-items: center;
  place-content: space-between;


    @media (max-width: 1233px){
  grid-template-columns: auto auto;

    }


    
  @media (max-width: 983px) {
    grid-template-columns: auto;
    place-content: center;
  }
`;

const Cards = () => {
  const { filteredDevJobs } = useContext(JobsContextProvider);
  console.log(filteredDevJobs);
  return (
    <Container>
      {filteredDevJobs.map((devJob) => (
        <Card {...devJob} />
      ))}
    </Container>
  );
};

export default Cards;
