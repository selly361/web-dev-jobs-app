import { motion } from "framer-motion";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { JobsContextProvider } from "../context/JobsProvider";
import { pageAnimation } from "../global-styles/GlobalStyles";

const Container = styled(motion.main)`
  width: 60vw;
  margin: auto;
  display: flex;
  flex-flow: column;
  gap: 3rem;
  padding-bottom: 2rem;

  @media (max-width: 1233px) {
  }

  @media (max-width: 983px) {
  }
`;

const JobHeader = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.element.bg};
  border-radius: 10px;
  transform: translate(0, -25%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 3rem;

`;

const CompanyLogoContainer = styled.div`
  height: 100%;
  width: 15%;
  display: grid;
  place-items: center;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  img {
    height: 50%;
    width: 50%;
    object-fit: contain;
  }
`;

const CompanySiteButton = styled.button`
  padding: 1rem 0.5rem;
  background-color: ${({ theme }) => theme.company_button_link.bg};
  color: ${({ theme }) => theme.company_button_link.color};
  font-weight: bold;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.company_button_link.hover};
  }
`;

const JobPage = () => {
  const { id } = useParams();
  const { findJob } = useContext(JobsContextProvider);

  const { company, contract, logo, website } = findJob(id);

  return (
    <Container
      variants={pageAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <JobHeader>
        <CompanyLogoContainer className={company.split(" ").length > 1 ? company.split(" ").join("") : company}>
          <img src={logo} />
        </CompanyLogoContainer>
        <div>
          <h2>{company}</h2>
          <p>{website}</p>
        </div>
        <CompanySiteButton>Company Site</CompanySiteButton>
      </JobHeader>
    </Container>
  );
};

export default JobPage;
