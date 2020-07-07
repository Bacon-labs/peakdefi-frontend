import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundRankingComponent } from './fund-ranking.component';

describe('FundRankingComponent', () => {
  let component: FundRankingComponent;
  let fixture: ComponentFixture<FundRankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundRankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
