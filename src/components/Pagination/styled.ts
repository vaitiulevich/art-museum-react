import styled from 'styled-components';
export const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const PageNumber = styled.button<{ $isactive: boolean }>`
  margin: 0 2px;
  padding: 0.4rem 0.6rem;
  font-weight: 600;
  border: none;
  background-color: ${(props) => (props.$isactive ? '#ff7f0e' : 'transparent')};
  color: ${(props) => (props.$isactive ? 'white' : '#333')};
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: ${(props) => (props.$isactive ? '#ff7f0e' : '#eaeaea')};
  }

  &:focus {
    outline: none;
  }
`;

export const ArrowButton = styled.button`
  margin: 0 2px;
  padding: 0.4rem 0.6rem;
  border: none;
  background-color: transparent;
  color: #333;
  cursor: pointer;
  border-radius: 4px;

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
    display: none;
  }
`;
