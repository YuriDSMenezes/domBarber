import { ConvertToRem } from 'helpers';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  height: 100%;
  color: #fff;
  font-weight: 500;
  text-align: center;

  @media (min-width: 768px) {
    background: #161616;
    width: 855px;
    margin: 0 auto;
    border-radius: 22px;
  }

  .react-calendar {
    @media (min-width: 768px) {
      background: #161616;
    }
    background: #272727;
    color: #fff;
    width: 100%;
    border: none;
    span,
    button {
      color: #fff;
    }
    abbr[title] {
      text-decoration: none;
    }
    .react-calendar__tile--active {
      background: transparent;
      abbr {
        background-color: #ff9933;
        border-radius: 50%;
        padding: 10px 15px;
      }
    }
    .react-calendar__tile {
      padding: 10px 0;
    }
  }
  .react-calendar__navigation {
    display: none;
  }
  .react-calendar__year-view__months {
    margin-bottom: 20px;
    flex-wrap: nowrap !important;
    overflow-x: scroll !important;
    &::-webkit-scrollbar {
      display: none;
    }
    background: transparent !important;
    button {
      border: none !important;
      color: #717171 !important;
    }
  }
  .react-calendar__year-view .react-calendar__tile {
    padding: 25px 0;
    flex: 0 0 20% !important;
  }
  .react-calendar__tile--now {
    background: transparent;
  }
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background: transparent;
    abbr {
      background: #ff9933;
      color: #000;
      padding: 2px 10px;
      border-radius: 5px;
    }
  }
`;

export const CalendarContainer = styled.div`
  margin: 30px 0 40px 0;
`;

export const Title = styled.div`
  font-size: ${ConvertToRem(18)};
  margin: 12px 0 50px 0;
`;

export const Description = styled.div`
  font-size: ${ConvertToRem(14)};
  margin: 30px 0 20px 0;
`;

export const HoursContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 10px;
`;

export const Hour = styled.div`
  width: 70%;
  margin: 0 auto;
  height: 100%;
  padding: 5px 0px;
  p {
    margin: 0;
  }
  &:hover {
    background: #ff9933;
    border-radius: 4px;
    color: #000;
  }
`;

export const ServiceContainer = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const Service = styled.div`
  display: flex;
  align-items: flex-start;
  height: 55px;
  width: 135px;
`;

export const Image = styled.div`
  width: 43px;
  height: 40px;
  border-radius: 11px;
  margin-right: 8px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 11px;
  }
`;

export const ServiceTitle = styled.div`
  color: #ff9933;
  font-size: ${ConvertToRem(14)};
  font-weight: 500;
`;

interface ServiceDescriptionProps {
  hasTitle?: boolean;
}

export const ServiceDescription = styled.div<ServiceDescriptionProps>`
  color: #fff;
  font-weight: 500;
  font-size: ${ConvertToRem(12)};
  text-align: left;
  margin-top: ${props => props.hasTitle && '6px'};
`;

export const ServiceText = styled.div`
  color: #fff;
  font-weight: 400;
  font-size: ${ConvertToRem(10)};
`;

export const NextContainer = styled.div`
  background: #1c1c1c;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 20px;
`;

export const Date = styled.div``;

export const NextButton = styled.div`
  background: #ff9933;
  border-radius: 6px;
  width: 135px;
  height: 36px;
  display: grid;
  place-items: center;
  color: #1c1c1c;
`;
