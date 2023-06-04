import styled from "styled-components";

export const ProductsContainer = styled.div`
  width: 350px;
  height: 300px;
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  gap: 15px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProductsCenter = styled.div`
  width: 98%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  flex-direction: column;
`;

export const ProductsUpper = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  gap: 10px;
`;
export const ProductsUpperLeft = styled.div`
  width: 50%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const ProductsUpperLeftUpper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;
export const ProductsUpperRight = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const ProductsUpperRightBottom = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow-y: auto;
  flex-wrap: wrap;
  gap: 10px;
`;

export const ProductsBottom = styled.div`
  width: 100%;
  height: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const ProductsBottomCenter = styled.div`
  width: 100%;
  height: 127.5px;
  display: flex;
  gap: 5px;
  flex-direction: column;
  overflow-y: auto;
`;

export const InputProducts = styled.input`
  width: 60%;
  height: 35px;
  border: 1.5px solid #e9ecef;
  border-radius: 4px;
  background-color: white;
  font-weight: 400;
  padding-left: 5px;
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

export const InputProductsPrice = styled.input`
  width: 30%;
  height: 35px;
  border: 1.5px solid #e9ecef;
  border-radius: 4px;
  background-color: white;
  font-weight: 400;
  padding-left: 5px;
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
