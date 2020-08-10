import styled from 'styled-components';

import imgBanner from '../../assets/Images/banner.jpg';


export const Container = styled.div`
  width: 100%;

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
  }
`;

export const Section = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 3.4rem auto;
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




