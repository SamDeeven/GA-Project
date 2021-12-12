import React, { Component } from "react";

export class User extends Component {
    





    render() {
       const {name,id,posts,username} = this.props;



        return (
            <div className="container">
                <a href={id} className="userName">{name}</a>
                <p>username: {username}</p>
            
            </div>



        )
    }
}

export default User