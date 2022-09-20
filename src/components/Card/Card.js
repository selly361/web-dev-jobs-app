import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledCard = styled.div`
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
    gap: 0.4rem;
  }
`;

const LogoWrapper = styled.div`
  height: 50px;
  width: 50px;
  background-color: black;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -25px;

  &.Scoot {
    background-color: hsl(36, 87%, 49%);
  }

  &.Blogr {
    background-color: hsl(12, 79%, 52%);
  }

  &.Vector {
    background-color: hsl(235, 10%, 23%);
  }

  &.OfficeLite {
    background-color: hsl(227, 62%, 48%);
  }

  &.Pod {
    background-color: hsl(216, 46%, 14%);
  }

  &.Creative {
    background-color: hsl(295, 55%, 21%);
  }

  &.Pomodoro {
    background-color: hsl(254, 71%, 45%);
  }

  &.Maker {
    background-color: hsl(218, 58%, 31%);
  }

  &.Coffeeroasters {
    background-color: hsl(29, 60%, 87%);
  }

  &.Mastercraft {
    background-color: hsl(0, 0%, 12%);
  }

  &.Crowdfund {
    background-color: hsl(157, 57%, 50%);
  }

  &.Typemaster {
    background-color: hsl(22, 89%, 52%);
  }
`;

const StyledLogo = styled.img``;

const StyledPostedAt = styled.p`
  color: #6e8098;
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

const Card = ({
  contract,
  position,
  postedAt,
  location,
  logoBackground,
  logo,
  company,
  id
}) => {
  return (
    <StyledCard>
      <LogoWrapper className={company.trim()}>
        <StyledLogo src={logo} />
      </LogoWrapper>
      <CompanyInfoWrap>
        <div>
          <StyledPostedAt>{postedAt}</StyledPostedAt>
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
