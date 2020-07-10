import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timer } from 'rxjs';
import { preserveWhitespacesDefault } from '@angular/compiler';
@Component({
  selector: 'app-smoke',
  templateUrl: './smoke.component.html',
  styleUrls: ['./smoke.component.css']
})
export class SmokeComponent implements OnInit {

  public xAxis = [];
  public monoxides = [];
  public NH4s = [];
  public SO2s = [];
  public N2s = [];


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    timer(0, 2000).subscribe(
      () => {
        this.http.get('http://172.20.10.2:3000/car/001/12', {}).subscribe(
          (value: any) => {
            if (value && value.data && value.data.length) {
              let i = value.data.length - 1;
              for (let item of value.data) {
                const d = new Date(Number(item.time));
                this.xAxis[i] = d.getHours() > 9 ? d.getHours() : '0' + d.getHours();
                this.xAxis[i] += ":" + (d.getMinutes() > 9 ? d.getMinutes() : '0' + d.getMinutes());
                this.xAxis[i] += ":" + (d.getSeconds() > 9 ? d.getSeconds() : '0' + d.getSeconds());
                this.monoxides[i] = (item.monoxide);
                this.NH4s[i] = (item.NH4);
                this.SO2s[i] = (item.SO2);
                this.N2s[i] = (item.monoxide);
                i--;
              }
              this.updateOption = {
                xAxis: [
                  {
                    data: this.xAxis
                  }
                ],
                series: [{
                  data: this.monoxides
                }, {
                  data: this.NH4s
                }, {
                  data: this.SO2s
                }, {
                  data: this.N2s
                }]
              }
            }
          }
        )
      }

    );
  }


  chartOption = {
    backgroundColor: '#0f375f',

    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['CO', 'NH4', 'SO2', 'N2'],
      textStyle: {
        color: '#ffffff'
      },

    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: this.xAxis,
        axisLabel: {
          textStyle: {
            color: '#FFFFFF'   
          }
        },
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          textStyle: {
            color: '#FFFFFF'   
          }
        },
      }
    ],
    series: [
      {
        name: 'CO',
        type: 'line',
        stack: '%',
        areaStyle: {},
        data: this.monoxides
      },
      {
        name: 'NH4',
        type: 'line',
        stack: '%',
        areaStyle: {},
        data: this.NH4s
      },
      {
        name: 'SO2',
        type: 'line',
        stack: '%',
        areaStyle: {},
        data: this.SO2s
      },
      {
        name: 'N2',
        type: 'line',
        stack: '%',
        areaStyle: { normal: {} },
        data: this.N2s
      },

    ]
  };
 
  
  option1 = {
    backgroundColor: '#FFFFFF',
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['CO', 'NH4', 'SO2', 'N2'],
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
      boundaryGap: false,
      data: this.xAxis
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'N2',
        type: 'line',
        stack: '总量',
        data: this.N2s
      },
      {
        name: 'NH4',
        type: 'line',
        stack: '总量',
        data: this.NH4s
      },
      {
        name: 'SO2',
        type: 'line',
        stack: '总量',
        data: this.SO2s
      },
      {
        name: 'CO',
        type: 'line',
        stack: '总量',
        data: this.monoxides
      }
    ]
  };

  option2 = {
    backgroundColor: '#FFFFFF',
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      data: ['CO', 'NH4', 'SO2', 'N2'],
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value'
    },
    yAxis: {
      type: 'category',
      data: this.xAxis
    },
    series: [
      {
        name: 'N2',
        type: 'bar',
        stack: '总量',
        label: {
          show: true,
          position: 'insideRight'
        },
        data: this.N2s
      },
      {
        name: 'NH4',
        type: 'bar',
        stack: '总量',
        label: {
          show: true,
          position: 'insideRight'
        },
        data: this.NH4s
      },
      {
        name: 'SO2',
        type: 'bar',
        stack: '总量',
        label: {
          show: true,
          position: 'insideRight'
        },
        data:this.SO2s
      },
      {
        name: 'CO',
        type: 'bar',
        stack: '总量',
        label: {
          show: true,
          position: 'insideRight'
        },
        data: this.monoxides
      }
    ]
  };





  updateOption = {};

}
