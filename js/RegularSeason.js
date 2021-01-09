var saiji = []
var shijian = []
var sanfen = []
var toulan = []
var defen = []
var lanban = []
var zhugong = []
var mymin, mymax
var display = []

function InitData() {
  $.getJSON('../data/RegularData.json', function (data) {
    for (var i = 0; i < 17; i++) {
      saiji.push(data[i].赛季)
      shijian.push(data[i].时间)
      var temp = data[i].投篮.replace('%', '')
      temp = parseFloat((temp / 1.0).toFixed(1))
      toulan.push(temp)
      temp = data[i].三分.replace('%', '')
      temp = parseFloat((temp / 1.0).toFixed(1))
      sanfen.push(temp)
      defen.push(data[i].得分)
      lanban.push(data[i].篮板)
      zhugong.push(data[i].助攻)
    }
    display = defen.concat()
    DrawData()
  })
}

function DrawData() {
  var temp = []
  var sources = []
  for (var i = 1, mymin = display[0], mymax = display[0]; i < 17; i++) {
    if (display[i] > mymax) mymax = display[i]
    if (display[i] < mymin) mymin = display[i]
  }
  for (var i = 0; i < 17; i++) {
    temp.push(display[i])
    temp.push(saiji[i])
  }
  for (var i = 0; i < 33; i += 2) {
    var t = []
    t.push(temp[i])
    t.push(temp[i + 1])
    sources.push(t)
  }
  var dom = document.getElementById('echart1')
  var myChart = echarts.init(dom)
  var app = {}
  option = null
  option = {
    dataset: {
      source: sources,
    },
    tooltip: {
      trigger: 'axis',
      formatter: function (params) {
        if (display[0] == defen[0])
          return (
            params[0].name +
            '赛季' +
            '<br>' +
            params[0].marker +
            params[0].data[0] +
            '分'
          )
        else if (display[0] == lanban[0] || display[0] == zhugong[0])
          return (
            params[0].name +
            '赛季' +
            '<br>' +
            params[0].marker +
            params[0].data[0] +
            '个'
          )
        else if (display[0] == shijian[0])
          return (
            params[0].name +
            '赛季' +
            '<br>' +
            params[0].marker +
            params[0].data[0] +
            '分钟'
          )
        else
          return (
            params[0].name +
            '赛季' +
            '<br>' +
            params[0].marker +
            params[0].data[0] +
            '%'
          )
      },
    },
    grid: { containLabel: true, top: '35px', left: '10px', right: '60px' },
    xAxis: {
      name: '数据',
      axisLabel: { textStyle: { color: '#ffffff' } }, //设置轴线的属性
      axisLine: {
        lineStyle: {
          color: '#ffffff',
        },
      },
    },
    yAxis: {
      name: '赛季',
      type: 'category',
      axisLabel: { textStyle: { color: '#ffffff' } },
      //设置轴线的属性
      axisLine: {
        lineStyle: {
          color: '#ffffff',
        },
      },
    },
    visualMap: {
      top: '548px',
      orient: 'horizontal',
      left: 'center',
      min: mymin,
      max: mymax,
      text: ['High', 'Low'],
      //文本格式
      textStyle: {
        color: '#ffffff',
      },
      // Map the score column to color
      dimension: 0,
      inRange: {
        color: ['#9400D3', '#FFD700'],
      },
    },
    series: [
      {
        type: 'bar',
        encode: {
          // Map the "amount" column to X axis.
          x: 'amount',
          // Map the "product" column to Y axis
          y: 'product',
        },
      },
    ],
  }
  if (option && typeof option === 'object') {
    myChart.setOption(option, true)
  }
}

//初始化
InitData()

$('#b_sdefen').click(function () {
  display.length = 0
  display = defen.concat()
  DrawData()
})

$('#b_slanban').click(function () {
  display.length = 0
  display = lanban.concat()
  DrawData()
})

$('#b_szhugong').click(function () {
  display.length = 0
  display = zhugong.concat()
  DrawData()
})
$('#b_sshijian').click(function () {
  display.length = 0
  display = shijian.concat()
  DrawData()
})
$('#b_stoulan').click(function () {
  display.length = 0
  display = toulan.concat()
  DrawData()
})
$('#b_ssanfen').click(function () {
  display.length = 0
  display = sanfen.concat()
  DrawData()
})
