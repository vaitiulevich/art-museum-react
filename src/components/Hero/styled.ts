import styled from 'styled-components';

export const HeroTitle = styled.h1`
  width: 70%;
  font-size: 3.5rem;
  text-align: center;
  margin: 5rem 0 3rem;
  font-weight: 600;
  color: #393939;

  span {
    color: #f17900;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
`;
