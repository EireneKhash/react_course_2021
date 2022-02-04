import React, { useState } from "react";
import ProductCount from "./ProductCount";

type ProductCounterPropsType = {
  productName: string; // обязательное свойство
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const ProductCounter: React.FC<ProductCounterPropsType> = (props) => {
  // const { productName } = props; //деструктуризация, создаём переменные по ключу
  const { productName, count, setCount } = props;

  const addHandler = (e: React.MouseEvent) => {
    console.log(e.target);
    setCount((prev) => prev + 1);
  };

  const deleteHandler = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div className="product_counter">
      <h1>{productName}</h1>
      <ProductCount count={count} />
      <button onClick={addHandler} type="button">
        ДОБАВИТЬ
      </button>
      <button onClick={deleteHandler} type="button">
        УБАВИТЬ
      </button>
    </div>
  );
};

export default ProductCounter;
