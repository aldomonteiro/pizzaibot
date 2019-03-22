/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import SkyLight from 'react-skylight';

import Layout from 'components/layout';
// import Box from 'components/box';
import Head from 'components/head';
// import Img from 'gatsby-image';
// import { Link } from 'gatsby-plugin-modal-routing'
import Button from '../components/button/button';
import Cadastro from '../components/cadastro/cadastro';

class Page extends React.Component {
    render () {
        const { data } = this.props;
        return (
            <Layout noHeader={true}>
                <Head pageTitle={data.markdownRemark.frontmatter.title} />
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    margin: '1px',
                    padding: '10px'
                }}>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: data.markdownRemark.html
                        }}
                    />
                    <Button onClick={() => this.simpleDialog.show()}>
                        Quero transformar o Whatsapp no meu aliado!
                    </Button>
                    <SkyLight hideOnOverlayClicked ref={ref => { this.simpleDialog = ref }} title="Pré-Cadastro">
                        <Cadastro />
                    </SkyLight>
                </div>
            </Layout>
        );
    }
}

Page.propTypes = {
    data: PropTypes.object.isRequired
};

export default Page;

export const query = graphql`
    query AcabandoQuery {
        markdownRemark(frontmatter: {path: {eq: "/acabando/" } }) {
            id
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
            }
        }
    }
`;
