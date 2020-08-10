import styled from 'styled-components';

import imgBanner from '../../assets/Images/banner.jpg';


export const Container = styled.div`
  width: 100%;
  color: #272725;
  position: relative;

  .contato-whats {
    position: fixed;
    right: 2.1rem;
    bottom: 1.8rem;
    width: 200px;
    height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;
    background: #04d361;
    padding: 0 20px;
    border-radius: 40px;
    color: #FFF;
    text-decoration: none;

    img {
      width: 30px;
    }
  }

  header {
    width: 100%;
    min-height: 70vh;
    position: relative;
    
    background-image: url(${imgBanner});
    background-position: center;
    background-size: cover;
  }
  main {
    width: 100%;
    
    #clear {
      max-width: 100%;
      background: #f9f0e1;
      

      .content {
        max-width: 1120px;
        height: 450px;
        margin: 0 auto;
        padding: 0 20px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        h1 {
          margin-top: 4.4rem;
        }
        span {
          font-size: 1.2rem;
          line-height: 2.2rem;
        }
      }
    }

    #cardapio {
      position: relative;
   
      
      .barra {
        width: 80%;
        border: 1px dashed #f9f0e1;
      }
      h1 {
        position: absolute;
        top: -3.3rem;
        padding: 0 2rem;
        background: #b0998d;
      }
      h2 {
        margin-top: 6.4rem;
        text-align: flex-start;
        align-self: flex-start;
      }
      .cardapio-content {
        width: 100%;
        display: flex;
        justify-content: space-between;

        ul {
          list-style: none;
          align-self: flex-start;

          li {
            & + li {
              margin-top: 1.4rem;
              padding-top: 1.4rem;
              border-top: 1px dashed #f9f0e1;
            }

            h3 {
              color: #f9f0e1;
              span {
                margin-left: 2.4rem;
              }
            }
          }
        }

        img {
          width: 100%;
          max-width: 350px;
          margin-right: 80px;
        }
      }
    }

    #founder {
      max-width: 100%;
      background: #f9f0e1;
      position: relative;
      padding: 3.5rem 0;

      .barra {
        width: 50%;
        border: 1px dashed #272725;
      }

      h1 {
        color: #272725;
        position: absolute;
        top: -0.1rem;
        padding: 0 2rem;
        background: #f9f0e1;
      }
      h3 {
        margin-top: 4.4rem;
        width: 100%;
        max-width: 650px;
        text-align: center;
        font-size: 1.2rem;
        line-height: 2.2rem;
        font-weight: 400;
        color: #b0998d;
      }
      img {
        width: 100%;
        max-width: 350px;
        margin-top: 2.4rem;
        border-radius: 50%;
      }
      h2 {
        font-size: 1.8rem;
        letter-spacing: 1px;
        background: -webkit-linear-gradient(#b0998d, #272725);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      span {
        font-size: 1rem;
      }
    }
  }

  @media (max-width: 768px) {
    main {
      #clear {
        border-top-right-radius: 80%;
        border-bottom-right-radius: 800%;
      }
      #cardapio {
        h1 {
          width: auto;
        }
        h2 {
          margin-left: 30px;
        }
        .barra {
          width: 100%;
        }
        .cardapio-content {
          ul {
            width: 100%;
            max-width: calc(100% - 30px);
          }
          img {
            display: none;
          }
        }
      }
      #founder {
        .barra {
          width: 100%;
        }
        h1 {
          padding: 0;
          width: 15rem;
        }
        h3 {
          width: 90%;
        }
        img {
          max-width: 300px;
        }
      }
    }
    .contato-whats {
      right: 0.1rem;
      bottom: 0.8rem;
      width: 160px;
      font-size: 1rem;
      padding: 0 16px;
      
    }
  }
`;

export const Section = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 3.4rem auto;
  background: #b0998d;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 2.1rem;
    color: #272725;
  }
  span {
    font-size: 1.0rem;
    line-height: 2.0rem;
    font-family: 'Comfortaa', cursive;
    text-align: center;
    margin-bottom: 2.6rem;
  }
  button {
    width: 22.4rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    font-weight: 600;
    border-radius: 2.8rem;
    color: #b0998d;
    background: #fff;
  }
  
  @media (max-width: 768px) {
    h1 {
      width: 90%;
      max-width: 450px;
      text-align: center;
    }
    span {
      width: 90%;
      max-width: 420px;
    }
    button {
      max-width: 90%;
    }
  }
`;

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: -webkit-linear-gradient(#b0998d, #f9f0e1);
  

  .content {
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .rede-social {
      a {
        color: #272725;
        transition: color .6s;

        & + a {
          margin-left: 20px;
        }
        &:hover {
          color: #f9f0e1;
        }
      }
    }
    .email-contato {
      display: flex;
      align-items: center;

      svg {
        margin-right: 20px;
        color: #f9f0e1;
      }
      a {
        text-decoration: none;
        color: #f9f0e1;
        font-size: 1.2rem;
      }
    }
  }
  .rodape {
    width: 100%;
    margin-top: 1.4rem;
    padding-top: 1rem;
    border-top: 2px solid #272725;

    .content {
      width: 100%;
      display: flex;
      justify-content: space-between;

      h3 {
        font-size: 1rem;
        font-weight: 400;

        a {
          margin-left: 10px;
          font-size: 1.4rem;
          font-weight: 600;
          color: #272725;
          text-decoration: none;
          font-family: 'Comfortaa', cursive;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .content {
      flex-direction: column;

      .email-contato {
        margin: 2.4rem 0;
      }
    }
    .rodape {
      .content {
        margin-bottom: 80px;

        h3 {
          width: 300px;
          font-size: 0.9rem;
          text-align: center;
        }
      }
    }
  }
`;



