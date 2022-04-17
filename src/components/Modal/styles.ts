import styled from 'styled-components';

interface ContainerProps {
  show?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: ${props => (props.show ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

export const Content = styled.div`
  position: fixed;
  background: #272727;
  padding: 20px 30px;
  text-align: center;
  width: 80%;
  height: auto;
  border-radius: 17px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
