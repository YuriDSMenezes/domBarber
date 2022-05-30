import styled, { css } from 'styled-components';

interface StyleProps {
  open?: boolean;
  actionsQuantity?: number;
}

interface OptionsStyleProps {
  actionOrder: number;
  actionsQuantity?: number;
  actionColor?: string;
}

export const Container = styled.div`
  position: relative;
  background-color: #fff;
  width: 100%;
  height: 130px;
  border-radius: 8px;
`;

export const CardContent = styled.div<StyleProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  /* border-radius: 8px; */
  background: #272727;
  border: solid 1px #272727;
  transition: all 0.7s ease-in-out;

  ${props =>
    props.open &&
    css`
      left: calc(((-100% / 3) * ${props.actionsQuantity}) + 10px);
    `}
`;

export const OptionsContainer = styled.div<OptionsStyleProps>`
  position: absolute;
  top: 0;

  ${props =>
    props.actionOrder > 0 &&
    css`
      right: calc((100% / 3) * ${Number(props.actionOrder)});
    `};

  ${props =>
    props.actionOrder === 0 &&
    css`
      right: 0;
      border-radius: 0 8px 8px 0;
    `};

  ${props =>
    props.actionsQuantity === props.actionOrder + 1 &&
    css`
      border-radius: 8px 0px 0px 8px;
    `}

  width: calc(100% / 3);
  height: 100%;
  background-color: red;
  border: none;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  ${props =>
    props.actionColor &&
    css`
      background-color: ${props.actionColor};
    `}
`;

export const ActionButton = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  color: #fff;
  font-size: 16px;
`;
