import { Button } from "../../pages/NumberToRoman/styles";
import ClientNameTax from "../ClientNameTax";
import { ClientsTitle } from "../Clients/styles";
import { Center, TaxesPaymentContainer } from "./styles";
import { ITaxPaymentProps, IAux } from "../../interfaces";
import { toast } from "react-toastify";

const TaxesPayment = ({
  setResults,
  clients,
  productsAdded,
  step,
  setStep,
  taxPayers,
  setTaxPayers,
}: ITaxPaymentProps) => {
  const endTaxPayement = () => {
    if (step != 3) {
      toast.warning(
        "Finalize a adição de clientes e a de produtos para calcular",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    } else if (taxPayers.length === 0) {
      toast.warning(
        "Os 10% tem que estar associado a pelo menos um cliente para calcular",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    } else {
      // eslint-disable-next-line prefer-const
      let aux: IAux[] = [];

      clients.forEach((cl) => aux.push({ name: cl, pay: 0 }));

      clients.forEach((cl, index) => {
        productsAdded.forEach((pr) => {
          const consArr = pr.consumers.split(", ");
          const pricePerClient = Number(pr.price) / consArr.length;
          if (consArr.find((e) => e === cl)) {
            aux[index].pay += pricePerClient;
          }
        });
      });

      taxPayers.forEach((cl) => {
        let index: number;
        aux.forEach((e, idx) => {
          if (e.name === cl) {
            index = idx;
            return;
          }
        });
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        aux[index!].pay *= 1.1;
      });

      setStep(4);
      setResults(aux);
    }
  };
  return (
    <TaxesPaymentContainer>
      <ClientsTitle>Quem pagará os 10%?</ClientsTitle>
      <Center>
        {taxPayers.map((name: string, index: number) => {
          return (
            <ClientNameTax
              step={step}
              key={index}
              name={name}
              taxPayers={taxPayers}
              setTaxPayers={setTaxPayers}
            />
          );
        })}
      </Center>
      <Button onClick={() => endTaxPayement()}>Finalizar</Button>
    </TaxesPaymentContainer>
  );
};
export default TaxesPayment;
