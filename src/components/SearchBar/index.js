import React from "react";
import { Input, Button } from "reactstrap";
import Link from "next/link";

import Image from "next/image";
import searchIcon from "../../../assets/img/ic_Search.png";
import logoMeli from "../../../assets/img/Logo_ML.png";

export const SearchBar = ({ handleSearchClick, handleChange }) => (
  <div className="navContainer">
    <div className="navContainer__logo">
      <Link href="/">
        <a>
          <Image src={logoMeli} alt="LOGO" />
        </a>
      </Link>
    </div>

    <Input
      className="navContainer__search"
      name="search"
      placeholder="Nunca dejes de buscar"
      onChange={handleChange}
    />
    <Button onClick={handleSearchClick} className="navContainer__button">
      <Image src={searchIcon} alt="SEARCH_ICON" />
    </Button>
  </div>
);
