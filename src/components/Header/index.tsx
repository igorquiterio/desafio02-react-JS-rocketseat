import {
  Actions,
  CartButton,
  City,
  CityButton,
  HeaderContainer,
} from './styles';
import { ShoppingCart, MapPin } from 'phosphor-react';

import Logo from '../../assets/Logo.svg';

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt='copo de café com foguete voando dentro' />

      <Actions>
        <CityButton>
          <MapPin size={22} weight='fill' />
          <City>Porto Alegre, RS</City>
        </CityButton>
        <CartButton>
          <ShoppingCart size={22} weight='fill' />
        </CartButton>
      </Actions>
    </HeaderContainer>
  );
}
