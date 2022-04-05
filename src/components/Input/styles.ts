import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: #E0E0E0;
  height: 36px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin-top: 6px;
  padding: 0px 10px;
  justify-content: center;
  align-items: center;
`;

export const LabelText = styled.span`
  font-size: 14px;
  font-weight: 500;
  line-height: 0;
`;

export const TextInput = styled.input`
  width: 100%;
  border: 0;
  background: transparent;
  outline: none;
`;
