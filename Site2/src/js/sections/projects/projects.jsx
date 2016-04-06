/**
 * Created by amanjain on 02/03/16 at 1:33 AM.
 * Description :
 */

import React from "react";
import "../projects/projects.scss"; //DUMB
import ProjectConstants from '../../constants/projects.js';

export default React.createClass({
    render: function () {
        return (
            <div className="projects-container">
                {_.map(ProjectConstants, (project) => {
                    return (
                        <div className="project-cont" style={{
                            "background-image"  : "url(" + project.img + ")"
                        }}>
                            <div className="pc-overlay"></div>
                            <div className="pc-details">
                                <div className="pc-corner-ribbon" data-type={project.typeId}>{project.type}</div>
                                <div className="pc-details-wrap">
                                    <div className="pc-title">
                                        {project.title}
                                    </div>
                                    <div className="pc-subTitle">
                                        {project.subTitle}
                                    </div>
                                    <div className="pc-desc">
                                        {project.description}
                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
});