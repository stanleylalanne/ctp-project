import React, {Component} from 'react';
import '../styles/Auth.css';
import {Redirect} from 'react-router-dom';
import auth from '../services/auth';
import Navbar from '../components/Navbar';


class Login extends Component{
    state = {
        redirectToReferrer : false,
        failed: false,
        email: "",
        password: "",
    }
    fieldChanged = (name)=>{
        return (event)=>{
            let {value} = event.target;
            this.setState({[name]:value});
        }
    }

    login = (e)=>{
        e.preventDefault();
        let {email, password} = this.state;

        auth.authenticate(email,password)
            .then( (user) => {
                this.setState({redirectToReferrer:true});
            })
            .catch( (err)=>{
                this.setState({failed:true});
            });
    }
    render(){

        const {from } = this.props.location.state || {from: {pathname: '/'}};
        const {redirectToReferrer, failed} = this.state;

        if(redirectToReferrer){
            return <Redirect to={from}/>
        }
        let err = "";
        if(failed){
            err = <div className="alert alert-danger" role="alert">Login Failed</div>
        }

        return(
            <div>
                <Navbar/>
            <section class="sign-in">
            <div class="container">
                <div class="signin-content">
                    <div class="signin-image">
                        <figure><img src="https://i.ibb.co/YNnZXWp/signin-image.jpg" alt="login image"/></figure>
                        <a href="/signup" class="signup-image-link">Create an account</a>
                    </div>

                    <div class="signin-form">
                        <h2 class="form-title">Log In</h2>
                        <form onSubmit={this.login} class="register-form" id="login-form">
                            <div class="form-group">
                                {err}
                                <label for="your_name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input 
                                type="email" 
                                name="email" 
                                id="your_name" 
                                placeholder="Email"
                                value = {this.state.email}
                                onChange = {this.fieldChanged('email')}
                                />
                            </div>
                            <div class="form-group">
                                <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
                                <input type="password" 
                                name="password" 
                                id="your_pass" 
                                placeholder="Password"
                                value = {this.state.password}
                                onChange = {this.fieldChanged('password')}
                                />
                            </div>
                            <div class="form-group">
                                <input type="checkbox" name="remember-me" id="remember-me" class="agree-term" />
                                <label for="remember-me" class="label-agree-term"><span><span></span></span>Remember me</label>
                            </div>
                            <div class="form-group form-button">
                                <input type="submit" name="signin" id="signin" class="form-submit" value="Log in"/>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </section>
        </div>
        )
    };
}

export default Login;