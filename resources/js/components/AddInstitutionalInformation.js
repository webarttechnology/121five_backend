import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';
class AddInstitutionalInformation extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            url: '',
            pTitle: 'Add Institutional Information'
        }     
        
        this.handleTitleInputChange=this.handleTitleInputChange.bind(this);
        this.handleURLInputChange=this.handleURLInputChange.bind(this);
        this.handleFormSubmit=this.handleFormSubmit.bind(this);
        this.validator = new SimpleReactValidator();
    }

    handleTitleInputChange(event){
        this.setState({
            title: event.target.value,
        })
    }
    handleURLInputChange(event){
        this.setState({
            url: event.target.value
        })
    }    

    handleFormSubmit(event){
        event.preventDefault();
        if(this.validator.allValid()){           
            axios.post('/api/institute', {
                title: this.state.title,
                url: this.state.url
            },
            {
                headers: {
                    'Authorization': `${'ABCDEFGHIJK'}`
                  },
            }
            ).then(response => {
                console.log(response);
                this.setState({
                    title: '',
                    url: ''
                }),
                this.props.history.push({ 
                    pathname: '/author/institutional-information',
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
                        <form onSubmit={this.handleFormSubmit} className="form-horizontal">
                            <div className="card-body">

                                <div className="row">
                                    <div className="col-md-6 col-xs-6">
                                        <div className="form-group">
                                            <label>Title<span> *</span></label>
                                            <input type="text" 
                                            onChange={this.handleTitleInputChange}
                                            value={this.state.title}
                                            name="title" id="title" className="form-control" placeholder="Title" />
                                            {this.validator.message('title', this.state.title, 'required', { className: 'text-danger' })}

                                        </div>
                                    </div>   

                                    <div className="col-md-6 col-xs-6">
                                        <div className="form-group">
                                            <label>URL<span> *</span></label>
                                            <input type="text" 
                                            onChange={this.handleURLInputChange}
                                            value={this.state.url}
                                            name="url" id="url" className="form-control" placeholder="URL" />
                                        {this.validator.message('url', this.state.url, 'required|url', { className: 'text-danger' })}

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

export default AddInstitutionalInformation;