import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import { graphql } from 'gatsby';
import { Button, Container } from './index.css';


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
