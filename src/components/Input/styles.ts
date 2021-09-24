import styled from "styled-components";


export const InputGroup = styled.div`
    label{
        display: block;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 17px;
        margin-top: 25px;
        margin-bottom: 8px;
    }

    input{
        background-color: #e8e8e8;
        border-radius: 5px;
        padding: 16px 20px;
        border: none;
        outline: none;
        width: 430px;
        border: 1px solid transparent;

        &:focus{
            background-color: #ffffff;
            border: 1px solid #fbb5cf;
        }
    }
`