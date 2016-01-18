/**
 * Created by amanjain on 14/01/16 at 12:44 AM.
 * Description : Actions store for the app
 */


import Reflux from 'reflux';
import React from "react";
import AppActions from '../actions/appActions';

export default Reflux.createStore({
    listenables: [AppActions],

    onNavClick: function (sectionKey) {
        this.trigger({
            active: false,
            section: sectionKey
        })
    }
});
