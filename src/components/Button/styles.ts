import styled, { css } from 'styled-components';

interface StyleProps {
  smallSize?: boolean;
  white?: boolean;
  green?: boolean;
}

export const Container = styled.button<StyleProps>`
  background: ${props => (props.white ? '#fff' : '#ff9933')};
  border-radius: 10px;
  border: none;
  width: 100%;
  height: 37px;
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: center;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;

  ${props =>
    props.green &&
    css`
      background: #34ed91;
    `}

  ${props =>
    props.smallSize &&
    css`
      height: 27px;
    `}
`;
