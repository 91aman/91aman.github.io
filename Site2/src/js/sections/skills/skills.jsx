import React from "react";
import _ from "lodash";
import ClassNames from "classnames";
import "../skills/skills.scss"; //DUMB
import Paper from 'material-ui/lib/paper';
import SkillConstants from '../../constants/skills.js';

var SKILLS_IN_A_ROW = 11;

function getParsedSkillsConstant() {
    var retArr = [],
        iter = 0,
        rowAttr = [];

    _.map(SkillConstants, (skill, key)=> {
        if (!(iter % SKILLS_IN_A_ROW)) {
            rowAttr.length && retArr.push(rowAttr);
            rowAttr = [];
        }
        iter++;
        console.log(iter);
        rowAttr.push(skill);
    });

    rowAttr.length && retArr.push(rowAttr);
    return retArr;
}

export default React.createClass({
    render: function () {
        var parsedSkillsConstants = getParsedSkillsConstant();

        console.log(parsedSkillsConstants);
        return (
            <div className="skills-container">

            {_.map(parsedSkillsConstants, (skillsArr, iter)=> {
                return (
                    <div className="somethins" key={iter} style={{
                        transform: "translateY(" + (iter * -25) + "%)"
                    }}>
                        {_.map(skillsArr, (skill, iter2) => {
                            return (
                                <div className={ClassNames({
                                    "skills-cont-wrap": true,
                                    shift: _.contains([6, 7, 8, 9, 10], iter2)
                                })} key={iter2} data-random={Math.floor(Math.random() * (5 - 1) + 1)} >
                                    <div className="skills-cont front">
                                        <div className="skill-logo">
                                            <img src={skill.logo}/>
                                        </div>
                                    </div>
                                    <div className="skills-cont back">
                                        <div className="skill-label">
                                            <a href={skill.url} target="_blank">{skill.label}</a>
                                        </div>
                                    </div>
                                </div>
                            )

                        })}
                    </div>
                )
            })}
            </div>
        );
    }
});