import React from "react";
import ReactDOM from 'react-dom';
import Intro from './intro.jsx';
import NavMenu from './navMenu.jsx';
import $ from 'jquery';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ClassNames from 'classnames';

export default React.createClass({
    getInitialState() {
        return {
            active: false
        }
    },
    render() {
        var that = this;

        console.log('rendered');
        return (
            <div>
                <div className={ClassNames("nav-btn", {
                    active: that.state.active
                })}>
                    <FloatingActionButton onClick={function () {
                        that.setState({active: !that.state.active})
                    }}>
                        <div className="nav-btn-icn">
                            <span className="top btn-line"></span>
                            <span className="middle btn-line"></span>
                            <span className="bottom btn-line"></span>
                        </div>
                    </FloatingActionButton>
                </div>
                <NavMenu open={that.state.active}/>
                <section ref="section1" className="section intro">
                    <Intro/>
                </section>
                <section ref="section2" className="section about-me"></section>
                <section ref="section3" className="section prof-exp"></section>
                <section ref="section4" className="section achievements"></section>
                <section ref="section5" className="section contact-me"></section>

            </div>
        );
    },

    componentDidMount() {
        $(window).scroll(function () {
            var that = this;
            console.log('abcs');
        });
    }
});