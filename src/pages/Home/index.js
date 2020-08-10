import React from 'react';

import Nav from '../../components/Nav';

import { Container, Section } from './styles';

const Home = () => {
  return (
    <Container>
      <header>
        <Nav />
      </header>

      <main>
        <Section>
          <h1>
            Venha provar do melhor bolo de pote da região!
          </h1>
          <span>
            São mais de 10 sabores com receitas secretas 
            que são de dar agua na boca!
            São mais de 10 sabores com receitas secretas 
            que são de dar agua na boca!
            São mais de 10 sabores com receitas secretas 
            que são de dar agua na boca!
          </span>
          <button>Ver Cardápio</button>
        </Section>
      </main>
    </Container>
  );
}

export default Home;