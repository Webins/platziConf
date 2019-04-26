 import React from 'react';
 import './styles/Badge.css';
 import confLogo from '../images/badge-header.svg';
 import platziLogo from '../images/platzi-logo.png';
 import Gravatar from './Gravatar';

 class Badge extends React.Component {
   render() {
     return (
       <div className="Badge">
         <div className="Badge__header">
           <img src={confLogo} alt="Logo de la conferencia" />
         </div>

         <div className="Badge__section-name">
           <Gravatar
             className='Badge__avatar2'
             email={this.props.email}
           />
           <h1>
             {this.props.firstName}<br/>{this.props.lastName}
           </h1>
         </div>

         <div className="Badge__section-info">
           <h4 className="font-weight-bold">{this.props.title}</h4>
           <h5 className="font-weight-light">
             {this.props.email}
           </h5>
           <div>@{this.props.socialMedia}</div>
         </div>
         <div className="Badge__footer">#platziconf
         </div>
           <div className="platziLogo">
            <img src={platziLogo} className="platziLogoImg" alt="platziLogo"/>
          </div>
       </div>
     );
   }
 }

 export default Badge;