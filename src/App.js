import React, { Component } from "react";
import { BrowserRouter, NavLink, Switch, Route, Redirect } from "react-router-dom";
import "./App.css"

import homePageIcon from "./images/homeicon.png";
import ScrollToTop from './components/ScrollToTop'
// import Button from 'react-bootstrap/Button';
// import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

import Posts from "./containers/pages/Posts";
import PostRender from "./containers/pages/_Posts/PostRender";
import Home from "./containers/pages/Home";
import News from "./containers/pages/News";
import Authors from "./containers/pages/Authors";

// map
import { Map, CircleMarker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Iframe from 'react-iframe'

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lastwindowScrollY: 0,
        }
    }
    changeHeaderHeight = () => {
        if (this.state.lastwindowScrollY < 100 & window.scrollY >= 100) {
            // console.log(this.headerRef.style);
            this.headerRef.style.animation = "headerToolbarAnimationScrollDown 0.5s"
            this.headerRef.style.height = '2.5rem';
            // this.headerIconRef.display: none;
            this.setState({ lastwindowScrollY: 100 });
        } else if (this.state.lastwindowScrollY >= 100 & window.scrollY < 100) {
            this.headerRef.style.animation = "headerToolbarAnimationScrollUp 0.5s"
            this.headerRef.style.height = '8rem';
            this.setState({ lastwindowScrollY: 0 });
        }
    }
    componentDidMount = () => {
        window.addEventListener('scroll', this.changeHeaderHeight);
    }
    toHome = () => {
        window.scrollTo(0, 0);
    }
    clickContact = (e) =>{
        window.scrollTo(0,document.body.scrollHeight);
    }

    render() {
        return (
            <BrowserRouter>
                <ScrollToTop>
                    <div className="container">
                        <div className="headerToolbar" ref={el => this.headerRef = el}>
                            <div className="headerToolbarLeft">
                                <NavLink to="/" className="NavLink"><div className="homePageIcon"><img className="homePageIconImg" src={homePageIcon} /></div></NavLink>
                            </div>
                            
                            <div className="headerToolbarCenter">
                                <NavLink to="/" style={{ textDecoration: 'none' }} onClick={this.toHome}>
                                    <div className="button"><p className="buttonName">HOME</p></div>
                                </NavLink>
                                <NavLink to="/news" style={{ textDecoration: 'none' }} onClick={this.toHome}>
                                    <div className="button"><p className="buttonName">NEWS</p></div>
                                </NavLink>
                                <NavLink to="/posts" style={{ textDecoration: 'none' }}>
                                    <div className="button"><p className="buttonName">REASERCH</p></div>
                                </NavLink>
                                <NavLink to="/authors" style={{ textDecoration: 'none' }}>
                                    <div className="button"><p className="buttonName">PEOPLE</p></div>
                                </NavLink>
                                <a target="_blank" rel="noopener noreferrer" href="https://scholar.google.com/citations?user=spTwAGcAAAAJ&hl=zh-TW" style={{ textDecoration: 'none' }}>
                                    <div className="button"><p className="buttonName">PUBLICATIONS</p></div>
                                </a>
                                <div to="/authors" style={{ textDecoration: 'none' }}>
                                    <div className="button" onClick={this.clickContact}><p className="buttonName">CONTACT</p></div>
                                </div>
                            </div>
                            <a className="headerToolbarRight">
                                <div className="button loginButton" style={{ textDecoration: 'none' }}><p className="buttonName">Login</p></div>
                            </a>
                        </div>
                        <div className="contentContainer">
                            <Switch >
                                <Route exact path="/" component={Home}></Route>
                                <Route exact path="/news" component={News}></Route>
                                <Route exact path="/posts" component={Posts} />
                                <Route exact path="/authors" component={Authors} />
                                <Route path="/posts/:id?" component={PostRender} />
                            </Switch>
                        </div>

                        <div className="footerBar">
                            <div className="contact">
                            <div className="shaddow-footerBar-bottom" />
                                <div className="contact-us">
                                    CONTACT US
                                </div>

                                <div className="contactInfo-address">
                                    Room 206, EE-II Hall, Electrical Engineering, National Taiwan University, No.1, Sec. 4, Roosevelt Road, Taipei, 10617 Taiwan.
                                </div>
                                <div className="contactInfo-email">
                                    cwchenee@ntu.edu.tw
                                </div>
                            </div>
                            <div className="shaddow-footerBar-top" />
                            <div className="map">
                                <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7230.914063403008!2d121.54084252513516!3d25.01855948591818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442aa2660d80edd%3A0x3101c3e37b451b71!2zMTA25Y-w5YyX5biC5aSn5a6J5Y2A6Zu75qmf5LqM6aSo!5e0!3m2!1szh-TW!2stw!4v1575826563642!5m2!1szh-TW!2stw" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen=""></Iframe >
                            </div>
                            <div className="shaddow-footerBar-bottom" />
                            <div className="copyright-container">
                                <div className="copyright">
                                    ©2019 by Next-generation Automated Surgical Apparatus Lab.
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollToTop>
            </BrowserRouter>
        );
    }
}