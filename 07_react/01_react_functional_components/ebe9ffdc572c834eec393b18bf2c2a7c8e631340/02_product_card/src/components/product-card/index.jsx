import React from "react";
import CardHeader from "./header";
import Cardbody from "./body";
import Cardfooter from "./footer";

const ProductCard = ({ product }) => {
  return (
    <div>
      <CardHeader name={product.name}></CardHeader>
      <Cardbody></Cardbody>
      <Cardfooter></Cardfooter>
    </div>
  );
};

export default ProductCard;
