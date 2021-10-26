import React from "react";
import styled from "styled-components";

const Button = styled.button`
    color: white;
    background-color: rgb(0, 145, 189);
    border: 3px solid rgb(0, 145, 189);
    margin-top: 20px;
    margin-left: 10px;
    padding: 10px 28px;
    &:hover{
        color: rgb(0, 146, 73);
        background-color: white;
        border: 3px solid rgb(0, 145, 189);
    }
`;

export default class Styled extends React.Component{
    render(){
        return(
            <div>
                <Button>Styled</Button>
            </div>
        )
    }
}