import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-es6',
  templateUrl: './es6.component.html',
  styleUrls: ['./es6.component.css']
})
export class Es6Component implements OnInit {
  time;includes;num;
  constructor() {
  }
  es1() {// promise 的使用
    let wait1000 =  new Promise((resolve, reject)=> {
      setTimeout(resolve, 1000);
    }).then(()=> {
      setTimeout( () => {
        this.time = 'Yay!';
      }, 1000);
    }).then(() => {
      setTimeout( () => {
        this.time = 'Wheeyee!';
      },2000);
    });
  }
  es2() {//class 函数
    class Person {
      x;
      constructor(x,y){
        this.x = x;
      }
      name(){
        return this.x;
      }
    }
    let person = new Person(1,2);
    this.time = person.name();
  }
  es3() {//includes的使用
    this.includes ="includes显示的是"+ [1,2,3,4,5,6].includes(1);
  }
  es4() {//运算
    let a = 3 ** 2;
    this.num ="指数的计算"+ a;

  }
  es5() {//es8新特性 异步函数(Async functions)
    async function asyncFunc(params) {
      console.log(params);
      const result1 = await (function () {
        console.log("function1");
      })();
      const result2 = await (function () {
        console.log("function2");
      })();
    }
    asyncFunc("sdf");
  }
  es6(){
  }
  ngOnInit() {
    this.es1();
    this.es2();
    this.es3();
    this.es4();
    this.es5();
  }

}
