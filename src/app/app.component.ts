import { Component, OnInit } from '@angular/core';
// import { NzMessageService } from '../../../index.showcase';
 import * as echarts from 'assets/echarts/echarts.min.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  // isLoadingOne = false;

  // loadOne = (value) => {
  // 	this.isLoadingOne = true;
  // 	setTimeout(_ => {
  // 		this.isLoadingOne = false;
  // 	}, 5000);
  // }

  // orderList = [1, 2, 3, 4]; 

  ngOnInit() {
  // 	setTimeout(_ => {
  // 		this.orderList = [...this.orderList.reverse()];
  // 	},10000)

    var mychart = echarts.init(document.getElementById('main'));

    var option = {
      title: {
        show: true,
        text: 'Echarts 入门示例',
        subtext: '学习echarts',
        left: 'center',
        // borderColor: 'red',
        // borderWidth: 1
      },
      // toolbox: {
      //   show: true,
      //   feature: {
      //     dataView: {
      //       show: true
      //     },
      //     restore: {
      //       show: true
      //     },
      //     dataZoom: {
      //       show: true
      //     },
      //     saveAsImage: {
      //       show: true
      //     },
      //     magicType: {
      //       type: ['line', 'bar']
      //     }
      //   }
      // },
      // tooltip: {
      //   trigger: 'axis'
      // }
      // legend: {
      //   data: ['销量']
      // }，
      // xAxis: {
      //   data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
      // },
      // yAxis: {},

// 饼图
      // tooltip: {
      //   trigger: 'item',
      //   formatter: "{a}<br/>{b} : {c} ({d}%)"
      // },
      // legend: {
      //   orient: 'vertical',
      //   left: 'left',
      //   data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
      // }

// 仪表盘
      tooltip : {
        formatter: "{a} <br/>{b} : {c}%"
      }
      toolbox: {
        feature: {
          restore: {},
          saveAsImage: {}
        }
      }

      series: [
      // {
      //   name: '销量',
      //   type: 'bar',
      //   data: [5,20,36,10,10,20],
      //   markPoint: {
      //     data: [
      //       {type: 'max', name: '最大值'},
      //       {type: 'min', name: '最小值'}
      //     ]
      //   },
      //   markLine: {
      //     data: [
      //       {type: 'average', name: '平均值'}
      //     ]
      //   }
      // },{
      //   name: '产量',
      //   type: 'line',
      //   data: [7,30,50,11,40,80],
      //   markPoint: {
      //     data: [
      //       {type: 'max', name: '最大值'},
      //       {type: 'min', name: '最小值', symbol: 'arrow'}
      //     ]
      //   },
      //   markLine: {
      //     data: [
      //       {type: 'average', name: '平均值'}
      //     ]
      //   }
      // }

// 饼图
      // {
      //   name: '访问来源',
      //   type: 'pie',
      //   radius: '55%',
      //   center: ['50%','60%'],
      //   data: [
      //     {value:335, name:'直接访问'},
      //     {value:310, name:'邮件营销'},
      //     {value:234, name:'联盟广告'},
      //     {value:135, name:'视频广告'},
      //     {value:1548, name:'搜索引擎'}
      //   ]
      // }

// 仪表盘
      {
        name: '业务指标',
        type: 'gauge',
        datail: {formatter:'{value}%'},
        data: [{value: 32, name: '完成率'}]
      }

      ]
    };
    mychart.setOption(option);
// 模拟数据，形成动态仪表盘
    setInterval(function () {
      option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
      mychart.setOption(option, true);
    },2000);
  }

  // generateArray(value): void {
  // 	return new Array(value);
  // }

  // current = 0;
  // index = 'First-content';

  // pre(): void {
  // 	this.current -= 1;
  // 	this.changeContent();
  // }

  // next(): void {
  // 	this.current += 1;
  // 	this.changeContent();
  // }

  // done(): void {
  // 	// this._message.success('done');
  // 	alert('done');
  // }

  // changeContent() {
  // 	switch (this.current) {
  // 		case 0: {
  // 			this.index = 'First-content';
  // 			break;
  // 		}
  // 		case 1: {
  // 		    this.index = 'Second-content';
  // 		    break;
  // 		}
  // 		case 2: {
  // 			this.index = 'third-content';
  // 			break;
  // 		}
  // 		default: {
  // 			this.index = 'error';
  // 		}
  // 	}
  // }

}
