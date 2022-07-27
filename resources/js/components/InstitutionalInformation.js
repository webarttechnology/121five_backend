import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class InstitutionalInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contact: [],
            pTitle: 'Institutional Information'
        }
    }

    onDelete(contact_id){
        axios.delete('/api/institute/'+contact_id, {
            headers: {
                'Authorization': `${'ABCDEFGHIJK'}`
            }
        })
            .then(response => {
                axios.get('/api/institute', {
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
        axios.get('/api/institute', {
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
                        <h4 className="page-title">{this.state.pTitle}</h4>
                        <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/author/dashboard" className="text-light-color">Dashboard</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">{this.state.pTitle}</li>
                        </ol>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4>{this.state.title}
                                         <Link exact to="/author/institutional-information/add" className="btn btn-primary m-b-5 m-t-5 pull-right"><i className="fa fa-plus" aria-hidden="true"></i></Link>
                                    </h4>
                                </div>
                                <div className="card-body">
                                    <table id="customers2" className="table datatable">
                                        <thead>
                                            <tr>
                                                <th width="5%">#ID</th>
                                                <th width="40%">Title</th>
                                                <th width="50%">URL</th>
                                                <th width="5%">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {                                                
                                                this.state.contact.map((row, index)=> {
                                                    return (<tr key={row.id}>
                                                        <td>{++index}</td>
                                                        <td>{row.title}</td>
                                                        <td>{row.url}</td>
                                                        <td><Link to={"/author/institutional-information/edit/" + row.id}><i className="fa fa-pencil-square" aria-hidden="true"></i></Link> | <a onClick={this.onDelete.bind(this,row.id)} ><i className="fa fa-trash-o" aria-hidden="true"></i></a></td>
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
export default InstitutionalInformation;