import React from "react";
import ReactDOM from 'react-dom';
import Reflux from 'reflux';
import Request from 'request';
//import Intro from './intro.jsx';
import SectionBase from './sections/sectionBase.jsx';
import NavMenu from './sections/navMenu/navMenu.jsx';
import $ from 'jquery';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ClassNames from 'classnames';
import AppStore from './stores/appStore';
import Sections from './constants/sections';


function onClick() {
    Request.get('http://172.16.1.18:9000/ui', {}, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body); // Show the HTML for the Google homepage.
        }
    });
};

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
                    <FloatingActionButton onClick={onClick}>
                        <div className="nav-btn-icn">
                            <span className="top btn-line"></span>
                            <span className="middle btn-line"></span>
                            <span className="bottom btn-line"></span>
                        </div>
                    </FloatingActionButton>
                </div>
                <NavMenu open={that.state.active}/>
            {_.map(Sections, (section, key) => {

                if (section.ignoreSectionHeader) {
                    return (<section ref={key} key={key} className={"section " + key}>
                        <section.body/>
                    </section>)
                }

                return (
                    <section ref={key} key={key} className={"section " + key}>
                        <SectionBase section={section}/>
                    </section>
                )
            })}
            </div>
        );
    },

    componentDidUpdate() {
        //$('html, body').animate({
        //    scrollTop: $(this.refs[this.state.section]).offset().top
        //}, 2000);
    }
});