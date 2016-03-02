/**
 * Created by amanjain on 02/03/16 at 1:33 AM.
 * Description :
 */

import React from "react";
import "../education/education.scss"; //DUMB
import Paper from 'material-ui/lib/paper';
import EductionConstants from '../../constants/education.js';

export default React.createClass({
    render: function () {
        return (
            <div className="education-container">
            {_.map(EductionConstants, (education, key) => {
                return (
                    <div key={key} className="education-card">
                        <Paper key={key} zDepth={2} className="education-paper"  style={{
                            width: 300
                        }}>
                            <div className="edu-level">{education.level}
                                <div className="edu-degree">{education.degree}</div></div>
                            <div className="edu-logo">
                                <img src={education.school.logo}></img>
                            </div>
                            <div className="edu-name"><a href={education.school.url} target="_blank">{education.school.name}</a></div>
                            <div className="edu-year">{education.school.year}</div>
                            <div className="edu-result">
                                <div className="edu-r-count">
                                    {education.percentage + ' %'}
                                </div>
                                <div className="edu-r-percentage" style={{width: education.percentage * 3}}>
                                </div>
                            </div>
                        </Paper>
                    </div>)
            })}
            </div>
        );
    }
});