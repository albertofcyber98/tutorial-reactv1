import React from "react";
import Inline from "./Inline";
import Plain from "./Plain";
import Sass from "./Sass";
import Module from "./Module";
import Styled from "./Styled";
import Bootstrap from "./Bootstrap";

export default class Styling extends React.Component{
    render(){
        return(
            <div>
                <Bootstrap/>
                <Styled />
                <Module />
                <Inline />
                <Sass />
                <Plain />
            </div>
        )
    }
}