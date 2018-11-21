import styled from 'styled-components';

export const Button = styled.div`
    background-color: white; 
    color: black; 
    border: 2px solid #008CBA;
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 24px;
    margin: 4px 2px;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    cursor: pointer;

    :hover {
        background-color: #008CBA;
        color: white;
    }
`;

export const Container = styled.div`
    height: 75%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
