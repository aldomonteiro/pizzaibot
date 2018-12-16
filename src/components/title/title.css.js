import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Text = styled.span`
  display: block;
  text-align: center;
  font-weight: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '800';
      default:
        return '800';
    }
  }};
  font-size: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '5rem';
      default:
        return '3rem';
    }
  }};
  line-height: 1.2;

  ${MEDIA.TABLET`
    font-size: ${({ size }) => () => {
      switch (size) {
        case 'large':
          return '3.5rem';
        default:
          return '2rem';
      }
    }};
  `};

  ${MEDIA.PHONE`
  font-size: ${({ size }) => () => {
      switch (size) {
        case 'large':
          return '3rem';
        default:
          return '2rem';
      }
    }};
`};

`;
