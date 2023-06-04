import { AiOutlineClose } from "react-icons/ai";
import { Container, NameTitle } from "./styles";
import { IClientNameSmallerProps } from "../../interfaces";
import { toast } from "react-toastify";

const ClientNameSmaller = ({
  step,
  name,
  clientsProduct,
  setClientsProduct,
}: IClientNameSmallerProps) => {
  const removeClient = () => {
    if (step != 2) {
      toast.error("Finalize a adição de clientes", {
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
      setClientsProduct(clientsProduct.filter((cl: string) => cl != name));
    }
  };

  return (
    <Container>
      <NameTitle>{name}</NameTitle>
      <AiOutlineClose
        style={{ cursor: "pointer", fontSize: "10px" }}
        onClick={() => removeClient()}
      />
    </Container>
  );
};

export default ClientNameSmaller;
