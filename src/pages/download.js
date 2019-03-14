/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
import Img from 'gatsby-image';

const Download = ({ data }) => (
    <Layout>
        <Head pageTitle={data.downloadJson.title} />
        <Box>
            <div style={{
                width: '90vw', display: 'flex',
                alignItems: 'flex-start', flexDirection: 'column',
                border: '1px solid', margin: '1px', padding: '10px'
            }}>
                <div
                    dangerouslySetInnerHTML={{
                        __html: data.downloadJson.content.childMarkdownRemark.html
                    }}
                />
                <div style={{ height: '500px', width: '500px' }}>
                    <Img sizes={data.img1.childImageSharp.sizes} />
                </div>
            </div>
        </Box>
    </Layout >
);

Download.propTypes = {
    data: PropTypes.object.isRequired
};

export default Download;

export const query = graphql`
  query DownloadQuery {
    downloadJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
    img1: file(relativePath: { eq: "images/configurar-impressora.png" }) {
      childImageSharp {
        sizes(maxWidth: 600) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;
