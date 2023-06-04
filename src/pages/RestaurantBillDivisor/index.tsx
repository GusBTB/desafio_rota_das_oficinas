import { useState } from "react";
import {
  PopCenter,
  PopContainer,
  RestaurantBillDivisorContainer,
} from "./styles";
import Clients from "../../components/Clients";
import Products from "../../components/Products";
import TaxesPayment from "../../components/TaxesPayment";
import BillResults from "../../components/BillResults";
import { IProductAddedProps, IBillResults } from "../../interfaces";
import { ClientsTitle } from "../../components/Clients/styles";
import { BsCaretRightFill } from "react-icons/bs";

const RestaurantBillDivisor = () => {
  const [clientName, setClientName] = useState<string>("");
  const [clients, setClients] = useState<string[]>([]);
  const [clientsProduct, setClientsProduct] = useState<string[]>([]);
  const [productsAdded, setProductsAdded] = useState<IProductAddedProps[]>([]);
  const [taxPayers, setTaxPayers] = useState<string[]>([]);
  const [step, setStep] = useState<number>(1);
  const [results, setResults] = useState<IBillResults[]>([]);

  return (
    <RestaurantBillDivisorContainer>
      <PopContainer>
        <PopCenter>
          <Clients
            step={step}
            setStep={setStep}
            taxPayers={taxPayers}
            setTaxPayers={setTaxPayers}
            clients={clients}
            clientName={clientName}
            setClients={setClients}
            setClientName={setClientName}
            setClientsProduct={setClientsProduct}
          />
          <BsCaretRightFill style={{ marginTop: "150px" }} />
          <Products
            step={step}
            setStep={setStep}
            clients={clients}
            productsAdded={productsAdded}
            setProductsAdded={setProductsAdded}
            clientsProduct={clientsProduct}
            setClientsProduct={setClientsProduct}
          />
          <BsCaretRightFill style={{ marginTop: "150px" }} />
          <TaxesPayment
            setResults={setResults}
            clients={clients}
            productsAdded={productsAdded}
            step={step}
            setStep={setStep}
            taxPayers={taxPayers}
            setTaxPayers={setTaxPayers}
          />
        </PopCenter>
      </PopContainer>
      <BillResults results={results} />
      <ClientsTitle>
        Para voltar para Home, clicar no logo do desafio
      </ClientsTitle>
    </RestaurantBillDivisorContainer>
  );
};
export default RestaurantBillDivisor;
