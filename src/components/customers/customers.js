import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import {
    Header, ContainerImg,
    Container, Item, SubTitle
} from './customers.css';
import Title from '../title';

// function importAll (r) {
//     return r.keys().map(r);
// }

// const images = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));

const Customers = () => {
    return (
        <StaticQuery query={graphql`
            query CustomersQuery {
                images:allFile(
                    filter: {
                        relativeDirectory: { eq: "images/customers" }
                    }
                ) {
                    edges {
                        node {
                            name
                            childImageSharp {
                                resize(width:400, grayscale: true){
                                  src
                                  height
                                  width
                                }
                            }
                        }                    
                    }
                }
            }
        `}
        render={data => {
            return (
                <Container>
                    <Header>
                        <Title as="h2" size="large">
                                Nossos Clientes
                        </Title>
                        <SubTitle>
                            {'Alguns clientes que já estão recebendo'}
                            <br />
                            {'pedidos automaticamente pelo WhatsApp'}
                        </SubTitle>
                    </Header>
                    <ContainerImg>
                        {data.images.edges.map(image =>
                            <Item key={image.node.childImageSharp.resize.src}>
                                <Img
                                    alt={image.node.name}
                                    fixed={image.node.childImageSharp.resize}
                                    height={image.node.childImageSharp.resize.height}
                                    width={image.node.childImageSharp.resize.width}
                                />
                            </Item>
                        )}
                    </ContainerImg>
                </Container>
            )
        }
        } />)
}

export default Customers;
