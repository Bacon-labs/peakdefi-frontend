import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateFundComponent } from './modal-create-fund.component';

describe('ModalCreateFundComponent', () => {
  let component: ModalCreateFundComponent;
  let fixture: ComponentFixture<ModalCreateFundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCreateFundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCreateFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
