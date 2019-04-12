import styled from 'styled-components';

export const Header = styled.div`
    position: relative;
    height: 15rem;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 10px 30px 0px;
`;

export const SubTitle = styled.span`
  display: block;
  text-align: center;
  font-weight: 600;
  font-size: 30px;
  @media only screen and (max-width: 600px) {
    font-size: 20px;
  }
`;

export const Container = styled.div`
    position: relative;
    height: auto;
    width: 100vw;
    display:flex;
    flex-direction: column;
`;

export const ContainerImg = styled.ul`
    height: auto;
    width: 90vw;
    display:flex;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content: space-around;
    @media only screen and (max-width: 800px) {
        justify-content: center;
    }
`;

export const Item = styled.li`
    padding: 5px;
    margin-top: 10px;
    display: flex;
    align-items: center;
`;

export const Img = styled.img`
    height: 170px;
    width: 250px;
    margin: 1px;
    border: 1px solid;
    border-radius: 10px;
`;
