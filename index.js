const D3Node = require('d3-node')
const { generateString, generateImage } = require('./utils')

function BarChart(data, options, {
    selector: _selector = '.radar-chart-node',
    svgStyle: _svgStyle = `
        .arc text {font: 10px sans-serif; text-anchor: middle;}
        .arc path {stroke: #fff;}
    `,
    container: _container = '<div style="width: 100%; height: 100%;" class="radar-chart-node"></div>'
} = {}) {
    const d3n = new D3Node({
        selector: _selector,
        styles: _svgStyle,
        container: _container
    })

    const { d3 } = d3n
    const LENGTH_PER_VALUE = 45

    const valueDescription = [
        { value: 1, description: 'Extremely Low' },
        { value: 2, description: 'Very Low' },
        { value: 3, description: 'Very Low' },
        { value: 4, description: 'Fairly Low' },
        { value: 5, description: 'Average' },
        { value: 6, description: 'Average' },
        { value: 7, description: 'High' },
        { value: 8, description: 'High' },
        { value: 9, description: 'Very High' },
        { value: 10, description: 'Extremely High' }
    ]

    const cfg = {
        w: 870,				    // Width of the circle
        h: 500,				    // Height of the circle
        margin: {
            top: 50,
            right: 220,
            bottom: 20,
            left: 220
        },                      // The margins of the SVG
    }
    // mapping key from options to cfg
    if ('undefined' !== typeof options) {
        for (const i in options) {
            if ('undefined' !== typeof options[i]) {
                cfg[i] = options[i]
            }
        } // for i
    } // if

    const width = cfg.w - cfg.margin.left - cfg.margin.right,
        height = cfg.h - cfg.margin.top - cfg.margin.bottom

    const svg = d3n.createSVG()
        .attr('width', width + cfg.margin.left + cfg.margin.right)
        .attr('height', height + cfg.margin.top + cfg.margin.bottom)
        .style('fill', '#4a504d')
        .append('g')
        .attr('transform', `translate(${cfg.margin.left}, ${cfg.margin.top})`)

    const x = d3.scaleLinear()
        .range([0, width])
        .domain([0, d3.max(data, d => d.value)])

    const y = d3.scaleBand()
        .domain(data.map(({ name }) => name))
        .rangeRound([height, 0])
        .padding(0.1)

    //make y axis to show bar names
    const yAxis = d3.axisLeft(y)

    svg.append('g')
        .attr('class', 'y axis')
        .attr('width', '20px')
        .style('font-size', '20px')
        .call(yAxis)

    const bars = svg.selectAll('.bar')
        .data(data)
        .enter()
        .append('g')

    // append for subBar rects
    bars.append('rect')
        .attr('class', 'subBar')
        .style('fill', '#f4f6f9')
        .attr('y', ({ name }) => y(name))
        .attr('height', y.bandwidth())
        .attr('x', 20)
        .attr('width', LENGTH_PER_VALUE * 10) // max 10 value

    // append rects
    bars.append('rect')
        .attr('class', 'bar')
        .style('fill', '#3abcca')
        .attr('y', ({ name }) => y(name))
        .attr('height', y.bandwidth())
        .attr('x', 20)
        // .attr('width', ({ value }) => x(value))
        .attr('width', ({ value }) => LENGTH_PER_VALUE * value)
    // add value description
    bars.append('text')
        .style('fill', '#4a504d')
        .style('font-size', '20px')
        .attr('y', ({ name }) => y(name) + y.bandwidth() / 2 + 10)
        .attr('x', 480) // value for width
        .text(d => valueDescription.find(({ value }) => value === d.value).description)

    // add a value label to the right of each bar
    bars.append('text')
        .attr('class', 'label')
        .style('font-weight', 'bolder')
        .style('font-size', '25px')
        .style('fill', 'white')
        // y position of the label is halfway down the bar
        .attr('y', ({ name }) => y(name) + y.bandwidth() / 2 + 10)
        // x position is near end of the bar
        .attr('x', ({ value }) => LENGTH_PER_VALUE * value - 15)
        .text(({ value }) => value)

    return d3n
}

module.exports = { BarChart, generateString, generateImage } 