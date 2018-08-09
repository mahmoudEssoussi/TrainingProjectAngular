import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
star:number;
starWidth:number;
public lessThanOne=true;
public moreThanOne=false;
public moreThanFourth=false;
public etat:string="no!!!!!!! ";


  constructor() { }

  ngOnInit() {
  }



  @Input()  set numberStar(val:number){
 
    this.star=val;
    this.starWidth = val * 86 / 5;

    if(val<1){
      this.lessThanOne=true;
      this.moreThanOne=false;
      this.moreThanFourth=false; 
    }
    else if (val>1 && val<4)
    {    this.lessThanOne=false;
      this.moreThanOne=true;
      this.moreThanFourth=false;
    this.etat="some more and it will be great!!!";  }

      else if (val>=4)
    {
      this.lessThanOne=false;
      this.moreThanOne=false;
      this.moreThanFourth=true; 
      this.etat="superbe !";  }
 
   

  };

  get numberStar():number{
  return this.star;
  }
}
