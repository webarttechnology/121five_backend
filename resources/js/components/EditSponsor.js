import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';

class EditSponsor extends Component {

    constructor(props){
        super(props);
        this.state = {
            title: 'Update Sponsor',
            name: '',
            password: '',
            company_name: '',
            email_id: '',
            mobile_no: '',
            address: '',
            url: '',
            is_active: '',
            message: '',
        }     
        
        this.handleCompanyNameInputChange=this.handleCompanyNameInputChange.bind(this);
        this.handlePasswordInputChange=this.handlePasswordInputChange.bind(this);
        this.handleEmailIdInputChange=this.handleEmailIdInputChange.bind(this);
        this.handleMobileNoInputChange=this.handleMobileNoInputChange.bind(this);
        this.handleAddressInputChange=this.handleAddressInputChange.bind(this);
        this.handleUrlInputChange=this.handleUrlInputChange.bind(this);
        this.handleIsActiveInputChange=this.handleIsActiveInputChange.bind(this);
        this.handleFormSubmit=this.handleFormSubmit.bind(this);
        this.handleNameInputChange=this.handleNameInputChange.bind(this);
        this.validator = new SimpleReactValidator();
    }

    componentDidMount(){
        axios.get('/api/sponsor/' + this.props.match.params.id, {
            headers: {
              'Authorization': `${'ABCDEFGHIJK'}`
            }
          })
        .then(response=>{
            this.setState({
                           name: response.data.name,
                           password: '',
                           company_name: response.data.company_name, 
                           email_id: response.data.email_id,
                           mobile_no: response.data.mobile_no,
                           address: response.data.address,
                           url: response.data.url,
                           is_active: response.data.is_active
                        });
        })
        .catch((error) => {
            console.error(error)
          })
    }

    
    handleNameInputChange(event){
        this.setState({
            name: event.target.value
        })
    }  
    
    handlePasswordInputChange(event){
        this.setState({
            password: event.target.value
        })
    }

    handleCompanyNameInputChange(event){
        this.setState({
            company_name: event.target.value
        })
    }

    handleEmailIdInputChange(event){
        this.setState({
            email_id: event.target.value
        })
    }

    handleMobileNoInputChange(event){
        this.setState({
            mobile_no: event.target.value
        })
    }

    handleAddressInputChange(event){
        this.setState({
            address: event.target.value
        })
    }

    handleUrlInputChange(event){
        this.setState({
            url: event.target.value
        })
    }

    handleIsActiveInputChange(event){
        this.setState({
            is_active: event.target.value
        })
    }

    handleFormSubmit(event){        
        event.preventDefault();
        if(this.validator.allValid()){
            axios.put('/api/sponsor/'+ this.props.match.params.id, {
                name: this.state.name,
                password: this.state.password,
                company_name: this.state.company_name,
                email_id: this.state.email_id,
                mobile_no: this.state.mobile_no,
                address: this.state.address,
                url: this.state.url,
                is_active: this.state.is_active
            },
            {
                headers: {
                    'Authorization': `${'ABCDEFGHIJK'}`
                  },
            }
            ).then(response => {
                if(response.status == 201){
                    this.props.history.push({ 
                        pathname: '/author/sponsor',
                        state: {
                            message: "Data has been updated successfully!"
                        }
                       });
                
                }else{
                    this.setState({
                        message: "Email ID already exists"
                    });
                    this.props.history.push({ 
                        pathname: '/author/sponsor/edit/'+this.props.match.params.id,
                       
                       }); 
                }
    
            }).catch(err => console.log(err))   
        }else{
            this.validator.showMessages();
            this.forceUpdate();
        }
    }
    render() {
        return (
        <div className="app-content">
        <div className="section">
            <div className="page-header">
                <h4 className="page-title">{ this.state.title }</h4>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/author/dashboard" className="text-light-color">Dashboard</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">{this.state.title }</li>
                </ol>
            </div>
            <div className="row">
                <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
                    <div className="card">
                        <div className="card-header">
                        <span style={{ color: 'red'}}>{this.state.message}</span>
                        </div>
                        <form onSubmit={this.handleFormSubmit} className="form-horizontal">
                            <div className="card-body">

                                <div className="row">

                                <div className="col-md-6 col-xs-6">
                                        <div className="form-group">
                                            <label>Sponsor Name<span> *</span></label>
                                            <input type="text" 
                                            onChange={this.handleNameInputChange}
                                            value={this.state.name}
                                            name="name" id="name" className="form-control" placeholder="sponsor Name" />
                                            {this.validator.message('Sponsor name', this.state.name, 'required|alpha_num_dash_space', { className: 'text-danger' })}

                                        </div>
                                    </div>

                                    <div className="col-md-6 col-xs-6">
                                        <div className="form-group">
                                            <label>Password<span> *</span></label>
                                            <input type="password" 
                                            onChange={this.handlePasswordInputChange}
                                            value={this.state.password}
                                            name="password" id="password" className="form-control" placeholder="Password" />

                                        </div>
                                    </div>

                                    <div className="col-md-6 col-xs-6">
                                        <div className="form-group">
                                            <label>Company Name<span> *</span></label>
                                            <input type="text" 
                                            onChange={this.handleCompanyNameInputChange}
                                            value={this.state.company_name}
                                            name="company_name" id="company_name" className="form-control" placeholder="Company Name" />
                                            {this.validator.message('Comapany name', this.state.company_name, 'required|alpha_num_dash_space', { className: 'text-danger' })}

                                        </div>
                                    </div>

                                    <div className="col-md-6 col-xs-6">
                                        <div className="form-group">
                                            <label>Email ID<span> *</span></label>
                                            <input type="text" 
                                            onChange={this.handleEmailIdInputChange}
                                            value={this.state.email_id}
                                            name="email_id" id="email_id" className="form-control" placeholder="Email ID" />
                                            {this.validator.message('email id', this.state.email_id, 'required|email', { className: 'text-danger' })}

                                        </div>
                                    </div>

                                    <div className="col-md-6 col-xs-6">
                                        <div className="form-group">
                                            <label>Contact No<span> *</span></label>
                                            <input type="text" 
                                            onChange={this.handleMobileNoInputChange}
                                            value={this.state.mobile_no}
                                            name="mobile_no" id="mobile_no" className="form-control" placeholder="Mobile No" />
                                            {this.validator.message('mobile no', this.state.mobile_no, 'required|phone', { className: 'text-danger' })}

                                        </div>
                                    </div>

                                    <div className="col-md-6 col-xs-6">
                                        <div className="form-group">
                                            <label>Address<span> *</span></label>
                                            <input type="text" 
                                            onChange={this.handleAddressInputChange}
                                            value={this.state.address}
                                            name="address" id="address" className="form-control" placeholder="Address" />
                                            {this.validator.message('address', this.state.address, 'required', { className: 'text-danger' })}

                                        </div>
                                    </div>

                                    <div className="col-md-6 col-xs-6">
                                        <div className="form-group">
                                            <label>Website<span> *</span></label>
                                            <input type="text" 
                                            onChange={this.handleUrlInputChange}
                                            value={this.state.url}
                                            name="url" id="url" className="form-control" placeholder="Website" />
                                            {this.validator.message('url', this.state.url, 'required|url', { className: 'text-danger' })}

                                        </div>
                                    </div>

                                    <div className="col-md-6 col-xs-6">
                                        <div className="form-group">
                                            <label>Status<span> *</span></label>
                                            <select name="is_active" id="is_active" className="form-control" onChange={this.handleIsActiveInputChange}>
                                                <option value="">Change Status</option>
                                                <option value="1" selected={1 == this.state.is_active}>Active</option>
                                                <option value="0" selected={0 == this.state.is_active}>Inactive</option>
                                            </select>
                                            {this.validator.message('status', this.state.is_active, 'required', { className: 'text-danger' })}

                                        </div>
                                    </div>                                   
                                </div>                               
                               
                                <div className="card-footer text-right border-top-0">
                                    <input type="submit" className="btn btn-primary" name="Submit" id="Submit" value="Save" />
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
        )
    }   
}

export default EditSponsor;