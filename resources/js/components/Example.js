import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';
import Menu from './Menu';
import Login from './Login';

function Example() {
    return (  
        
        localStorage.getItem('loginstatus') != 1?<div>
        <Login/>
     </div>:<div>
            <div className="wave -three"></div>
            <div id="spinner"></div>
            <div id="app" className="page">
                <div className="main-wrapper">                    
                   <Menu/>
                   <Footer/>                  
                </div>
            </div>        
        </div>       
    );
}
export default Example;
if (document.getElementById('admin_root')) {
    ReactDOM.render(<Example />, document.getElementById('admin_root'));
}