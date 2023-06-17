import {
  Conteiner,
  Title,
  Button,
  Img,
  LeftBox,
  RightBox,
  SubTitle,
  BoxButton,
} from "./styles";

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Conteiner>
      <LeftBox>
        <Title>Mapas locais para sua cidade</Title>
        <SubTitle>Encontre tudo o que você precisa em sua loja local!</SubTitle>
        <Link to="/web">
          <Button>
            <BoxButton>{"⇒"}</BoxButton>
            Cadastre um ponto comercial
          </Button>
        </Link>
      </LeftBox>

      <RightBox>
        <Img />
      </RightBox>
    </Conteiner>
  );
}
