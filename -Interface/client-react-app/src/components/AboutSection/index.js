import React from "react";
import styled, { keyframes } from "styled-components";
import { FcInfo } from "react-icons/fc";
import { FiExternalLink } from "react-icons/fi";
import SVG2 from "../../assets/images/network.svg";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const AboutSectionContainer = styled.div`
  background-color: white;
  animation: ${fadeIn} 1s ease-in;
  transition: background-color 0.3s ease;
`;

const AboutSectionWrapper = styled.div`
  display: flex;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 1089px) {
    height: auto;
    z-index: 0;
  }
`;

const GridContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 50px 1fr;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  animation: ${fadeIn} 1s ease-in;

  &:before,
  &:after {
    content: "";
    flex: 1;
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  }

  &:not(:empty)::before {
    margin-right: 0.25rem;
  }

  &:not(:empty)::after {
    margin-right: 0.25rem;
  }
`;

const SubTitle = styled.div`
  text-align: center;
  font-size: 20px;
  animation: ${fadeIn} 1s ease-in;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
  margin: 10px;
`;

const Card = styled.div`
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  margin: 10px;
  width: 820px;
  border-radius: 10px;
  padding: 0;
  animation: ${fadeIn} 1s ease-in;

  @media screen and (max-width: 768px) {
    margin: 20px 0;
    width: 90%;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 40px;
`;

const CardContentContainer = styled.div`
  grid-row-start: 1;
  grid-row-end: 1;

  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const CardLinkWrapper = styled.div`
  grid-row-start: 2;
  border-top: 2px solid rgba(0, 0, 0, 0.1);
  padding: 10px 20px;
  display: flex;
`;

const Icon = styled.div`
  align-self: flex-start;
  font-size: 20px;
  padding-right: 5px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const CardBody = styled.div`
  align-self: center;
`;

const CardPartWrap = styled.div`
  padding: 10px;
  text-align: center;
`;

const CardImage = styled.img`
  width: 210px;
  height: 210px;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

const LearnMoreTxt = styled.a`
  padding-left: 5px;
  font-size: 14px;
  font-weight: bold;
  color: #1890ff;

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const CardTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const CardDescription = styled.p`
  font-size: 15px;

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

function AboutSection() {
  return (
    <AboutSectionContainer id="about">
      <AboutSectionWrapper>
        <GridContainer>
          <Title>About</Title>
          <SubTitle>Read to know some INFO about US</SubTitle>
          <CardContainer>
            <Card>
              <CardGrid>
                <CardContentContainer>
                  <Icon>
                    <FcInfo />
                  </Icon>
                  <CardBody>
                    <CardPartWrap>
                      <CardImage src={SVG2} alt="file" />
                    </CardPartWrap>
                    <CardPartWrap>
                      <CardTitle>WELCOME TO YOUR HEALTH CARE</CardTitle>
                    </CardPartWrap>
                    <CardPartWrap>
                      <CardDescription>
                        Innovative e-solutions are the core of the Egypt healthcare system. Patients and doctors, not to mention hospitals and the government, benefit from the convenient access and savings that e-services have delivered.

                        Each person in Egypt that has visited a doctor has an online e-Health record that can be tracked. Identified by the electronic ID-card, the health information is kept completely secure and at the same time accessible to authorized individuals. The use of KSI Blockchain technology in the system ensures data integrity and mitigates internal threats to the data.

                        One of the key features of an EHR is that health information can be created and managed by authorized providers in a digital format capable of being shared with other providers across more than one health care organization. EHRs are built to share information with other health care providers and organizations – such as laboratories, specialists, medical imaging facilities, pharmacies, emergency facilities, and school and workplace clinics – so they contain information from all clinicians involved in a patient’s care. With EHRs, information is available whenever and wherever it is needed. To know more about blockchain, press on Learn More.
                      </CardDescription>
                    </CardPartWrap>
                  </CardBody>
                </CardContentContainer>
                <CardLinkWrapper>
                  <Icon>
                    <FiExternalLink />
                  </Icon>
                  <LearnMoreTxt href="https://ipfs.io/" target="_blank">
                    Learn More
                  </LearnMoreTxt>
                </CardLinkWrapper>
              </CardGrid>
            </Card>
          </CardContainer>
        </GridContainer>
      </AboutSectionWrapper>
    </AboutSectionContainer>
  );
}

export default AboutSection;
