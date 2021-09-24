import styled from "styled-components";

const Button = styled.button`
    display: inline-block ;
    border:none;
    border-radius: 5px;
    text-align: center;
    color: #ffffff;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 17px;
    background-color: #F02562;
    padding: 15px;
    cursor: pointer;

    &:disabled{
        background-color: #FF467E;
        pointer-events: none;
    }
`

export default Button