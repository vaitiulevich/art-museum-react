import styled from 'styled-components';

export const LoaderComponent = styled.div`
  border: 0.7rem solid #e0a44987;
  border-top: 0.7rem #e0a449 solid;
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
