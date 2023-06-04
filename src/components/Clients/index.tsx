import {
  ClientsContainer,
  ClientsCenter,
  ClientsUpper,
  ClientsTitle,
  ClientsBottom,
} from "./styles";
import ClientName from "../ClientName";
import { Input, Button } from "../../pages/NumberToRoman/styles";
import { IClientProps } from "../../interfaces";
import { toast } from "react-toastify";

const Clients = ({
  step,
  setStep,
  setTaxPayers,
  clients,
  clientName,
  setClients,
  setClientName,
  setClientsProduct,
}: IClientProps) => {
  const addClient = () => {
    if (clients.find((c: string) => c == clientName)) {
      toast.error("Este cliente já está inscrito!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (step != 1) {
      toast.error("Você já finalizou a adição de clientes!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (clientName === "") {
      toast.error("Nome de cliente inválido!", {
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
      setClientsProduct([...clients, clientName]);
      setClients([...clients, clientName]);
      setTaxPayers([...clients, clientName]);
      setClientName("");
      toast.success("Cliente adicionado!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  const endAddClients = () => {
    if (clients.length === 0) {
      toast.warning("Adicione pelo menos um cliente para finalizar!", {
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
      toast.success("Adição de clientes finalizada!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setStep(2);
    }
  };
  return (
    <ClientsContainer>
      <ClientsCenter>
        <ClientsUpper>
          <ClientsTitle>Clientes</ClientsTitle>
          <Input
            type="text"
            placeholder="ex: Pedro"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
          />
          <Button style={{ width: "100%" }} onClick={() => addClient()}>
            Adicionar
          </Button>
        </ClientsUpper>
        <ClientsBottom>
          {clients.map((name: string, index: number) => {
            return (
              <ClientName
                step={step}
                key={index}
                name={name}
                setClients={setClients}
                clients={clients}
              />
            );
          })}
        </ClientsBottom>
        <Button style={{ width: "100%" }} onClick={() => endAddClients()}>
          Finalizar
        </Button>
      </ClientsCenter>
    </ClientsContainer>
  );
};
export default Clients;
