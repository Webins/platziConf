import React from 'react';
import {Link} from 'react-router-dom';
import './styles/footer.css';

class Footer extends React.Component{
    render(){
        return(
            <div className="footerContainer">
                <footer className="footer">
                    <h4> 
                    Designed by Webins
                    </h4>
                    <h4>See more on <Link to="www.platzi.com">Platzi</Link></h4>
                </footer>
            </div>
        )
    }
}

export default Footer;