import React, { Component } from 'react';
//import CKEditor from 'ckeditor4-react';
import SimpleReactValidator from 'simple-react-validator';
import axios from 'axios';
import { Link } from 'react-router-dom';

class EditSubscription extends Component {

    constructor(props) {
        super(props);
        this.state = {
            plan_name: '',
            total_post: '',
            price: '',
            valid_for: '',
            details: '',
            title: 'Update Subscription'
        }

        this.handlePlanNameInputChange = this.handlePlanNameInputChange.bind(this);
        this.handleTotalPostInputChange = this.handleTotalPostInputChange.bind(this);
        this.handlePriceInputChange = this.handlePriceInputChange.bind(this);
        this.handleValidForInputChange = this.handleValidForInputChange.bind(this);
        this.handleDetailsInputChange = this.handleDetailsInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.validator = new SimpleReactValidator();
    }

    componentDidMount() {
        axios.get('/api/subscription/' + this.props.match.params.id, {
            headers: {
                'Authorization': `${'ABCDEFGHIJK'}`
            }
        })
            .then(response => {
                this.setState({ plan_name: response.data.plan_name, total_post: response.data.total_post, price: response.data.price, valid_for: response.data.valid_for, details: response.data.details });
            })
            .catch((error) => {
                console.error(error)
            })
    }

    handlePlanNameInputChange(event) {
        this.setState({
            plan_name: event.target.value
        })
    }

    handleTotalPostInputChange(event) {
        this.setState({
            total_post: event.target.value
        })
    }

    handlePriceInputChange(event) {
        this.setState({
            price: event.target.value
        })
    }

    handleValidForInputChange(event) {
        this.setState({
            valid_for: event.target.value
        })
    }

    handleDetailsInputChange(event) {
        this.setState({
            details: event.target.value
        })
    }

    handleFormSubmit(event) {
        event.preventDefault();
        if (this.validator.allValid()) {
            axios.put('/api/subscription/' + this.props.match.params.id, {
                plan_name: this.state.plan_name,
                total_post: this.state.total_post,
                price: this.state.price,
                valid_for: this.state.valid_for,
                details: this.state.details
            },
                {
                    headers: {
                        'Authorization': `${'ABCDEFGHIJK'}`
                    },
                }
            ).then(response => {
                this.setState({
                    name: '',
                    is_show: ''
                }),
                    this.props.history.push({
                        pathname: '/author/subscription',
                    });


            }).catch(err => console.log(err))
        } else {
            this.validator.showMessages();
            this.forceUpdate();
        }

    }
    render() {
        return (
            <div className="app-content">
                <div className="section">
                    <div className="page-header">
                        <h4 className="page-title">{this.state.title}</h4>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/author/dashboard" className="text-light-color">Dashboard</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">{this.state.title}</li>
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
                                            <div className="col-md-6 col-xs-12">
                                                <div className="form-group">
                                                    <label>Plan name<span> *</span></label>
                                                    <input type="text"
                                                        onChange={this.handlePlanNameInputChange}
                                                        value={this.state.plan_name}
                                                        name="plan_name" id="plan_name" className="form-control" placeholder="Plan name" />
                                                    {this.validator.message('Plan name', this.state.plan_name, 'required|alpha_space', { className: 'text-danger' })}

                                                </div>
                                            </div>

                                            <div className="col-md-6 col-xs-12">
                                                <div className="form-group">
                                                    <label>Max Post<span> *</span></label>
                                                    <input type="text"
                                                        onChange={this.handleTotalPostInputChange}
                                                        value={this.state.total_post}
                                                        name="total_post" id="total_post" className="form-control" placeholder="Maximum Post" />
                                                    {this.validator.message('Maximum post', this.state.total_post, 'required|numeric', { className: 'text-danger' })}

                                                </div>
                                            </div>

                                            <div className="col-md-6 col-xs-12">
                                                <div className="form-group">
                                                    <label>Price<span> *</span></label>
                                                    <input type="text"
                                                        onChange={this.handlePriceInputChange}
                                                        value={this.state.price}
                                                        name="price" id="price" className="form-control" placeholder="Price" />
                                                    {this.validator.message('Price', this.state.price, 'required|numeric', { className: 'text-danger' })}
                                                </div>
                                            </div>

                                            <div className="col-md-6 col-xs-12">
                                                <div className="form-group">
                                                    <label>Valid For (Month)<span> *</span></label>
                                                    <input type="text"
                                                        onChange={this.handleValidForInputChange}
                                                        value={this.state.valid_for}
                                                        name="valid_for" id="valid_for" className="form-control" placeholder="Valid For" />
                                                    {this.validator.message('Valid For', this.state.valid_for, 'required|numeric', { className: 'text-danger' })}

                                                </div>
                                            </div>



                                            <div className="col-md-12 col-xs-12">
                                                <div className="form-group">
                                                    <label>Details<span> *</span></label>
                                                    <textarea
                                                        name="details"
                                                        id="details"
                                                        onChange={this.handleDetailsInputChange}
                                                        value={this.state.details}
                                                        className="form-control"
                                                        placeholder="Details">
                                                    </textarea>
                                                    {this.validator.message('Details', this.state.details, 'required', { className: 'text-danger' })}
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

export default EditSubscription;