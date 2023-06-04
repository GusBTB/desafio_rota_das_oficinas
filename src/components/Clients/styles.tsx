import styled from "styled-components";

export const ClientsContainer = styled.div`
  width: 250px;
  height: 300px;
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ClientsCenter = styled.div`
  width: 98%;
  height: 100%;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;
export const ClientsTitle = styled.p`
  font-family: "Inter";
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`;

export const ClientsUpper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  gap: 15px;
  flex-direction: column;
  align-items: center;
`;
export const ClientsBottom = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  overflow-y: auto;
  align-items: flex-start;
`;
