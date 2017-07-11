
var grid = {
    left:'0%',
    right:'0%',
    bottom:57,
    top:49,
    containLabel:true
};
var colors = ['#00FFC5','#0067F0','#F7AB4B','#E85E6D','#FF3030','#FFA500','#00FFFF','#7FFF00'];
var fontSize = 16

var option = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    grid:grid,
    series : [
        {
            color: colors,
            type:'pie',
            radius: ['30%', '70%'],
            center: ['50%', '50%'],
            data:[],
            roseType: false,
            label: {
                normal: {
                    formatter: function(params){
                        return params.name + '\n' + parseInt(params.value).toLocaleString()
                    },
                    textStyle: {
                        fontSize:fontSize,
                        color:'#fff',
                        fontFamily:'Microsft yahei'
                    }
                }
            },
            labelLine: {
                normal: {
                    smooth: 0.2,
                    length: 10,
                    length2: 10,
                    lineStyle: {
                        color:"#fff"
                    }
                }
            },
            itemStyle: {
                normal: {
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};

function Pie(chart,chartDatas,seriesType) {
    let { roseType = false, radius = ['0','40%'] } = seriesType;
    var myChart = echarts.init(chart);
    // myChart.setOption(option);
    var chartData = chartDatas;
    option.series[0].roseType = roseType;
    console.log(option.series[0].roseType)
    option.series[0].radius = radius;
    option.series[0].data = Object.keys(chartData).map(function (key) {
        return {
            name: key,
            value: chartData[key],
        }
    }).sort(function (a, b) { return a.value - b.value; });

    myChart.setOption(option);

}
