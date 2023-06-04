import { useState } from "react";
import {
  AnsTitle,
  Button,
  Input,
  NumberToRomanContainer,
  PopCenter,
  PopContainer,
  PopTitle,
  PopUpper,
} from "./styles";
import { ClientsTitle } from "../../components/Clients/styles";
import { toast } from "react-toastify";

const NumberToRoman = () => {
  const [input, setInput] = useState<number | string>("");
  const [output, setOutput] = useState<string>("");

  const converter = (n?: number) => {
    if (n == null) {
      n = 0;
    }
    const numbers: number[] = [
      1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000,
    ];
    const symbols: string[] = [
      "I",
      "IV",
      "V",
      "IX",
      "X",
      "XL",
      "L",
      "XC",
      "C",
      "CD",
      "D",
      "CM",
      "M",
    ];
    let returnStr = "";
    let i = 12;

    while (n) {
      let div: number = Math.floor(n / numbers[i]);
      n = n % numbers[i];
      while (div) {
        returnStr += symbols[i];
        div--;
      }
      i--;
    }
    toast.success("Resultado gerado!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setOutput(returnStr);
  };

  return (
    <NumberToRomanContainer>
      <PopContainer>
        <PopCenter>
          <PopUpper>
            <PopTitle>
              Digite um número para converter para algarismos romanos
            </PopTitle>
            <Input
              value={input}
              type="number"
              placeholder="Exemplo: 15"
              onChange={(e) => setInput(Number(e.target.value))}
            />
            <Button onClick={() => converter(Number(input))}>Converter</Button>
          </PopUpper>
          <PopUpper>
            <AnsTitle>{output}</AnsTitle>
          </PopUpper>
        </PopCenter>
      </PopContainer>
      <ClientsTitle>
        Para voltar para Home, clicar no logo do desafio
      </ClientsTitle>
    </NumberToRomanContainer>
  );
};
export default NumberToRoman;
