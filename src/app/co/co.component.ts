import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timer, bindCallback } from 'rxjs';
@Component({
  selector: 'app-co',
  templateUrl: './co.component.html',
  styleUrls: ['./co.component.css']
})
export class CoComponent implements OnInit {

  public xAxis = [];
  public concentrations = [];
  public qingqis = [];

  constructor(private http: HttpClient) { }



  ngOnInit(): void {
    //this.initSensor();//
    timer(0, 2000).subscribe(
      () => {
        this.http.get('http://172.20.10.2:3000/met/001/12', {}).subscribe(
          (value: any) => {
            if (value && value.data && value.data.length) {
              let i = value.data.length - 1;
              for (let item of value.data) {
                const d = new Date(Number(item.time));
                this.xAxis[i] = d.getHours() > 9 ? d.getHours() : '0' + d.getHours();
                this.xAxis[i] += ":" + (d.getMinutes() > 9 ? d.getMinutes() : '0' + d.getMinutes());
                this.xAxis[i] += ":" + (d.getSeconds() > 9 ? d.getSeconds() : '0' + d.getSeconds());
                this.concentrations[i] = (item.concentration);
                this.qingqis[i] = (item.qingqi);
                i--;
              }
              this.updateOption = {
                xAxis: [
                  {
                    data: this.xAxis
                  }
                ],
                series: [{
                  data: this.concentrations
                }, {
                  data: this.qingqis
                }]
              }
            }
          }
        )
      }

    );
  }



  option = {
    backgroundColor: '#FFFFFF',
    tooltip: {
      trigger: 'none',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['H2', 'CH4']
    },
    grid: {
      top: 70,
      bottom: 50
    },
    xAxis: [
      {
        type: 'category',
        axisTick: {
          alignWithLabel: true
        },
        axisLine: {
          onZero: false,
          lineStyle: {
            color: '#d14a61'
          }
        },
        axisPointer: {
          label: {
            formatter: function (params) {
              return '浓度' + params.value
                + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
            }
          }
        },
        data: this.xAxis
      },
      {
        type: 'category',
        axisTick: {
          alignWithLabel: true
        },
        axisLine: {
          onZero: false,
          lineStyle: {
            color: '#5793f3'
          }
        },
        axisPointer: {
          label: {
            formatter: function (params) {
              return '浓度' + params.value
                + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
            }
          }
        },
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
        name: 'H2',
        type: 'line',
        xAxisIndex: 1,
        smooth: true,
        data: this.qingqis
      },
      {
        name: 'CH4',
        type: 'line',
        smooth: true,
        data: this.concentrations
      }
    ]
  };


  option1 = {
    backgroundColor: '#FFFFFF',
    grid: {
      bottom: 80
    },
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: 'none'
        },
        restore: {},
        saveAsImage: {}
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        animation: false,
        label: {
          backgroundColor: '#505765'
        }
      }
    },
    legend: {
      data: ['H2', 'CH4'],
      left: 10
    },
    dataZoom: [
      {
        show: true,
        realtime: true,
        start: 65,
        end: 85
      },
      {
        type: 'inside',
        realtime: true,
        start: 65,
        end: 85
      }
    ],
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        axisLine: { onZero: false },
        data: this.xAxis

      }
    ],
    yAxis: [
      {
        name: 'H2',
        type: 'value'
      },
      {
        name: 'CH4',
        nameLocation: 'start',
        type: 'value',
        inverse: true
      }
    ],
    series: [
      {
        name: 'H2',
        type: 'line',
        animation: false,
        areaStyle: {},
        lineStyle: {
          width: 1
        },

        data: this.qingqis
      },
      {
        name: 'CH4',
        type: 'line',
        yAxisIndex: 1,
        animation: false,
        areaStyle: {},
        lineStyle: {
          width: 1
        },

        data: this.concentrations
      }
    ]
  };





  option2 = {
    backgroundColor: '#FFFFFF',
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['H2', 'CH4']
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
        name: 'H2',
        type: 'bar',
        data: this.qingqis,
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
        name: 'CH4',
        type: 'bar',
        data: this.concentrations,
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





   
 

updateOption = {};

}

