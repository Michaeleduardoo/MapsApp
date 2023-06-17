import styled from "styled-components";
import { MapContainer as MapContainerLeaflet } from "react-leaflet";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.back};
  padding-bottom: 40px;
`;

export const Form = styled.form`
  width: 40vw;
  background-color: ${(props) => props.theme.white};
  padding: 50px;
  margin-top: 40px;
  border-radius: 8px;
  @media all and (max-width: 800px) {
    width: 70%;
  }

  @media all and (max-width: 300px) {
    width: 50%;
    text-align: center;
  }
`;

export const FormTitle = styled.h2`
  color: ${(props) => props.theme.primary};
  font-size: 40px;
  padding-bottom: 30px;

  @media all and (max-width: 800px) {
    font-size: 35px;
  }

  @media all and (max-width: 380px) {
    font-size: 30px;
  }

  @media all and (max-width: 300px) {
    font-size: 30px;
  }
`;

export const MapContainer = styled(MapContainerLeaflet)`
  height: 50vh;

  @media all and (max-width: 300px) {
    height: 50vh;
    width: 50vw;
  }
`;

export const Section = styled.p`
  color: ${(props) => props.theme.primary};
  font-size: 30px;
  padding-bottom: 30px;
  padding-top: 30px;
  font-weight: 700;
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CategoryBox = styled.div<{ isActive: boolean }>`
  background-color: ${(props) =>
    props.isActive ? props.theme.white : props.theme.back};
  border: ${(props) =>
    props.isActive ? `2px solid ${props.theme.back}` : "none"};
  border-radius: 8px;
  width: 160px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  cursor: pointer;
`;

export const CategoryImage = styled.img`
  width: 70px;
  height: 70px;
  margin-bottom: 5px;
`;

export const ButtonContainer = styled.div`
  text-align: center;
  padding-top: 20px;
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};
  height: 50px;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: ${(props) => props.theme.back}99;
    color: ${(props) => props.theme.primary};
    transition: 0.3s;
    border: 1px solid ${(props) => props.theme.primary};
  }
`;

export const ReloadConteiner = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: aliceblue;
`;

export const TextReload = styled.h3`
  margin-top: 20px;
  color: #1f619b;

  font-size: 50px;
`;

export const Tb = styled.i`
  color: #1f619b;
  font-size: 100px;
`;
