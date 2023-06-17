import styled from "styled-components"



export const Cashie = styled.div`

    display: flex;
    flex-direction: column;
    padding-bottom: 30px;


`

export const InputSty = styled.input`

    border: none;
    background-color:#fff;
    color:  ${(props) => props.theme.text};
    border-radius:8px;
    height:28px ;
    font-size:18px;
    padding: 10px;

`

export const LabelSty = styled.label`

    margin-bottom:10px;
    font-size:20px;


`