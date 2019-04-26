import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

// En lugar de usas DIVS se usa React.Fragment, asi se evita el uso de divs vacios que son necesarios para enviar los elementos 
function Layout(props){
 return (
     <React.Fragment> 
         <Navbar/>
        {props.children}
        <Footer/> 
     </React.Fragment>
 )}


export default Layout;