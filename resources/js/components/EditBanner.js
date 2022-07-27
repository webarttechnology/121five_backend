import React, { Component } from 'react';
//import CKEditor from 'ckeditor4-react';
import SimpleReactValidator from 'simple-react-validator';
import axios from 'axios';
import { Link } from 'react-router-dom';


class EditBanner extends Component {

    constructor(props) {
        super(props);
        this.state = {
            image: '',
            page_id: '',
            ptitle: 'Update Banner',
            update_id: '',
            

        }

        this.handleImageInputChange = this.handleImageInputChange.bind(this);
        this.handlePageIdInputChange = this.handlePageIdInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.validator = new SimpleReactValidator();
    }

    componentDidMount() {
        axios.get('/api/banner/' + this.props.match.params.id, {
            headers: {
                'Authorization': `${'ABCDEFGHIJK'}`
            }
        })
            .then(response => {
                this.setState({
                     page_id: response.data.page_id,
                     update_id: response.data.id, 
                    });
            })
            .catch((error) => {
                console.error(error);
            })
    }

    handleImageInputChange(event) {
        this.setState({
            image: event.target.files[0]
        })
    }

    handlePageIdInputChange(event) {
        this.setState({
            title: event.target.value
        })
    }

    handleFormSubmit(event) {
        event.preventDefault();
        if(this.validator.allValid()){
        let images = this.state.image
        let fd = new FormData()        
        fd.append("image", images);
        fd.append("page_id", this.state.page_id);
        fd.append("update_id", this.state.update_id);
        axios.post('/api/banner/update', fd,
            {
                headers: {
                    'Authorization': `${'ABCDEFGHIJK'}`,
                },
            }
        ).then(response => {
                this.props.history.push({
                    pathname: '/author/banner',
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
                        <h4 className="page-page_id">{this.state.ppage_id}</h4>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/author/dashboard" className="text-light-color">Dashboard</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">{this.state.ptitle}</li>
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
                                                    <label>Page Name<span> *</span></label>
                                            <select name="page_id" id="page_id" disabled className="form-control" onChange={this.handlePageIdInputChange}>
                                                <option value="">Page Name</option>
                                                <option value="0" selected={0 == this.state.page_id}>About us</option>
                                                <option value="1" selected={1 == this.state.page_id}>Search News and Features</option>
                                                <option value="2" selected={2 == this.state.page_id}>Photographer Galleries</option>
                                                <option value="3" selected={3 == this.state.page_id}>Contact Information</option>  
                                                <option value="4" selected={3 == this.state.page_id}>Blog</option>                                                
                                            </select>
                                            {this.validator.message('status', this.state.page_id, 'required', { className: 'text-danger' })}
                                                </div>
                                            </div>  

                                            <div className="col-md-6 col-xs-12">
                                                <div className="form-group">
                                                    <label>Slider<span> *</span></label>
                                                    <input type="file"
                                                        onChange={this.handleImageInputChange}
                                                        name="image" id="image" className="form-control" placeholder="Image" />
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

export default EditBanner;