import styled from 'styled-components';

export const HeaderContainer = styled.header`
  padding: 2rem 10rem;
  display: flex;
  justify-content: space-between;

  height: 6.5rem;
`;

export const Actions = styled.nav`
  height: 2.375rem;

  display: flex;
  flex-direction: row;
  flex-direction: flex-end;
  gap: 0.75rem;
`;

export const CityButton = styled.button`
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple']};
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
`;

export const City = styled.span`
  color: ${(props) => props.theme['purple-dark']};
  font-size: 0.875rem;
  line-height: 130%;
`;

export const CartButton = styled.button`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  padding: 0.5rem;
`;
