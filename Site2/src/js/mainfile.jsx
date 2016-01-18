import React from "react";
import ReactDOM from 'react-dom';
import Reflux from 'reflux';
import Intro from './intro.jsx';
import NavMenu from './navMenu.jsx';
import $ from 'jquery';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ClassNames from 'classnames';
import AppStore from './stores/appStore'

export default React.createClass({

    mixins: [Reflux.connect(AppStore)],

    getInitialState() {
        return {
            active: false,
            section: 'home'
        }
    },
    render() {
        var that = this;

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
                <section ref="home" className="section home">
                    <Intro/>
                </section>
                <section ref="about" className="section about"></section>
                <section ref="work" className="section work"></section>
                <section ref="skills" className="section skills"></section>
                <section ref="education" className="section education"></section>
                <section ref="achievements" className="section achievements"></section>
                <section ref="contact" className="section contact"></section>
            </div>
        );
    },

    componentDidUpdate() {
        $('html, body').animate({
            scrollTop: $(this.refs[this.state.section]).offset().top
        }, 2000);
    }
});