import { ConvertToRem } from 'helpers';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  padding-bottom: 50px;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
  margin-bottom: 20px;
  text-align: center;
`;

export const OrangeTitle = styled.div`
  color: #ff9933;
  font-weight: 500;
  font-size: ${ConvertToRem(14)};
  margin-bottom: 5px;
`;

export const MediumText = styled.div`
  font-weight: 500;
  color: #fff;
  font-size: ${ConvertToRem(12)};
`;

export const SmallText = styled.div`
  font-weight: 400;
  color: #fff;
  font-size: ${ConvertToRem(13)};
`;

export const LargeText = styled.div`
  color: #fff;
  font-weight: 400;
  font-size: ${ConvertToRem(14)};
`;

export const ItemPhoto = styled.div``;

export const Photo = styled.div`
  width: 30px;
  height: 27px;
  border-radius: 6px;
  margin-bottom: 4px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 6px;
  }
`;

export const Date = styled.div`
  border-right: 1px solid #717171;
`;

export const Arrow = styled.div`
  margin-top: 20px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 26px;
  margin-top: 5px;
`;

export const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: #535353;
  position: absolute;
  bottom: -10px;
`;

export const CollapseContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const CollapseDate = styled.div`
  width: 110px;
  text-align: center;
  display: flex;
  padding-bottom: 20px;
`;

export const CollapseDescription = styled.div`
  margin-bottom: 30px;
  width: 150px;
`;

export const CollapseDay = styled.div`
  color: #ff9933;
  font-weight: 500;
  font-size: ${ConvertToRem(36)};
`;

export const CollapseService = styled.div`
  text-align: center;
`;

export const CollapseImage = styled.div`
  width: 43px;
  height: 40px;
  border-radius: 8px;
  margin: 4px auto;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const CollapseImageProduct = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 8px;
  margin: 4px auto;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const Quantity = styled.div`
  color: #fff;
  margin-top: 10px;
`;

export const Total = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  padding-bottom: 20px;
`;

export const Buttons = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ModalTitle = styled.div`
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 10px;
`;
export const ModalText = styled.div`
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 20px;
`;
export const ModalQuestion = styled.div`
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const ModalRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap: 10px;
`;
