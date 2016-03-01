/**
 * Created by amanjain on 19/01/16 at 4:13 PM.
 * Description :
 */

import React from "react";
import Skills  from "../constants/skills.jsx"



export default React.createClass({
    render() {
        return (
            <div className={'skills-container'}>
            {_.map(Skills, (skill, key) => {
                return (
                    <div className={"skill-cont " + key} key={key} ref={key}>
                        <div className={"sk-icon"}>
                            <img src={skill.iconUrl}/>
                        </div>
                        <div className={"sk-label"}>{skill.label}</div>
                    </div>
                )
            })}
            </div>
        );
    }
});