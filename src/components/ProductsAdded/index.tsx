import {
  ConsumerName,
  ConsumersDiv,
  ProductName,
  ProductNameDiv,
  ProductPrice,
  ProductsAddedContainer,
} from "./styles";
import { IProductAddedProps } from "../../interfaces";

const ProductsAdded = ({ name, price, consumers }: IProductAddedProps) => {
  return (
    <ProductsAddedContainer>
      <ProductNameDiv>
        <ProductName>{name}</ProductName>
      </ProductNameDiv>
      <ProductPrice>
        {price.toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
          style: "currency",
          currency: "BRL",
        })}
      </ProductPrice>
      <ConsumersDiv>
        <ConsumerName>{consumers}</ConsumerName>
      </ConsumersDiv>
    </ProductsAddedContainer>
  );
};

export default ProductsAdded;
