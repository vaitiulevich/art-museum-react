import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  flex-direction: column;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 100%;
  border: none;
  background-color: initial;
  padding: 0.5rem;
  font-size: 1rem;
`;

export const SearchBarBlock = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  background-color: #39393914;
  padding: 0.5rem;
  border-radius: 16px;
`;

export const SearchIcon = styled.div`
  height: 30px;
  cursor: pointer;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 0;
`;
