import { ConvertToRem } from 'helpers';
import styled from 'styled-components';

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
  width: 100px;
`;

export const CollapseDay = styled.div`
  color: #ff9933;
  font-weight: 500;
  font-size: ${ConvertToRem(36)};
`;

export const CollapseService = styled.div`
  text-align: center;
  width: 100px;
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

export const Change = styled.div`
  font-size: 10px;
  font-weight: 500;
  color: orange;
`;
