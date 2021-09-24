import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    flex-direction: column;
`

export const Member = styled.div`
    padding: 60px 50px 0 0;

    p{
    text-align: right;
    font-size: 14px;
    font-weight: 400;
    }

    span{
        cursor: pointer;
        color: #137ECB;
    }
`

export const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex: 1;
`

export const Title = styled.h1`
    font-size: 24px;
    font-style: normal;
    font-weight: 800;
    line-height: 29px;
`

export const ButtonCantainer = styled.div`
    display: flex;
    align-items: flex-start;
    margin-top: 25px;
`

export const Form = styled.form`
    width: max-content;
`