import styled from 'styled-components';

const Button = styled.div`
    background-color: white; 
    color: black; 
    border: 2px solid #008CBA;
    padding: 1rem 2rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 2rem;
    margin: 4px 2px;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    cursor: pointer;

    :hover {
        background-color: #008CBA;
        color: white;
    }
`;

export default Button;
