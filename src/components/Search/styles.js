import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30vw;
  border-radius: 8px;
  padding: 3px;
  input {
    padding: 5px 5px 5px 20px;
    border: none;
    border-bottom: 1px solid;
    border-radius: 0;
    width: 80%;
    ::placeholder {
      color: #282c34;
    }
  }
`;
