import { Container } from 'components/Container/Container.styled';
import React from 'react';
import { Title } from 'styledSystem/Title';

const HomePage = () => {
  return (
    <Container>
      <Title textAlign="center" fontSize={32} pt={42}>
        Phonebook welcome page 🤗
      </Title>
    </Container>
  );
};

export default HomePage;
