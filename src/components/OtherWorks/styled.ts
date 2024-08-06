import styled from 'styled-components';

export const OtherWorksContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const OtherWorksHeadline = styled.div`
  text-align: center;
  margin: 2rem 0;
`;

export const SubTitle = styled.p`
  color: ${(props) => props.theme.colors.accentText};
  font-size: ${(props) => props.theme.typography.fontSize.medium};
  margin: 0;
`;

export const Title = styled.h2`
  font-weight: ${(props) => props.theme.typography.fontWeight.normal};
  font-size: ${(props) => props.theme.typography.fontSize.large};
  margin: 0;
`;

export const Select = styled.select`
  padding: 0.6rem 1rem;
  border: ${(props) => props.theme.border};
  margin-bottom: 1rem;
`;
