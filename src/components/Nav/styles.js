import styled from 'styled-components';

export const NavBar = styled.div`
  width: 100%;
  height: 5rem;
  position: absolute;
  top: 3.4rem;
  background: #f9f0e1;

  & > div {
    width: 100%;
    height: 100%;
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 100%;
      max-width: 15.4rem;
      border-radius: 50%;
      cursor: pointer;
    }

    ul {
      width: 20.4rem;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      list-style: none;

    }
  }

  @media (max-width: 768px) {
    & > div {
      img {
        max-width: 10.4rem;
      }
    }
  }
`;
