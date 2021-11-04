import React from "react";

export default class List extends React.Component{
    state = {
        users: ['Albert','Wawan','Adi']
    }
    render(){
        return(
            <div>
                <ul>
                {
                    this.state.users.map((users, i) => <li key={i}>{users}</li>)
                }
                </ul>
            </div>
        )
    }
}