import React from 'react';
import { useForm } from 'react-hook-form';
import { useSearch } from '../../context/youTubeContext';

import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Container } from './styles';

function Search() {
  const { updateData } = useSearch();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    updateData(data.search);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <input name="search" placeholder="Pesquise a banda" ref={register} />
        <Button type="submit">
          <SearchIcon />
        </Button>
      </Container>
    </form>
  );
}

export default Search;
