class Drawer {
    draw(data, barData) {
        const container = d3.select('#svgContainer')
        container.html('')
        
        var x = d3.scale.linear()
            .domain([0, d3.max(data.x)])
            .range([0, svgW]);
        var y = d3.scale.linear()
            .domain([0, d3.max(data.y)])
            .range([svgH, 0]);
        const svg = this.drawOutline(container, x, y, data.xField, data.yField)
        this.drawPoints(svg, x, y, data)
        
        console.log(barData)
        this.drawBar(barData, container, data.xField)
    }
    
    drawPoints(svg, x, y, data) {
        for(let i = 0; i < data.x.length; i++) {
            svg.append('circle')
                .attr('cx', x(data.x[i]))
                .attr('cy', y(data.y[i]))
                .attr('r', 5)
                .attr('fill', 'black')
        }
    }
    
    drawOutline(container, x, y, xField, yField) {
        var margin = {top: 20, bottom: 70, left:40, right: 20};
        var width = svgW - margin.left - margin.right;
        var height = svgH - margin.top - margin.bottom;
        
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
            .tickFormat(d => {
                return d;
            });
        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left")
            .ticks(10);
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
        
        const yAx = svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            
        if(yField)
            yAx.append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text(yField);
        
        return svg
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
            .tickFormat(function(d, i) { return dataObj[i]; });
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
        
        var barchart = svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", function(d, i) { return x(i); })
            .attr("y", y) .attr("height", function(d) { return height - y(d); })
            .attr("width", barWidth)
            .attr("fill", "blue");
        
        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);
        svg.append("text")
            .attr("x", (width / 2))
            .attr("y", (height + (margin.bottom / 2)))
            .attr("dy", "1em")
            .style("text-anchor", "middle")
            .text(xField);
        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis);
        svg.append("text")
            .attr("transform", "rotate(-90)")
            .attr("x",0 - (height / 2))
            .attr("y", 0 - margin.left)
            .attr("dy", "1em")
            .style("text-anchor", "middle")
            .text("Kolicina ponavljanja");
    }}

const drawer = new Drawer()
