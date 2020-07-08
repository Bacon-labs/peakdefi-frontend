import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBuyRepTokenComponent } from './modal-buy-rep-token.component';

describe('ModalBuyRepTokenComponent', () => {
  let component: ModalBuyRepTokenComponent;
  let fixture: ComponentFixture<ModalBuyRepTokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalBuyRepTokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBuyRepTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
