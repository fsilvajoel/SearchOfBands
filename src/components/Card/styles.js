import styled from 'styled-components';

export const Container = styled.div`
  color: #282c34;
  background-color: #ffffff;
  height: 700px;
  margin: 20px;
  border: 1px solid red;
  border-radius: 5px;
  width: 20vw;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  img {
    height: 360px;
    /* width: 480px; */
    width: 100%;
  }
  .media-resources {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    font-size: 14px;
  }
  @media (max-width: 800px) {
    width: 95vw;
    flex-direction: column;
    p {
      padding-bottom: 5px;
    }
    .media-resources {
      flex-direction: column;
      align-items: center;
    }
  }
`;
export const Title = styled.h1`
  font-size: 20px;
`;
export const Description = styled.p`
  font-size: 14px;
`;
export const Item = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 20px;
  svg {
    padding: 0;
  }
`;
