import styled from "styled-components";

export const ProductsAddedContainer = styled.div`
  width: 99%;
  height: fit-content;
  padding-top: 5px;
  padding-bottom: 5px;
  display: flex;
  border: 1px solid #b0b0b0;
  align-items: center;
  justify-content: space-between;
`;

export const ProductName = styled.p`
  font-size: 17px;
  font-family: "Inter";
  color: black;
`;

export const ProductNameDiv = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-left: 10px;
`;

export const ProductPrice = styled.p`
  font-size: 17px;
  font-family: "Inter";
  color: black;
`;

export const ConsumersDiv = styled.div`
  width: 140px;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
`;
export const ConsumerName = styled.p`
  font-size: 10px;
  font-family: "Inter";
  padding-right: 10px;
  color: black;
`;
