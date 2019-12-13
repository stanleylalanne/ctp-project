import React, {Component} from 'react';
//import '../styles/Frontpage.css';

class Navbar extends Component{
    render(){
        return(
        <nav class="navbar navbar-light bg-light static-top">
          <div class="container">
            <a class="navbar-brand" href="/">Fitch</a>
            <a class="btn btn-primary" href="/login">Sign In</a>
            <a class="btn btn-primary" href="/signup">Sign Up</a>
            <a class="btn btn-primary" href="/feed">Feed</a>
            <a class= "btn btn-primary" href="/posts/new">New Post</a>
            </div>
        </nav>
        )
    };
}

export default Navbar;