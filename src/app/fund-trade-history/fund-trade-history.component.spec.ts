import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundTradeHistoryComponent } from './fund-trade-history.component';

describe('FundTradeHistoryComponent', () => {
  let component: FundTradeHistoryComponent;
  let fixture: ComponentFixture<FundTradeHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundTradeHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundTradeHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
