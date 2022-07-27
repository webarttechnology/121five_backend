import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contact: [],
            title: 'Gallery'
        }
    }

    onDelete(contact_id){
        axios.delete('/api/gallery/'+contact_id, {
            headers: {
                'Authorization': `${'ABCDEFGHIJK'}`
            }
        })
            .then(response => {
                axios.get('/api/gallery', {
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
        axios.get('/api/gallery', {
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
                                    <h4>{this.state.title}
                                         <Link to="/author/gallery/add" className="btn btn-primary m-b-5 m-t-5 pull-right"><i className="fa fa-plus" aria-hidden="true"></i></Link>
                                    </h4>
                                </div>
                                <div className="card-body">
                                    <table id="customers2" className="table datatable">
                                        <thead>
                                            <tr>
                                                <th >#ID</th>
                                                <th width="20%">Photographer name</th>
                                                <th width="20%">Image</th>
                                                <th width="10%">Title</th>
                                                <th width="20%">URL</th>
                                                <th>Action</th>
                                            </tr>                                       
                                             </thead>
                                        <tbody>
                                            {                                                
                                                this.state.contact.map((row, index)=> {
                                                    return (<tr>
                                                        <td>{++index}</td>
                                                        <td>{row.photographer.name}</td>
                                                        <td><img src={window.location.origin+'/'+row.image} width="120px" height="90px"/></td>
                                                        <td>{row.title}</td>
                                                        <td>{row.url}</td>
                                                        <td><Link exact to={"/author/gallery/edit/" + row.id}><i className="fa fa-pencil-square" aria-hidden="true"></i></Link> | <a onClick={this.onDelete.bind(this,row.id)} href="javascript:void(0)"><i className="fa fa-trash-o" aria-hidden="true"></i></a></td>
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
export default Gallery;