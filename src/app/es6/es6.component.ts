import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-es6',
  templateUrl: './es6.component.html',
  styleUrls: ['./es6.component.css']
})
export class Es6Component implements OnInit {
  time = '';
  constructor() {
  }
  es1() {// promise 的使用
    let wait1000 =  new Promise((resolve, reject)=> {
      setTimeout(resolve, 1000);
    }).then(()=> {
      setTimeout( () => {
        console.log('Yay!');
        this.time = 'Yay!';
      }, 1000);
    }).then(() => {
      setTimeout( () => {
        console.log('Wheeyee!');
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
    console.log(person.name());
  }
  es3() {//es7的异步函数
    

  }
  ngOnInit() {
    this.es1();
  }

}
