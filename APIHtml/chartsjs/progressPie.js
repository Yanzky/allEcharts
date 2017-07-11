
var num = 50;
var labelTop = {
    normal : {
        color:'rgba(0,73,160,0.7)',
        label : {
            show : true,
            position : 'center',
            formatter : '{b}',
            textStyle: {
                baseline : 'bottom',
                fontSize:'16',
            }
        },
        labelLine : {
            show : false
        }
    }
};
var labelFromatter = {
    normal : {
        formatter : function (params){
            return (params.percent).toFixed(2) + '%'
        },
        textStyle: {
//                    baseline : 'top',
            color:'#fff',
            fontSize:'20',
            fontFamily:'microsoft yahei'
        }
    },
}
var radius = ['60%', '80%'];
var color = '#FF6A6A'
var option = {
    series : [
        {
            type : 'pie',
            radius : radius,
            center:['50%','50%'],
            label : labelFromatter,
            data : [
                {name:'other', value:num, itemStyle : {
                    normal : {
                        color: color,
                        label : {
                            show : true,
                            position : 'center'
                        },
                        labelLine : {
                            show : false
                        }
                    }
                }},
                {name:'M3模块', value:100-(num),itemStyle : labelTop}
            ]
        }
    ]
};

function progressPie(chart,chartDatas,style) {
    if(style == undefined) {
        option.series[0].data[0].itemStyle.normal.color = color
    } else {
        option.series[0].data[0].itemStyle.normal.color = style.color
    }
    var myChart = echarts.init(chart);
    myChart.setOption(option);
    var chartData = chartDatas;
    option.series[0].data[0].value = chartData.value;
    option.series[0].data[1].value = 100-(chartData.value);
    option.series[0].data[1].name = chartData.name;
    myChart.setOption(option);

}