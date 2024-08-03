import { breakpoints } from '@constants/breakpoints';
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
  width: 65%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  background-color: ${(props) => props.theme.colors.fillFrame};
  padding: 0.5rem;
  border-radius: 1rem;

  @media (max-width: ${breakpoints.mobile}px) {
    width: 90%;
  }
`;

export const SearchIcon = styled.div`
  height: 2rem;
  cursor: pointer;
`;

export const ErrorMessage = styled.p`
  color: ${(props) => props.theme.colors.errMessage};
  font-size: ${(props) => props.theme.typography.fontSize.small};
  margin-top: 0;
`;
