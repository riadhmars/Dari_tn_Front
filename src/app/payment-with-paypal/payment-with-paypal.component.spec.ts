import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentWithPaypalComponent } from './payment-with-paypal.component';

describe('PaymentWithPaypalComponent', () => {
  let component: PaymentWithPaypalComponent;
  let fixture: ComponentFixture<PaymentWithPaypalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentWithPaypalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentWithPaypalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
