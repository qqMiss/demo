
var myChart = echarts.init(document.getElementById('main'));
option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 10,
        data: ['Js', 'Jquery', 'Css', 'Html', 'Vue','...']
    },
    series: [
        {
            name: '掌握程度',
            type: 'pie',
            radius: ['35%', '80%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '70',
                    fontWeight: 'bolder'
                }
            },
            labelLine: {
                show: true
            },
            data: [
                {value: 335, name: 'Js'},
                {value: 310, name: 'Jquery'},
                {value: 234, name: 'Css'},
                {value: 135, name: 'Html'},
                {value: 1548, name: 'Vue'},
                {value: 3000, name: '...'}
            ]
        }
    ]
};

myChart.setOption(option);

