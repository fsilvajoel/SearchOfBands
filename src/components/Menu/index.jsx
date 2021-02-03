import React from 'react';
import styled from 'styled-components';
import logo from '../../logo.png';
import Search from '../Search';
import GitHubIcon from '@material-ui/icons/GitHub';

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
  a {
    text-decoration: none;
    font-size: 15px;
    color: #fff;
    padding-right: 30px;
  }
`;

function Menu() {
  return (
    <Container>
      <a href="/">
        <img src={logo} alt="Voltar ao Início" title="Voltar ao Início" />
      </a>
      <Search />
      <a target="blank" href="https://github.com/fsilvajoel">
        <GitHubIcon />
        <label>Projeto</label>
      </a>
    </Container>
  );
}

export default Menu;
