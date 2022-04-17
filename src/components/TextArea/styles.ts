import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: #535353;
  height: 36px;
  min-height: 36px;
  border-radius: 7px;
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

export const TextArea = styled.textarea`
  width: 100%;
  border: 0;
  background: #535353;
  outline: none;
  border-radius: 7px;
  resize: none;
`;
