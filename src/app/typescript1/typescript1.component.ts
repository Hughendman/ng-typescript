import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typescript1',
  templateUrl: './typescript1.component.html',
  styleUrls: ['./typescript1.component.css']
})
export class Typescript1Component implements OnInit {

  constructor() {
  }
  type1(){
    function greet(persion:string){
      console.log(typeof persion);
    }
    greet("yinxs")
  }
  type2(){
    //元组
    let x: [string, number];
    x = ["yinxs",12];
    console.log(x);
  }
  type3(){//枚举
    enum Color {Red = 1, Green, Blue};
    let c: Color = Color.Green;
    console.log(c);
  }
  type4(){// void
    let list: void = undefined;
    let lists: void = null;
    console.log(list);
    console.log(lists);
  }
  ngOnInit() {
    this.type4();
  }

}
