import React, { useState } from 'react';

import { Base } from './baseStyles';
import logo from '../logo.png';
import Search from '../components/Search';
function Home() {
  return (
    <>
      <Base>
        <img src={logo} alt="logo" height="150px" />
        <h1>Search of Bands</h1>
        <p>Sua banda preferida a um click!</p>
        <Search />
      </Base>
    </>
  );
}

export default Home;
