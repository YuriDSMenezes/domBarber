import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  color: #fff;
  li {
    list-style: none;
    font-size: 18px;

    &.previous,
    &.next {
      font-weight: 700;
      cursor: pointer;
    }
    &.next {
      margin-left: 60px;
    }
  }
  li:not(.next, .previous) {
    display: none;
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

export const PageCount = styled.div`
  position: absolute;
  top: 2px;
  left: 50%;
  transform: translate(-50%, 0%);
  font-size: 14px;
`;
