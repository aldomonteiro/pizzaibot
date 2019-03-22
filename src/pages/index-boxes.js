import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
import IOExample from 'components/io-example';
import { graphql } from 'gatsby';
import { Link, Element } from 'react-scroll';

// const Index = ({ data }) => (
const Index = ({ data }) => (
    <Layout>
        <Box>
            <Title as="h2" size="large">
                {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
            </Title>
            <Link
                activeClass="active"
                className="scroll-down icon-arrow-left"
                to="content"
                data-offset="-45"
                spy={true}
                smooth={true}
                duration={500}
            >
                <i className="down bounce"></i>
            </Link>
        </Box>
        <Box>
            <Element name="content">
                <Gallery items={data.homeJson.gallery} />
                {/* <div style={{ height: '50vh' }} /> */}
                <IOExample />
            </Element>
        </Box>
    </Layout>
);

Index.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query IndexBoxesQuery {
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
