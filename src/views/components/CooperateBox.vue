<template>
  <section class="section section-lg section-shaped overflow-hidden my-0">
    <div class="shape shape-style-1 shape-dark">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    <div class="container" @mouseleave="showIconsAnimation = false">
      <div class="row justify-content-center" @mouseover="showIconsAnimation = true">
        <div class="col-lg-8 text-center">
          <h2 class="display-3 text-primary">业务分布图</h2>
          <p class="lead">这将是我们打向世界市场得到重要方向之一.</p>
        </div>
        <div ref="map" style="width: 100%; height: 500px;"></div>
      </div>
    </div>
  </section>
</template>
<script>
import * as echarts from "echarts"
import 'echarts/map/js/china'
export default {
  mounted() {
    const chartDom = this.$refs.map
    const myChart = echarts.init(chartDom)
    myChart.setOption({
      // 在这里设置ECharts的选项和数据
      series: [
        {
          type: 'map',
          map: 'china'
        }
      ]
    })
  }
  // mounted() {
  //   const chartDom = this.$refs.map
  //   const myChart = echarts.init(chartDom)
  //   // 定义贵州的坐标
  //   const guizhouCoord = [106.71, 26.57]
  //   // 定义各个省会的坐标
  //   const provinceCoord = [
  //     {name: '北京', coord: [116.46, 39.92]},
  //     {name: '上海', coord: [121.48, 31.22]},
  //     {name: '广州', coord: [113.23, 23.16]},
  //     {name: '西安', coord: [108.95, 34.27]},
  //     {name: '成都', coord: [104.06, 30.67]}
  //   ]
  //   // 定义线条数据
  //   const lineData = provinceCoord.map(item => {
  //     return {
  //       fromName: '贵州',
  //       toName: item.name,
  //       coords: [guizhouCoord, item.coord]
  //     }
  //   })
  //   // 定义符号数据
  //   const symbolData = provinceCoord.concat({name: '贵州', coord: guizhouCoord})
  //   myChart.setOption({
  //     // 设置地图的基本配置
  //     geo: {
  //       map: 'china',
  //       roam: true,
  //       label: {
  //         show: false
  //       },
  //       itemStyle: {
  //         areaColor: '#eee',
  //         borderColor: '#111'
  //       },
  //       emphasis: {
  //         label: {
  //           show: false
  //         },
  //         itemStyle: {
  //           areaColor: '#eee'
  //         }
  //       }
  //     },
  //     // 设置热力图的配置
  //     series: [
  //       {
  //         type: 'map',
  //         mapType: 'china',
  //         geoIndex: 0,
  //         data:[]
  //       },
  //       // 设置线条的配置
  //       {
  //         type: 'lines',
  //         zlevel: 2,
  //         effect: {
  //           show: true,
  //           period: 6,
  //           trailLength: 0.7,
  //           color: '#fff',
  //           symbolSize: 3
  //         },
  //         lineStyle: {
  //           color:'#a6c84c',
  //           width: 0,
  //           curveness: 0.2
  //         },
  //         data : lineData
  //       },
  //       // 设置符号的配置
  //       {
  //         type:'effectScatter',
  //         coordinateSystem:'geo',
  //         zlevel :2,
  //         rippleEffect:{
  //           brushType:'stroke'
  //         },
  //         label:{
  //           normal:{
  //             show:true,
  //             position:'right',
  //             formatter:'{b}'
  //           }
  //         },
  //         symbolSize:function(val){
  //           return val[2] /8;
  //         },
  //         itemStyle:{
  //           normal:{
  //             color:'#a6c84c'
  //           }
  //         },
  //         data : symbolData
  //       }
  //     ]
  //   })
  // }
};
</script>
<style>

</style>