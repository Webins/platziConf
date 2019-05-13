import React from 'react';
import './styles/notFound.css'
function NotFound(){
    return(
        <div className="notFoundContainer">
            <h1 className="infoNotFound"> 
            Something bad has happened
            <span className="errorX" role="img" aria-label="Error">❌</span>
            <h3 className="infoNotFound mt-5">
            We couldn't find the direction you looked for
             <span className="errorX" role="img" aria-label="sad">
             😥</span>
             </h3>
            </h1>
        </div>
    )}

export default NotFound;