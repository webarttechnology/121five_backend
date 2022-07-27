import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Sponsor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contact: [],
            status: "",
            title: 'News Comments'
        }

        this.handleSponsorIDInputChange = this.handleSponsorIDInputChange.bind(
            this
        );
    }

    handleSponsorIDInputChange(event) {
        const { param } = event.target.dataset;
        
        axios.put('/api/change-status', {
            id: param,
            status: event.target.value
        },
        {
            headers: {
                'Authorization': `${'ABCDEFGHIJK'}`
              },
        }
        ).then(response => {
           
            axios.get('/api/comments', {
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

        }).catch(err => console.log(err))


        this.setState({
            status: event.target.value,
        });
    }

    onDelete(contact_id){
        axios.delete('/api/comments/'+contact_id, {
            headers: {
                'Authorization': `${'ABCDEFGHIJK'}`
            }
        })
            .then(response => {
                axios.get('/api/comments', {
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
        axios.get('/api/comments', {
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
                                                <th>News</th>
                                                <th>User Name</th>
                                                <th>Email ID</th>
                                                <th>Comments</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                
                                                this.state.contact.map((row, index)=> {
                                                  
                                                    return (<tr>
                                                        <td>{++index}</td>
                                                        <td>{row.news.title}</td>
                                                        <td>{row.name}</td>
                                                        <td>{row.email_id}</td>
                                                        <td>{row.comments}</td>
                                                        <td><select name="status" id="status" data-param={row.id} onChange={
                                                            this
                                                                .handleSponsorIDInputChange
                                                        }>
                                                            <option value="1"  selected={row.status =="1"}>Active</option>
                                                            <option value="0" selected={row.status =="0"}>Inactive</option>
                                                            <option value="2" selected={row.status =="2"}>Draft</option>
                                                            </select></td>
                                                        <td><a onClick={this.onDelete.bind(this,row.id)} href="javascript:void(0)"><i className="fa fa-trash-o" aria-hidden="true"></i></a></td>
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