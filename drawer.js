class Drawer {
    drawLineChart(data) {
        const container = d3.select('#svgContainer')
        container.html('')
        
        var x = d3.scale.linear()
            .domain([0, d3.max(data.x)])
            .range([0, svgW]);
        var y = d3.scale.linear()
            .domain([0, d3.max(data.y)])
            .range([svgH, 0]);
        const svg = this.drawOutline(container, x, y)
    }
    
    drawOutline(container, x, y) {
        var margin = {top: 20, bottom: 70, left:40, right: 20};
        var width = 500 - margin.left - margin.right;
        var height = 500 - margin.top - margin.bottom;
        
        var svg = container
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.bottom + margin.top)
            .style("background-color", "lightblue")
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        
        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom")
            .tickFormat(d => {
                return d;
            });
        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left")
            .ticks(10);
        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis)
            .selectAll("text")
            .style("text-anchor", "middle");
        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("Vrijednost");
        
        return svg
    }
}

const drawer = new Drawer()
