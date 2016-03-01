/**
 * Created by amanjain on 19/01/16 at 4:55 PM.
 * Description :
 */

import React from "react";

export default React.createClass({
    getDefaultProp() {
        return {
            section: {}
        }
    },
    render() {
        var section = this.props.section;

        return (
            <div className={'s-container'}>
                <div className="s-header-cont">
                    <div className={'s-header'}>
                        <div className={'s-title'}>
                    {section.title}
                        </div>
                    </div>
                </div>
                <div className={'section-body'}>
                    <section.body section={section}/>
                </div>
            </div>
        );
    }
});