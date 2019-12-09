import React, {Component} from 'react';
//import '../styles/Frontpage.css';

class Navbar extends Component{
    render(){
        return(
        <nav class="navbar navbar-light bg-light static-top">
          <div class="container">
            <a class="navbar-brand" href="/">Fitch</a>
            <a class="btn btn-primary" href="#">Sign In</a>
            </div>
        </nav>
        )
    };
}

export default Navbar;