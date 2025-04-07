import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Background>
        {[...Array(15)].map((_, i) => (
          <SilverLine key={i} delay={Math.random() * 5} left={Math.random() * 100} />
        ))}
      </Background>
      <Content>
        <LogoContainer>
          <Title>
            work<span>Nest</span>
          </Title>
        </LogoContainer>
        <ButtonWrapper>
          <StartButton onClick={() => navigate("/signup")}>
            🚀 Get Started
          </StartButton>
          <SilverGlow />
        </ButtonWrapper>
      </Content>
    </Container>
  );
};

// **Animations**
const float = keyframes`
  from { transform: translateY(-100px); opacity: 0; }
  to { transform: translateY(100vh); opacity: 0.5; }
`;

const glow = keyframes`
  from { transform: scale(1); opacity: 0.3; }
  to { transform: scale(1.2); opacity: 0.6; }
`;

// **Styled Components**
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #0055b3;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const SilverLine = styled.div`
  position: absolute;
  width: 2px;
  height: 80px;
  background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.3), transparent);
  top: -100px;
  left: ${({ left }) => left}%;
  opacity: 0.5;
  animation: ${float} 6s infinite linear;
  animation-delay: ${({ delay }) => delay}s;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
  width: 100%;
  max-width: 400px;
  padding: 20px;
`;

const LogoContainer = styled.div`
  background-color: white;
  width: 100%;
  padding: 30px 20px;
  border-radius: 8px;
  margin-bottom: 40px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: #0055b3;
  span {
    font-weight: bold;
  }
`;

const ButtonWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const StartButton = styled.button`
  background-color: #0055b3;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 2;
  overflow: hidden;
  outline: none;
`;

const SilverGlow = styled.div`
  position: absolute;
  width: 150%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 50%);
  top: -50%;
  left: -25%;
  z-index: 1;
  animation: ${glow} 2s infinite alternate;
  filter: blur(10px);
`;

export default LandingPage;