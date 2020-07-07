import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundActiveTradeComponent } from './fund-active-trade.component';

describe('FundActiveTradeComponent', () => {
  let component: FundActiveTradeComponent;
  let fixture: ComponentFixture<FundActiveTradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundActiveTradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundActiveTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
