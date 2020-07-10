import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



declare var BMap: any;
declare var BMAP_STATUS_SUCCESS:any;
declare var BMAP_ANCHOR_TOP_LEFT : any;
//declare var BMapLib: any;
//declare var translateCallback: any;

@Component({
  selector: 'app-introduce',
  templateUrl: './introduce.component.html',
  styleUrls: ['./introduce.component.css']
})
export class IntroduceComponent implements OnInit {

  constructor(private http: HttpClient) { 
    
  }

  ngOnInit(): void {
    //const map = new BMap.Map('map');//创建地图实例
    //const point = new BMap.Point(119.781973, 29.861587);//创建点坐标
    //map.centerAndZoom(point, 15);//初始化地图，设置中心点坐标和地图级别


    // 百度地图API功能
    //谷歌坐标
 
    var x = 119.781973;
    var y = 29.861587;
    var ggPoint = new BMap.Point(x, y);


    var map = new BMap.Map("allmap");// 创建Map实例
    map.centerAndZoom(new BMap.Point(119.781973, 29.861587), 8);
    setTimeout(function () {
      map.setZoom(14);
    }, 2000);  //2秒后放大到14级
    map.enableScrollWheelZoom(true);//开启鼠标滚轮缩放
   

//谷歌坐标转成百度坐标
    map.addControl(new BMap.NavigationControl());
    //添加谷歌marker和label
    var markergg = new BMap.Marker(ggPoint);
    map.addOverlay(markergg); //添加谷歌marker
    var labelgg = new BMap.Label("未转换的谷歌标注（错误）", { offset: new BMap.Size(20, -10) });
    markergg.setLabel(labelgg); //添加谷歌label
    //坐标转换完之后的回调函数
 
    const translateCallback = function (data) {
      if (data.status === 0) {
        var marker = new BMap.Marker(data.points[0]);
        map.addOverlay(marker);
        var label = new BMap.Label("转换后的百度标注（正确）", { offset: new BMap.Size(20, -10) });
        marker.setLabel(label); //添加百度label
        map.setCenter(data.points[0]);
      }
    }

    setTimeout(function () {
      var convertor = new BMap.Convertor();
      var pointArr = [];
      pointArr.push(ggPoint);
      convertor.translate(pointArr, 3, 5, translateCallback)
    }, 1000);



//定位

    var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function (r) {
      if (this.getStatus() == BMAP_STATUS_SUCCESS) {
        var mk = new BMap.Marker(r.point);
        map.addOverlay(mk);
        map.panTo(r.point);
        alert('您的位置：' + r.point.lng + ',' + r.point.lat);
      }
      else {
        alert('failed' + this.getStatus());
      }
    }, { enableHighAccuracy: true })
	//关于状态码
	//BMAP_STATUS_SUCCESS	检索成功。对应数值“0”。
	//BMAP_STATUS_CITY_LIST	城市列表。对应数值“1”。
	//BMAP_STATUS_UNKNOWN_LOCATION	位置结果未知。对应数值“2”。
	//BMAP_STATUS_UNKNOWN_ROUTE	导航结果未知。对应数值“3”。
	//BMAP_STATUS_INVALID_KEY	非法密钥。对应数值“4”。
	//BMAP_STATUS_INVALID_REQUEST	非法请求。对应数值“5”。
	//BMAP_STATUS_PERMISSION_DENIED	没有权限。对应数值“6”。(自 1.1 新增)
	//BMAP_STATUS_SERVICE_UNAVAILABLE	服务不可用。对应数值“7”。(自 1.1 新增)
	//BMAP_STATUS_TIMEOUT	超时。对应数值“8”。(自 1.1 新增)


    var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
    var top_left_control = new BMap.ScaleControl({ anchor: BMAP_ANCHOR_TOP_LEFT });// 左上角，添加比例尺
    map.addControl(top_left_control);
    map.addControl(top_left_navigation);
    map.centerAndZoom(new BMap.Point(116.340739, 40.03592), 19);  // 初始化地图,设置中心点坐标和地图级别
    map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
    // 创建室内图实例
    //var indoorManager = new BMapLib.IndoorManager(map);




  }



}
