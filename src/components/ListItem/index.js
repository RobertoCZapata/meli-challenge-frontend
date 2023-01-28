import React from "react";
import Link from "next/link";
import { formatAsCurrency } from "../../utils/helpers";
import Image from "next/image";
import Shipping from "../../../assets/img/ic_shipping.png";

export const ListItem = ({ id, title, price, image, location, shipping }) => {
  const handleClick = () => {
    console.log(id);
  };

  return (
    <div className="search">
      <div className="search__wrapper">
        <div className="search__image">
          <Link
            href={{
              pathname: "/items/[id]",
              query: { id },
            }}
          >
            <a>
              <Image
                src={image}
                width={160}
                height={160}
                alt="Image Product"
                style={{ cursor: "pointer" }}
              />
            </a>
          </Link>
        </div>
        <div className="search__contentWrapper">
          <p className="search__itemPrice">
            $ {formatAsCurrency(price)}
            <span className="search__shipping">
              {shipping && <Image src={Shipping} alt="Free Shipping" />}
            </span>
          </p>
          <p className="search__itemTitle">{title}</p>
          <p className="search__desktopLocation">{location}</p>
        </div>
        <div className="search__locationWrapper">
          <p className="search__locationTitle">{location}</p>
        </div>
      </div>
    </div>
  );
};
