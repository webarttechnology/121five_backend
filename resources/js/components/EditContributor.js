import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';

class EditContributor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            image: '',
            pimage: '',
            url: '',
            type: '',
            ptitle: 'Update Contribute',
            update_id: '',
        }

        this.handleImageInputChange = this.handleImageInputChange.bind(this);
        this.handleTypeInputChange = this.handleTypeInputChange.bind(this);
        this.handleURLInputChange = this.handleURLInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.validator = new SimpleReactValidator();
    }

    componentDidMount() {
        axios.get('/api/contributors/' + this.props.match.params.id, {
            headers: {
                'Authorization': `${'ABCDEFGHIJK'}`
            }
        })
            .then(response => {
                this.setState({
                     url: response.data.url, 
                     type: response.data.type, 
                     image: response.data.image,
                     update_id: response.data.id, 
                    });
            })
            .catch((error) => {
                console.error(error)
            })
    }

    handleImageInputChange(event) {
        this.setState({
            image: event.target.files[0],
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
        fd.append("url", this.state.url);
        fd.append("type", this.state.type);
        fd.append("update_id", this.state.update_id);
        axios.post('/api/contributors/update', fd,
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
                        <h4 className="page-title">{this.state.ptitle}</h4>
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
                                                    <label>Type<span> *</span></label>
                                                    <select name="type" id="type" className="form-control" onChange={this.handleTypeInputChange}>
                                                        <option value="">Select</option>
                                                        <option value="Sponsored Content"  selected={ 'Sponsored Content' == this.state.type}>Sponsored Content</option>
                                                        <option value="Learn To Fly" selected={ 'Learn To Fly' == this.state.type}>Learn To Fly</option>
                                                        <option value="Marque Clubs" selected={ 'Marque Clubs' == this.state.type}>Marque Clubs</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-md-6 col-xs-12">
                                                <div className="form-group">
                                                    <label>Image<span> *</span></label>
                                                    <input type="file"
                                                        onChange={this.handleImageInputChange}
                                                        name="image" id="image" className="form-control" placeholder="Image" />
                                                </div>
                                            </div>                                           

                                            <div className="col-md-6 col-xs-12">
                                                <div className="form-group">
                                                    <label>Website<span> *</span></label>
                                                    <input type="text"
                                                        onChange={this.handleURLInputChange}
                                                        value={this.state.url}
                                                        name="url" id="url" className="form-control" placeholder="Website Link" />
                                                        {this.validator.message('website', this.state.url, 'required|url', { className: 'text-danger' })}

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

export default EditContributor;