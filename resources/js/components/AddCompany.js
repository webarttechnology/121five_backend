import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class AddNews extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pTitle: 'Add News',
            category_id: '',
            sponser_id: '',
            publication_type_id: '',
            title: '',
            details: '',
            url: '',
            image: '',
            is_active: '',
            key_word: '',
            image: '',
            category: [],
            company: [],
            type: []
        }

        this.handleCategoryIDInputChange = this.handleCategoryIDInputChange.bind(this);
        this.handleSponsorIDInputChange = this.handleSponsorIDInputChange.bind(this);
        this.handlePublicationTypeInputChange = this.handlePublicationTypeInputChange.bind(this);
        this.handleTitleInputChange = this.handleTitleInputChange.bind(this);
        this.handleDetailsInputChange = this.handleDetailsInputChange.bind(this);
        this.handleURLInputChange = this.handleURLInputChange.bind(this);
        this.handleKeyWordInputChange = this.handleKeyWordInputChange.bind(this);
        this.handleIsActiveInputChange = this.handleIsActiveInputChange.bind(this);
        this.handleImageInputChange = this.handleImageInputChange.bind(this);

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleCategoryIDInputChange(event) {
        this.setState({
            category_id: event.target.value
        })
    }

    handleSponsorIDInputChange(event) {
        this.setState({
            sponser_id: event.target.value
        })
    }

    handlePublicationTypeInputChange(event) {
        this.setState({
            publication_type_id: event.target.value
        })
    }

    handleTitleInputChange(event) {
        this.setState({
            title: event.target.value
        })
    }

    handleDetailsInputChange(event) {
        this.setState({
            details: event.target.value
        })
    }

    handleURLInputChange(event) {
        this.setState({
            url: event.target.value
        })
    }

    handleIsActiveInputChange(event) {
        this.setState({
            is_active: event.target.value
        })
    }

    handleKeyWordInputChange(event){
        this.setState({
            key_word: event.target.value
        })
    }

    handleImageInputChange(event){
        this.setState({
            image: event.target.files[0]
        })
    }

   


    componentDidMount() {
        axios.get('/api/category', {
            headers: {
                'Authorization': `${'ABCDEFGHIJK'}`
            }
        })
            .then(response => {
                this.setState({ category: response.data });
            })
            .catch((error) => {
                console.error(error)
            })

        axios.get('/api/sponsor', {
            headers: {
                'Authorization': `${'ABCDEFGHIJK'}`
            }
        })
        .then(response => {
            this.setState({ company: response.data });
        })
        .catch((error) => {
            console.error(error)
        })

        axios.get('/api/type', {
            headers: {
                'Authorization': `${'ABCDEFGHIJK'}`
            }
        })
        .then(response => {
            this.setState({ type: response.data });
        })
        .catch((error) => {
            console.error(error)
        })
    }

    handleFormSubmit(event) {
        event.preventDefault();  
        let fd = new FormData()
        fd.append("image", this.state.image)
        fd.append("sponser_id", this.state.sponser_id)
        fd.append("category_id", this.state.category_id)
        fd.append("publication_type_id", this.state.publication_type_id)
        fd.append("title", this.state.title)
        fd.append("details", this.state.details)
        fd.append("url", this.state.url)
        fd.append("key_word", this.state.key_word)
        fd.append("is_active", this.state.is_active)       
        axios.post('/api/news', fd,
            {
                headers: {
                    'Authorization': `${'ABCDEFGHIJK'}`
                },
            }
        ).then(response => {
                this.props.history.push({
                    pathname: '/author/news',
                });
        }).catch(err => console.log(err))
    }
    render() {
        return (
            <div className="app-content">
                <div className="section">
                    <div className="page-header">
                        <h4 className="page-title">{this.state.pTitle}</h4>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="author/dashboard" className="text-light-color">Dashboard</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">{this.state.pTitle}</li>
                        </ol>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                </div>
                                <form onSubmit={this.handleFormSubmit} className="form-horizontal" encType='multipart/form-data'>
                                    <div className="card-body">

                                        <div className="row">
                                            <div className="col-md-6 col-xs-6">
                                                <div className="form-group">
                                                    <label>Category Name<span> *</span></label>
                                                    <select name='category_id' id="category_id" className="form-control" onChange={this.handleCategoryIDInputChange}>
                                                        <option value="">Category name</option>
                                                        {
                                                            this.state.category.map((cat, index) => {
                                                                return (
                                                                    <option value={ cat.id }>{cat.name}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-md-6 col-xs-6">
                                                <div className="form-group">
                                                    <label>Company Name<span> *</span></label>
                                                    <select name='sponser_id' id="sponser_id" className="form-control" onChange={this.handleSponsorIDInputChange}>
                                                        <option value="">Company name</option>
                                                        {
                                                            this.state.company.map((cmp, index) => {
                                                                return(
                                                                    <option value={ cmp.id }>{ cmp.company_name }</option>
                                                                )
                                                            })
                                                            
                                                        }
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-md-6 col-xs-6">
                                                <div className="form-group">
                                                    <label>Publication Type<span> *</span></label>
                                                    <select name='publication_type_id' id="publication_type_id" className="form-control" onChange={this.handlePublicationTypeInputChange}>
                                                        <option value="">Publication Type</option>
                                                        {
                                                            this.state.type.map((pub_type, index) => {
                                                                return(
                                                                    <option value={ pub_type.id }>{ pub_type.name }</option>
                                                                )
                                                            })
                                                            
                                                        }
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-md-6 col-xs-6">
                                                <div className="form-group">
                                                    <label>News Title<span> *</span></label>
                                                    <input type="text"
                                                        onChange={this.handleTitleInputChange}
                                                        value={this.state.title}
                                                        name="title" id="title" className="form-control" placeholder="News title" />
                                                </div>
                                            </div>

                                            <div className="col-md-12 col-xs-12">
                                                <div className="form-group">
                                                    <label>News Details<span> *</span></label>
                                                    <textarea type="text"
                                                        onChange={this.handleDetailsInputChange}
                                                        value={this.state.details}
                                                        name="details" id="details" className="form-control" placeholder="News Details"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-xs-6">
                                                <div className="form-group">
                                                    <label>Website<span> *</span></label>
                                                    <input type="text"
                                                        onChange={this.handleURLInputChange}
                                                        value={this.state.url}
                                                        name="url" id="url" className="form-control" placeholder="Website" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-xs-6">
                                                <div className="form-group">
                                                    <label>Status<span> *</span></label>
                                                    <select name="is_active" id="is_active" className="form-control" onChange={this.handleIsActiveInputChange}>
                                                        <option value="">Change Status</option>
                                                        <option value="1">Active</option>
                                                        <option value="0">Inactive</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-md-12 col-xs-12">
                                                <div className="form-group">
                                                    <label>Key Word<span> *</span></label>
                                                    <input type="text"
                                                        onChange={this.handleKeyWordInputChange}
                                                        value={this.state.key_word}
                                                        name="key_word" id="key_word" className="form-control" placeholder="Key word"/>
                                                </div>
                                            </div>

                                            <div className="col-md-12 col-xs-12">
                                                <div className="form-group">
                                                    <label>Image<span> *</span></label>
                                                    <input type="file"
                                                        onChange={this.handleImageInputChange}
                                                        name="image" id="image" className="form-control"/>
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

export default AddNews;