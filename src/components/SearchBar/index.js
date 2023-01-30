import React, { useState } from 'react';
import { MdOutlineSearch } from 'react-icons/md';
import { Button, SearchWrapper, SearchInput, LogoWrapper } from './styled';

import Image from 'next/image';
import logoMeli from '../../../assets/img/Logo_ML.png';
import { useAppContext } from '../../context/AppContext';

export const SearchBar = () => {
  const [query, setQuery] = useState();
  const { getItems } = useAppContext();

  const handleSearchClick = () => {
    getItems(query);
  };

  const handleChange = (element) => {
    setQuery(element.target.value);
  };

  return (
    <SearchWrapper>
      <LogoWrapper>
        <Image src={logoMeli} alt='LOGO' />
      </LogoWrapper>
      <SearchInput
        type='text'
        name='search'
        data-testid='search-bar'
        placeholder='Buscar productos, marcas y mas'
        onChange={handleChange}
      />
      <Button onClick={handleSearchClick}>
        <MdOutlineSearch size={22} />
      </Button>
    </SearchWrapper>
  );
};
