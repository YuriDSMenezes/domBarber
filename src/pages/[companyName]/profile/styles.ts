import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
`;
