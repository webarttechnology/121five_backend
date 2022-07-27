import React, {Component} from 'react';
import SimpleReactValidator from 'simple-react-validator';
import axios from 'axios';
import { Link } from 'react-router-dom';

class EditContact extends Component {

    constructor(props){
        super(props);
        this.state = {
            title: '',
            description: ''
        }     
        
        this.handleTitleInputChange=this.handleTitleInputChange.bind(this);
        this.handleDescriptionInputChange=this.handleDescriptionInputChange.bind(this);
        this.handleFormSubmit=this.handleFormSubmit.bind(this);
        this.validator = new SimpleReactValidator();
    }

    componentDidMount(){
        axios.get('/api/contact/' + this.props.match.params.id, {
            headers: {
              'Authorization': `${'ABCDEFGHIJK'}`
            }
          })
        .then(response=>{
            this.setState({title: response.data.title, description: response.data.description});
        })
        .catch((error) => {
            console.error(error)
          })
    }

    handleTitleInputChange(event){
        this.setState({
            title: event.target.value
        })
    }

    handleDescriptionInputChange(event){
        this.setState({
            description: event.target.value
        })
    }

    handleFormSubmit(event){        
        event.preventDefault();

        if(this.validator.allValid()){  
        axios.put('/api/contact/'+ this.props.match.params.id, {
            title: this.state.title,
            description: this.state.description
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
                description: ''               
            }),
            this.props.history.push({ 
                pathname: '/author/contact-us',
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
                <h4 className="page-title">Update Contact Information</h4>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/author/dashboard"><a href="javascript:void(0)" className="text-light-color">Dashboard</a></Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Contact information</li>
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
                                    <div className="col-md-12 col-xs-12">
                                        <div className="form-group">
                                            <label>Title<span> *</span></label>
                                            <input type="text" 
                                            onChange={this.handleTitleInputChange}
                                            value={this.state.title}
                                            name="title" id="title" className="form-control" placeholder="Title" />
                                            {this.validator.message('title', this.state.title, 'required', { className: 'text-danger' })}

                                        </div>
                                    </div>

                                    <div className="col-md-12 col-xs-12">
                                        <div className="form-group">
                                            <label>Details<span> *</span></label>
                                            <input id="description"
                                            value={this.state.description} 
                                            onChange={this.handleDescriptionInputChange}
                                            name="description"
                                            className="form-control"
                                            placeholder="Details"
                                            />
                                        {this.validator.message('Details', this.state.description, 'required', { className: 'text-danger' })}

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

export default EditContact;