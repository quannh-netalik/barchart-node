const { BarChart, generateString, generateImage } = require('../');

const data = [
    { name: 'Achievement and Effort', value: 3 },
    { name: 'Adaptability and Flexibility', value: 6 },
    { name: 'Analytical Thinking ', value: 3 },
    { name: 'Attention to Detail', value: 4 },
    { name: 'Concern for Others', value: 6 },
    { name: 'Cooperation', value: 5 },
    { name: 'Dependability ', value: 5 },
    { name: 'Initiative', value: 4 },
    { name: 'Innovation', value: 4 },
    { name: 'Integrity', value: 5 },
    { name: 'Leadership', value: 3 },
    { name: 'Persistence', value: 5 },
    { name: 'Self-Control', value: 2 },
    { name: 'Social Orientation', value: 7 },
    { name: 'Stress Tolerance', value: 5 }
];

const barChart = BarChart(data.sort((a, b) => a.name > b.name ? -1 : 1), {
    w: 620,
    h: 1000,
    margin: {
        top: 20,
        bottom: 20,
        left: 200,
        right: 20
    },
    color: '#6793FF'
})

// create output files
generateString(barChart, 'html', { write: true, dest: './test' })
generateImage(barChart, 'png', {
    dest: './test'
})

