import styled from 'styled-components';

export const ErrorBoundaryComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90%;
`;

export const ErrorBoundaryTitle = styled.h2`
  font-family: ${(props) => props.theme.typography.fontFamily.general};
  font-size: ${(props) => props.theme.typography.fontSize.large};
  color: ${(props) => props.theme.colors.fontColor};
  font-weight: ${(props) => props.theme.typography.fontWeight.thin};
`;
