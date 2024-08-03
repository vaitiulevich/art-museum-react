import styled from 'styled-components';
export const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const PageNumber = styled.button<{ $isactive: boolean }>`
  margin: 0 0.1rem;
  padding: 0.4rem 0.6rem;
  font-weight: ${(props) => props.theme.typography.fontWeight.bold};
  border: none;
  background-color: ${(props) =>
    props.$isactive ? props.theme.colors.accent : 'transparent'};
  color: ${(props) =>
    props.$isactive
      ? props.theme.colors.fillBase
      : props.theme.colors.fontColor};
  cursor: pointer;
  border-radius: 0.3rem;

  &:hover {
    background-color: ${(props) =>
      props.$isactive
        ? props.theme.colors.accent
        : props.theme.colors.fillFrame};
  }

  &:focus {
    outline: none;
  }
`;

export const ArrowButton = styled.button`
  margin: 0 0.1rem;
  padding: 0.4rem 0.6rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
  border-radius: 0.3rem;

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
    display: none;
  }
`;
