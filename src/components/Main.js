import React from 'react';
import './styles/Main.css'
import astronautas from '../images/astronauts.svg';
import platziConf from '../images/platziconf-logo.svg';
import {Link} from 'react-router-dom';

class Main extends React.Component{
    render(){
        return(
            <div className="mainContainer">
                <img src={platziConf} alt="" className="platziConf pl-5" />
                <img src={astronautas} alt="" className="astronautasLogo pl-5 pt-5" />
                <h1 className="pl-5 badgeInfoLetter"> Badge <hr/> Management <hr/> System </h1>
                <Link to="/badges" className="btn btn-primary buttonMain">
                Start
                </Link>
                    
            </div>
        )
    }
}

export default Main;