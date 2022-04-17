import styled from 'styled-components';

interface ContainerProps {
  secondary?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  background-color: ${props => (props.secondary ? '#535353' : '#E0E0E0')};
  height: 36px;
  min-height: 36px;
  border-radius: ${props => (props.secondary ? '35px' : '10px')};
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding: 0px 10px;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const LabelText = styled.span`
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  top: -20px;
  left: 0px;
  position: absolute;
`;

export const TextInput = styled.input<ContainerProps>`
  width: 100%;
  border: 0;
  background: transparent;
  outline: none;
  padding-left: ${props => props.secondary && '35px'};
`;

export const SearchInput = styled.div`
  position: absolute;
  left: 10px;
  top: 8px;
`;
