import React from 'react';
import styled from 'styled-components';
// import logo from '../../logo.png';
export const Container = styled.header`
  position: fixed;
  top: 0;
  color: #282c34;
  background-color: #c93939;
  margin: 1px;
  border-radius: 5px;
  border-bottom: red;
  width: 100vw;
  height: 80px;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

function Menu() {
  return (
    <Container>
      {/* <img src={logo} alt="logo" /> */}
      {/* <input name="search" placeholder="pesquise a banda" /> */}
      <img>Oi sou o menu</img>
    </Container>
  );
}

export default Menu;
