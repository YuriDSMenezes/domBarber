import { ConvertToRem } from "helpers";
import styled from "styled-components";

export const Container = styled.div`
height: 220px;
overflow-x: auto;
display: flex;
width: 100%;
@media (min-width: 500px) {
  justify-content: center;
}

&::-webkit-scrollbar {
  display: none;
}
`

export const Item = styled.div`
height: 100%;
min-width: 151px;
font-weight: 500;
border-radius: 14px;
display: flex;
align-items: center;
padding: 6px;
font-size: ${ConvertToRem(12)};
margin: 0 10px;
border-radius: 17px;
span {
  width: 100% !important;
  height: 100% !important;
  border-radius: 17px;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}
`
