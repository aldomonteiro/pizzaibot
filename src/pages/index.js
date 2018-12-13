import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import { graphql } from 'gatsby';
// import { Button, Container } from './index.css';
import Img from 'gatsby-image';
import styled from 'styled-components';

const Button = styled.div`
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

const ContainerImg = styled.div`
    height: 500px;
    width: 200px;
  `;

const Container = styled.div`
    height: 100%;
    width: 400px;
    min-width:200px;
    max-width: 500px;
    display: flex;
    flex-grow:2;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `;

const ContainerText = styled.div`
    padding: 30px 5px 30px 5px;
    text-align: justify;
  `;

// const Index = ({ data }) => (
class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { childMarkdownRemark } = this.props.data.indexJson.content;

    return (
      <Layout>
        <Box>
          <Container>
            <Title as="h2" size="large">
              {
                childMarkdownRemark.frontmatter.title
              }
            </Title>
            <ContainerText
              dangerouslySetInnerHTML={{ __html: childMarkdownRemark.html }}>
            </ContainerText>
            <a href="https://admin.pizzaibot.com">
              <Button>
                Comece a usar gratuitamente!
            </Button>
            </a>
          </Container>
          <ContainerImg>
            {/* <img style={{ maxHeight: '480px' }} src={imgCover} alt="Demo" /> */}
            <Img fluid={this.props.data.imgOne.childImageSharp.fluid} />
          </ContainerImg>
        </Box>
      </Layout>
    );
  }
  // );
}

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query IndexQuery {
    indexJson {
      content {
        childMarkdownRemark {
          frontmatter {
            title
          }
          html
          rawMarkdownBody
        }
      }
    }
    imgOne: file(relativePath: { eq: "images/pizzaibot-screenshot1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 365, maxHeight: 792) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;