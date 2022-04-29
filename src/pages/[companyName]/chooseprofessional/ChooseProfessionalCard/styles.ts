import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #181818;
  border-radius: 11px;
  cursor: pointer;

  & + div {
    margin-top: 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  padding: 10px 20px;
  gap: 15px;
`;

export const ImgNameAndRatingProfessional = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EspecialistContainer = styled.div``;

export const ProfessionalImgContainer = styled.div`
  width: 75px;
  height: 75px;
  border-radius: 11px;

  img {
    position: relative;
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 11px;
  }
`;

export const ProfessionalName = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
  margin-top: 10px;
  margin-bottom: -5px;
`;

export const ProfessionalEspecialistText = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #ffffff;
`;

export const EspecialitiesContainer = styled.div`
  padding: 5px 0px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 5px;
  /* grid-template-rows: repeat(3, 1fr); */
  padding-bottom: 20px;
`;
