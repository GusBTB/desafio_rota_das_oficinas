import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  border-bottom-left-radius: 30%;
  border-bottom-right-radius: 30%;
  align-items: center;
  justify-content: center;
  background-color: #0b1622;
  border-bottom: 1px solid #c3c3c3;
`;
export const HeaderCenter = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;

  justify-content: space-between;
`;
export const LogoTitle = styled.p`
  font-family: "Inter";
  font-size: 20px;
  cursor: pointer;
  margin-left: 5px;
  color: white;
`;
export const PagesDiv = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  width: 400px;
`;
export const PageDiv = styled.div`
  margin-top: 5px;
  height: 60%;
  padding: 0px 3px;
  width: fit-content;
  display: flex;
  /* border: 1px solid white; */
  border-radius: 50px;
  align-items: center;
  cursor: pointer;
  justify-content: center;
`;
export const PageTitle = styled.p`
  font-family: "Inter";
  font-size: 15px;
  color: white;
`;

export const ImgLogo = styled.img`
  height: 90%;
  margin-bottom: 3px;
  cursor: pointer;
`;
