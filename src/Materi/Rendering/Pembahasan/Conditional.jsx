import React from "react";

export default class Conditional extends React.Component{
    state = {
        isLoading: true
    }
    render(){
        // const isLogin = true;
        // let message = '';
        // if(isLogin){
        //     return(
        //         <div>
        //             <h1>Anda Sudah Login</h1>
        //         </div>
        //     )
        // }else{
        //     return(
        //         <div>
        //             <h1>Silahkan Login Terlebih Dahulu</h1>
        //         </div>
        //     )
        // }

        // if(isLogin){
        //     message = 'Anda Sudah Login';
        // }else{
        //     message = 'Silahkan Login Terlebih Dahulu';
        // }

        
        // return(
        //     <div>
        //         {isLogin ? <h1>Anda Sudah Login</h1>: <h1>Silahkan Login Terlebih Dahulu</h1>}
        //     </div>
        // )
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 3000)
        return(
            <div>
            {this.state.isLoading ? <h1>Loading....</h1>: <h1>Selamat Datang Bro</h1>}
            </div>
        )
    }
}