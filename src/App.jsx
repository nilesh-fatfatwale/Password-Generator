import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display:flex;
  justify-content: center;
  background-color:#F6FFDE;
  align-items: center;
  width:100%;
  height: 100vh;
`;
const Wrapper=styled.div`
  max-width: 600px;
  padding: 20px;
  height:400px;
  width:400px;
  background-color:#CCD5AE;
  text-align: center;
  border-radius:15px;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
`


const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const GenerateButton = styled.button`
  background-color: #0070f3;
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0053ba;
  }
`;

const CopyButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

const PasswordText = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: 20px;
`;

const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const SliderLabel = styled.label`
  font-size: 1rem;
  margin-bottom: 5px;
`;

const Slider = styled.input`
  width: 200px;
`;

const App = () => {
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false);
  const [passwordLength, setPasswordLength] = useState(12);

  const generatePassword = () => {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';
    let result = '';

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      result += charset[randomIndex];
    }

    setPassword(result);
    setCopied(false);
  };

  const copyToClipboard = () => {
    const textArea = document.createElement('textarea');
    textArea.value = password;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    setCopied(true);
  };

  const handleSliderChange = (e) => {
    const newLength = parseInt(e.target.value, 10);
    setPasswordLength(newLength);
  };
  return (
    <Container>
      <Wrapper>
    <Title>Password Generator</Title>
    <SliderContainer>
      <SliderLabel>Password Length: {passwordLength}</SliderLabel>
      <Slider
        type="range"
        min="6"
        max="20"
        value={passwordLength}
        onChange={handleSliderChange}
      />
    </SliderContainer>
    <ButtonContainer>
      <GenerateButton onClick={generatePassword}>Generate Password</GenerateButton>
      <CopyButton onClick={copyToClipboard}>Copy Password</CopyButton>
    </ButtonContainer>
    <PasswordText>
       {password}
      {copied && <span style={{ color: 'green', marginLeft: '10px' }}>Copied!</span>}
    </PasswordText>
    </Wrapper>
  </Container>
  );
};

export default App;
