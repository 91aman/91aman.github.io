import React from "react";
import "../work/work.scss"; //DUMB
import Paper from 'material-ui/lib/paper';
import WorkConstants from '../../constants/work.js';
import WorkIcon from 'material-ui/lib/svg-icons/places/business-center';

export default React.createClass({
    render: function () {
        return (
            <div className="work-container">
            {_.map(WorkConstants, (work, key) => {
                return (
                    <div className="work-card-container" key={key}>
                        <WorkIcon className="work-icon" style={{
                            fill: '#eee'
                        }}/>
                        <Paper className="work-card">
                            <div className="work-logo">
                                <a href={work.company.url} target="_blank"><img src={work.company.logo}/></a>
                            </div>
                            <div className="work-c-name">
                                <a href={work.company.url} target="_blank">{work.company.name}</a>
                            </div>
                            <div className="work-c-position">{work.position}</div>
                            <div className="work-c-desc">{work.description}</div>
                            <div className="work-date">{work.duration}</div>
                        </Paper>
                    </div>
                )
            })}
            </div>
        );
    }
});