import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-js',
  templateUrl: './js.component.html',
  styleUrls: ['./js.component.css']
})
export class JsComponent implements OnInit {
  risk;any;flag;timeA = 0;timeB = 0;
  constructor() {
    this.js4();
    this.js5();
  }
  js1(){
    this.risk = "风险控制平台测试...";
  }
  js2(){
    this.risk = "风险控制平抬测试完毕"
  }
  js3(){
    this.risk = "销毁中..."
  }
  js4() {//js的三类对象和两类属性
    this.any = ["内置对象","宿主对象","自定义对象","自有属性","继承属性"]
  }
  js5(){//测试ng-if的使用
    this.flag = true;
  }
  js6(){//测试click事件
    if(this.flag){
      this.flag = false;
    }else {
      this.flag = true;
    }
  }
  js7(time1,time2) {//这个测试的时间显示条
    let dom = document.getElementById("timeArea");
    dom.style.width = Math.abs(time1-time2)*20+"px";
    dom.style.marginLeft = time1*20+"px";
    this.timeA = time1;
    this.timeB = time2;
  }
  js8(){//动态显示时间条
    this.js7(this.timeA,this.timeB);
  }
  ngOnInit() {
    this.js1();
    setTimeout(() => {
      this.js2();
    },5000);
    setTimeout(() => {
      this.js3();
    },6000);
    setTimeout(() => {
      this.risk = "";
    },6500);
    this.js7(2,5);
  }

}
