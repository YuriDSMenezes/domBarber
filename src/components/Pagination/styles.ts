import styled from 'styled-components';

export const Container = styled.div`
  color: #fff;
  li {
    list-style: none;
    font-size: 18px;

    &.previous,
    &.next {
      font-weight: 700;
      cursor: pointer;
    }
    &.previous {
      margin-right: 10px;
    }
    &.next {
      margin-left: 10px;
    }
  }
  ul {
    display: flex;
    justify-content: center;
    padding-left: 0;
    display: none;
    @media (min-width: 768px) {
      display: flex;
    }
  }
`;
