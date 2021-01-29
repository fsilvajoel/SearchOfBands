import React from 'react';
import { useForm } from 'react-hook-form';
// import Button from '../components/Button';
import logo from './logo.png';
import { Container } from './styles';
function Home() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Container>
      <img src={logo} alt="logo" />
      <h1>Página em construção!</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="search" placeholder="pesquise a banda" ref={register} />
        <button type="submit">Pesquisar</button>
      </form>
    </Container>
  );
}

export default Home;
