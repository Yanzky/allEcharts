var option = {
    grid: {
        top: '5%',
        right: '0%',
        bottom: '0%',
        left: '0%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'line'
        }
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        data: [],
        axisLabel: {
            interval: 0,
            textStyle: {
                color: '#fff',
                fontSize: 12
            }
        },
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
        splitLine:{
            show:false
        }

    }],
    yAxis: [{
        type: 'value',
        boundaryGap: [0, 0.1],
        axisLabel: {
            interval: 0,
            textStyle: {
                color: '#fff',
                fontSize: 12
            }
        },
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
        splitLine:{
            show:false
        }

    }],
    series: [{
        name: '',
        type: 'bar',
        stack: 'sum',
        barCategoryGap: '60%',
        itemStyle: {
            normal: {
                color: function (value) {
                    var colorList = [
                        '#c19987', '#dad396', '#b8dfd9', '#6ca7eb', '#6ca7eb', '#6ca7eb', '#6ca7eb', '#6ca7eb', '#6ca7eb'
                    ];
                    return colorList[value.dataIndex];
                }
            }
        },
        data: []
    }]
};
function chartLine(chart,chartDatas) {
    var myChart = echarts.init(chart);
    var chartData = chartDatas;
    var xAxisData = [];
    option.series[0].data = Object.keys(chartData).map(function (key) {
        return {
            name: key,
            value: chartData[key],
        }
    });
    for(var i=0;i<option.series[0].data.length;i++) {
        xAxisData.push(option.series[0].data[i].name)
    }
    option.xAxis[0].data = xAxisData;
    myChart.setOption(option);

}
