{
  var dom = document.getElementById('final1')
  var myChart = echarts.init(dom)
  var app = {}
  option = null
  option = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c}分 ({d}%)',
    },
    graphic: [
      {
        //环形图中间添加文字
        type: 'text', //通过不同top值可以设置上下显示
        left: 'center',
        top: '40%',
        style: {
          text: '1562',
          textAlign: 'center',
          fill: '#ffffff', //文字的颜色
          width: 30,
          height: 30,
          fontSize: 20,
          color: '#4d4f5c',
          fontFamily: 'Microsoft YaHei',
        },
      },
      {
        type: 'text',
        left: 'center',
        top: '55%',
        style: {
          text: '得分',
          textAlign: 'center',
          fill: '#F8F8FF',
          width: 30,
          height: 30,
          fontSize: 16,
        },
      },
    ],
    color: ['#FF69B4', 'rgb(255,255,255,0.5)'],
    series: [
      {
        type: 'pie',
        radius: ['60%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1562, name: '个人' },
          {
            value: 3869,
            name: '队友合计',
            itemStyle: {
              emphasis: {
                color: ['#ffffff'],
              },
            },
          },
        ],
      },
    ],
  }
  if (option && typeof option === 'object') {
    myChart.setOption(option, true)
  }
}
{
  var dom = document.getElementById('final2')
  var myChart = echarts.init(dom)
  var app = {}
  option = null
  option = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c}个 ({d}%)',
    },
    graphic: [
      {
        //环形图中间添加文字
        type: 'text', //通过不同top值可以设置上下显示
        left: 'center',
        top: '40%',
        style: {
          text: '561',
          textAlign: 'center',
          fill: '#ffffff', //文字的颜色
          width: 30,
          height: 30,
          fontSize: 20,
          color: '#4d4f5c',
          fontFamily: 'Microsoft YaHei',
        },
      },
      {
        type: 'text',
        left: 'center',
        top: '55%',
        style: {
          text: '篮板',
          textAlign: 'center',
          fill: '#F8F8FF',
          width: 30,
          height: 30,
          fontSize: 16,
        },
      },
    ],
    color: ['#6A5ACD', 'rgb(255,255,255,0.5)'],
    series: [
      {
        type: 'pie',
        radius: ['60%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 561, name: '个人' },
          {
            value: 1740,
            name: '队友合计',
            itemStyle: {
              emphasis: {
                color: ['#ffffff'],
              },
            },
          },
        ],
      },
    ],
  }
  if (option && typeof option === 'object') {
    myChart.setOption(option, true)
  }
}
{
  var dom = document.getElementById('final3')
  var myChart = echarts.init(dom)
  var app = {}
  option = null
  option = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c}个 ({d}%)',
    },
    graphic: [
      {
        //环形图中间添加文字
        type: 'text', //通过不同top值可以设置上下显示
        left: 'center',
        top: '40%',
        style: {
          text: '430',
          textAlign: 'center',
          fill: '#ffffff', //文字的颜色
          width: 30,
          height: 30,
          fontSize: 20,
          color: '#4d4f5c',
          fontFamily: 'Microsoft YaHei',
        },
      },
      {
        type: 'text',
        left: 'center',
        top: '55%',
        style: {
          text: '助攻',
          textAlign: 'center',
          fill: '#F8F8FF',
          width: 30,
          height: 30,
          fontSize: 16,
        },
      },
    ],
    color: ['#00BFFF', 'rgb(255,255,255,0.5)'],
    series: [
      {
        type: 'pie',
        radius: ['60%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 430, name: '个人' },
          {
            value: 630,
            name: '队友合计',
            itemStyle: {
              emphasis: {
                color: ['#ffffff'],
              },
            },
          },
        ],
      },
    ],
  }
  if (option && typeof option === 'object') {
    myChart.setOption(option, true)
  }
}
{
  var dom = document.getElementById('final4')
  var myChart = echarts.init(dom)
  var app = {}
  option = null
  option = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c}次 ({d}%)',
    },
    graphic: [
      {
        //环形图中间添加文字
        type: 'text', //通过不同top值可以设置上下显示
        left: 'center',
        top: '40%',
        style: {
          text: '93',
          textAlign: 'center',
          fill: '#ffffff', //文字的颜色
          width: 30,
          height: 30,
          fontSize: 20,
          color: '#4d4f5c',
          fontFamily: 'Microsoft YaHei',
        },
      },
      {
        type: 'text',
        left: 'center',
        top: '55%',
        style: {
          text: '抢断',
          textAlign: 'center',
          fill: '#F8F8FF',
          width: 30,
          height: 30,
          fontSize: 16,
        },
      },
    ],
    color: ['#32CD32', 'rgb(255,255,255,0.5)'],
    series: [
      {
        type: 'pie',
        radius: ['60%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 93, name: '个人' },
          {
            value: 326,
            name: '队友合计',
            itemStyle: {
              emphasis: {
                color: ['#ffffff'],
              },
            },
          },
        ],
      },
    ],
  }
  if (option && typeof option === 'object') {
    myChart.setOption(option, true)
  }
}
{
  var dom = document.getElementById('final5')
  var myChart = echarts.init(dom)
  var app = {}
  option = null
  option = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c}个 ({d}%)',
    },
    graphic: [
      {
        //环形图中间添加文字
        type: 'text', //通过不同top值可以设置上下显示
        left: 'center',
        top: '40%',
        style: {
          text: '46',
          textAlign: 'center',
          fill: '#ffffff', //文字的颜色
          width: 30,
          height: 30,
          fontSize: 20,
          color: '#4d4f5c',
          fontFamily: 'Microsoft YaHei',
        },
      },
      {
        type: 'text',
        left: 'center',
        top: '55%',
        style: {
          text: '盖帽',
          textAlign: 'center',
          fill: '#F8F8FF',
          width: 30,
          height: 30,
          fontSize: 16,
        },
      },
    ],
    color: ['#F5DEB3', 'rgb(255,255,255,0.5)'],

    series: [
      {
        type: 'pie',
        radius: ['60%', '70%'],
        avoidLabelOverlap: false,

        label: {
          show: false,
          position: 'center',
        },
        labelLine: {
          show: false,
        },
        data: [
          {
            value: 46,
            name: '个人',
          },
          {
            value: 187,
            name: '队友合计',
            itemStyle: {
              emphasis: {
                color: ['#ffffff'],
              },
            },
          },
        ],
      },
    ],
  }
  if (option && typeof option === 'object') {
    myChart.setOption(option, true)
  }
}
