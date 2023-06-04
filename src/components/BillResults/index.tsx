import { ClientsTitle } from "../Clients/styles";
import { BRCenter, BillResultsContainer, ResultDIv, Title } from "./styles";
import { IBillResultsProps } from "../../interfaces";

const BillResults = ({ results }: IBillResultsProps) => {
  return (
    <BillResultsContainer>
      <BRCenter>
        <ClientsTitle>Resultados</ClientsTitle>
        {results.map((res, index) => {
          return (
            <ResultDIv key={index}>
              <Title style={{ fontWeight: "600" }}>{res.name}</Title>
              <Title>
                {res.pay.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  style: "currency",
                  currency: "BRL",
                })}
              </Title>
            </ResultDIv>
          );
        })}
      </BRCenter>
    </BillResultsContainer>
  );
};

export default BillResults;
