import React from "react";
import styled from "styled-components";

const FormPlace = styled.div`
    margin: 100px auto;
    padding: 20px;
    border: 1px solid blue
`;
export default class FormElement extends React.Component{
    state = {
        nama:'',
        jurusan:'',
        gender:'',
        alamat:'',
        member:false
    }
    handleSubmit = (e) => {
        e.preventDefault();
        alert(`
        nama: ${this.state.nama}
        jurusan: ${this.state.jurusan}
        gender: ${this.state.gender}
        alamat: ${this.state.alamat}
        member: ${this.state.member ? 'YES':'NO'}
        `);
        this.setState({
            nama:'',
            jurusan:'',
            gender:'',
            alamat:'',
            member:false
        })
    }
    render(){
        return(
            // <div>
            //     <FormPlace>
            //         <form>
            //             <label>
            //                 Nama :
            //             </label>
            //                 <input type="text" name="nama" onChange={ e => this.setState({nama: e.target.value},() => console.log(this.state)) } />
            //                 <br />
            //             <label>
            //                 Jurusan
            //             </label>
            //                 <select name="jurusan" onChange={ e => this.setState({jurusan: e.target.value}, () => console.log(this.state))}>
            //                     <option value="">--Pilih Jurusan--</option>
            //                     <option value="Teknik Informatika">Teknik Informatika</option>
            //                     <option value="Sistem Informasi">Sistem Informasi</option>
            //                     <option value="Manajemen Informatika">Manajemen Informatika</option>
            //                     <option value="Rekayasa Perangkat Lunak">Rekayasa Perangkat Lunak</option>
            //                 </select>
            //                 <br />
            //             <label>Jenis Kelamin</label>
            //                 <input type="radio" name="gender" value="laki-laki" onChange={e => this.setState({gender: e.target.value}, () => console.log(this.state))} />Laki-laki
            //                 <input type="radio" name="gender" value="perempuan" onChange={e => this.setState({gender: e.target.value}, () => console.log(this.state))} />Perempuan
            //                 <br />
            //             <label>
            //                 Alamat
            //             </label>
            //                 <textarea cols="30" rows="10" name="alamat" onChange={ e => this.setState({alamat: e.target.value},() => console.log(this.state))}/>
            //                 <br />
            //             <label>
            //                 Member
            //             </label>
            //                 <input type="checkbox"  name="member" checked={this.state.member} onChange={e => this.setState({member: e.target.checked}, () => console.log(this.state))}/>
            //                 <br />
            //             <input type="submit" value="submit"/>
            //         </form>
            //     </FormPlace>
            // </div>
            <div>
                <FormPlace>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Nama :
                        </label>
                            <input 
                            type="text" 
                            name="nama" 
                            onChange={ e => this.setState({nama: e.target.value}) } 
                            defaultValue={this.props.nama}/>
                            <br />
                        <label>
                            Jurusan
                        </label>
                            <select name="jurusan" onChange={ e => this.setState({jurusan: e.target.value})}>
                                <option value="">--Pilih Jurusan--</option>
                                <option value="Teknik Informatika">Teknik Informatika</option>
                                <option value="Sistem Informasi">Sistem Informasi</option>
                                <option value="Manajemen Informatika">Manajemen Informatika</option>
                                <option value="Rekayasa Perangkat Lunak">Rekayasa Perangkat Lunak</option>
                            </select>
                            <br />
                        <label>Jenis Kelamin</label>
                            <input type="radio" name="gender" value="laki-laki" onChange={e => this.setState({gender: e.target.value})} />Laki-laki
                            <input type="radio" name="gender" value="perempuan" onChange={e => this.setState({gender: e.target.value})} />Perempuan
                            <br />
                        <label>
                            Alamat
                        </label>
                            <textarea cols="30" rows="10" name="alamat" onChange={ e => this.setState({alamat: e.target.value})}/>
                            <br />
                        <label>
                            Member
                        </label>
                            <input type="checkbox"  name="member" checked={this.state.member} onChange={e => this.setState({member: e.target.checked})}/>
                            <br />
                        <input type="submit" value="submit"/>
                    </form>
                </FormPlace>
            </div>
        )
    }
}