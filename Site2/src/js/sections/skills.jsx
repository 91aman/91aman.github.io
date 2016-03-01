/**
 * Created by amanjain on 18/01/16 at 8:20 PM.
 * Description :
 */


import React from "react";
import d3 from "d3";


var data = [
    [{'x': 0, 'y': 0}, {'x': 0.75, 'y': 0}, {'x': 1, 'y': 1}, {'x': 2, 'y': 2}, {'x': 3, 'y': 3}]
];

var colors = [
    'steelblue',
    'green',
    'red',
    'purple'
];

export default React.createClass({
    render() {
        return (
            <div ref="chart" className="skills-chart">
            </div>
        );
    },

    componentDidMount() {
        var margin = {top: 20, right: 30, bottom: 30, left: 50},
            width = 800 - margin.left - margin.right,
            height = 300 - margin.top - margin.bottom;

        var x = d3.scale.linear()
            .domain([0, 8])
            .range([0, width]);

        var y = d3.scale.linear()
            .domain([0, 4])
            .range([height, 0]);

        var xAxis = d3.svg.axis()
            .scale(x)
            .tickSize(-height)
            .orient("bottom")
            .tickFormat(function (d) {
                return ["Jan '14", "Apr '14", "Jul '14", "Oct '14", "Jan '15", "Apr '15", "Jul '15", "Oct '15", "Jan '16"][d]
            });

        var yAxis = d3.svg.axis()
            .scale(y)
            .tickSize(-width)
            .orient("left")
            .tickFormat(function (d) {
                return ["", 'Novice', "Intermediate", "Good", "Rockstar"][d]

            });

        //var tip = d3.tip()
        //    .attr('class', 'd3-tip')
        //    .offset([-10, 0])
        //    .html(function(d) {
        //        return "<strong>Frequency:</strong> <span style='color:red'>" + d.frequency + "</span>";
        //    });


//************************************************************
// Generate our SVG object
//************************************************************
        var svg = d3.select(".skills-chart").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        //svg.call(tip);

        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);

        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis);

        svg.append("clipPath")
            .attr("id", "clip")
            .append("rect")
            .attr("width", width)
            .attr("height", height);


        var line = d3.svg.line()
            .interpolate("linear")
            .x(function (d) {
                return x(d.x);
            })
            .y(function (d) {
                return y(d.y);
            });

        svg.selectAll('.line')
            .data(data)
            .enter()
            .append("path")
            .attr("class", "line")
            .attr("clip-path", "url(#clip)")
            .attr('stroke', function (d, i) {
                return colors[i % colors.length];
            })
            .attr("d", line)
            .on('click', function () {
                console.log('asdasd');
            });


        var points = svg.selectAll('.dots')
            .data(data)
            .enter()
            .append("g")
            .attr("class", "dots")
            .attr("clip-path", "url(#clip)")
            .on('click', function () {
                console.log('dots');
            });
        ;

        points.selectAll('.dot')
            .data(function (d, index) {
                var a = [];
                d.forEach(function (point, i) {
                    a.push({'index': index, 'point': point});
                });
                return a;
            })
            .enter()
            .append('circle')
            .attr('class', 'dot')
            .attr("r", 2.5)
            .attr('fill', function (d, i) {
                return colors[d.index % colors.length];
            })
            .attr("transform", function (d) {
                return "translate(" + x(d.point.x) + "," + y(d.point.y) + ")";
            }
        );
    }
});