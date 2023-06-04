import { AiOutlineClose } from "react-icons/ai";
import { Container, NameTitle } from "./styles";
import { IClientNameTaxProps } from "../../interfaces";
import { toast } from "react-toastify";

const ClientNameTax = ({
  name,
  taxPayers,
  setTaxPayers,
  step,
}: IClientNameTaxProps) => {
  const removeClient = () => {
    if (step === 4) {
      toast.error("Pagamento finalizado, resultado gerado!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (step === 1 || step === 2) {
      toast.error("Finalize a adição de clientes e de produtos", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      setTaxPayers(taxPayers.filter((cl: string) => cl != name));
    }
  };

  return (
    <Container>
      <NameTitle>{name}</NameTitle>
      <AiOutlineClose
        style={{ cursor: "pointer" }}
        onClick={() => removeClient()}
      />
    </Container>
  );
};

export default ClientNameTax;
