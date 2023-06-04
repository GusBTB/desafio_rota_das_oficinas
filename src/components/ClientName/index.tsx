import { AiOutlineClose } from "react-icons/ai";
import { Container, NameTitle } from "./styles";
import { IClientNameProps } from "../../interfaces";
import { toast } from "react-toastify";

const ClientName = ({ step, name, clients, setClients }: IClientNameProps) => {
  const removeClient = () => {
    if (step != 1) {
      toast.error("Adição de clientes já finalizada!", {
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
      setClients(clients.filter((cl: string) => cl != name));
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

export default ClientName;
