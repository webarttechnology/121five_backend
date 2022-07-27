import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';

class EditPayment extends Component {

    constructor(props){
        super(props);
        this.state = {
            title: 'Update Payment',
            name: '',
            price: '',
            expiry_date: '',
            is_paid: ''
        }     
        
        this.handleSopnsorNameInputChange=this.handleSponsorNameInputChange.bind(this);
        this.handleAmountInputChange=this.handleAmountInputChange.bind(this);
        this.handleExpiryDateInputChange=this.handleExpiryDateInputChange.bind(this);
        this.handleIsPaidInputChange=this.handleIsPaidInputChange.bind(this);
        this.handleFormSubmit=this.handleFormSubmit.bind(this);
        this.validator = new SimpleReactValidator();        
    }

    componentDidMount(){
       
        axios.get('/api/payment/' + this.props.match.params.id, {
            headers: {
              'Authorization': `${'ABCDEFGHIJK'}`
            }
          })
        .then(response=>{      
            this.setState({
                           name: response.data.sponsor.name,
                           price: response.data.amount, 
                           expiry_date: response.data.expiry_date,
                           is_paid: response.data.is_paid
                        });
        })
        .catch((error) => {
            console.error(error)
          })
    }
    
    handleSponsorNameInputChange(event){
        this.setState({
            name: event.target.value
        })
    }     

    handleAmountInputChange(event){
        this.setState({
            price: event.target.value
        })
    }

    handleExpiryDateInputChange(event){
        this.setState({
            expiry_date: event.target.value
        })
    }
    
    handleIsPaidInputChange(event){
        this.setState({
            is_paid: event.target.value
        })
    }   

    handleFormSubmit(event){        
        event.preventDefault();         
        if(this.validator.allValid()){            
            axios.put('/api/payment/'+ this.props.match.params.id, {
                name: this.state.name,
                price: this.state.price,
                expiry_date: this.state.expiry_date,
                is_paid: this.state.is_paid
            },
            {
                headers: {
                    'Authorization': `${'ABCDEFGHIJK'}`
                  },
            }
            ).then(response => {
                console.log(response);
                return false;
                this.props.history.push({ 
                    pathname: '/author/manage-subscription',
                    state: {
                        message: "Data has been updated successfully!"
                    }
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
                        </div>
                        <form onSubmit={this.handleFormSubmit} className="form-horizontal">
                            <div className="card-body">

                                <div className="row">

                                <div className="col-md-6 col-xs-6">
                                        <div className="form-group">
                                            <label>Sponsor Name<span> *</span></label>
                                            <input readOnly type="text" 
                                            onChange={this.handleNameInputChange}
                                            value={this.state.name}
                                            name="name" id="name" className="form-control" placeholder="sponsor Name" />
                                            {this.validator.message('Sponsor name', this.state.name, 'required|alpha_num_dash_space', { className: 'text-danger' })}

                                        </div>
                                    </div>    

                                     <div className="col-md-6 col-xs-6">
                                        <div className="form-group">
                                            <label>Amount<span> *</span></label>
                                            <input type="text" 
                                            onChange={this.handleAmountInputChange}
                                            value={this.state.price}
                                            name="price" id="price" className="form-control" placeholder="Amount" />
                                            {this.validator.message('amount', this.state.price, 'required', { className: 'text-danger' })}
                                            </div>
                                    </div>                              

                                    <div className="col-md-6 col-xs-6">
                                        <div className="form-group">
                                            <label>Expiry Date<span> *</span></label>
                                            <input type="date" 
                                            onChange={this.handleExpiryDateInputChange}
                                            value={this.state.expiry_date}
                                            name="expiry_date" id="expiry_date" className="form-control" placeholder="Expiry Date" />
                                            {this.validator.message('Expiry Date', this.state.expiry_date, 'required', { className: 'text-danger' })}

                                        </div>
                                    </div>

                                    <div className="col-md-6 col-xs-6">
                                        <div className="form-group">
                                            <label>Payment Status<span> *</span></label>
                                            <select name="is_paid" id="is_paid" onChange={this.handleIsPaidInputChange} className="form-control">
                                                <option value="">Select Status</option>
                                                <option value="1" selected={ this.state.is_paid == 1 }>Paid</option>
                                                <option value="0" selected={ this.state.is_paid == 0 }>Unpaid</option>
                                            </select>
                                            {this.validator.message('Expiry Date', this.state.expiry_date, 'required', { className: 'text-danger' })}

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

export default EditPayment;