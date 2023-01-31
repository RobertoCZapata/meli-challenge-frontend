import React from 'react';
import Image from 'next/image';
import { formatAsCurrency } from '../../utils/helpers';
import {
  DescriptionWrapper,
  DescriptionImageWrapper,
  DescriptionDetailWrapper,
  Button,
  DescriptionTextWrapper,
} from './styled';
import PropTypes from 'prop-types';

export const ItemDescription = ({
  sold_quantity,
  title,
  image,
  description,
  price,
  condition,
}) => {
  return (
    <>
      <DescriptionWrapper>
        <DescriptionImageWrapper>
          {image && (
            <div>
              <Image
                src={image}
                width={200}
                height={200}
                alt='Image Detail'
                style={{ objectFit: 'contain', width: '100%' }}
              />
            </div>
          )}
        </DescriptionImageWrapper>
        <DescriptionDetailWrapper>
          <span className='subtitle'>
            {condition} | {sold_quantity} vendidos
          </span>
          <h2 className='title'>{title}</h2>
          <span className='price'>
            {' '}
            $ {price?.amount && formatAsCurrency(price?.amount)}
          </span>
          <div>
            <Button>Comprar</Button>
          </div>
        </DescriptionDetailWrapper>
        <DescriptionTextWrapper>
          <h2>Descripcion del producto</h2>
          <p>{description}</p>
        </DescriptionTextWrapper>
      </DescriptionWrapper>
    </>
  );
};

ItemDescription.propTypes = {
  sold_quantity: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.shape({
    amount: PropTypes.number,
  }),
  condition: PropTypes.string.isRequired,
};