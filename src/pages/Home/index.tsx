import { HomeContainer, HomeSubTitle, HomeTitle, LinksDiv } from "./styles";
import { BsWhatsapp, BsLinkedin } from "react-icons/bs";

const Home = () => {
  return (
    <HomeContainer>
      <HomeTitle>Escolha acima o jogo ou feature que desejar</HomeTitle>
      <HomeSubTitle>Feito por Gustavo da Costa e Silva</HomeSubTitle>
      <LinksDiv>
        <BsLinkedin
          onClick={() =>
            (window.location.href = "https://www.linkedin.com/in/gustavo-gcs/")
          }
          style={{ fontSize: "33px", cursor: "pointer" }}
        />
        <BsWhatsapp
          onClick={() => (window.location.href = "https://wa.me/5511972750808")}
          style={{ fontSize: "33px", cursor: "pointer" }}
        />
      </LinksDiv>
    </HomeContainer>
  );
};
export default Home;
