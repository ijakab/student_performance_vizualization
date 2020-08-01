class Drawer {
    draw(data, barData) {
        const container = d3.select('#svgContainer')
        container.html('')
        
        this.drawScatter(data, container, data.xField, data.yField)
        this.drawBar(barData, container, data.xField)
    }
    
    drawBar(dataObj, container, xField) {
        const data = Object.values(dataObj)
        
        var margin = {top: 20, bottom: 70, left:40, right: 20};
        var width = 500 - margin.left - margin.right;
        var height = 500 - margin.top - margin.bottom;
        var barPadding = 4;
        var barWidth = width / data.length - barPadding;
        
        var x = d3.scale.ordinal()
            .domain(d3.range(data.length))
            .rangeRoundBands([0, width]);
        var y = d3.scale.linear()
            .domain([0, d3.max(data)])
            .range([height, 0]);
    
        container.append('br')
        container.append('br')
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
            .tickFormat(function(d, i) { return ''; });
        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left")
            .ticks(10);
        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
        
        var barchart = svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", function(d, i) { return x(i); })
            .attr("y", y)
            .attr("height", function(d) { return height - y(d); })
            .attr("width", barWidth)
            .attr("fill", "blue");
        
        for(let i = 0; i < Object.keys(dataObj).length; i++) {
            svg.append("text")
                .attr("y", svgH-60)
                .attr('x', x(i) + 20)
                .text(Object.keys(dataObj)[i])
        }
    
        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);
        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis);
    }
    
    drawScatter(dataObj, container, xField, yField) {
        const dataY = dataObj.y
        const dataX = dataObj.x
    
        var margin = {top: 20, bottom: 70, left:40, right: 20};
        var width = 500 - margin.left - margin.right;
        var height = 500 - margin.top - margin.bottom;
    
        var x = d3.scale.linear()
            .domain([0, d3.max(dataX)])
            .range([0, width]);
        var y = d3.scale.linear()
            .domain([0, d3.max(dataY)])
            .range([height, 0]);
    
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
    
        container.append('br')
        container.append('br')
        
        var svg = container
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.bottom + margin.top)
            .style("background-color", "lightblue")
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        const xAxisSvg = svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis)
        xAxisSvg.selectAll("text")
            .style("text-anchor", "middle")
        xAxisSvg
            .append("text")
            .attr("x", 420)
            .attr("y", -10)
            .attr("dx", ".71em")
            .style("text-anchor", "end")
            .text(xField);
        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text(yField);
    
        for(let i = 0; i < dataX.length; i++) {
            svg.append('circle')
                .attr('cx', x(dataX[i]))
                .attr('cy', y(dataY[i]))
                .attr('r', dataObj.raw[i].count)
                .attr('fill', dataObj.raw[i].sex === 'F' ? 'red' : 'blue')
        }
        
    }
}

const drawer = new Drawer()
