/* eslint-disable indent */
import React, { useState, useRef } from 'react';
import Title from '../title';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Modal from 'react-responsive-modal';

import Button from '../button/button';
import Cadastro from '../cadastro/cadastro';

const BaseContainer = styled.div`
    position: relative;
    text-align: center;
    display: flex; 
    align-items: center;
    width: 100%;
`;

const MainContainer = styled(BaseContainer)`
    justify-content: space-around;
`;

const ImgContainer = styled.div`
    height: auto;
    width: 300px;
    @media only screen and (max-width: 600px) {
      display: none;
    }
`;

const TextsContainer = styled(BaseContainer)`
    height: auto;
    min-width:150px;
    max-width: 500px;
    justify-content: center;
    flex-direction: column;
`;

const SubTextContainer = styled.div`
    position: relative;
    text-align: center;
    color: white;
    font-size: 3rem;
    font-weight: 800;
    @media only screen and (max-width: 600px) {
      font-size: 2rem;
    }

  `;

const BackgContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const IndexHero = () => {
    const [isOpen, setOpen] = useState(false);
    const modalContainer = useRef(null);
    return (
    <StaticQuery query={graphql`
      query IndexHeroQuery {
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
            imgOne: file(relativePath: { eq: "images/whatsapp-chat-mock.png" }) {
              childImageSharp {
                sizes {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            backg1: file(relativePath: { eq: "images/sunset-background.jpg" }) {
              childImageSharp {
                sizes (maxWidth: 800, maxHeight: 1000) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
        }
    `}
        render={data => (
            <BaseContainer>
                <BackgContainer>
                    <Img sizes={data.backg1.childImageSharp.sizes}
                        style={{ height: '100vh' }} />
                </BackgContainer>
                <MainContainer ref={modalContainer}>
                    <TextsContainer>
                        <Title as="h2" size="large">
                            {data.indexJson.content.childMarkdownRemark.frontmatter.title}
                        </Title>
                        <SubTextContainer
                            dangerouslySetInnerHTML={{ __html: data.indexJson.content.childMarkdownRemark.html }}>
                        </SubTextContainer>
                        <Button onClick={() => setOpen(true)}>
                        Comece a usar gratuitamente!
                    </Button>
                    </TextsContainer>
                    <ImgContainer>
                        <Img sizes={data.imgOne.childImageSharp.sizes} />
                    </ImgContainer>
                    <Modal
                        open={isOpen}
                        onClose={() => setOpen(false)}
                        center
                        container={modalContainer.current}>
                        <Cadastro origin='index-hero' />
                    </Modal>
                </MainContainer>
            </BaseContainer>
        )}
    />
);
}

export default IndexHero;
