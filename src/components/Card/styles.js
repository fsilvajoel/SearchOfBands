import styled from 'styled-components';

export const Container = styled.div`
  color: #282c34;
  background-color: #ffffff;
  height: 600px;
  margin: 20px;
  border: 1px solid red;
  border-radius: 5px;
  width: 20vw;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-size: 16px;
  img {
    width: 100%;
  }
  .media-resources {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: #eeeeee;
    font-weight: 600;
    height: 50px;
    color: #f50057;
    svg {
      height: 20px;
      padding: 2px;
    }
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
      height: 100px;
    }
  }
`;
export const Title = styled.h1`
  text-align: center;
  height: 95px;
  font-size: 20px;
  padding: 4px;
`;
export const Description = styled.p`
  font-size: 12px;
  font-weight: 500;
`;
export const Item = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 18px;
  svg {
    padding: 0;
  }
`;
