import React from "react";
import IntroBackgroundSvg from "../../../svg/intro-background.svg";
import DownArrowSvg from "../../../svg/downArrow.svg";
import css from "../intro/intro.scss"; //DUMB

export default React.createClass({
    render: function () {
        return (
            <div>
                <div className="intro-background">
                    <IntroBackgroundSvg/>
                </div>
                <div className="intro-content">
                    <div className="intro-image-cont">
                        <img className="intro-image" src="src/img/proImg.jpg"/>
                    </div>
                    <div className="intro-title">AMAN JAIN</div>
                    <div className="intro-sub-title">FRONTEND DEVELOPER</div>
                </div>
                <div className="intro-footer">
                    <div className="intro-scroll">
                        <DownArrowSvg/>
                    </div>
                </div>
            </div>
        );
    }
});