import {
  HeaderCenter,
  HeaderContainer,
  ImgLogo,
  LogoTitle,
  PageDiv,
  PageTitle,
  PagesDiv,
} from "./styles";
import logoRDO from "../../assets/logo RDO.png";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const loc = useLocation();
  const nav = useNavigate();

  return (
    <HeaderContainer>
      <HeaderCenter>
        <ImgLogo onClick={() => nav("/")} src={logoRDO} />
        <PagesDiv>
          <PageDiv
            style={{
              backgroundColor:
                loc.pathname === "/numbersToRoman" ? "white" : "#0b1622",
            }}
            onClick={() => nav("/numbersToRoman")}
          >
            <PageTitle
              style={{
                color: loc.pathname === "/numbersToRoman" ? "#0b1622" : "white",
              }}
            >
              Conversor Romanos
            </PageTitle>
          </PageDiv>
          <PageDiv
            style={{
              backgroundColor:
                loc.pathname === "/gameOfLife" ? "white" : "#0b1622",
            }}
            onClick={() => nav("/gameOfLife")}
          >
            <PageTitle
              style={{
                color: loc.pathname === "/gameOfLife" ? "#0b1622" : "white",
              }}
            >
              Jogo da vida
            </PageTitle>
          </PageDiv>
          <PageDiv
            style={{
              backgroundColor:
                loc.pathname === "/restaurantBillDivisor" ? "white" : "#0b1622",
            }}
            onClick={() => nav("/restaurantBillDivisor")}
          >
            <PageTitle
              style={{
                color:
                  loc.pathname === "/restaurantBillDivisor"
                    ? "#0b1622"
                    : "white",
              }}
            >
              Divisor Conta
            </PageTitle>
          </PageDiv>
        </PagesDiv>
      </HeaderCenter>
    </HeaderContainer>
  );
};
export default Header;
