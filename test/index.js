const { BarChart, generateString, generateImage } = require('../');

const data = [ 
    {name: 'Sales', value: 1},
    {name: 'Marketing', value: 3},
    {name: 'Development', value: 1},
    {name: 'Customer Support', value: 2},
    {name: 'Information', value: 1},
    {name: 'Administration', value: 5}
];

const barChart = BarChart(data)

// create output files
generateString(barChart, 'html', { write: true, dest: './test' })
generateImage(barChart, 'png', {
    dest: './test'
})

