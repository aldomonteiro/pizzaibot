import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Pricing from 'components/pricing';
import Customers from 'components/customers';
import { graphql } from 'gatsby';
// import Img from 'gatsby-image';
import styled from 'styled-components';
import IndexHero from 'components/index/index-hero';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import IconMenu from './icon-menu.png';
import IconWhats from './icon-whatsapp.png';
import IconMsg from './icon-message.png';
import IconOrder from './icon-order.png';
import IconPrinter from './icon-printer.png';
import IconSpeaking from './icon-speaking.png';

// const ContainerBackg = styled.div`
//   position: absolute;
//   width: 100%;
//   height: 100%;
// `;

const ContainerText = styled.div`
    position: relative;
    text-align: center;
    color: black;
    font-size: 2.5rem;
    font-weight: 800;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    @media only screen and (max-width: 600px) {
        font-size: 2rem;
      }  
  `;

const ContainerIcon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
    width: 30%;
    @media only screen and (max-width: 600px) {
        width: 50%;
      }  
`;

const SubText = styled.div`
    font-size: 1.5rem;
    @media only screen and (max-width: 600px) {
        font-size: 1rem;
      }
`;

const ContainerTitleText = styled.div`
  position: relative;
  text-align: center;
  display:flex;
  align-items: center;
  width: 90%;
`;

const Index = ({ data }) => (
    <div>
        <Layout>
            <Box>
                <IndexHero />
            </Box>
            <Box>
                {/* <ContainerBackg>
                    <Img sizes={data.backg2.childImageSharp.sizes}
                        style={{ height: '100vh' }} />
                </ContainerBackg> */}
                <ContainerTitleText>
                    <div>
                        <Title as="h2" size="large">
                            Como funciona?
                        </Title>
                        <ContainerText>
                            <ContainerIcon>
                                <img alt='cardápio' src={IconMenu} />
                                <p>1. Você configura o seu cardápio</p>
                                <SubText>Com todos os seus produtos, tamanhos e preços.</SubText>
                            </ContainerIcon>
                            <ContainerIcon>
                                <img alt='whatsapp' src={IconWhats} />
                                <p>2. Conecta o seu WhatsApp ao nosso sistema</p>
                                <SubText>E você pode divulgar o seu próprio número, sem site, sem aplicativo.</SubText>
                            </ContainerIcon>
                            <ContainerIcon>
                                <img alt='mensagem' src={IconMsg} />
                                <p>3. Quando chegar mensagem no WhatsApp...</p>
                                <SubText>o sistema responde por você, automaticamente. Assim, mesmo nos horários de pico, todos os clientes são atendidos.</SubText>
                            </ContainerIcon>
                            <ContainerIcon>
                                <img alt='pedido' src={IconOrder} />
                                <p>4. O sistema mostra as opções e gera o pedido</p>
                                <SubText>Sem precisar que o seu atendente interfira.</SubText>
                            </ContainerIcon>
                            <ContainerIcon>
                                <img alt='impressora' src={IconPrinter} />
                                <p>5. Você recebe o pedido pronto.</p>
                                <SubText>Você terá acesso ao sistema que gerencia os pedidos recebidos e pode imprimí-lo direto na sua cozinha.</SubText>
                            </ContainerIcon>
                            <ContainerIcon>
                                <img alt='atendente' src={IconSpeaking} />
                                <p>6. E se o cliente precisar falar com alguém..</p>
                                <SubText>Você recebe uma notificação e assume o controle da conversa.</SubText>
                            </ContainerIcon>
                        </ContainerText>

                    </div>
                </ContainerTitleText>
            </Box>
            <section id="clientes">
                <Box>
                    <Customers />
                </Box>
            </section>
            <section id="planos">
                <Box>
                    <Pricing />
                </Box>
            </section>
        </Layout >
        <div style={{ position: 'absolute', bottom: 0, left: 0 }}>
            <MessengerCustomerChat
                pageId="278383016327989"
                appId="493125474434244"
                language="pt_BR"
            />
        </div>
    </div>
);

Index.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query IndexQuery {
    backg2: file(relativePath: { eq: "images/smartphone-background.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1200,
          duotone: { highlight: "#B9B9B9", shadow: "#6B6D77", opacity: 45  }) {
          ...GatsbyImageSharpSizes
        }
      }
    }      
  }
`;
