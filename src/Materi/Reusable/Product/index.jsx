import React from "react";
import styled from "styled-components";
import Counter from '../Counter';

const imgProduct = `https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1547&q=80`;

const CardContainer = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
    margin: auto;
    text-align: center;
    font-family: arial;
`;

const Image = styled.img`
    width: 100%;
`;

const Heading = styled.h1`
    font-size: 18px;
`;

const Price = styled.p`
    color: grey;
    font-size: 22px;
`;

const Description = styled.p`
    font-size: small;
`;

export default class Product extends React.Component{
    // Mendeklarasikan sebuah sebuah state dimana nilai mula-mula atau default = 0
    state = {
        value:0
    }
    // 
    handleValue = (value) =>{
        this.props.receiveValue(value);
    }
    render(){
        return(
            <div>
                <CardContainer>
                    <Image src={imgProduct} alt="img" />
                    <Heading>Title Card</Heading>
                    <Price>$199,99</Price>
                    <Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Description>
                    <Counter receiveValue={this.handleValue}/>
                </CardContainer>
            </div>
        )
    }
}


