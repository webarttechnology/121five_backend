import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';

class EditSponsor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pTitle: 'Add Company',
            name: '',
            email_id: '',
            mobile_no: '',
            logo: '',
            facebook: '',
            linkdin: '',
            twitter: ''           
        }

        this.handleNameInputChange = this.handleNameInputChange.bind(this);
        this.handleEmailIDInputChange = this.handleEmailIDInputChange.bind(this);
        this.handleMobileNoInputChange = this.handleMobileNoInputChange.bind(this);
        this.handleLogoInputChange = this.handleLogoInputChange.bind(this);
        this.handFacebookInputChange = this.handFacebookInputChange.bind(this);
        this.handleLinkdinInputChange = this.handleLinkdinInputChange.bind(this);
        this.handleTwitterInputChange = this.handleTwitterInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.validator = new SimpleReactValidator();
    }

    componentDidMount() {       
        axios.get('/api/company/'+ this.props.match.params.id, {
            headers: {
                'Authorization': `${'ABCDEFGHIJK'}`
            }
        })
            .then(response => {
                this.setState({
                    name: response.data.name,
                    email_id: response.data.email_id,
                    mobile_no: response.data.mobile_no,
                    logo: response.data.logo,
                    twitter: response.data.twitter,
                    facebook: response.data.facebook,
                    linkdin: response.data.linkdin,
                    update_id: response.data.id
                });
            })
            .catch((error) => {
                console.error(error)
            })
    }

    handleNameInputChange(event) {
        this.setState({
            name: event.target.value
        })
    }

    handleEmailIDInputChange(event) {
        this.setState({
            email_id: event.target.value
        })
    }

    handleMobileNoInputChange(event) {
        this.setState({
            mobile_no: event.target.value
        })
    }

    handFacebookInputChange(event){
        this.setState({
            facebook: event.target.value
        })
    }

    handleLinkdinInputChange(event){
        this.setState({
            linkdin: event.target.value
        })
    }

    handleTwitterInputChange(event){
        this.setState({
            twitter: event.target.value
        })
    }

    handleLogoInputChange(event){
        this.setState({
            image: event.target.files[0]
        })
    }

    handleFormSubmit(event) {
        event.preventDefault(); 
        if(this.validator.allValid()){
            let fd = new FormData()
        fd.append("image", this.state.image)
        fd.append("name", this.state.name)
        fd.append("email_id", this.state.email_id)
        fd.append("mobile_no", this.state.mobile_no)
        fd.append("facebook", this.state.facebook)
        fd.append("linkdin", this.state.linkdin)
        fd.append("twitter", this.state.twitter)
        fd.append("update_id", this.state.update_id)        
        axios.post('/api/company/update', fd,
            {
                headers: {
                    'Authorization': `${'ABCDEFGHIJK'}`
                },
            }
        ).then(response => {          
            this.props.history.push({
                pathname: '/author/company',
            });
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
                        <h4 className="page-title">{this.state.pTitle}</h4>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/author/dashboard" className="text-light-color">Dashboard</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">{this.state.pTitle}</li>
                        </ol>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                </div>
                                <form onSubmit={this.handleFormSubmit} className="form-horizontal" encType="multipart/form-data">
                                    <div className="card-body">

                                        <div className="row">
                                            <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
                                                <div className="card">
                                                    <div className="card-header">
                                                    </div>
                                                    <form onSubmit={this.handleFormSubmit} className="form-horizontal">
                                                        <div className="card-body">

                                                            <div className="row">                                                              

                                                                <div className="col-md-6 col-xs-6">
                                                                    <div className="form-group">
                                                                        <label>Company Name<span> *</span></label>
                                                                        <input type="text"
                                                                            onChange={this.handleNameInputChange}
                                                                            value={this.state.name}
                                                                            name="name" id="name" className="form-control" placeholder="Comapany Name" />
                                                                            {this.validator.message('company name', this.state.name, 'required', { className: 'text-danger' })}

                                                                    </div>
                                                                </div>

                                                                <div className="col-md-6 col-xs-12">
                                                                    <div className="form-group">
                                                                        <label>Email ID<span> *</span></label>
                                                                        <input type="text"
                                                                            onChange={this.handleEmailIDInputChange}
                                                                            value={this.state.email_id}
                                                                            name="email_id" id="email_id" className="form-control" placeholder="Email ID"/>
                                                                        {this.validator.message('email id', this.state.email_id, 'required|email', { className: 'text-danger' })}
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 col-xs-6">
                                                                    <div className="form-group">
                                                                        <label>Mobile No<span> *</span></label>
                                                                        <input type="text"
                                                                            onChange={this.handleMobileNoInputChange}
                                                                            value={this.state.mobile_no}
                                                                            name="mobile_no" id="mobile_no" className="form-control" placeholder="Mobile No" />
                                                                            {this.validator.message('mobile no', this.state.mobile_no, 'required|phone', { className: 'text-danger' })}
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-6 col-xs-12">
                                                                    <div className="form-group">
                                                                        <label>Logo<span> *</span></label>
                                                                        <input type="file"
                                                                            onChange={this.handleLogoInputChange}
                                                                            name="logo" id="logo" className="form-control"/>
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-6 col-xs-6">
                                                                    <div className="form-group">
                                                                        <label>Facebook link<span> *</span></label>
                                                                        <input type="text"
                                                                            onChange={this.handFacebookInputChange}
                                                                            value={this.state.facebook}
                                                                            name="facebook" id="facebook" className="form-control" placeholder="Facebook Link" />
                                                                            {this.validator.message('facebook link', this.state.facebook, 'required|url', { className: 'text-danger' })}
                                                                    </div>
                                                                </div>


                                                                <div className="col-md-6 col-xs-6">
                                                                    <div className="form-group">
                                                                        <label>Linkedin<span> *</span></label>
                                                                        <input type="text"
                                                                            onChange={this.handleLinkdinInputChange}
                                                                            value={this.state.linkdin}
                                                                            name="linkdin" id="linkdin" className="form-control" placeholder="Linkedin Link" />
                                                                            {this.validator.message('linkedin', this.state.linkdin, 'required|url', { className: 'text-danger' })}
                                                                    </div>
                                                                </div>


                                                                <div className="col-md-6 col-xs-6">
                                                                    <div className="form-group">
                                                                        <label>Twitter<span> *</span></label>
                                                                        <input type="text"
                                                                            onChange={this.handleTwitterInputChange}
                                                                            value={this.state.twitter}
                                                                            name="twitter" id="twitter" className="form-control" placeholder="Twitter Link" />
                                                                            {this.validator.message('twitter', this.state.twitter, 'required|url', { className: 'text-danger' })}
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