import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: typeof window !== 'undefined' ? window.innerWidth : 0,
    }
  }

  handleResize() {
    this.setState({ windowWidth: window.innerWidth });
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  navigationLinks() {
    return (
      <Container >
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="/politica-de-privacidade">Termos de Uso e Política de Privacidade</a>
          </li>
        </ul>
      </Container>
    );
  }

  renderNavigation() {
    if (this.state.windowWidth >= 700) {
      return this.navigationLinks();
    }
  }

  render() {
    return (
      <Container>
        {this.renderNavigation()}
      </Container>
    )
  }
}

export default Nav;
