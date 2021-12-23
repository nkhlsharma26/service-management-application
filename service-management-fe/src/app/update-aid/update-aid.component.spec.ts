import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAidComponent } from './update-aid.component';

describe('UpdateAidComponent', () => {
  let component: UpdateAidComponent;
  let fixture: ComponentFixture<UpdateAidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
