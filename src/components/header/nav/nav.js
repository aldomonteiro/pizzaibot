import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            windowWidth: typeof window !== 'undefined' ? window.innerWidth : 0,
            onePage: true
        }
    }

    handleResize () {
        this.setState({ windowWidth: window.innerWidth });
    }

    componentDidMount () {
        window.addEventListener('resize', this.handleResize.bind(this));
        this.setState({
            onePage: document.getElementById('planos') !== null
        })
    }

    componentWillUnmount () {
        window.removeEventListener('resize', this.handleResize.bind(this));
    }

    navigationLinks () {
        return (
            <Container >
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        {this.state.onePage && (<AnchorLink href="#planos">Planos e Preços</AnchorLink>)}
                        {!this.state.onePage && (<Link to="/planos">Planos e Preços</Link>)}
                    </li>
                    <li>
                        <Link to="/politica-de-privacidade">Termos de Uso</Link>
                    </li>
                </ul>
            </Container>
        );
    }

    renderNavigation () {
        if (this.state.windowWidth >= 700) {
            return this.navigationLinks();
        }
    }

    render () {
        return (
            <Container>
                {this.renderNavigation()}
            </Container>
        )
    }
}

export default Nav;
