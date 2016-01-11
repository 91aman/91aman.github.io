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

var sections = ['Home', 'About', 'Work', 'Skills', 'Education', 'Achievements', 'Contact'];
export default React.createClass({
    getDefaultProps() {
        return {
            open: false
        }
    },
    render() {

        var ListItemEl = _.map(sections, function (section) {
            return <ListItem primaryText={section} style={{
                color: '#fff',
                fontSize: '30px',
                lineHeight: '30px',
                margin: '10px'
            }}/>
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