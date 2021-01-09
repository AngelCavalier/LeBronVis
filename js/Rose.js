var dom = document.getElementById('echart3')
var myChart = echarts.init(dom)
var app = {}
option = null

option = {
  tooltip: {
    trigger: 'item',
    formatter: '{b} : {c}场 ({d}%)',
  },
  legend: {
    bottom: '30px',
    left: 'center',
    data: ['詹姆斯', '乔丹', '贾巴尔', '卡尔马龙', '杜兰特', '哈登'],
    textStyle: {
      color: '#ffffff',
    },
  },
  series: [
    {
      type: 'pie',
      radius: [5, 48],
      center: ['50%', '35%'],
      roseType: 'area',

      data: [
        { value: 1003, name: '詹姆斯' },
        { value: 866, name: '乔丹' },
        { value: 787, name: '贾巴尔' },
        { value: 575, name: '卡尔马龙' },
        { value: 562, name: '杜兰特' },
        { value: 411, name: '哈登' },
      ],
    },
  ],
}
if (option && typeof option === 'object') {
  myChart.setOption(option, true)
}
