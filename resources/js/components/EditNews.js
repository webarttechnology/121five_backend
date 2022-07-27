import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import * as moment from "moment";
var Loader = require("react-loader");

class EditSponsor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pTitle: "Add News",
            category_id: 1,
            sponser_id: "",
            publication_type_id: 1,
            title: "",
            details: "",
            url: "",
            is_active: "",
            key_word: "",
            image: [],
            update_id: "",
            category: [],
            company: [],
            type: [],
            publish_date: [],
            currentDate: moment(new Date()).format("YYYY-MM-DDTHH:mm"),
            is_headline: '',
        };

        // this.handleCategoryIDInputChange = this.handleCategoryIDInputChange.bind(
        //     this
        // );
        this.handleSponsorIDInputChange = this.handleSponsorIDInputChange.bind(
            this
        );
        // this.handlePublicationTypeInputChange = this.handlePublicationTypeInputChange.bind(
        //     this
        // );
        this.handleTitleInputChange = this.handleTitleInputChange.bind(this);
        this.handleDetailsInputChange = this.handleDetailsInputChange.bind(
            this
        );
        this.handleURLInputChange = this.handleURLInputChange.bind(this);
        this.handleKeyWordInputChange = this.handleKeyWordInputChange.bind(
            this
        );
        this.handleIsActiveInputChange = this.handleIsActiveInputChange.bind(
            this
        );
        this.handleImageInputChange = this.handleImageInputChange.bind(this);
        this.handlePublishDateInputChange = this.handlePublishDateInputChange.bind(
            this
        );
        this.handleIsHeadlineInputChange = this.handleIsHeadlineInputChange.bind(
            this
        );
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.validator = new SimpleReactValidator();
    }

    componentDidMount() {
        // axios
        //     .get("/api/category", {
        //         headers: {
        //             Authorization: `${"ABCDEFGHIJK"}`,
        //         },
        //     })
        //     .then((response) => {
        //         this.setState({ category: response.data });
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });

        axios
            .get("/api/sponsor", {
                headers: {
                    Authorization: `${"ABCDEFGHIJK"}`,
                },
            })
            .then((response) => {
                this.setState({ company: response.data });
            })
            .catch((error) => {
                console.error(error);
            });

        // axios
        //     .get("/api/type", {
        //         headers: {
        //             Authorization: `${"ABCDEFGHIJK"}`,
        //         },
        //     })
        //     .then((response) => {
        //         this.setState({ type: response.data });
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });

        axios
            .get("/api/news/" + this.props.match.params.id, {
                headers: {
                    Authorization: `${"ABCDEFGHIJK"}`,
                },
            })
            .then((response) => {
                this.setState({
                    sponser_id: response.data.sponser_id,
                    category_id: response.data.category_id,
                    publication_type_id: response.data.publication_type_id,
                    title: response.data.title,
                    details: response.data.details,
                    url: response.data.url,
                    key_word: response.data.key_word,
                    is_active: response.data.is_active,
                    is_headline: response.data.is_headline,
                    update_id: response.data.id,
                    publish_date: moment(response.data.publish_date).format(
                        "YYYY-MM-DDThh:mm"
                    ),
                    loaded: true,
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    handlePublishDateInputChange(event) {
        this.setState({
            publish_date: event.target.value,
        });
    }

    handleSponsorIDInputChange(event) {
        this.setState({
            sponser_id: event.target.value,
        });
    }

    handleTitleInputChange(event) {
        this.setState({
            title: event.target.value,
        });
    }

    handleDetailsInputChange(event, editor) {
        const data = editor.getData();
        this.setState({
            details: data,
        });
    }

    handleURLInputChange(event) {
        this.setState({
            url: event.target.value,
        });
    }

    handleIsHeadlineInputChange(event) {
        this.setState({
            is_headline: event.target.value,
        });
    }
    

    handleIsActiveInputChange(event) {
        this.setState({
            is_active: event.target.value,
        });
    }

    handleKeyWordInputChange(event) {
        this.setState({
            key_word: event.target.value,
        });
    }

    handleImageInputChange(event) {
        this.setState({
            image: [...this.state.image, ...event.target.files],
        });
    }

    handleFormSubmit(event) {
        event.preventDefault();
        if (this.validator.allValid()) {
            let fd = new FormData();
            for (var i = 0; i < this.state.image.length; i++) {
                fd.append("image[" + i + "]", this.state.image[i]);
            }
            fd.append("sponser_id", this.state.sponser_id);
            fd.append("category_id", this.state.category_id);
            fd.append("publication_type_id", this.state.publication_type_id);
            fd.append("title", this.state.title);
            fd.append("details", this.state.details);
            fd.append("url", this.state.url);
            fd.append("key_word", this.state.key_word);
            fd.append("is_active", this.state.is_active);
            fd.append("update_id", this.state.update_id);
            fd.append("is_headline", this.state.is_headline);
            fd.append("publish_date", this.state.publish_date);

            axios
                .post("/api/news/update", fd, {
                    headers: {
                        Authorization: `${"ABCDEFGHIJK"}`,
                    },
                })
                .then((response) => {
                    this.props.history.push({
                        pathname: "/author/news",
                        state: {
                            message: "Data has been updated successfully!",
                        },
                    });
                })
                .catch((err) => console.log(err));
        } else {
            this.validator.showMessages();
            this.forceUpdate();
        }
    }

    render() {
        return (
            <Loader loaded={this.state.loaded}>
                <div className="app-content">
                    <div className="section">
                        <div className="page-header">
                            <h4 className="page-title">{this.state.pTitle}</h4>
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
                                    {this.state.pTitle}
                                </li>
                            </ol>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
                                <div className="card">
                                    <div className="card-header"></div>
                                    <form
                                        onSubmit={this.handleFormSubmit}
                                        className="form-horizontal"
                                        encType="multipart/form-data"
                                    >
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
                                                    <div className="card">
                                                        <div className="card-header"></div>
                                                        <form
                                                            onSubmit={
                                                                this
                                                                    .handleFormSubmit
                                                            }
                                                            className="form-horizontal"
                                                        >
                                                            <div className="card-body">
                                                                <div className="row">
                                                                    
                                                                    <div className="col-md-6 col-xs-6">
                                                                        <div className="form-group">
                                                                            <label>
                                                                                Company
                                                                                Name
                                                                                <span>
                                                                                    {" "}
                                                                                    *
                                                                                </span>
                                                                            </label>
                                                                            <select
                                                                                name="sponser_id"
                                                                                id="sponser_id"
                                                                                className="form-control"
                                                                                onChange={
                                                                                    this
                                                                                        .handleSponsorIDInputChange
                                                                                }
                                                                            >
                                                                                <option value="">
                                                                                    Company
                                                                                    name
                                                                                </option>
                                                                                {this.state.company.map(
                                                                                    (
                                                                                        cmp,
                                                                                        index
                                                                                    ) => {
                                                                                        return (
                                                                                            <option
                                                                                                value={
                                                                                                    cmp.id
                                                                                                }
                                                                                                selected={
                                                                                                    cmp.id ==
                                                                                                    this
                                                                                                        .state
                                                                                                        .sponser_id
                                                                                                }
                                                                                            >
                                                                                                {
                                                                                                    cmp.company_name
                                                                                                }
                                                                                            </option>
                                                                                        );
                                                                                    }
                                                                                )}
                                                                            </select>
                                                                            {this.validator.message(
                                                                                "Company name",
                                                                                this
                                                                                    .state
                                                                                    .sponser_id,
                                                                                "required",
                                                                                {
                                                                                    className:
                                                                                        "text-danger",
                                                                                }
                                                                            )}
                                                                        </div>
                                                                    </div>

                                                                   
                                                                    <div className="col-md-6 col-xs-6">
                                                                        <div className="form-group">
                                                                            <label>
                                                                                News
                                                                                Title
                                                                                <span>
                                                                                    {" "}
                                                                                    *
                                                                                </span>
                                                                            </label>
                                                                            <input
                                                                                type="text"
                                                                                onChange={
                                                                                    this
                                                                                        .handleTitleInputChange
                                                                                }
                                                                                value={
                                                                                    this
                                                                                        .state
                                                                                        .title
                                                                                }
                                                                                name="title"
                                                                                id="title"
                                                                                className="form-control"
                                                                                placeholder="News title"
                                                                            />
                                                                            {this.validator.message(
                                                                                "title",
                                                                                this
                                                                                    .state
                                                                                    .title,
                                                                                "required",
                                                                                {
                                                                                    className:
                                                                                        "text-danger",
                                                                                }
                                                                            )}
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-md-12 col-xs-12">
                                                                        <div className="form-group">
                                                                            <label>
                                                                                News
                                                                                Details
                                                                                <span>
                                                                                    {" "}
                                                                                    *
                                                                                </span>
                                                                            </label>
                                                                            <CKEditor
                                                                                editor={
                                                                                    ClassicEditor
                                                                                }
                                                                                data={
                                                                                    this
                                                                                        .state
                                                                                        .details
                                                                                }
                                                                                onChange={
                                                                                    this
                                                                                        .handleDetailsInputChange
                                                                                }
                                                                                name="details"
                                                                                id="details"
                                                                                className="form-control"
                                                                            />
                                                                            {this.validator.message(
                                                                                "Details",
                                                                                this
                                                                                    .state
                                                                                    .details,
                                                                                "required",
                                                                                {
                                                                                    className:
                                                                                        "text-danger",
                                                                                }
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 col-xs-6">
                                                                        <div className="form-group">
                                                                            <label>
                                                                                Website
                                                                                <span>
                                                                                    {" "}
                                                                                    *
                                                                                </span>
                                                                            </label>
                                                                            <input
                                                                                type="text"
                                                                                onChange={
                                                                                    this
                                                                                        .handleURLInputChange
                                                                                }
                                                                                value={
                                                                                    this
                                                                                        .state
                                                                                        .url
                                                                                }
                                                                                name="url"
                                                                                id="url"
                                                                                className="form-control"
                                                                                placeholder="Website"
                                                                            />
                                                                            {this.validator.message(
                                                                                "Website",
                                                                                this
                                                                                    .state
                                                                                    .url,
                                                                                "required|url",
                                                                                {
                                                                                    className:
                                                                                        "text-danger",
                                                                                }
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 col-xs-6">
                                                                        <div className="form-group">
                                                                            <label>
                                                                                Status
                                                                                <span>
                                                                                    {" "}
                                                                                    *
                                                                                </span>
                                                                            </label>
                                                                            <select
                                                                                name="is_active"
                                                                                id="is_active"
                                                                                className="form-control"
                                                                                onChange={
                                                                                    this
                                                                                        .handleIsActiveInputChange
                                                                                }
                                                                            >
                                                                                <option value="">
                                                                                    Change
                                                                                    Status
                                                                                </option>
                                                                                <option
                                                                                    value="1"
                                                                                    selected={
                                                                                        1 ==
                                                                                        this
                                                                                            .state
                                                                                            .is_active
                                                                                    }
                                                                                >
                                                                                    Active
                                                                                </option>
                                                                                <option
                                                                                    value="0"
                                                                                    selected={
                                                                                        0 ==
                                                                                        this
                                                                                            .state
                                                                                            .is_active
                                                                                    }
                                                                                >
                                                                                    Inactive
                                                                                </option>
                                                                            </select>
                                                                            {this.validator.message(
                                                                                "Status",
                                                                                this
                                                                                    .state
                                                                                    .is_active,
                                                                                "required",
                                                                                {
                                                                                    className:
                                                                                        "text-danger",
                                                                                }
                                                                            )}
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-md-6 col-xs-12">
                                                                        <div className="form-group">
                                                                            <label>
                                                                                Publish
                                                                                Date
                                                                                <span>
                                                                                    {" "}
                                                                                    *
                                                                                </span>
                                                                            </label>
                                                                            <input
                                                                                type="datetime-local"
                                                                                onChange={
                                                                                    this
                                                                                        .handlePublishDateInputChange
                                                                                }
                                                                                value={
                                                                                    this.state
                                                                                        .publish_date
                                                                                }
                                                                                name="publish_date"
                                                                                id="publish_date"
                                                                                className="form-control"
                                                                                placeholder="Publish Date"
                                                                            />
                                                                           
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-md-6 col-xs-12">
                                                                        <div className="form-group">
                                                                            <label>
                                                                                Key
                                                                                Word
                                                                                <span>
                                                                                    {" "}
                                                                                    *
                                                                                </span>
                                                                            </label>
                                                                            <input
                                                                                type="text"
                                                                                onChange={
                                                                                    this
                                                                                        .handleKeyWordInputChange
                                                                                }
                                                                                value={
                                                                                    this
                                                                                        .state
                                                                                        .key_word
                                                                                }
                                                                                name="key_word"
                                                                                id="key_word"
                                                                                className="form-control"
                                                                                placeholder="Key word"
                                                                            />
                                                                            {this.validator.message(
                                                                                "key word",
                                                                                this
                                                                                    .state
                                                                                    .key_word,
                                                                                "required",
                                                                                {
                                                                                    className:
                                                                                        "text-danger",
                                                                                }
                                                                            )}
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-md-6 col-xs-12">
                                                                        <div className="form-group">
                                                                            <label>
                                                                                Image
                                                                                <span>
                                                                                    {" "}
                                                                                    *
                                                                                </span>
                                                                            </label>
                                                                            <input
                                                                                type="file"
                                                                                multiple
                                                                                onChange={
                                                                                    this
                                                                                        .handleImageInputChange
                                                                                }
                                                                                name="image[]"
                                                                                id="image"
                                                                                className="form-control"
                                                                            />
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-md-6 col-xs-12">
                                                <div className="form-group">
                                                    <label>
                                                        Show as headline<span> *</span>
                                                    </label>
                                                    <select
                                                        name="is_headline"
                                                        id="is_headline"
                                                        className="form-control"
                                                        onChange={
                                                            this
                                                                .handleIsHeadlineInputChange
                                                        }
                                                    >
                                                        <option value="">
                                                            Headline Status
                                                        </option>
                                                        <option value="1"  selected={
                                                                                        1 ==
                                                                                        this
                                                                                            .state
                                                                                            .is_headline
                                                                                    }>
                                                            Yes
                                                        </option>
                                                        <option value="0"  selected={
                                                                                        0 ==
                                                                                        this
                                                                                            .state
                                                                                            .is_headline
                                                                                    }>
                                                            No
                                                        </option>
                                                    </select>
                                                    {this.validator.message(
                                                        "Headline",
                                                        this.state.is_headline,
                                                        "required",
                                                        {
                                                            className:
                                                                "text-danger",
                                                        }
                                                    )}
                                                </div>
                                            </div>
                                                                </div>
                                                                <div className="card-footer text-right border-top-0">
                                                                    <input
                                                                        type="submit"
                                                                        className="btn btn-primary"
                                                                        name="Submit"
                                                                        id="Submit"
                                                                        value="Save"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Loader>
        );
    }
}

export default EditSponsor;
