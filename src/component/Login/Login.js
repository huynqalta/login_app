import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'

class Login extends Component {
    constructor(props){
        let logggedIn=false;
        super(props);
        this.state={
            username:'',
            password:'',
            logggedIn
        }

    }
    onChange=(e)=>{
        var target=e.target;
        var name=target.name;
        var value=target.value;
        this.setState({
            [name]:value
        })
    }
    submitForm=(e)=>{
        e.preventDefault();
        const {username,password}=this.state;
        if(username==="A"&&password==="B"){
            localStorage.setItem("token","dsadasdasdasdsadasda")
            this.setState({
                logggedIn:true
            })
        }
    }
    render() {
        var {username,password,logggedIn}=this.state;
        console.log("tui:",this.state);
        if(logggedIn){
            return <Redirect to='/admin/' />
        }
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.submitForm}> 
                    <input type="text" placeholder="username" name="username" value={username} onChange={this.onChange}></input><br></br>
                    <input type="password" placeholder="password" name="password" value={password} onChange={this.onChange}></input><br></br>
                    <input type="submit"></input>
                </form>
            </div>
        );
    }
}

export default Login;