import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
//import FlashMessage from 'react-flash-message'


class Aboutus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aboutus: []
        }
    }

    onDelete(about_id) {
        axios.delete('/api/about/' + about_id, {
            headers: {
                'Authorization': `${'ABCDEFGHIJK'}`
            }
        })
            .then(response => {
                axios.get('/api/about', {
                    headers: {
                        'Authorization': `${'ABCDEFGHIJK'}`
                    }
                })
                    .then(response => {
                        this.setState({ aboutus: response.data });
                    })
            })
            .catch((error) => {
                console.error(error)
            })
    }

    componentDidMount() {
        axios.get('/api/about', {
            headers: {
                'Authorization': `${'ABCDEFGHIJK'}`
            }
        })
            .then(response => {
                if (response.data.login_status == false) {
                    localStorage.clear();
                    window.location.reload();
                } else {
                    this.setState({ aboutus: response.data });
                }

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
                        <h4 className="page-title">About Us</h4>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/author/dashboard" className="text-light-color">Dashboard</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">About us</li>
                        </ol>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4>About us
                                         <Link exact="true" to="/author/about/add" className="btn btn-primary m-b-5 m-t-5 pull-right"><i className="fa fa-plus" aria-hidden="true"></i></Link>
                                    </h4>
                                </div>
                                <div className="card-body">
                                    <table id="customers2" className="table datatable">
                                        <thead>
                                            <tr>
                                                <th width="5%">#ID</th>
                                                <th width="20%">Title</th>
                                                <th width="50%">Details</th>
                                                <th width="5%">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {

                                                this.state.aboutus.map((row, index) => {
                                                    return (<tr key={index}>
                                                        <td key={index}>{++index}</td>
                                                        <td>{row.title}</td>
                                                        <td dangerouslySetInnerHTML={{ __html: `${row.description.substring(0, 220)}` }}></td>
                                                        <td><Link exact to={"/author/about/edit/" + row.id}><a href="#"><i className="fa fa-pencil-square" aria-hidden="true"></i></a></Link> | <a onClick={this.onDelete.bind(this, row.id)} href="#"><i className="fa fa-trash-o" aria-hidden="true"></i></a></td>
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
export default Aboutus;