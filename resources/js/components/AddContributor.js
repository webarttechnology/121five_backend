import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';

class AddContributor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            image: '',
            url: '',
            pTitle: 'Add Contributor'
        }

        this.handleImageInputChange = this.handleImageInputChange.bind(this);
        this.handleURLInputChange = this.handleURLInputChange.bind(this);
        this.handleTypeInputChange = this.handleTypeInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.validator = new SimpleReactValidator();
    }

    handleImageInputChange(event) {  
        this.setState({
                image: event.target.files[0]
            })        
    }  

    handleTypeInputChange(event) {
        this.setState({
            type: event.target.value,
        })
    }

    handleURLInputChange(event) {  
        this.setState({
                url: event.target.value
            })        
    } 

  

    handleFormSubmit(event) {
        event.preventDefault();
        if(this.validator.allValid()){
         let images = this.state.image
         let fd = new FormData()
         fd.append("image", images);
         fd.append("type", this.state.type);
         fd.append("url", this.state.url);

        axios.post('/api/contributors', fd,
            {
                headers: {
                    'Authorization': `${'ABCDEFGHIJK'}`,
                },
            }
        ).then(response => {
            this.props.history.push({
                pathname: '/author/contributor',
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
                                            <div className="col-md-6 col-xs-12">
                                                <div className="form-group">
                                                    <label>Type<span> *</span></label>
                                                    <select name="type" id="type" className="form-control" onChange={this.handleTypeInputChange}>
                                                        <option value="">Select</option>
                                                        <option value="Sponsored Content">Sponsored Content</option>
                                                        <option value="Learn To Fly">Learn To Fly</option>
                                                        <option value="Marque Clubs">Marque Clubs</option>
                                                    </select>
                                                </div>
                                        </div>
                                            <div className="col-md-6 col-xs-12">
                                                <div className="form-group">
                                                    <label>Image<span> *</span></label>
                                                    <input type="file"
                                                        onChange={this.handleImageInputChange}
                                                        name="image" id="image" className="form-control" placeholder="Image" />
                                                    {this.validator.message('image', this.state.image, 'required', { className: 'text-danger' })}

                                                </div>
                                            </div>

                                            <div className="col-md-6 col-xs-12">
                                                <div className="form-group">
                                                    <label>Website Link<span> *</span></label>
                                                    <input type="text"
                                                        onChange={this.handleURLInputChange}
                                                        name="url" id="url" className="form-control" placeholder="URL" />
                                                    {this.validator.message('Website link', this.state.url, 'required', { className: 'text-danger' })}

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

export default AddContributor;