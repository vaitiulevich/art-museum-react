import { breakpoints } from '@constants/breakpoints';
import styled from 'styled-components';

export const AppComponent = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  main {
    flex-grow: 1;
    padding: ${(props) => props.theme.indents.containerPaddingDesctop};
  }

  @media (max-width: ${breakpoints.tablet}px) {
    main {
      padding: ${(props) => props.theme.indents.containerPaddingLaptop};
    }
  }
  @media (max-width: ${breakpoints.mobile}px) {
    main {
      padding: ${(props) => props.theme.indents.containerPaddingMobile};
    }
  }
`;
