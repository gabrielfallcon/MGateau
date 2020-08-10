import React from 'react';
import { boloDePote } from '../../Data/Cardapio';

import Nav from '../../components/Nav';

import { Container, Section } from './styles';

import imgChef from '../../assets/Images/chef.png';
import whatsappIcon from '../../assets/Images/whatsapp.svg';
import imgProfile from '../../assets/Images/profile.jpeg';

const Home = () => {

  const text = 'Olá dei uma olhada aqui no site e estou interessado em um bolo de pode 😋😀';
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

        <Section id="clear">
          <div className="content">
            <h1>Quem Somos</h1>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis magnam enim eius tempora dolor quod. Repellat iusto magnam nihil, aliquam aut dolore repellendus cum molestiae autem porro, error, similique beatae.
            </span>
          </div>
        </Section>

        <Section id="cardapio">
          <div className="barra" />
          <h1>Cardápio</h1>
          <h2>Bolo de pote</h2>
          <div className="cardapio-content">
            <ul>
              {boloDePote.map(bolo => {
                return (
                  <li key={bolo.title}>
                    <h3> {bolo.title} <span> R$ {bolo.price} </span></h3>
                    <p> {bolo.description} </p>
                  </li>
                )
              })}
            </ul>
            <img src={imgChef} alt="Chefe de Cozinha" />
          </div>
        </Section>

        <Section id="founder">
          <div className="barra" />
          <h1>Empresa</h1>
          <h3>
            Somos uma equipe de profissionais dedicados em entregar
            o melhor doque você pode experimentar, a sua felicidad 
            é o que nos inspira em dar o melhor de nós!
          </h3>
          <img src={imgProfile} alt="Igor Galdino"/>
          <h2>Igor Galdino</h2>
          <span>CEO at Mgateau</span>
        </Section>
      </main>

      <a href={`https://wa.me/5511953377186/?text=${text}`}>
        <img src={whatsappIcon} alt="" />
        Fazer pedido
      </a>
    </Container>
  );
}

export default Home;