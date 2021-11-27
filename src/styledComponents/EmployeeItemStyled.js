import styled, {css} from "styled-components";


export const BlockForEmployee = styled.div`
  border: 1px solid #fff;
  width: 200px;
  margin-bottom: 10px;
`

export const BlockForEmp = styled.div`

  border: 1px solid red;
  padding: 10px;

`

export const Text = styled.span`
    color: ${props => props.color};
`

export const MainText = styled.h2`
  color: #fff;
  font-weight: 600;
  font-size: 1.2rem;
`


export const RadioButton = styled.input`
  cursor: pointer;

`

export const BlockRadioButton = styled.div`

`

export const TextInformRadioButton = styled.span`
  color: #fff;
  cursor: pointer;
`
