import { Component, OnInit ,Output,EventEmitter,ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-rows-cols-input',
  templateUrl: './rows-cols-input.component.html',
  styleUrls: ['./rows-cols-input.component.css'],
  changeDetection:ChangeDetectionStrategy.Default
})
export class RowsColsInputComponent implements OnInit {
params={
  Colum:0,
  row:0
}

@Output() number: EventEmitter<any> =
new EventEmitter<any>();
  constructor() { }

  ngOnInit() {

  }


  onChangeNumber(){
   
    this.number.emit(this.params);

  }
}
