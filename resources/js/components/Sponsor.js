import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Sponsor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contact: [],
            title: 'Sponsor list'
        }
    }

    onDelete(contact_id){
        axios.delete('/api/sponsor/'+contact_id, {
            headers: {
                'Authorization': `${'ABCDEFGHIJK'}`
            }
        })
            .then(response => {
                axios.get('/api/sponsor', {
            headers: {
                'Authorization': `${'ABCDEFGHIJK'}`
            }
        })
            .then(response => {
                this.setState({ contact: response.data });
            })
            })
            .catch((error) => {
                console.error(error)
            })
    }

    componentDidMount() {
        axios.get('/api/sponsor', {
            headers: {
                'Authorization': `${'ABCDEFGHIJK'}`
            }
        })
            .then(response => {
                this.setState({ contact: response.data });
            })
            .catch((error) => {
                console.error(error)
            })
    }

    render() {
        return (          
            <div className="app-content">
                <div className="section">
                    <div className="page-header">
                        <h4 className="page-title">{ this.state.title }</h4>
                        <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/author/dashboard"><a href="javascript:void(0)" className="text-light-color">Dashboard</a></Link></li>
                            <li className="breadcrumb-item active" aria-current="page">{ this.state.title }</li>
                        </ol>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4>{ this.state.title }
                                         <Link exact to="/author/sponsor/add"><a href="javascript:void(0)" className="btn btn-primary m-b-5 m-t-5 pull-right"><i className="fa fa-plus" aria-hidden="true"></i></a></Link>
                                    </h4>
                                </div>
                               
                                <div className="card-body">
                                <span style={{ color: 'green'}}>{this.props.location.state?this.props.location.state.message:''}</span>
                                    <table id="customers2" className="table datatable">
                                        <thead>
                                            <tr>
                                                <th>#ID</th>
                                                <th>Sponsor name</th>
                                                <th>Company name</th>
                                                <th>Email ID</th>
                                                <th>Contact No</th>
                                                <th>Address</th>
                                                <th>Password</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                
                                                this.state.contact.map((row, index)=> {
                                                  
                                                    return (<tr>
                                                        <td>{++index}</td>
                                                        <td>{row.name}</td>
                                                        <td>{row.company_name}</td>
                                                        <td>{row.email_id}</td>
                                                        <td>{row.mobile_no}</td>
                                                        <td>{row.address}</td>
                                                        <td>{row.new_password}</td>
                                                        <td><span style={{ color: row.is_active == 1?'green':'red' }}>{ row.is_active == 1?'Active':'Inactive' }</span></td>
                                                        <td><Link exact to={"/author/sponsor/edit/" + row.id}><a href="javascript:void(0)"><i className="fa fa-pencil-square" aria-hidden="true"></i></a></Link> | <a onClick={this.onDelete.bind(this,row.id)} href="javascript:void(0)"><i className="fa fa-trash-o" aria-hidden="true"></i></a></td>
                                                    </tr>)
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}