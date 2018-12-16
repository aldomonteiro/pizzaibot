import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    height: auto;
    width: 100vw;
    display:flex;
    flex-direction: column;
`;

export const Header = styled.div`
    position: relative;
    height: 15rem;
    display:flex;
    justify-content: center;
    align-items: center;
`;

export const Items = styled.div`
    position: relative;
    height: auto;
    width: auto;
    display:flex;
    justify-content: space-around;
    flex-wrap:wrap;
`;


export const Columns = styled.div`
    width: 30%;
    margin: 1px;
    @media only screen and (max-width: 600px) {
        width: 100%;
    }
`;

export const Price = styled.ul`
    list-style-type: none;
    border: 2px solid #eee;
    margin: 0;
    padding: 0;
    -webkit-transition: 0.3s;
    transition: 0.3s;
  
    :hover {
        box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.2)
    }
`;

export const PriceHeader = styled.li`
    font-family: "Arial Rounded MT Bold", "Helvetica Rounded", Arial, sans-serif; 
    background-color: #35439B;
    border-radius: 5px;
    color: white;
    font-size: 25px;
    display:flex;
    justify-content: center;
    align-items: center;
    height: 50px;
`;

export const PriceItem = styled.li`
    background-color: ${props => props.bgColor ? props.bgColor : 'white'}
    color: ${props => props.bgColor ? 'white' : 'black'}
    font-size: ${props => props.fontSize ? props.fontSize : '20px'}
    font-family: "Arial Rounded MT Bold", "Helvetica Rounded", Arial, sans-serif; 
    border-bottom: 1px solid #eee;
    padding: 20px;
    text-align: center;
`;


//   .price.grey {
//     background - color: #eee;
//     font - size: 20px;
// }

//   .button {
//     background - color: #4CAF50;
//     border: none;
//     color: white;
//     padding: 10px 25px;
//     text - align: center;
//     text - decoration: none;
//     font - size: 18px;
// }

// @media only screen and(max - width: 600px) {
//     .columns {
//         width: 100 %;
//     }
// }