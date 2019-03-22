import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const PoliticaDePrivacidade = ({ data }) => (
    <Layout>
        <Head pageTitle={data.politicadeprivacidadeJson.title} />
        <Box>
            <div
                dangerouslySetInnerHTML={{
                    __html: data.politicadeprivacidadeJson.content.childMarkdownRemark.html,
                }}
            />
        </Box>
    </Layout>
);

PoliticaDePrivacidade.propTypes = {
    data: PropTypes.object.isRequired,
};

export default PoliticaDePrivacidade;

export const query = graphql`
  query PoliticaQuery {
    politicadeprivacidadeJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
