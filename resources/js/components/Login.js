import React from 'react';
import axios from 'axios';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            errormsg: '',
        }
        this.handleEmailInputChange = this.handleEmailInputChange.bind(this);
        this.handlePasswordInputChange = this.handlePasswordInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
    handleEmailInputChange(event) {
        this.setState({
            email: event.target.value,
            errormsg: ''
        })
    }

    handlePasswordInputChange(event) {
        this.setState({
            password: event.target.value,
            errormsg: ''
        })
    }
    handleFormSubmit(event) {
        event.preventDefault();
        axios.post('/api/login', {
            email: this.state.email,
            password: this.state.password,        
        },          
        ).then(response => {
            if(response.status == 201){ 
                localStorage.setItem('login_token_code', response.data.remember_token);
                localStorage.setItem('loginstatus', 1);
                window.location.reload();               
            }else{

                this.setState({
                    errormsg: response.data.message,
                })
                
            }
        
        }).catch(err => console.log(err))
    }

    
    render(){
        return(
            <section className="section bg-primary">
                <div className="container">
                     <div className="">
                        <div className="single-page">
                                
                                <div className="wrapper wrapper2">
                                    
                                    <form  id="login" className="card-body form-horizontal" tabIndex="500" onSubmit={this.handleFormSubmit}>
                                        <div className="">
                                         <img src={window.location.origin+'/asset/logo.png'} width="120px" alt="Logo"/>
                                        </div>
                                        <h3 className="text-dark">Login to your account</h3>                                       
                                        <span style={{ color:'red' }}>{ this.state.errormsg }</span>
                                        <div className="mail">
                                            <input type="text" name="email" id="email" className="form-control" placeholder="Email ID" onChange={this.handleEmailInputChange}/>
                                        </div>
                                        <div className="passwd">
                                            <input type="password" name="password" className="form-control" id="password" placeholder="Password" onChange={this.handlePasswordInputChange}/>
                                        </div>
                                        <div className="submit">
                                            <input className="btn btn-primary btn-block" type="submit" name="login" value="Sign In"/>
                                        </div>
                                     </form>

                                </div>
                            <div className="login-footer">
                                <br />
                                <div className="text-center">
                                    &copy; 121five.com 2021
                                </div>
                            </div>
                        </div>

                    </div> 
                </div>
            </section>
        )
    }
}

export default Login;