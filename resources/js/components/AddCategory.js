import React, {Component} from 'react';
import SimpleReactValidator from 'simple-react-validator';
import axios from 'axios';
import { Link } from 'react-router-dom';

class AddCategory extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            title: 'Add Category',
            message: ''
        }     
        
        this.handleNameInputChange=this.handleNameInputChange.bind(this);
        this.handleFormSubmit=this.handleFormSubmit.bind(this);
        this.validator = new SimpleReactValidator();
    }

    handleNameInputChange(event){
        this.setState({
            name: event.target.value
        })
    }

    handleFormSubmit(event){        
        event.preventDefault();
        
        if(this.validator.allValid()){
            axios.post('/api/category', {
                name: this.state.name,
            },
            {
                headers: {
                    'Authorization': `${'ABCDEFGHIJK'}`
                  },
            }
            ).then(response => {
                if(response.status == 201){
                this.setState({
                    name: '',
                }),
                this.props.history.push({ 
                    pathname: '/author/category',
                   });
                }else{
                    this.setState({
                        message: 'Category name already exists.',
                    }),
                    this.props.history.push({ 
                        pathname: '/author/category/add',
                       }); 
                }
    
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
                        <span style={{ color: 'red'}}>{this.state.message}</span>

                        </div>
                        <form onSubmit={this.handleFormSubmit} className="form-horizontal">
                            <div className="card-body">

                                <div className="row">
                                    <div className="col-md-12 col-xs-12">
                                        <div className="form-group">
                                            <label>Category name<span> *</span></label>
                                            <input type="text" 
                                            onChange={this.handleNameInputChange}
                                            value={this.state.name}
                                            name="name" id="name" className="form-control" placeholder="Category name" />
                                            {this.validator.message('Category name', this.state.name, 'required|alpha_num_dash_space', { className: 'text-danger' })}

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

export default AddCategory;