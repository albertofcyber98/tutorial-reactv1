import React from "react";
import './style.scss';
import Title from "./Title";

export default class Sass extends React.Component{
    render(){
        return(
            <div>
                <Title />
                <button className="btn">Click Me Now</button>
            </div>
        )
    }
}