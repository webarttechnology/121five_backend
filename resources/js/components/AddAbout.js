import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import SimpleReactValidator from 'simple-react-validator';
import axios from 'axios';
import { Link } from 'react-router-dom';


class AddAbout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            serversiteError: '',
        }

        this.handleTitleInputChange = this.handleTitleInputChange.bind(this);
        this.handleDescriptionInputChange = this.handleDescriptionInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.validator = new SimpleReactValidator();
    }

    handleTitleInputChange(event) {
        this.setState({
            title: event.target.value
        })
    }

    handleDescriptionInputChange(event, editor) {
        const data = editor.getData()
        this.setState({
            description: data
        })
    }

    handleFormSubmit(event) {
        event.preventDefault();

        if (this.validator.allValid()) {
        axios.post('/api/about', {
            title: this.state.title,
            description: this.state.description
        },
            {
                headers: {
                    'Authorization': `${'ABCDEFGHIJK'}`
                },
            }
        ).then(response => {
            if (response.status == 200) {

                this.setState({
                    serversiteError: response.data.message
                })
            } else {
                this.setState({
                    title: '',
                    description: ''
                }),
                    this.props.history.push({
                        pathname: '/author/about-us',
                    });
            }




        }).catch(err => console.log(err))
        } else {
            this.validator.showMessages();
            this.forceUpdate();
          }


    }
    render() {
        console.log(this.state.serversiteError);
        return (
            <div className="app-content">
                <div className="section">
                    <div className="page-header">
                        <h4 className="page-title">Add About us</h4>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/author/dashboard" className="text-light-color">Dashboard</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Add About us</li>
                        </ol>
                    </div>


                    <div className="row">
                        <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    Add Aboutus
                                </div>

                                <form onSubmit={this.handleFormSubmit} className="form-horizontal">

                                    <div className="card-body">
                                        <span style={{ color: 'red' }}>{this.state.validationerror}</span>
                                        {
                                            (Object).keys(this.state.serversiteError).map((err, index) => {

                                                return (
                                                    <div key={index}>
                                                        <span style={{ color: "red" }}>{this.state.serversiteError[err]}</span>
                                                        <br />
                                                    </div>
                                                )
                                            })
                                        }
                                        <div className="row">
                                            <div className="col-md-12 col-xs-12">
                                                <div className="form-group">
                                                    <label>Title<span> *</span></label>
                                                    <input type="text"
                                                        onChange={this.handleTitleInputChange}
                                                        value={this.state.title}
                                                        name="title" id="title" className="form-control" placeholder="Title" />
                                                    {this.validator.message('Title', this.state.title, 'required|alpha_num_dash_space', { className: 'text-danger' })}

                                                </div>
                                            </div>

                                            <div className="col-md-12 col-xs-12">
                                                <div className="form-group">
                                                    <label>Details<span> *</span></label>
                                                    <CKEditor
                                                        editor={ClassicEditor}
                                                        data={this.state.description}
                                                        onChange={this.handleDescriptionInputChange}
                                                        name="description"
                                                        id="description"
                                                        className="form-control"
                                                    />
                                                    {this.validator.message('Description', this.state.description, 'required', { className: 'text-danger' })}

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
export default AddAbout;