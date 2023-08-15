import styled from 'styled-components/macro'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const MemeGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 550px;
  padding-top: 32px;
  padding-bottom: 32px;
  padding-left: 24px;
  padding-right: 24px;
  @media screen and (min-width: 768px) {
    width: 85%;
    max-width: 1140px;
  }
`

export const Heading = styled.h1`
  color: #35469c;
  font-family: 'Open Sans';
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    width: 36px;
    text-align: left;
  }
`

export const FormAndMemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
  }
`

export const MemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  height: 300px;
  padding-left: 100px;
  padding-right: 100px;
  margin-bottom: 50px;
  @media screen and (min-width: 768px) {
    width: 48%;
    margin-top: 5px;
    margin-bottom: 20px;
  }
`

export const TextContent = styled.p`
  color: #ffffff;
  font-size: ${props => props.activeFontSizeId}px;
  font-weight: 600px;
  font-family: 'Open Sans';
`

export const MemeGeneratorForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    width: 48%;
  }
`

export const CustomLabel = styled.label`
  color: #7e858e;
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: 12px;
  line-height: 1.4;
  margin-bottom: 0px;
`

export const CustomInput = styled.input`
  color: #5a7184;
  background-color: #fff;
  font-family: 'Open Sans';
  height: 40px;
  border: 1px solid #fff;
  border-radius: 5px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 15px;
  padding-left: 15px;
  margin-top: 5px;
  margin-bottom: 20px;
  outline: none;
`
export const CustomSelect = styled.select`
  color: #1e293b;
  background-color: #fff;
  font-family: 'Open Sans';
  height: 40px;
  border: 1px solid #fff;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  outline: none;
`

export const CustomOption = styled.option`
  font-size: 16px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 14px;
  padding-left: 14px;
`

export const GenerateButton = styled.button`
  color: #fff;
  background-color: #0b69ff;
  font-family: 'Open Sans';
  font-size: 16px;
  font-weight: 600;
  border-radius: 6px;
  border: none;
  min-width: 25px;
  max-width: 150px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 24px;
  cursor: pointer;
  margin-top: 15px;
  outline: none;
`
