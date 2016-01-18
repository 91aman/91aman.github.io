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
import _ from 'lodash';
import AppActions from'./actions/appActions';
import Sections from './constants/sections';

export default React.createClass({
    getDefaultProps() {
        return {
            open: false
        }
    },
    render() {
        var ListItemEl = _.map(Sections, (section, key) => {

            return <ListItem primaryText={section.label} leftIcon={<section.icon style={{
                fill: "#fff",
                padding: '16px'
            }} />} style={{
                color: '#fff',
                fontSize: '24px',
                lineHeight: '24px',
                margin: '10px'
            }} key={key} onClick={_.partial(AppActions.onNavClick, key)}/>
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
    }
});