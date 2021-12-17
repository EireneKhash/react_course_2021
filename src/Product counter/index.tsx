import React from "react";

type ProductCounterPropsType = {
  product: {
    productName: string; // обязательное свойство
    count?: number;
  };
}; // объект

const ProductCounter: React.FC<ProductCounterPropsType> = (props) => {
  // const { productName } = props; //деструктуризация, создаём переменные по ключу
  const {
    product: { productName, count = "Нет информации" },
  } = props;

  return (
    <div className="product_counter">
      <h1>{productName}</h1>
      <span>{count || "NO VALUE"}</span>
    </div>
  );
};

export default ProductCounter;
