import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Company extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contact: [],
            title: 'Company details'
        }
    }

    componentDidMount() {
        axios.get('/api/company', {
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
                                    <h4>
                                        {this.state.title}
                                    </h4>
                                </div>
                                <div className="card-body">
                                    <table id="customers2" className="table datatable">
                                        <thead>
                                            <tr>
                                                <th>#ID</th>
                                                <th>Company name</th>
                                                <th>Email ID</th>
                                                <th>Contact no</th>
                                                <th>Link</th>
                                                <th>Logo</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                
                                                this.state.contact.map((row, index) => {                                                  
                                                    return (<tr>
                                                        <td>{++index}</td>
                                                        <td>{row.name}</td>
                                                         <td>{row.email_id}</td>
                                                        <td>{row.mobile_no}</td>
                                                        <td>
                                                            <ul>
                                                                <li>{row.facebook}</li>
                                                                <li>{row.linkdin}</li>
                                                                <li>{row.twitter}</li>
                                                            </ul>
                                                        </td>
                                                        <td><img src={window.location.origin+'/'+row.logo} width="80px" height="60px"/></td>                                                                                                                
                                                        <td><Link exact to={"/author/company/edit/" + row.id}>
                                                            <i className="fa fa-pencil-square" aria-hidden="true"></i>
                                                            </Link>
                                                        </td>
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