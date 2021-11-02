import React from "react";
import styled from "styled-components";

const Qty = styled.p`
    font-size: 22px;
    width: 600px;
`;

const Button = styled.button`
    border: none;
    outline: 0;
    padding: 12px;
    color: darklategrey;
    background-color: lightgreen;
    text-align: center;
    cursor: pointer;
    font-size: 18px;

    &:hover{
        opacity 0.7;
    }
`;

export default class Counter extends React.Component{
    // Mendeklarasikan sebuah sebuah state dimana nilai mula-mula atau default = 0
    state = {
        value: 0
    }
    // Membuat sebuah function minus
    handleMin = () => {
        /* Mengeset sebuah state dimana 
        parameter pertama dalam sebuah fungsi melakukan
        eksekusi minus/plus ketika di klik
        dan parameter kedua untuk mengirim data pada
        sebuah nameClass yang ada pada produk>index.jsx 
        dimana isi dari receiveValue() yaitu this.state.value
        */
        this.setState(
            {value : this.state.value-1}, 
            () => this.props.receiveValue(this.state.value)
        );
    }
    handleMax = () => {
        this.setState(
            {value : this.state.value+1},
            () => this.props.receiveValue(this.state.value));
    }
    render(){
        return(
            <div style={{display:'flex'}}>
                <Button onClick={this.handleMin}>-</Button>
                <Qty>{this.state.value}</Qty>
                <Button onClick={this.handleMax}>+</Button>
            </div>
        )
    }
}