import React from 'react';
import PropTypes from 'prop-types';

// class ClassComponent extends React.Component {
//     render() {
//       return (
//         <div>
//             <h4>//Komponen menggunakan ClassComponen//</h4>
//             <h1>Hello</h1>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
//                 Harum culpa enim, dicta ipsum architecto mollitia repellendus 
//                 qui maiores eveniet. Temporibus tenetur iusto tempore. Velit 
//                 ipsa doloremque eligendi atque, ad molestias.</p>
//         </div>
//       )
//     }
// }

// belajar props dari luar ke dalam
// class ClassComponent extends React.Component{
//   render(){
//     return(
//       <div>
//         <h1>Hello {this.props.nama}</h1>
//       </div>
//     )
//   }
// }

// belajar state dari dari dalam 
class ClassComponent extends React.Component{
  // CARA PANJANG
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     value:0
  //   }

  //   this.handlePlus = this.handlePlus.bind(this)
  //   this.handleMinus = this.handleMinus.bind(this)
  // }
  // handlePlus(){
  //   this.setState({value: this.state.value + 1})
  // }
  // handleMinus(){
  //   if(this.state.value > 0){
  //     this.setState({value: this.state.value - 1})
  //   }
  // }
  // CARA PANJANG
  
  // CARA SINGKAT
  state = {
      value:0
    }
  handlePlus = () => {
    this.setState({value: this.state.value + 1})
  }
  handleMinus = () => {
    if(this.state.value > 0){
      this.setState({value: this.state.value - 1})
    }
  }
  // CARA SINGKAT

  render(){
    return(
      <div>
        <h1>Hello {this.props.nama}</h1>
        <button onClick={this.handleMinus}>-</button>
        <span>{' '} {this.state.value}{' '}</span>
        <button onClick={this.handlePlus}>+</button>
      </div>
    )
  }
}
// cek type data
ClassComponent.propTypes = {
  nama: PropTypes.string.isRequired
};
export default ClassComponent;