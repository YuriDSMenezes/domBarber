import { ConvertToRem } from "helpers";
import styled from "styled-components";

interface ItemProps {
  active?: boolean
}

export const Container = styled.div`
height: 40px;
overflow-x: auto;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
&::-webkit-scrollbar {
  display: none;
}
`

export const Item = styled.div<ItemProps>`
width: fit-content;
height: 24px;
color: ${props => props.active ? '#1C1C1C' : '#fff'};
font-weight: 500;
background-color: ${props => props.active && '#FF9933'};
border-radius: 14px;
display: flex;
align-items: center;
padding: 6px;
font-size: ${ConvertToRem(12)};
margin: 0 10px;
`
