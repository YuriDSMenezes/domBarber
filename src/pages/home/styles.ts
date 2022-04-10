import { ConvertToRem } from 'helpers'
import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
background: #1C1C1C;
height: 100%;
padding-top: 50px;
`

export const TitleContainer = styled.div`
color: #fff;
width: 220px;
margin: 0 auto;
text-align: center;
`

export const Title = styled.div`
font-weight: 500;
font-size: ${ConvertToRem(20)};
`

export const TitleDescription = styled.div`
margin-top: 5px;
font-weight: 400;
font-size: ${ConvertToRem(16)};
`

export const InputContainer = styled.div`
margin: 35px;
`

export const BannerContainer = styled.div`
width: 328px;
height: 157px;
border-radius: 17px;
margin: 40px auto;
text-align: center;
background: #fff;
`

export const HorizontalListContainer = styled.div`
  width: 100%;
  margin: 40px auto;
`

export const ServiceContainer = styled.div`
  text-align: center;
  color: #fff;
  width: 100%;
`

export const Description = styled.div`
margin-bottom: 30px;
`

export const SeeMore = styled.div`
  margin-top: 20px;
  color: #717171;
  font-size: ${ConvertToRem(10)};
  display: flex;
  justify-content: center;

  p {
    margin-right: 12px;
  }

`

export const Professional = styled.div`
margin: 50px 0 ;
  text-align: center;
  color: #fff;
  width: 100%;
`
