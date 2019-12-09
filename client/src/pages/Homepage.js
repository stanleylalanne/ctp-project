import React from 'react';
import Loading from '../components/Loading';
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron'
import Features from '../components/Features';
import FeaturesDetail from '../components/FeaturesDetail';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import '../styles/Frontpage.css';
class Homepage extends React.Component{
    state = {
        loading :false,
    }

render(){
    if(this.state.loading){
        return <Loading></Loading>;
    }
    return(
        <div>
           <Navbar/>
           <Jumbotron/>
           <Features/>
           <FeaturesDetail/>
           <CallToAction/>
           <Footer/>
        </div>
    );
}
}

export default Homepage;

