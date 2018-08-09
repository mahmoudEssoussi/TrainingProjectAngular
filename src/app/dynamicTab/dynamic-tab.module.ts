import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicTabComponent } from './dynamic-tab.component';
import { RowsColsComponent } from './rows-cols/rows-cols.component';
import { RowsColsInputComponent } from './rows-cols-input/rows-cols-input.component';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { StarComponent } from './star/star.component';

@NgModule({
  imports: [
    CommonModule,FormsModule

  ],
  declarations: [    DynamicTabComponent,
    RowsColsComponent,
    RowsColsInputComponent,StarComponent]
})
export class DynamicTabModule { }
