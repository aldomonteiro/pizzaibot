import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

import Button from '../button/button';
import IconField from './icon-field';

const Container = styled.div`
    width: 90%;
    hight: 90%;
`;

const ContainerTxt = styled.div`
    font-size: 2rem;
    text-align: center;
`;

const StyledField = styled(Field)`
  padding: 0.5em;
  margin: 0.5em;
  border: none;
  border-radius: 3px;
  color: blue;
  font-size: 20px;
  background: #D4DFF0;
  width: 70%;
`;

const StyledErrMsg = styled(ErrorMessage)`
  margin: 0 0.5em;
`;

class Page extends React.Component {
    state = {
        showForm: true,
    }

    render () {
        return (
            <Container>
                {this.state.showForm ? (
                    <React.Fragment>
                        <ContainerTxt>
                            Preencha os seus dados de contato abaixo, que entraremos em contato o mais
                            breve possível para te ajudar a começar a testar o sistema.
                        </ContainerTxt>
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
                                    body: JSON.stringify(values),
                                    // eslint-disable-next-line no-undef
                                    headers: new Headers({ 'Content-Type': 'application/json' }),
                                });

                                // eslint-disable-next-line no-undef
                                return fetch(request)
                                    .then(response => {
                                        if (response.status < 200 || response.status >= 300) {
                                            throw new Error(response.body);
                                        }
                                        this.setState({
                                            showForm: false
                                        })
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
                                    <StyledField type="obs" name="obs" placeholder="Qual o melhor horário para falarmos com você?" />
                                    <div>&nbsp;</div>
                                    <Button onClick={e => submitForm()}>
                                        Enviar!
                                    </Button>
                                    <StyledErrMsg name="geral" component="div" />
                                </Form>
                            )}
                        </Formik>
                    </React.Fragment>
                ) : (<div>Obrigado por enviar as informações! Aguarde nosso contato em breve.
                    <br />
                    <br />
                    <a style={{ cursor: 'pointer' }} onClick={() => { this.setState({ showForm: true }) }}>
                        Enviar novamente
                    </a>
                </div>)}
            </Container>
        );
    }
}
export default Page;
