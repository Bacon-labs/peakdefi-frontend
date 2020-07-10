import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundOverviewComponent } from './fund-overview.component';

describe('FundOverviewComponent', () => {
  let component: FundOverviewComponent;
  let fixture: ComponentFixture<FundOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
