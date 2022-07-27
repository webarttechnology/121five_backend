import React, {Component} from 'react';
//import CKEditor from 'ckeditor4-react';
import SimpleReactValidator from 'simple-react-validator';
import axios from 'axios';
import { Link } from 'react-router-dom';

class EditCategory extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            is_show: '',
            title: 'Update Category'
        }     
        
        this.handleNameInputChange=this.handleNameInputChange.bind(this);
        this.handleStatusInputChange=this.handleStatusInputChange.bind(this);
        this.handleFormSubmit=this.handleFormSubmit.bind(this);
        this.validator = new SimpleReactValidator();
    }

    componentDidMount(){
        axios.get('/api/category/' + this.props.match.params.id, {
            headers: {
              'Authorization': `${'ABCDEFGHIJK'}`
            }
          })
        .then(response=>{
            this.setState({name: response.data.name, is_show: response.data.is_show});
        })
        .catch((error) => {
            console.error(error)
          })
    }

    handleNameInputChange(event){
        this.setState({
            name: event.target.value
        })
    }

    handleStatusInputChange(event){
        this.setState({
            is_show: event.target.value
        })
    }

    handleFormSubmit(event){        
        event.preventDefault();
        if(this.validator.allValid()){
            axios.put('/api/category/'+ this.props.match.params.id, {
                name: this.state.name,
                is_show: this.state.is_show
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
                    pathname: '/author/category',
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
                                    <div className="col-md-12 col-xs-12">
                                        <div className="form-group">
                                            <label>Category Name<span> *</span></label>
                                            <input type="text" 
                                            onChange={this.handleNameInputChange}
                                            value={this.state.name}
                                            name="name" id="name" className="form-control" placeholder="Category Name" />
                                            {this.validator.message('Category name', this.state.name, 'required|alpha_num_dash_space', { className: 'text-danger' })}

                                        </div>
                                    </div>

                                    <div className="col-md-12 col-xs-12">
                                        <div className="form-group">
                                            <label>Details<span> *</span></label>
                                            <select name="is_show" id="is_show" className="form-control" onChange={this.handleStatusInputChange}>
                                                <option value="">Status</option>
                                                <option value="1" selected={1 == this.state.is_show}>Active</option>
                                                <option value="0" selected={0 == this.state.is_show}>Inactive</option>
                                            </select>   
                                            {this.validator.message('Status', this.state.status, 'required', { className: 'text-danger' })}
                                         
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

export default EditCategory;