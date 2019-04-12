import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Pricing from 'components/pricing';
import Customers from 'components/customers';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import IndexHero from 'components/index/index-hero';
import MessengerCustomerChat from 'react-messenger-customer-chat';

const ContainerBackg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const ContainerText = styled.div`
    position: relative;
    text-align: center;
    color: white;
    font-size: 3rem;
    font-weight: 800;
    @media only screen and (max-width: 600px) {
      font-size: 2rem;
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
                <ContainerBackg>
                    <Img sizes={data.backg2.childImageSharp.sizes}
                        style={{ height: '100vh' }} />
                </ContainerBackg>
                <ContainerTitleText>
                    <div>
                        <Title as="h2" size="large">
                            Enquanto nós geramos os pedidos para você...
                        </Title>
                        <ContainerText>
                            <p>você foca em preparar a melhor e mais rápida refeição para os seus clientes.</p>
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
