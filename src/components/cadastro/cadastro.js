import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

import Button from '../button/button';
import IconField from './icon-field';

const Container = styled.div`
    width: 100%;
    height: 100%;
    text-align: left;
`;

const ContainerTxt = styled.div`
    font-size: 2 rem;
    text-align: left;
    margin: 1rem;
    font-weight: 800;
`;

const SubTxt = styled.div`
    font-size: 1.5rem;
    text-align: left;
    margin: 1rem;
`;

const EmojiTxt = styled.div`
    font-size: 5rem;
    text-align: center;
    margin: 2rem;
`;

const SideContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-orientation: column;
`;

const LeftContainer = styled.div`
    width: 50%;
    height: auto;
    background-color: #35439B;
    color:white;
`;

const RightContainer = styled.div`
    width: 50%;
    height: 100%;
`;

const StyledField = styled(Field)`
  padding: 0.5em;
  margin: 0.5em;
  border: none;
  border-radius: 3px;
  color: blue;
  font-size: ${props => props.fontSize || '15px'};
  background: #D4DFF0;
  width: 80%;
`;

const StyledErrMsg = styled(ErrorMessage)`
  margin: 0 0.5em;
`;

const Page = ({ origin }) => {
    const [showForm, setShowForm] = useState(true);
    let headerTxt = 'Estamos quase lá.';
    let subTxt = 'Agora, para você começar a usar o sistema, precisamos que os dados ao lado sejam preenchidos. Assim, poderemos entrar em contato com você.';
    if (origin === 'index-hero') {
        headerTxt = 'Ficamos felizes por você dar o primeiro passo para automatizar o seu WhatsApp e começar a receber pedidos no automático.';
    } else if (origin === 'acabando') {
        headerTxt = 'Estamos quase lá. Tenha certeza que vamos transformar o WhatsApp no seu aliado.';
        subTxt = 'Agora, para que possamos te mostrar como é a nossa solução, precisamos que os dados ao lado sejam preenchidos. Assim, poderemos entrar em contato com você.';
    } else if (origin === 'degustacao') {
        headerTxt = 'Ótima decisão. O plano Degustação foi feito para te mostrar o quanto a nossa solução pode te ajudar, e totalmente de graça!';
    } else if (origin === 'mini-delivery') {
        headerTxt = 'Muito bom. O plano Mini-Delivery vai automatizar a sua operação até o limite de 500 pedidos mensais. Ideal para restaurantes que estão começando a atender via delivery.';
    } else if (origin === 'delivery') {
        headerTxt = 'Fantástico! O plano Delivery vai automatizar a sua operação até o limite de 1000 pedidos mensais. Ideal para deliveries que já possuem um volume razoável de pedidos.';
    } else if (origin === 'gourmet') {
        headerTxt = 'É disso que estou falando! O plano Gourmet é o plano preferido dos deliveries que estão sofrendo com o WhatsApp. E o que é melhor, não há limite de pedidos e conta com nosso suporte full time.';
    } else if (origin === 'rede') {
        headerTxt = 'Excelente ter você aqui. O plano Rede é o nosso plano feito para atender negócios maduros, com mais de uma unidade e com grande volume de operações. Nossa melhor equipe terá imenso prazer em te atender.';
    }
    return (
        <Container>
            {showForm ? (
                <React.Fragment>
                    <SideContainer>
                        <LeftContainer>
                            <ContainerTxt>
                                {headerTxt}
                            </ContainerTxt>
                            <SubTxt>
                                {subTxt}
                            </SubTxt>
                            <EmojiTxt>
                                👉
                            </EmojiTxt>
                        </LeftContainer>
                        <RightContainer>
                            <Formik
                                initialValues={{ email: '', nome: '', whatsapp: '', obs: '' }}
                                validate={values => {
                                    let errors = {};
                                    if (!values.email) {
                                        errors.email = 'Por favor, preencha o seu e-mail';
                                    } else if (
                                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                    ) {
                                        errors.email = 'Ops, e-mail inválido';
                                    }

                                    if (!values.nome) {
                                        errors.nome = 'Por favor, preencha o seu nome';
                                    }

                                    if (!values.whatsapp) {
                                        errors.whatsapp = 'Por favor, preencha o seu número do Whatsapp';
                                    }

                                    return errors;
                                }}
                                onSubmit={(values, { setSubmitting }) => {
                                    // eslint-disable-next-line no-undef
                                    const request = new Request(process.env.GATSBY_API_URL + '/webforms', {
                                        method: 'POST',
                                        body: JSON.stringify({ ...values, origin }),
                                        // eslint-disable-next-line no-undef
                                        headers: new Headers({ 'Content-Type': 'application/json' }),
                                    });

                                    // eslint-disable-next-line no-undef
                                    return fetch(request)
                                        .then(response => {
                                            if (response.status < 200 || response.status >= 300) {
                                                throw new Error(response.body);
                                            }
                                            setShowForm(false);
                                            setSubmitting(false);

                                            return response.json();
                                        })
                                        .catch(err => {
                                            console.log(err);
                                        });
                                }}>
                                {({ submitForm, isSubmitting }) => (
                                    <Form>
                                        <StyledField type="text" name="nome" placeholder="Nome" />
                                        <StyledErrMsg name="nome" component="div" />
                                        <StyledField type="email" name="email" placeholder="E-mail" />
                                        <StyledErrMsg name="email" component="div" />
                                        <Field name="whatsapp" component={IconField} />
                                        <StyledField fontSize='12px' type="obs" name="obs" placeholder="Qual o melhor horário para retornarmos?" />
                                        <div>&nbsp;</div>
                                        <Button onClick={e => submitForm()}>
                                        Enviar!
                                        </Button>
                                        <StyledErrMsg name="geral" component="div" />
                                    </Form>
                                )}
                            </Formik>
                        </RightContainer>
                    </SideContainer>
                </React.Fragment>
            ) : (<div>
                    Obrigado por enviar as informações! Aguarde nosso contato em breve.
                <br />
                <br />
                <a style={{ fontSize: '9px', cursor: 'pointer' }} onClick={() => setShowForm(true) }>
                        Se foi algo errado, você pode enviar novamente...
                </a>
            </div>)}
        </Container>
    );
}

export default Page;
