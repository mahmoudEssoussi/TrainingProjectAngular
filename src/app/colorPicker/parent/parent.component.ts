import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
_color:string;
get color():string{
  return this._color;
}
set color(value:string){
  this._color=value;
}
  constructor() { }

  ngOnInit() {
  }

  changeColor(){
    console.log(this._color);
  }

}
