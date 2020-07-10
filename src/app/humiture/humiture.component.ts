import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timer } from 'rxjs';

















@Component({
  selector: 'app-humiture',
  templateUrl: './humiture.component.html',
  styleUrls: ['./humiture.component.css']
})
export class HumitureComponent implements OnInit {
  public xAxis = [];
  public temps = [];
  public humds = [];



 
  constructor(private http: HttpClient) { }
  
  data(){
    var category = [];
    var dottedBase = +new Date();
    var lineData = [];
    var barData = [];

    for (var i = 0; i < 20; i++) {
      var date = new Date(dottedBase += 3600 * 24 * 1000);
      category.push([
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate()
      ].join('-'));
      var b = Math.random() * 200;
      var d = Math.random() * 200;
      barData.push(b)
      lineData.push(d + b);
    }
  }

  ngOnInit():void{
    timer(0, 2000).subscribe(
      () => {
        this.http.get('http://172.20.10.2:3000/env/001/12', {}).subscribe(
          (value: any) => {
            if (value && value.data && value.data.length) {
              let i = value.data.length - 1;
              for (let item of value.data) {
                const d = new Date(Number(item.time));
                this.xAxis[i] = d.getHours() > 9 ? d.getHours() : '0' + d.getHours();
                this.xAxis[i] += ":" + (d.getMinutes() > 9 ? d.getMinutes() : '0' + d.getMinutes());
                this.xAxis[i] += ":" + (d.getSeconds() > 9 ? d.getSeconds() : '0' + d.getSeconds());
                this.temps[i] = (item.temp);
                this.humds[i] = (item.humd);
                i--;
              }
              this.updateOption = {
                xAxis: [
                  {
                    data: this.xAxis
                  }
                ],
                series: [{
                  data: this.temps
                }, {
                  data: this.humds
                }]
              }
            }
          }
        )
      }

    );
  }

    option = {
      backgroundColor: '#0f375f',
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['温度', '湿度'],
        textStyle: {
          color: '#ccc'
        }
      },
      xAxis: {
        data: this.data,
        axisLine: {
          lineStyle: {
            color: '#ccc'
          }
        }
      },
      yAxis: {
        splitLine: { show: false },
        axisLine: {
          lineStyle: {
            color: '#ccc'
          }
        }
      },
      series: [{
        name: '温度',
        type: 'line',
        smooth: true,
        showAllSymbol: true,
        symbol: 'emptyCircle',
        symbolSize: 15,
        data: this.data
      }, {
        name: '湿度',
        type: 'bar',
        barWidth: 10,
        itemStyle: {
          normal: {
            barBorderRadius: 5,
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                { offset: 0, color: '#14c8d4' },
                { offset: 1, color: '#43eec6' }
              ]
            )
          }
        },
        data: this.data
      }, {
        name: 'line',
        type: 'bar',
        barGap: '-100%',
        barWidth: 10,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                { offset: 0, color: 'rgba(20,200,212,0.5)' },
                { offset: 0.2, color: 'rgba(20,200,212,0.2)' },
                { offset: 1, color: 'rgba(20,200,212,0)' }
              ]
            )
          }
        },
        z: -12,
        data: this.data
      }, {
        name: 'dotted',
        type: 'pictorialBar',
        symbol: 'rect',
        itemStyle: {
          normal: {
            color: '#0f375f'
          }
        },
        symbolRepeat: true,
        symbolSize: [12, 4],
        symbolMargin: 1,
        z: -10,
        data: this.data
      }]
    };
  option1 = {
    backgroundColor: '#FFFFFF',
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['温度', '湿度']
    },
    toolbox: {
      show: true,
      feature: {
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ['line', 'bar'] },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    calculable: true,
    xAxis: [
      {
        type: 'category',
        data: this.xAxis
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '温度',
        type: 'bar',
        data: this.temps,
        markPoint: {
          data: [
            { type: 'max', name: '最大值' },
            { type: 'min', name: '最小值' }
          ]
        },
        markLine: {
          data: [
            { type: 'average', name: '平均值' }
          ]
        }
      },
      {
        name: '湿度',
        type: 'bar',
        data: this.humds,
        markPoint: {
          data: [
            { type: 'max', name: '最大值' },
            { type: 'min', name: '最小值' }
          ]
        },
        markLine: {
          data: [
            { type: 'average', name: '平均值' }
          ]
        }
      }
    ]
  };
  option2 = {
    backgroundColor: '#FFFFFF',
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['温度', '湿度']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      data: this.xAxis
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '温度',
        type: 'line',
        step: 'start',
        data: this.temps
      },
      {
        name: '湿度',
        type: 'line',
        step: 'middle',
        data: this.humds
      },
      
    ]
  };










  updateOption = {};
}