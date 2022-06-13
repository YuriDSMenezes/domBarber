import styled, { css } from 'styled-components';

interface StyleProps {
  smallSize?: boolean;
  white?: boolean;
  green?: boolean;
}

export const Container = styled.button<StyleProps>`
  background: ${props => (props.white ? '#fff' : 'var(--color-primary)')};
  border-radius: 10px;
  border: none;
  width: 100%;
  height: 41px;
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 16px;
  justify-content: center;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  &:disabled {
    background-color: #1c1c1c;
    color: black;
  }

  ${props =>
    props.green &&
    css`
      background: #34ed91;
    `}

  ${props =>
    props.smallSize &&
    css`
      height: 20px;
    `}
`;
