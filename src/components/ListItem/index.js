import React from 'react';
import Link from 'next/link';
import { formatAsCurrency } from '../../utils/helpers';
import Image from 'next/image';
import Shipping from '../../../assets/img/ic_shipping.png';
import {
  Card,
  ImageWrapper,
  PriceWrapper,
  CardContent,
  CartTitle,
  Badge,
} from './styled';

export const ListItem = ({
  id,
  title,
  price,
  image,
  freeShipping,
  condition,
}) => {
  return (
    <Card>
      <ImageWrapper>
        <Link
          href={{
            pathname: '/items/[id]',
            query: { id },
          }}
        >
          <a>
            <Image
              src={image}
              width={160}
              height={160}
              alt='Image Product'
              style={{ objectFit: 'contain', width: '100%' }}
            />
          </a>
        </Link>
      </ImageWrapper>
      <CardContent>
        <CartTitle>
          <Link
            href={{
              pathname: '/items/[id]',
              query: { id },
            }}
          >
            {title}
          </Link>
        </CartTitle>
        <PriceWrapper>
          <p>$ {formatAsCurrency(price)}</p>
          <span>
            {freeShipping && <Image src={Shipping} alt='Free Shipping' />}
          </span>
        </PriceWrapper>
        {condition === 'new' && <Badge>{condition}</Badge>}
      </CardContent>
    </Card>
  );
};
