import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
`;

export const ChooseProfessionalContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Value = styled.div`
  font-weight: 500;
  font-size: 36px;
  margin: 10px 0 20px 0;
`;
export const Description = styled.div`
  font-weight: 400;
  font-size: 14px;
`;
export const Quantity = styled.div`
  display: flex;
  margin-top: 45px;
  width: 160px;
  height: 40px;

  input {
    width: 100px;
    border: 2px;
    text-align: center;
  }
`;
export const More = styled.div`
  background: orange;
  flex: 1;
  border-radius: 10px 0px 0px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
`;
export const Less = styled.div`
  background: orange;
  flex: 1;
  border-radius: 0px 10px 10px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
`;

export const Button = styled.div`
  width: 90%;
  margin-top: 40px;
`;
