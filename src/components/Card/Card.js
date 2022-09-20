import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledCard = styled(motion.div)`
  width: 300px;
  height: 250px;
  background-color: ${({ theme }) => theme.element.bg};
  position: relative;
  padding: 2rem;
  border-radius: 20px;
  transition: 1s background-color ease;

  @media (max-width: 1233px) {
    padding: 1rem;
  }
`;

const CompanyInfoWrap = styled.div`
  width: 90%;
  height: max-content;
  display: flex;
  flex-flow: column;
  gap: 1.4rem;
  margin-top: 2rem;

  div:nth-child(1) {
    display: flex;
    gap: 0.6rem;
    align-items: center;
  }
`;

const LogoWrapper = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -25px;


`;

const StyledLogo = styled.img``;

const StyledPostedAt = styled.p`
  color: #6e8098;
  position: relative;
  display: grid;
`;

const Dot = styled.div`
  height: 3px;
  width: 3px;
  border-radius: 50%;
  background-color: #6e8098;
`;

const StyledContract = styled.p`
  color: #6e8098;
`;

const StyledComapany = styled(StyledContract)``;

const StyledPosition = styled.h4`
  transition: 1s color ease;
  color: ${({ theme }) => theme.title};

  &:hover {
    cursor: pointer;
    color: #6e8098;
  }
`;

const StyledLocation = styled.h5`
  color: #5964e0;
`;

const childrenVariants = {
  hidden: {
    opacity: 0,
    scale: 0.6,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },

  exit: {
    opacity: 0,
    scale: 0.6,
  },
};

const Card = ({
  contract,
  position,
  postedAt,
  location,
  logoBackground,
  logo,
  company,
  id,
}) => {
  return (
    <StyledCard
      variants={childrenVariants}
      initial="hidden"
      animate="visible"
      transition={{ type: "tween", duration: 0.5 }}
    >
      <LogoWrapper className={company.split(" ").length > 1 ? company.split(" ").join("") : company}>
        <StyledLogo src={logo} />
      </LogoWrapper>
      <CompanyInfoWrap>
        <div>
          <StyledPostedAt>{postedAt}</StyledPostedAt>
          <Dot />
          <StyledContract>{contract}</StyledContract>
        </div>
        <Link to={`/${id}`}>
          <StyledPosition>{position}</StyledPosition>
        </Link>
        <StyledComapany>{company}</StyledComapany>
        <StyledLocation>{location}</StyledLocation>
      </CompanyInfoWrap>
    </StyledCard>
  );
};

export default Card;
