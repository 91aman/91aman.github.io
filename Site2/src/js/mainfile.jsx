import React from "react";
import ReactDOM from 'react-dom';
import Intro from './intro.jsx';
import $ from 'jquery';

export default React.createClass({
  render() {
    return (
    	<div>
      <section ref="section1" className="section">
      	<Intro/>
      </section>
      <section ref="section2" className="section"></section>
      </div>
    );
  },

  componentDidMount(){
  	$(window).scroll( function(){
	var that = this;
  		console.log('abcs');
  	});
  }
});