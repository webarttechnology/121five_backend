import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Dashboard from './Dashboard';
import Aboutus from './Aboutus';
import AddAbout from './AddAbout';
import EditAbout from './EditAbout';
import Contact from './Contact';
import AddContact from './AddContact';
import EditContact from './EditContact';
import Category from './Category';
import AddCategory from './AddCategory';
import EditCategory from './EditCategory';
import Sponsor from './Sponsor';
import AddSponsor from './AddSponsor';
import EditSponsor from './EditSponsor';
import News from './News';
import AddNews from './AddNews';
import EditNews from './EditNews';
import InstitutionalInformation from './InstitutionalInformation';
import AddInstitutionalInformation from './AddInstitutionalInformation';
import EditInstitutionalInformation from './EditInstitutionalInformation';
import Slider from './Slider';
import AddSlider from './AddSlider';
import EditSlider from './EditSlider';
import Banner from './Banner';
import AddBanner from './AddBanner';
import EditBanner from './EditBanner';
import Photographer from './Photographer';
import AddPhotographer from './AddPhotographer';
import EditPhotographer from './EditPhotographer';
import Gallery from './Gallery';
import AddGallery from './AddGallery';
import EditGallery from './EditGallery';
import Company from './Company';
import AddCompany from './AddCompany';
import EditCompany from './EditCompany';
import Subscription from './Subscription';
import AddSubscription from './AddSubscription';
import EditSubscription from './EditSubscription';
import EditPayment from './EditPayment';

import Features from './Features';
import AddFeatures from './AddFeatures';
import EditFeatures from './EditFeatures';

import Contributor from './Contributor';
import AddContributor from './AddContributor';
import EditContributor from './EditContributor';

import ManageSubscription from './ManageSubscription';
import Comment from './Comment';

function Menu() {
    const logout = () => {
        localStorage.clear();
        window.location.reload();
    }
    return (
        
        <Router>
          
            <nav className="navbar navbar-expand-lg main-navbar">
                <Link className="header-brand" to="/">
                    <div><img src={window.location.origin+'/asset/logo.png'} width="120px" alt="Logo"/></div>
                </Link>
                <form className="form-inline mr-auto">
                    <ul className="navbar-nav mr-2">
                        <li><Link to="/" data-toggle="sidebar" className="nav-link nav-link toggle"><i className="fa fa-reorder"></i></Link></li>
                        <li><Link to="/" data-toggle="search" className="nav-link nav-link d-md-none navsearch"><i className="fa fa-search"></i></Link></li>
                    </ul>
                </form>
                <ul className="navbar-nav navbar-right">
                    <li className="dropdown"><Link to="/" data-toggle="dropdown" className="nav-link dropdown-toggle nav-link-lg d-flex">
                        <span className="mr-3 mt-2 d-none d-lg-block ">
                            <span className="text-white">Hello,<span className="ml-1">admin</span></span>
                        </span>
                        <span><img src={window.location.origin + '/asset/img/avatar/avatar-3.jpeg'} alt="profile-user" className="rounded-circle w-32 mr-2" /></span>
                    </Link>
                        <div className="dropdown-menu dropdown-menu-right">
                            <div className=" dropdown-header noti-title text-center border-bottom pb-3">
                                <h5 className="text-capitalize text-dark mb-1">Admin</h5>
                                <small className="text-overflow m-0">Admin</small>
                            </div>
                            <div className="dropdown-divider"></div><Link className="dropdown-item" onClick={logout}><i className="mdi  mdi-logout-variant mr-2"></i> <span>Logout</span></Link>
                        </div>
                    </li>
                </ul>
            </nav>

            <aside className="app-sidebar">
                <div className="app-sidebar__user">
                    <div className="dropdown user-pro-body text-center">
                        <div className="nav-link pl-1 pr-1 leading-none ">
                            <img src={window.location.origin + '/asset/img/avatar/avatar-3.jpeg'} alt="user-img" className="avatar-xl rounded-circle mb-1" />
                            <span className="pulse bg-success" aria-hidden="true"></span>
                        </div>
                        <div className="user-info">
                            <h6 className=" mb-1 text-dark">Admin</h6>
                            <span className="text-muted app-sidebar__user-name text-sm">Admin</span>
                        </div>
                    </div>
                </div>
                <ul className="side-menu">
                    <li>
                        <Link to='/author/dashboard' className="side-menu__item" ><i className="side-menu__icon fa fa-laptop"></i><span className="side-menu__label">Dashboard</span></Link>
                    </li>
                    <li>
                        <Link to='/author/about-us' className="side-menu__item"><i className="side-menu__icon fe fe-list"></i><span className="side-menu__label">About us</span></Link>
                    </li>

                    <li className="slide">
                        <Link className="side-menu__item" data-toggle="slide" to="/"><i className="side-menu__icon fa fa-cogs"></i><span className="side-menu__label">News & Features</span><i className="angle fa fa-angle-right"></i></Link>
                        <ul className="slide-menu">
                            <li>
                                <Link to="/author/news" className="side-menu__item"><span className="side-menu__label">News</span></Link>
                            </li>
                            <li>
                                <Link to="/author/comment" className="side-menu__item"><span className="side-menu__label">Comments</span></Link>
                            </li>
                            <li>
                                <Link to="/author/features" className="side-menu__item"><span className="side-menu__label">Features</span></Link>
                            </li>
                            <li>
                                <Link to="/author/sponsor" className="side-menu__item"><span className="side-menu__label">Sponsor List</span></Link>
                            </li>
                            {/* <li>
                                <Link to="/author/category" className="side-menu__item"><span className="side-menu__label">Category</span></Link>
                            </li>                             */}
                        </ul>
                    </li>
                    <li>
                        <Link to='/author/banner' className="side-menu__item"><i className="side-menu__icon fe fe-file"></i><span className="side-menu__label">Banner</span></Link>
                    </li>
                    <li>
                        <Link to='/author/photographer' className="side-menu__item"><i className="side-menu__icon fe fe-file"></i><span className="side-menu__label">Photographer</span></Link>
                    </li>
                    <li>
                        <Link to='/author/slider' className="side-menu__item"><i className="side-menu__icon fe fe-file"></i><span className="side-menu__label">Slider</span></Link>
                    </li>
                    <li>
                        <Link to='/author/gallery' className="side-menu__item"><i className="side-menu__icon fe fe-file"></i><span className="side-menu__label">Gallery</span></Link>
                    </li>
                    <li>
                        <Link to='/author/company' className="side-menu__item"><i className="side-menu__icon fe fe-file"></i><span className="side-menu__label">Company</span></Link>
                    </li>
                    <li>
                        <Link to='/author/institutional-information' className="side-menu__item"><i className="side-menu__icon fe fe-file"></i><span className="side-menu__label">Institutional information</span></Link>
                    </li>
                    <li>
                        <Link to='/author/subscription' className="side-menu__item"><i className="side-menu__icon fe fe-file"></i><span className="side-menu__label">Our Subscription</span></Link>
                    </li>
                     <li>
                        <Link to='/author/manage-subscription' className="side-menu__item"><i className="side-menu__icon fe fe-file"></i><span className="side-menu__label">Payment</span></Link>
                    </li>
                    <li>
                        <Link to='/author/contributor' className="side-menu__item"><i className="side-menu__icon fe fe-file"></i><span className="side-menu__label">Sponsor Contributor</span></Link>
                    </li>
                    <li>
                        <Link to='/author/contact-us' className="side-menu__item"><i className="side-menu__icon fe fe-file"></i><span className="side-menu__label">Contact information</span></Link>
                    </li>
                </ul>
            </aside>
            <Switch>
                <Route exact path='/' component={Dashboard} />
                <Route exact path='/author/dashboard' component={Dashboard} />
                <Route exact path='/author/about-us' component={Aboutus} />
                <Route exact path='/author/about/add' component={AddAbout} />
                <Route exact path='/author/about/edit/:id' component={EditAbout} />

                <Route exact path='/author/contact-us' component={Contact} />
                <Route exact path='/author/contact/add' component={AddContact} />
                <Route exact path='/author/contact/edit/:id' component={EditContact} />

                <Route exact path='/author/category' component={Category} />
                 <Route exact path='/author/category/add' component={AddCategory} />
                <Route exact path='/author/category/edit/:id' component={EditCategory} />

                <Route exact path='/author/sponsor' component={Sponsor} />
                <Route exact path='/author/sponsor/add' component={AddSponsor} />
                <Route exact path='/author/sponsor/edit/:id' component={EditSponsor} />

                <Route exact path='/author/news' component={News} />
                <Route exact path='/author/news/add' component={AddNews} />
                <Route exact path='/author/news/edit/:id' component={EditNews} />

                <Route exact path='/author/features' component={Features} />
                <Route exact path='/author/features/add' component={AddFeatures} />
                <Route exact path='/author/features/edit/:id' component={EditFeatures} />

                <Route exact path='/author/institutional-information' component={InstitutionalInformation} />
                <Route exact path='/author/institutional-information/add' component={AddInstitutionalInformation} />
                <Route exact path='/author/institutional-information/edit/:id' component={EditInstitutionalInformation} />

                <Route exact path='/author/slider' component={Slider} />
                <Route exact path='/author/slider/add' component={AddSlider} />
                <Route exact path='/author/slider/edit/:id' component={EditSlider} />

                <Route exact path='/author/photographer' component={Photographer} />
                <Route exact path='/author/photographer/add' component={AddPhotographer} />
                <Route exact path='/author/photographer/edit/:id' component={EditPhotographer} />

                <Route exact path='/author/banner' component={Banner} />
                <Route exact path='/author/banner/add' component={AddBanner} />
                <Route exact path='/author/banner/edit/:id' component={EditBanner} />

                

                <Route exact path='/author/gallery' component={Gallery} />
                <Route exact path='/author/gallery/add' component={AddGallery} />
                <Route exact path='/author/gallery/edit/:id' component={EditGallery} />

                <Route exact path='/author/company' component={Company} />
                <Route exact path='/author/company/add' component={AddCompany} />
                <Route exact path='/author/company/edit/:id' component={EditCompany} />

                <Route exact path='/author/subscription' component={Subscription} />
                <Route exact path='/author/subscription/add' component={AddSubscription} />
                <Route exact path='/author/subscription/edit/:id' component={EditSubscription} />

                <Route exact path='/author/contributor' component={Contributor} />
                <Route exact path='/author/contributor/add' component={AddContributor} />
                <Route exact path='/author/contributor/edit/:id' component={EditContributor} />
                

                <Route exact path="/author/manage-subscription" component={ManageSubscription}/>
                <Route exact path='/author/payment/edit/:id' component={EditPayment} />

                <Route exact path='/author/comment' component={Comment} />
                
            </Switch>

        </Router>
    );
}

export default Menu;