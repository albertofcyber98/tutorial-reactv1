import React from "react";

export default class Variabel extends React.Component{
    state = {
        a:null,
        b:true,
        c:'',
        d:0
    }
    render(){
        return(
            <div>
                <div>a: {this.state.a}</div>
                <div>b: {this.state.b}</div>
                <div>c: {this.state.c}</div>
                <div>d: {this.state.d}</div>
                <div>d: {this.state.e}</div>
            </div>
        )
    }
}