import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ServicesContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

export const ServiceImagesContainer = styled.div`
  width: 100%;
  height: 320px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  overflow-y: auto;
  margin-top: 40px;

  img {
    position: relative;
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;
