import React from 'react';
import { boloDePote } from '../../Data/Cardapio';
import { bairroDeEntrega } from '../../Data/BairrosDeEntrega';

import { 
  FiInstagram, 
  FiMessageSquare, 
  FiFacebook, 
  FiLogIn 
} from 'react-icons/fi';
import Nav from '../../components/Nav';

import { Container, Section, Footer } from './styles';

import imgChef from '../../assets/Images/chef.png';
import whatsappIcon from '../../assets/Images/whatsapp.svg';
import imgProfile from '../../assets/Images/profile.jpeg';

const Home = () => {
  return (
    <Container>
      <header>
        <Nav />
      </header>

      <main>
        <Section>
          <h1>
            Venha se deliciar com as nossas receitas deliciosas e originais de bolo no pote.
          </h1>
          <span>
            Temos disponíveis 4 sabores, em breve haverão muito mais!
          </span>
          <button>Ver Cardápio</button>
        </Section>

        <Section id="clear">
          <div className="content">
            <h1>Bairros de entrega</h1>

            <ul className="bairros">
              {bairroDeEntrega.map(bairro => (
                <>
                  <div className="barra" />
                  <li>{bairro.name}</li>
                </>
              ))}
            </ul>
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
          <h1>Quem Somos</h1>
          <h3>
              Somos uma Ghost Kitchen originária do bairro Recanto Verde do Sol.
            Iniciamos no ramo da alimentação a exatos 18 anos. Um empreendimento pouco acreditado, repleto de adversidades. Porém, crescemos! <br />
            Hoje atendemos no centro de São Paulo e ampliamos nossa área de alcance. Fato este dado por meio do lançamento de uma nova linha de bolos no pote gourmetizados, deliciosos e originais!
          </h3>
          <img src={imgProfile} alt="Igor Galdino"/>
          <h2>Igor Galdino</h2>
          <span>CEO at Mgateau</span>
        </Section>
      </main>

      <a class="contato-whats" href="https://wa.me/message/MSYV2JMNBOQPF1">
        <img src={whatsappIcon} alt="" />
      </a>

      <Footer>
        <div className="content">
          <div className="rede-social">
            <h2>Redes Sociais</h2>
            <a href="#">
              <FiFacebook size={30}/>
            </a>
            <a href="#">
              <FiInstagram size={30}/>
            </a>
            <a href="#">
              <FiMessageSquare size={30}/>
            </a>
          </div>
          <div className="email-contato">
            <FiLogIn size={30}/> 
            <a href="mailto:contato@mgateau.com.br">
              contato@mgateau.com.br
            </a>
          </div>
        </div>
        <div className="rodape">
          <div className="content">
            <h3>
              Rua Dona Maria Maluf, n° 12. 08382680 - Recanto Verde do Sol - SP.
            </h3>
            <h3>
              Desenvolvido por: 
              <a target="_blank"href="https://www.instagram.com/gabbriel.js/">
                Gabbriel.js
              </a>
            </h3>
          </div>
        </div>
      </Footer>
    </Container>
  );
}

export default Home;