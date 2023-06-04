export interface IProductAddedProps {
  name: string;
  price: number | string;
  consumers: string;
}

export interface IBillResults {
  name: string;
  pay: number;
}

export interface IBillResultsProps {
  results: IBillResults[];
}
export interface IClientNameProps {
  step: number;
  name: string;
  clients: string[];
  setClients: React.Dispatch<React.SetStateAction<string[]>>;
}

export interface IClientNameSmallerProps {
  step: number;
  name: string;
  clientsProduct: string[];
  setClientsProduct: React.Dispatch<React.SetStateAction<string[]>>;
}

export interface IClientNameTaxProps {
  step: number;
  taxPayers: string[];
  setTaxPayers: React.Dispatch<React.SetStateAction<string[]>>;
  name: string;
}

export interface IClientProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  taxPayers: string[];
  setTaxPayers: React.Dispatch<React.SetStateAction<string[]>>;
  clients: string[];
  clientName: string;
  setClients: React.Dispatch<React.SetStateAction<string[]>>;
  setClientName: React.Dispatch<React.SetStateAction<string>>;
  setClientsProduct: React.Dispatch<React.SetStateAction<string[]>>;
}

export interface IProductAddedProps {
  name: string;
  price: number | string;
  consumers: string;
}

export interface IProductsProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  step: number;
  clients: string[];
  clientsProduct: string[];
  setClientsProduct: React.Dispatch<React.SetStateAction<string[]>>;
  productsAdded: IProductAddedProps[];
  setProductsAdded: React.Dispatch<React.SetStateAction<IProductAddedProps[]>>;
}

export interface IAux {
  name: string;
  pay: number;
}

export interface ITaxPaymentProps {
  setResults: React.Dispatch<React.SetStateAction<IAux[]>>;
  clients: string[];
  setStep: React.Dispatch<React.SetStateAction<number>>;
  productsAdded: IProductAddedProps[];
  step: number;
  taxPayers: string[];
  setTaxPayers: React.Dispatch<React.SetStateAction<string[]>>;
}
