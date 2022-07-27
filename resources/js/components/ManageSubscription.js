import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
//import FlashMessage from "react-flash-message";
import * as moment from "moment";
var Loader = require("react-loader");

export default class ManageSubscription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contact: [],
            title: "Payment History",
            loaded: false,
            image: "",
        };
    }
    onDelete(contact_id) {
        axios
            .delete("/api/payment/" + contact_id, {
                headers: {
                    Authorization: `${"ABCDEFGHIJK"}`,
                },
            })
            .then((response) => {
                axios
                    .get("/api/payment", {
                        headers: {
                            Authorization: `${"ABCDEFGHIJK"}`,
                        },
                    })
                    .then((response) => {
                        this.setState({ contact: response.data });
                    });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    componentDidMount() {
        axios
            .get("/api/payment", {
                headers: {
                    Authorization: `${"ABCDEFGHIJK"}`,
                },
            })
            .then((response) => {
               
                this.setState({ contact: response.data, loaded: true });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            
            <Loader loaded={this.state.loaded}>
                <div className="app-content">
                    <div className="section">
                        <div className="page-header">
                            <h4 className="page-title">{this.state.title}</h4>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link
                                        to="/author/dashboard"
                                        className="text-light-color"
                                    >
                                        Dashboard
                                    </Link>
                                </li>
                                <li
                                    className="breadcrumb-item active"
                                    aria-current="page"
                                >
                                    {this.state.title}
                                </li>
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
                                        <span style={{ color: "green" }}>
                                            {this.props.location.state ? (
                                                <FlashMessage duration={5000}>
                                                    {
                                                        this.props.location
                                                            .state.message
                                                    }
                                                </FlashMessage>
                                            ) : (
                                                ""
                                            )}
                                        </span>

                                        <table
                                            id="customers2"
                                            className="table datatable"
                                        >
                                            <thead>
                                                <tr>
                                                    <th>#ID</th>
                                                    <th>Sponsor Name</th>
                                                    <th>Package Name</th>
                                                    <th>Amount</th>
                                                    <th>Payment Status</th>
                                                    <th>Expiry Date</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.contact.map(
                                                    (row, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td>
                                                                    {++index}
                                                                </td>
                                                                <td>{row.sponsor.name}</td>
                                                                <td>{row.subscription.plan_name}</td>
                                                                <td>{'$'+parseFloat(row.amount).toFixed(2)}</td>
                                                                <td>{row.is_paid == 1?'Paid':'Unpaid'}</td>
                                                                <td>{ moment(row.expiry_date).format("DD/MM/YYYY")}</td>
                                                                <td>
                                                                    <Link
                                                                        exact
                                                                        to={
                                                                            "/author/payment/edit/" +
                                                                            row.id
                                                                        }
                                                                    >
                                                                    <a href="javascript:void(0)">
                                                                            <i
                                                                                className="fa fa-pencil-square"
                                                                                aria-hidden="true"
                                                                            ></i>
                                                                    </a>
                                                                    </Link>                                                                    
                                                                </td>
                                                            </tr>
                                                        );
                                                    }
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Loader>
       
       );
    }
}
