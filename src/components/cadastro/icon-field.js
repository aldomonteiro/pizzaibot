import React from 'react';
import styled from 'styled-components';
import logo from './whatsapp.svg';
import MaskedInput from 'react-text-mask';

const Container = styled.div`
    position:relative;
    margin: 10px;
    background:#D4DFF0;
    width: 70%;
    border-radius: 3px;
`;

// const StyledField = styled.input`
const StMaskedInput = styled(MaskedInput)`  
  padding: 0.4em;
  border: none;
  color: blue;
  font-size: 20px;
  background: #D4DFF0;
  width: 95%;
  padding-left: 40px;
  height: 20px;
`;

const StyledImg = styled.img`
    position:absolute;
    bottom:5px;
    left:5px;
    width:24px;
    height:24px;
`;

const StyledErrMsg = styled.div`
  margin: 0.5em;
`;

const IconField = ({ field, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    ...props }) => {
    return (
        <div>
            <Container>
                <StyledImg src={logo} />
                <StMaskedInput
                    mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                    placeholder="Whatsapp"
                    {...field}
                    {...props}
                />
            </Container>
            {touched[field.name] &&
                errors[field.name] && <StyledErrMsg className="error">{errors[field.name]}</StyledErrMsg>}
        </div>
    );
}

export default IconField;
