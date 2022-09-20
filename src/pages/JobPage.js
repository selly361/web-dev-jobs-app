import { motion } from "framer-motion";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import {
  Dot,
  StyledContract,
  StyledLocation,
  StyledPostedAt,
} from "../components/Card/Card";
import { NormalButton } from "../components/SearchBar/SearchBar";
import { JobsContextProvider } from "../context/JobsProvider";
import { pageAnimation } from "../global-styles/GlobalStyles";

const Container = styled(motion.main)`
  width: 800px;
  margin: auto;
  display: flex;
  flex-flow: column;
  gap: 3rem;
  padding-bottom: 2rem;

  h2,
  h3,
  h4,
  h6 {
    color: ${({ theme }) => theme.title};
  }

  @media (max-width: 1051px) {
    width: 90vw;
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

  @media (max-width: 600px) {
    flex-flow: column;
    height: 200px;
    transform: translate(0, -12.5%);
    align-items: center;
    text-align: center;
    justify-content: space-between;
    padding-right: 0;
    padding-bottom: 1rem;

   .company-info {
      display: flex;
      gap: 1rem;
      flex-flow: column;
      margin-bottom: 1rem;

    }
  }
`;

const CompanyLogoContainer = styled.div`
  height: 100%;
  width: 100px;
  display: grid;
  place-items: center;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  img {
    height: 50%;
    width: 50%;
    object-fit: contain;
  }

  @media (max-width: 630px) {
    & {
      height: 80px;
      width: 80px;
      border-radius: 10px;
      transform: translate(0, -50%);

    }
    
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

const Title = styled.h2`
  color: ${({ theme }) => theme.title};
`;

const JobInformationContainer = styled.article`
  width: 100%;
  height: max-content;
  background-color: ${({ theme }) => theme.element.bg};
  border-radius: 10px;
  padding: 2rem;
  display: flex;
  flex-flow: column;
  gap: 2rem;
`;

const HeaderSection = styled.section`
  display: flex;
  flex-flow: column;
  gap: 1rem;

  div:first-child {
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }

  div:nth-child(2) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }


  @media (max-width: 630px){
    div:nth-child(2) {
    
      button {
        display: none;
      }

  }
  }
`;

const ApplyButton = styled(NormalButton)`
  padding: 0.8rem;
`;

const RequirementsSection = styled.section`
  display: flex;
  flex-flow: column;
  gap: 1.3rem;
`;

const UnorderedList = styled.ul`
  display: flex;
  flex-flow: column;
  gap: 1rem;
  padding-left: 0.3rem;

  li {
    list-style-position: outside;
    margin-left: 1.5rem;
  }
`;

const WhatYouDoSection = styled.section`
  display: flex;
  flex-flow: column;
  gap: 1.3rem;
`;

const OrderedList = styled.ol`
  display: flex;
  flex-flow: column;
  gap: 1rem;

  li {
    margin-left: 1.5rem;
    padding-left: 0.3rem;

    &::marker {
      color: #5964e0;
    }
  }
`;

const ApplyMobileButton = styled(NormalButton)`
  width: 100%;

  @media (min-width: 630px){
    display: none;
  }

`

const JobPage = () => {
  const { id } = useParams();
  const { findJob, setFilter, devJobs, setFilteredDevJobs, setHideButton } =
    useContext(JobsContextProvider);

  const {
    company,
    contract,
    logo,
    website,
    postedAt,
    position,
    location,
    description,
    requirements,
    role,
  } = findJob(id);

  useEffect(() => {
    setFilter({});
    setFilteredDevJobs(devJobs.slice(6));
    setHideButton(false);
  }, []);

  return (
    <Container
      variants={pageAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <JobHeader>
        <CompanyLogoContainer
          className={
            company.split(" ").length > 1
              ? company.split(" ").join("")
              : company
          }
        >
          <img src={logo} />
        </CompanyLogoContainer>
        <div className="company-info">
          <Title>{company}</Title>
          <p>{website}</p>
        </div>
        <CompanySiteButton>Company Site</CompanySiteButton>
      </JobHeader>
      <JobInformationContainer>
        <HeaderSection>
          <div>
            <StyledPostedAt>{postedAt}</StyledPostedAt>
            <Dot />
            <StyledContract>{contract}</StyledContract>
          </div>
          <div>
            <Title>{position}</Title>
            <ApplyButton>Apply Now</ApplyButton>
          </div>
          <StyledLocation>{location}</StyledLocation>
          <ApplyMobileButton>Apply Now</ApplyMobileButton>
        </HeaderSection>
        <p>{description}</p>
        <RequirementsSection>
          <h3>Requirements</h3>
          <p>{requirements.content}</p>
          <UnorderedList>
            {role.items.map((item) => (
              <li>{item}</li>
            ))}
          </UnorderedList>
        </RequirementsSection>
        <WhatYouDoSection>
          <h3>What You Will Do</h3>
          <p>{role.content}</p>
          <OrderedList>
            {requirements.items.map((item) => (
              <li>{item}</li>
            ))}
          </OrderedList>
        </WhatYouDoSection>
      </JobInformationContainer>
    </Container>
  );
};

export default JobPage;
