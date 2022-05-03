import { ConvertToRem } from 'helpers';
import { HTMLAttributes } from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  height: 100%;
  color: #fff;
  font-weight: 500;
  text-align: center;
  margin: 0 16px;

  @media (min-width: 768px) {
    background: #161616;
    width: 855px;
    margin: 0 auto;
    border-radius: 22px;
    padding-top: 0px;
  }

  .react-calendar__tile:disabled {
    display: none;
  }

  .react-calendar__year-view__months {
    .react-calendar__tile--active {
      background: transparent;
      abbr {
        background: #ff9933;
        border-radius: 5px;
        color: black !important;
        padding: 5px 10px;
      }
    }
    .react-calendar__tile {
      padding: 5px 0px !important;
    }
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
        padding: 1px 10px;
        border-radius: 5px;
        color: #000;
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

interface TitleProps {
  mobile?: boolean;
}

export const Title = styled.div<TitleProps>`
  font-size: ${ConvertToRem(18)};
  margin: 40px 0 50px 0;
  text-align: center;
  color: #fff;
  display: ${props => props.mobile && 'none'};
  @media (min-width: 768px) {
    width: 100%;
    font-weight: 500;
    font-size: ${ConvertToRem(36)};
  }
`;

export const Description = styled.div`
  font-size: ${ConvertToRem(14)};
  margin: 30px 0 20px 0;
  @media (min-width: 768px) {
    padding: 50px 0 20px 0;
    font-weight: 500;
    font-size: ${ConvertToRem(24)};
  }
`;

export const HoursContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 10px;
  @media (min-width: 768px) {
    margin-bottom: 30px;
  }
`;

interface HourProps extends HTMLAttributes<HTMLDivElement> {
  active?: boolean;
}

export const Hour = styled.div<HourProps>`
  width: 70%;
  margin: 0 auto;
  height: 100%;
  padding: 5px 0px;
  cursor: pointer;
  p {
    margin: 0;
  }
  &:hover {
    background: #ff9933;
    border-radius: 4px;
    color: #000;
  }
  @media (min-width: 768px) {
    width: 30%;
  }

  background: ${props => props.active && '#ff9933'};
  color: ${props => props.active && 'black'};
`;

export const ServiceContainer = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    margin: 0;
    width: 50%;
  }
`;

export const Service = styled.div`
  display: flex;
  align-items: flex-start;
  height: 55px;
  width: 135px;
  @media (min-width: 768px) {
    width: 100%;
  }
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
  margin-top: 40px;
  @media (min-width: 768px) {
    background: #272727;
    margin: 0;
    flex-direction: column;
    justify-content: center;
  }
`;

export const Date = styled.div`
  @media (min-width: 768px) {
    margin-bottom: 7px;
  }
`;

export const NextButton = styled.div`
  background: #ff9933;
  border-radius: 6px;
  width: 135px;
  height: 36px;
  display: grid;
  place-items: center;
  color: #1c1c1c;
  cursor: pointer;
`;

export const Row = styled.div`
  display: block;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #272727;
    border-radius: 0 0 10px 10px;
    height: 105px;
    padding: 0 20px;
  }
`;
