var tsaiji = [];
var cdefen = [];
var clanban = [];
var czhugong = [];
var jdefen = [];
var jlanban = [];
var jzhugong = [];

var cdisplay = [];
var jdisplay = [];

function Init() {
  $.getJSON('http://www.freeaii.com:8080/regularPlayoff', function (data) {
    for (var i = 0; i < 14; i++) {
      cdefen.push(data[i].常规赛得分);
      clanban.push(data[i].常规赛篮板);
      czhugong.push(data[i].常规赛助攻);
      jdefen.push(data[i].季后赛得分);
      jlanban.push(data[i].季后赛篮板);
      jzhugong.push(data[i].季后赛助攻);
      tsaiji.push(data[i].赛季);
    }
    cdisplay = cdefen.concat();
    jdisplay = jdefen.concat();
    Draw();
  });
}

function Draw() {
  var dom = document.getElementById('echart2');
  var myChart = echarts.init(dom);
  option = null;
  option = {
    tooltip: {
      trigger: 'axis',
      formatter: function (params) {
        if (cdisplay[0] == cdefen[0] && jdisplay[0] == jdefen[0]) {
          if (params[1] == undefined) {
            return (
              params[0].name +
              '赛季' +
              '<br>' +
              params[0].marker +
              params[0].seriesName +
              params[0].data +
              '分'
            );
          } else {
            return (
              params[0].name +
              '赛季' +
              '<br>' +
              params[1].marker +
              '季后赛：' +
              params[1].data +
              '分' +
              '<br>' +
              params[0].marker +
              '常规赛：' +
              params[0].data +
              '分'
            );
          }
        } else {
          if (params[1] == undefined) {
            return (
              params[0].name +
              '赛季' +
              '<br>' +
              params[0].marker +
              params[0].seriesName +
              params[0].data +
              '个'
            );
          } else {
            return (
              params[0].name +
              '赛季' +
              '<br>' +
              params[1].marker +
              '季后赛：' +
              params[1].data +
              '个' +
              '<br>' +
              params[0].marker +
              '常规赛：' +
              params[0].data +
              '个'
            );
          }
        }
      },
    },
    legend: {
      data: ['常规赛', '季后赛'],
      textStyle: {
        color: '#ffffff',
      },
      // itemWidth: 20,
      // itemHeight: 20,
    },
    grid: {
      top: '10%',
      left: '3%',
      right: '6%',
      bottom: '10%',
      containLabel: true,
    },
    xAxis: {
      name: '赛季',
      type: 'category',
      boundaryGap: false,
      data: tsaiji,
      axisLabel: { textStyle: { color: '#ffffff' } }, //设置轴字的属性
      axisLine: {
        lineStyle: {
          color: '#ffffff', //设置轴线的属性
          //设置线条粗细
        },
      },
    },
    yAxis: {
      name: '数据',
      type: 'value',
      axisLabel: { textStyle: { color: '#ffffff' } }, //设置轴线的属性
      axisLine: {
        lineStyle: {
          color: '#ffffff',
        },
      },
    },
    series: [
      {
        name: '常规赛',
        type: 'line',
        color: '#9400D3', //线的颜色
        data: cdisplay,
        // smooth: true,
        itemStyle: {
          normal: {
            lineStyle: {
              width: 4,
            },
          },
        },
      },
      {
        name: '季后赛',
        type: 'line',
        color: '#FFD700',
        data: jdisplay,
        // smooth: true,
        itemStyle: {
          normal: {
            lineStyle: {
              width: 4,
            },
          },
        },
      },
    ],
  };
  if (option && typeof option === 'object') {
    myChart.setOption(option, true);
  }
}

Init();

$('#b_jdefen').click(function () {
  cdisplay.length = 0;
  jdisplay.length = 0;
  cdisplay = cdefen.concat();
  jdisplay = jdefen.concat();
  Draw();
});

$('#b_jlanban').click(function () {
  cdisplay.length = 0;
  jdisplay.length = 0;
  cdisplay = clanban.concat();
  jdisplay = jlanban.concat();
  Draw();
});

$('#b_jzhugong').click(function () {
  cdisplay.length = 0;
  jdisplay.length = 0;
  cdisplay = czhugong.concat();
  jdisplay = jzhugong.concat();
  Draw();
});
