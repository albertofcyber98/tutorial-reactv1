import React, { useState } from 'react';

// const FunctionalComponent = () => <h1>Menggunakan Functional Component</h1>;
// const FunctionalComponent = () =>{
//     return(
//         <div>
//             <h1>Membuat Functional Component</h1>
//         </div>
//     )
// }

// belajar props

// const FunctionalComponent = (props) => {
//     return(
//         <div>
//             <h1>Hello {props.nama}</h1>
//         </div>
//     )
// }

// distruct

// const FunctionalComponent = ({nama}) => {
//     return(
//         <div>
//             <h1>Hello {nama}</h1>
//         </div>
//     )
// }

// state
const FunctionalComponent = ({nama}) => {
    const [value, setValue] = useState(0);
    const handlePlus = () => {
        setValue(value + 1);
    }
    const handleMinus = () => {
        if(value > 0){
            setValue(value - 1);
        }
    }
    return(
        <div>
            <h1>Hello {nama}</h1>
            <button onClick={handleMinus}>-</button>
            <span>{' '} {value}{' '}</span>
            <button onClick={handlePlus}>+</button>
        </div>
    )
}
// Pemberi nilai default ketika props tidak dikirim
FunctionalComponent.defaultProps = {
    nama: 'user'
}
export default FunctionalComponent;