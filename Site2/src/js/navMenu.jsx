/**
 * Created by amanjain on 11/01/16 at 6:52 PM.
 * Description :
 */

import React from "react";
import ReactDOM from 'react-dom';
import Intro from './intro.jsx';
import $ from 'jquery';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import ClassNames from 'classnames';
import HomeIcon from 'material-ui/lib/svg-icons/action/home';
import AboutIcon from 'material-ui/lib/svg-icons/social/person';
import WorkIcon from 'material-ui/lib/svg-icons/places/business-center';
import SkillsIcon from 'material-ui/lib/svg-icons/action/build';
import SchoolIcon from 'material-ui/lib/svg-icons/social/school';
import AchievementsIcon from 'material-ui/lib/svg-icons/action/stars';
import ContactIcon from 'material-ui/lib/svg-icons/communication/contacts';
import _ from 'lodash';

var sections = [{
    label: 'Home',
    icon: HomeIcon
}, {
    label: 'About',
    icon: AboutIcon
}, {
    label: 'Work',
    icon: WorkIcon
}, {
    label: 'Skills',
    icon: SkillsIcon
}, {
    label: 'Education',
    icon: SchoolIcon
}, {
    label: 'Achievements',
    icon: AchievementsIcon
}, {
    label: 'Contact',
    icon: ContactIcon
}];

export default React.createClass({
    getDefaultProps() {
        return {
            open: false
        }
    },
    render() {

        var ListItemEl = _.map(sections, function (section, iter) {

            return <ListItem primaryText={section.label} leftIcon={<section.icon style={{
                fill: "#fff",
                padding: '16px'
            }} />} style={{
                color: '#fff',
                fontSize: '24px',
                lineHeight: '24px',
                margin: '10px'
            }} key={iter}/>
        });
        return (

            <div className={ClassNames("overlay", {
                    open: this.props.open
                }
            )}>
                <div className="overlay-section">
                </div>
                <div className="overlay-section">
                    <nav className="overlay-menu">
                        <List style={{
                            background: '#FF5252',
                            position: 'relative',
                            top: '50%',
                            transform: 'translateY(-50%)'
                        }}>
                            {ListItemEl}
                        </List>
                    </nav>
                </div>
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