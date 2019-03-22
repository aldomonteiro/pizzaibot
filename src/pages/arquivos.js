/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
// import Box from 'components/box';
import Head from 'components/head';
// import Img from 'gatsby-image';

const Arquivos = ({ data }) => (
    <Layout>
        <Head pageTitle={data.markdownRemark.frontmatter.title} />
        <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column',
            margin: '1px',
            padding: '10px'
        }}>
            <div
                dangerouslySetInnerHTML={{
                    __html: data.markdownRemark.html
                }}
            />
            {/* <div style={{ height: '500px', width: '500px' }}>
                <Img sizes={data.img1.childImageSharp.sizes} />
            </div> */}
        </div>
    </Layout>
);

Arquivos.propTypes = {
    data: PropTypes.object.isRequired
};

export default Arquivos;

export const query = graphql`
    query ArquivosQuery {
        markdownRemark(frontmatter: {path: {eq: "/arquivos/" } }) {
            id
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
            }
        }
        img1: file(relativePath: {eq: "images/configurar-impressora.png" }) {
            childImageSharp {
                sizes(maxWidth: 600) {
                ...GatsbyImageSharpSizes
                }
            }
          }
    }
`;
