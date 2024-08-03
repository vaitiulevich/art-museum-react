import { breakpoints } from '@constants/breakpoints';
import styled from 'styled-components';

export const AppComponent = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  main {
    flex-grow: 1;
    padding: 1rem 15%;
  }

  @media (max-width: ${breakpoints.tablet}px) {
    main {
      padding: 1rem 8%;
    }
  }
  @media (max-width: ${breakpoints.mobile}px) {
    main {
      padding: 1rem 5%;
    }
  }
`;
