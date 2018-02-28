import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-js',
  templateUrl: './js.component.html',
  styleUrls: ['./js.component.css']
})
export class JsComponent implements OnInit {
  risk;
  constructor() {
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
  }

}
