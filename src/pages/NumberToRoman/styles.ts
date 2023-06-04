import styled from "styled-components";
export const NumberToRomanContainer = styled.div`
  margin-top: 20px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  justify-content: center;
`;
export const PopContainer = styled.div`
  height: 350px;
  width: 350px;
  display: flex;
  border: 1px solid #c6c6c6;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;
export const PopCenter = styled.div`
  height: 95%;
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const PopUpper = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`;

export const PopTitle = styled.p`
  font-family: "Inter";
  font-size: 15px;
  text-align: center;
  color: black;
`;

export const Input = styled.input`
  width: 90%;
  height: 35px;
  border: 1.5px solid #e9ecef;
  border-radius: 4px;
  background-color: white;
  font-weight: 400;
  padding-left: 15px;
  font-size: 16px;
  font-family: "Inter";
  :focus {
    background-color: white;
    outline: none;
  }
  ::placeholder {
    color: #757474;
    font-weight: 400;
    font-size: 16px;
    font-family: "Inter";
  }
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
export const Button = styled.button`
  width: 96%;
  height: 30px;
  background-color: #0b1622;
  border: 1px solid #393939;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  font-family: "Inter";
  font-weight: 500;
`;

export const AnsTitle = styled.p`
  font-size: 40px;
  font-family: "Inter";
  color: black;
`;
