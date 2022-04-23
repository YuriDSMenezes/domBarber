import { ConvertToRem } from 'helpers';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 375px;
  background-color: #272727;
  color: #fff;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 60px;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const Logo = styled.div`
  width: 230px;
  height: 70px;
  margin-top: 50px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const LogoDescription = styled.div`
  font-weight: 400;
  font-size: ${ConvertToRem(24)};
  color: #ffffff;
  margin-top: 30px;
`;

export const MenuFooter = styled.div`
  width: 180px;
  margin-top: 50px;
`;

export const MenuContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  gap: 20px;
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: ${ConvertToRem(24)};
  line-height: 28px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 20px;
  text-align: left;
`;

export const MenuItems = styled.div`
  margin-bottom: 12px;
`;

export const ContactFooter = styled.div`
  margin-top: 50px;
`;
export const Contact = styled.div``;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  margin-top: 17px;
  gap: 10px;
`;

export const Icon = styled.div``;

export const Location = styled.div`
  margin-top: 50px;
`;

export const Map = styled.div``;
