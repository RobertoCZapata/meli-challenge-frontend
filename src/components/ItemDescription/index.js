import React from "react";
import Image from "next/image";
import { formatAsCurrency } from "../../utils/helpers";

export const ItemDescription = ({
  sold_quantity,
  title,
  image,
  description,
  price,
}) => {
  return (
    <div className="detail">
      <div className="detail__container">
        <div className="detail__image">
          {image && (
            <Image src={image} width={200} height={200} alt="Image Detail" />
          )}
        </div>
        <div className="detail__header">
          <div className="detail__subtitle">
            <span>Nuevo | {sold_quantity} vendidos</span>
          </div>
          <div className="detail__titleContainer">
            <p>{title}</p>
          </div>
          <div className="detail__price">
            <span> $ {formatAsCurrency(price)}</span>
          </div>
          <div className="detail__actions">
            <button className="detail__buttons">Comprar</button>
          </div>
        </div>
      </div>
      <div className="detail__description">
        <h2 className="detail__descriptionTitle">Descripcion del producto</h2>
        <p className="detail__descriptionText">{description}</p>
      </div>
    </div>
  );
};
