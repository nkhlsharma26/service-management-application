import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayemntAlertsComponent } from './payemnt-alerts.component';

describe('PayemntAlertsComponent', () => {
  let component: PayemntAlertsComponent;
  let fixture: ComponentFixture<PayemntAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayemntAlertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayemntAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
