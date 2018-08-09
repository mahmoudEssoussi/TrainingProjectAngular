import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowsColsInputComponent } from './rows-cols-input.component';

describe('RowsColsInputComponent', () => {
  let component: RowsColsInputComponent;
  let fixture: ComponentFixture<RowsColsInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowsColsInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowsColsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
