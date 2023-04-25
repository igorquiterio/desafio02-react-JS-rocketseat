import {
  IconsContainer,
  ImageContainer,
  IntroContainer,
  TextContainer,
  Grid,
  Title,
  Subtitle,
} from './styles';

import Coffee from '../../assets/Coffee.svg';

export function Intro() {
  return (
    <IntroContainer>
      <Grid>
        <TextContainer>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>
          <Subtitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </Subtitle>
        </TextContainer>
        <ImageContainer>
          <img src={Coffee} alt='copo de café com a logo' />
        </ImageContainer>
        <IconsContainer>icons</IconsContainer>
      </Grid>
    </IntroContainer>
  );
}
