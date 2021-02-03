import React from 'react';
import styled from 'styled-components';
import logo from '../../logo.png';
import SearchIcon from '@material-ui/icons/Search';

export const Container = styled.header`
  position: fixed;
  z-index: 2;
  display: flex;
  flex-direction: row;
  top: 0;
  color: #282c34;
  background-color: #c93939;
  border-radius: 5px;
  border-bottom: red;
  width: 100vw;
  height: 80px;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  align-items: center;
  justify-content: space-between;
  .searchMenu {
    align-items: center;
    input {
      height: 23px;
      width: 25vw;
      padding: 5px;
      border: 1px solid gray;
      border-radius: 5px 0 0 5px;
    }
    button {
      height: 35px;
      width: 60px;
      padding: 5px;
      border: 1px solid gray;
      border-radius: 0 5px 5px 0;
    }
  }
  img {
    height: 35px;
    padding: 30px;
  }
  p {
    font-size: 15px;
    color: #fff;
    padding-right: 30px;
  }
`;

function Menu() {
  return (
    <Container>
      <img src={logo} alt="Voltar ao Início" title="Voltar ao Início" />
      <div className="searchMenu">
        <input name="search" placeholder="pesquise a banda" />
        <button>
          <SearchIcon />
        </button>
      </div>
      <p>jfilva@inf.ufsm.br</p>
    </Container>
  );
}

export default Menu;
