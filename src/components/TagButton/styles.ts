import styled, { css } from 'styled-components';

interface StyleProps {
  selected?: boolean;
  size?: 'small' | 'large';
}

export const Container = styled.button<StyleProps>`
  width: 100%;
  border: 1px solid #ffffff;
  color: #ffffff;
  box-sizing: border-box;
  border-radius: 21px;
  background: transparent;
  transition: 0.3s ease-in-out;
  height: 35px;

  display: flex;
  justify-content: center;
  align-items: center;

  ${props =>
    props.size === 'small' &&
    css`
      height: 25px;
    `}

  &:hover {
    border: 2px solid #ff9933;
    background: #ff9933;
  }

  ${props =>
    props.selected &&
    css`
      border: 2px solid #ff9933;
      background: #ff9933;
    `}
`;
export const Text = styled.span<StyleProps>`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;

  ${props =>
    props.size === 'small' &&
    css`
      font-weight: 400;
      font-size: 10px;
      line-height: 12px;
      color: #ffffff;
    `}
`;
