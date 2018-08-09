import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowsColsComponent } from './rows-cols.component';

describe('RowsColsComponent', () => {
  let component: RowsColsComponent;
  let fixture: ComponentFixture<RowsColsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowsColsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowsColsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
