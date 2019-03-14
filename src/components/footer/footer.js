import React from 'react';
import styled from 'styled-components';
import { Facebook } from 'styled-icons/fa-brands/Facebook';
import { Whatsapp } from 'styled-icons/fa-brands/Whatsapp';
import { Mail } from 'styled-icons/feather/Mail';

const MainContainer = styled.div`
    position: relative;
    margin-bottom: auto;
    min-height: 200px;
    width: 100vw;
    background-color: #35439B;
    color: white;
    display:flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
`;

const TitleContainer = styled.div`
    height: 30%;
    width: 100%;
    text-align: center;
    align-items: center;
    padding: 20px;
`;

const SubContainer = styled.div`
    height: 70%;
    width: 100%;
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
`;

const IconContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 30%;
    margin: 5px;
    @media only screen and (max-width: 600px) {
        width: 100%;
    }
`;

const Dl = styled.dl`
    width: 100%;
    overflow: hidden;
    padding: 20px 0px 20px 0px;
    margin: 0
`;

const Dt = styled.dt`
    float: left;
    width: 30%;
    padding: 0;
    margin: 0    
`;

const Dd = styled.dd`
    float: left;
    width: 60%;
    padding: 0;
    margin: 0;  
`;

const StyledMail = styled(Mail)`
    color: white;
`;

const StyledFace = styled(Facebook)`
    color: white;
`;

const StyledZap = styled(Whatsapp)`
    color: white;
`;

const StyledA = styled.a`
    color: white;
`;


const Footer = () => (
    <MainContainer>
        <TitleContainer>
            <h3>Ficou com alguma dúvida?</h3>
            <h3> Fale conosco:</h3>
        </TitleContainer>
        <SubContainer>
            <IconContainer>
                <StyledMail size="36" />
                <Dl>
                    <Dt>E-mail:</Dt>
                    <Dd><StyledA href="mailto:pizzaibot@gmail.com">pizzaibot@gmail.com</StyledA></Dd>
                </Dl>
            </IconContainer>
            <IconContainer>
                <StyledZap size="36" />
                <Dl>
                    <Dt>Telefone:</Dt>
                    <Dd>(041) 98416-3676</Dd>
                </Dl>
            </IconContainer>
            <IconContainer>
                <StyledFace size="36" />
                <Dl>
                    <Dt>Facebook:</Dt>
                    <Dd><StyledA href="https://www.facebook.com/pizzaibot/">@pizzaibot</StyledA></Dd>
                </Dl>
            </IconContainer>
        </SubContainer>
    </MainContainer>
)

export default Footer
