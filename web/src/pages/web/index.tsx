import {
  Button,
  ButtonContainer,
  CategoryBox,
  CategoryContainer,
  CategoryImage,
  Container,
  Form,
  FormTitle,
  MapContainer,
  Section,
  ReloadConteiner,
  TextReload,
  Tb,
} from "./styles";

import Input from "../../components/Input";
import { Tb360 } from "react-icons/tb";

import { useState } from "react";
import { TileLayer, Marker } from "react-leaflet";
import { LatLngExpression, LeafletMouseEvent } from "leaflet";
import { categories } from "./categories";
import useGetLocation from "../../hooks/useGetLocation";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Web() {
  const history = useNavigate();
  const [formValues, setformValues] = useState({
    name: "",
    description: "",
    contact: "",
    category: "",
    coords: [0, 0],
  });

  const { coords } = useGetLocation();

  async function onSumbmit() {
    const resquest = await fetch(`http://localhost:3000//store`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formValues,
        latitude: formValues.coords[0],
        longitude: formValues.coords[1],
      }),
    });

    if (resquest.ok) {
      toast("Estabelecimento gravado com sucesso!", {
        type: "success",
        autoClose: 3000,
        onClose: () => history("/"),
        onOpen: () => history("/web"),
      });
    }
  }

  if (!coords) {
    return (
      <ReloadConteiner>
        <Tb>
          <Tb360 />
        </Tb>
        <TextReload>Carregando</TextReload>
      </ReloadConteiner>
    );
  }

  return (
    <Container>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          onSumbmit();
        }}
      >
        <FormTitle>Registro comercial local</FormTitle>
        <Section>Dados</Section>
        <Input
          label="Nome do Local"
          name="name"
          value={formValues.name}
          onChange={setformValues}
        />
        <Input
          label="Descrição"
          name="description"
          value={formValues.description}
          onChange={setformValues}
        />
        <Input
          label="Contato"
          name="contact"
          value={formValues.contact}
          onChange={setformValues}
        />
        <Section>Endereço</Section>
        <MapContainer
          center={{ lat: coords[0], lng: coords[1] } as LatLngExpression}
          zoom={13}
          scrollWheelZoom={false}
          ref={(map) => {
            map?.addEventListener("click", (e: LeafletMouseEvent) => {
              setformValues((prev) => ({
                ...prev,
                coords: [e.latlng.lat, e.latlng.lng],
              }));
            });
          }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={
              [formValues.coords[0], formValues.coords[1]] as LatLngExpression
            }
          />
        </MapContainer>

        <Section>Categoria</Section>

        <CategoryContainer>
          {categories.map((category) => (
            <CategoryBox
              key={category.key}
              onClick={() => {
                setformValues((prev) => ({ ...prev, category: category.key }));
              }}
              isActive={formValues.category === category.key}
            >
              <CategoryImage src={category.url} />
              {category.label}
            </CategoryBox>
          ))}
        </CategoryContainer>

        <ButtonContainer>
          <Button type="submit">Cadastrar comércio local</Button>
        </ButtonContainer>
      </Form>
    </Container>
  );
}
