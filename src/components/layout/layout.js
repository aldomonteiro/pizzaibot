import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Head from 'components/head';
import Header from 'components/header';
import GlobalStyle from 'global.css.js';
import Footer from '../footer/footer';

const Layout = ({ data, noHeader, noFooter, children }) => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
        <GlobalStyle />
        <Head />
        {!noHeader && (<Header title={data.site.siteMetadata.siteTitle} />)}
        {children}
        {!noFooter && (<Footer />)}
    </div>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    data: PropTypes.object.isRequired,
    noHeader: PropTypes.bool,
};

const LayoutWithQuery = props => (
    <StaticQuery
        query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            siteTitle
          }
        }
      }
    `}
        render={data => <Layout data={data} {...props} />}
    />
);

LayoutWithQuery.propTypes = {
    children: PropTypes.node.isRequired,
};

export default LayoutWithQuery;
