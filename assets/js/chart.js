let ctx = document.getElementById('doughnut').getContext('2d');


var gradient = ctx.createLinearGradient(0, 0, 0, 450);
gradient.addColorStop(0, 'rgba(226, 246, 133, 1)');
gradient.addColorStop(1, 'rgba(138, 249, 173, 1)');

var gradient1 = ctx.createLinearGradient(0, 0, 0, 450);
gradient1.addColorStop(0, 'rgba(187, 195, 35, 1)');
gradient1.addColorStop(1, 'rgba(233, 154, 61, 1)');


const data = {

    datasets: [{
        label: 'My First Dataset',
        data: [30000000,  20000000, 5000000],
        backgroundColor: [
            gradient,
            gradient1,
            'rgba(117, 207, 146, 1)'
        ],
        hoverOffset: 2,
        borderWidth: 0,
        options: {
            cutout: 10
        }
    }]
};

var options = {
    percentageInnerCutout: 40
};

let myChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: {
        cutout: 90
    }
})

