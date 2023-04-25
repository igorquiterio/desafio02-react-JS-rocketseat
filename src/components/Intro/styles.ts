import styled from 'styled-components';
import BackgroundImg from '../../assets/BackgroundIntro.svg';

export const IntroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${BackgroundImg});
`;

export const TextContainer = styled.div`
  grid-area: text;
`;

export const IconsContainer = styled.div`
  grid-area: icons;
`;

export const ImageContainer = styled.div`
  grid-area: images;
`;

export const Grid = styled.div`
  padding: 5.875rem 10rem;
  max-width: 90rem;
  display: grid;
  grid-gap: 3.5rem 4.125rem;
  grid-template-areas:
    'text images'
    'icons images';
`;

export const Title = styled.h1`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 800;
  font-size: 3rem;
  color: ${(props) => props.theme['title']};
`;

export const Subtitle = styled.h2`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
`;
