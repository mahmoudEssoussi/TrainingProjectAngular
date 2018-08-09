import { Component, OnInit ,Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-rows-cols',
  templateUrl: './rows-cols.component.html',
  styleUrls: ['./rows-cols.component.css']
})
export class RowsColsComponent implements OnChanges,OnInit {


  private param={  
    Colum:0,
    row:0};
  params={
    Colum:0,
    row:0
  }
  rows=[];
  cols=[];


  @Input()  set getparams(val:any){
    this.rows=[]; 
    this.cols=[];
    if(typeof(val)==='string'){  
        this.param=JSON.parse(val);
      console.log(this.param);
      for (let index = 0; index < this.param.Colum; index++) {
        this.cols.push(index);
 
         
       }
       for (let index = 0; index < this.getparams.row; index++) {
         this.rows.push(index);
  
          
        }
    }

  };

  get getparams():any{
  return this.param;
  }








 

  constructor() { }




/* ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {

setInterval(()=>{   if (changes['getparams'] && this.getparams) {

  this.rows=[]; 
  this.cols=[];
this.params={}
    this.params=this.getparams;
  console.log(this.params);
    for (let index = 0; index < this.getparams.Colum; index++) {
     this.cols.push(index);
      
    }
    for (let index = 0; index < this.getparams.row; index++) {
      this.rows.push(index);
       
     }
 }},5000)
} */


ngOnChanges(changes: any) {

}




  ngOnInit() {
  }

}
