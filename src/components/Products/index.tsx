import {
  ProductsContainer,
  ProductsCenter,
  ProductsUpper,
  ProductsUpperLeft,
  ProductsUpperLeftUpper,
  InputProducts,
  InputProductsPrice,
  ProductsUpperRight,
  ProductsUpperRightBottom,
  ProductsBottom,
  ProductsBottomCenter,
} from "./styles";
import { ClientsTitle } from "../Clients/styles";
import { Button } from "../../pages/NumberToRoman/styles";
import ClientNameSmaller from "../ClientNameSmaller";
import { useState } from "react";
import ProductsAdded from "../ProductsAdded";
import { IProductsProps } from "../../interfaces";
import { toast } from "react-toastify";

const Products = ({
  step,
  setStep,
  clients,
  clientsProduct,
  setClientsProduct,
  productsAdded,
  setProductsAdded,
}: IProductsProps) => {
  const [productName, setProductName] = useState<string>("");
  const [productPrice, setProductPrice] = useState<number | string>("");

  const addProduct = () => {
    if (step === 1) {
      toast.error("Finalize a adição de clientes!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (productName == "" || productPrice == "") {
      toast.error("Nome de produto e preço inválidos", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (step === 3) {
      toast.error("Você já finalizou a adição de produtos", {
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
      if (clientsProduct.length === 0) {
        toast.warning("Produto tem que ter pelo menos um cliente associado", {
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
        let consumers = "";
        clientsProduct.forEach((client, index) => {
          if (clientsProduct.length === 1) {
            consumers += `${client}`;
          } else {
            if (index == clientsProduct.length - 1) {
              consumers += ` ${client}`;
            } else if (index == 0) {
              consumers += `${client},`;
            } else {
              consumers += ` ${client},`;
            }
          }
        });
        const product = { name: productName, price: productPrice, consumers };
        setProductsAdded([...productsAdded, product]);
        setClientsProduct(clients);
        setProductName("");
        setProductPrice("");
        toast.success("Produto adicionado!", {
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
    }
  };
  const endAddProduct = () => {
    if (step === 1) {
      toast.warning("Finalize a adição de clientes para continuar", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (step === 3) {
      toast.error("Você já finalizou a adição de produtos", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (productsAdded.length === 0) {
      toast.warning("Adicione pelo menos um produto para continuar", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.success("Adição de produtos finalizada!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setStep(3);
    }
  };

  return (
    <ProductsContainer>
      <ClientsTitle>Produtos</ClientsTitle>
      <ProductsCenter>
        <ProductsUpper>
          <ProductsUpperLeft>
            <ProductsUpperLeftUpper>
              <InputProducts
                type="text"
                placeholder="ex: Suco"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
              <InputProductsPrice
                type="number"
                placeholder="ex: 10"
                value={productPrice}
                onChange={(e) => setProductPrice(Number(e.target.value))}
              />
            </ProductsUpperLeftUpper>
            <Button style={{ width: "100%" }} onClick={() => addProduct()}>
              Adicionar
            </Button>
          </ProductsUpperLeft>
          <ProductsUpperRight>
            Quem consumiu?
            <ProductsUpperRightBottom>
              {clientsProduct.map((name: string, index: number) => {
                return (
                  <ClientNameSmaller
                    step={step}
                    key={index}
                    name={name}
                    setClientsProduct={setClientsProduct}
                    clientsProduct={clientsProduct}
                  />
                );
              })}
            </ProductsUpperRightBottom>
          </ProductsUpperRight>
        </ProductsUpper>
        <ProductsBottom>
          <ProductsBottomCenter>
            {productsAdded.map((product, index) => {
              return (
                <ProductsAdded
                  key={index}
                  name={product.name}
                  price={product.price}
                  consumers={product.consumers}
                />
              );
            })}
          </ProductsBottomCenter>
          <Button style={{ width: "100%" }} onClick={() => endAddProduct()}>
            Finalizar
          </Button>
        </ProductsBottom>
      </ProductsCenter>
    </ProductsContainer>
  );
};

export default Products;
