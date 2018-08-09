import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dynamic-tab',
  templateUrl: './dynamic-tab.component.html',
  styleUrls: ['./dynamic-tab.component.css']
 
})
export class DynamicTabComponent implements OnInit {
  params={};
  private param={  
    Colum:0,
    row:0};
  star:number;


  constructor() { }

  ngOnInit() {

  }

  paramsRecieved(event){

    
    this.params=JSON.stringify(event);

    if(typeof(this.params)==='string'){  
    this.param=JSON.parse(this.params);
    this.star=this.param.Colum+this.param.row;
    console.log(this.star);
    
  }
    
    

 
  
  }

}
