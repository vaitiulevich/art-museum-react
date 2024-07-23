import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(
    90deg,
    rgba(52, 51, 51, 1) 0%,
    rgba(72, 72, 72, 1) 53%,
    rgba(40, 40, 40, 1) 100%
  );
  padding: 1rem 20%;
`;
export const Logo = styled.div`
  height: 40px;
`;

export const Favorites = styled.div`
  color: white;
  font-weight: 300;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
`;
