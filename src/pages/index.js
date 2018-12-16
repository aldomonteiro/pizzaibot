import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Pricing from 'components/pricing'
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import IndexHero from 'components/index/index-hero'

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
    <section id="planos">
      <Box>
        <Pricing />
      </Box>
    </section>
  </Layout >
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