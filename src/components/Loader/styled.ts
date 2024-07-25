import styled from 'styled-components';

export const LoaderComponent = styled.div`
  border: 7px solid #e0a44987;
  border-top: 7px #e0a449 solid;
  border-radius: 50%;
  height: 40px;
  width: 40px;
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
