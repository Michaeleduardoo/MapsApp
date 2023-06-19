import styled from "styled-components";

export const Conteiner = styled.div`
  width: 100%;
  height: 100vh;
  background: url("./home-background.svg") #caecf7;
  background-size: cover;
  background-color: ${(props) => props.theme.background};
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-size: 60px;
  font-weight: 700;
  color: ${(props) => props.theme.primary};
  padding-bottom: 50px;
  text-align: center;
  max-width: 500px;

  @media all and (max-width: 500px) {
    font-size: 40px;
    margin-top: 20px;
  }

  @media all and (max-width: 400px) {
    font-size: 30px;
    margin-top: 20px;
  }

  @media all and (max-width: 300px) {
    font-size: 25px;
    padding: 10px;
    margin-top: 20px;
  }
`;

export const SubTitle = styled.p`
  font-size: 24px;
  padding-bottom: 50px;
  text-align: center;
  max-width: 490px;
  line-height: 35px;
  @media all and (max-width: 500px) {
    font-size: 20px;
    padding: 20px;
    margin-bottom: 20px;
  }

  @media all and (max-width: 400px) {
    font-size: 20px;
  }

  @media all and (max-width: 300px) {
    font-size: 18px;
  }
`;

export const BoxButton = styled.div`
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.white};
  height: 50px;
  width: 40px;
  font-size: 30px;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};
  height: 50px;
  border: none;
  border-radius: 5px;
  position: relative;
  padding-left: 50px;

  &:hover {
    background: #1f77bd;
    transition: 0.3s;
  }

  &:active {
    opacity: 0.8;
  }

  @media all and (max-width: 300px) {
    font-size: 14px;
  }
`;

export const LeftBox = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const RightBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img.attrs(() => ({
  src: "imgLocal.png",
}))`
  width: 85%;
  margin-right: 8%;

  @media all and (max-width: 800px) {
    margin-right: 0%;
  }
`;
