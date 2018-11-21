import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import { graphql } from 'gatsby';
// import { Button, Container } from './index.css';
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

const Container = styled.div`
    height: 75%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;


// const Index = ({ data }) => (
class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <Box>
          <Title as="h2" size="large">
            {
              this.props.data.homeJson.content.childMarkdownRemark
                .rawMarkdownBody
            }
          </Title>
          <Container>
            <a href="https://admin.pizzaibot.com">
              <Button>
                Acesse o aplicativo!
            </Button>
            </a>
          </Container>
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
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
