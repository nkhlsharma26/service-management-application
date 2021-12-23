import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoseServiceComponent } from './chose-service.component';

describe('ChoseServiceComponent', () => {
  let component: ChoseServiceComponent;
  let fixture: ComponentFixture<ChoseServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoseServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoseServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
