import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAidComponent } from './create-aid.component';

describe('CreateAidComponent', () => {
  let component: CreateAidComponent;
  let fixture: ComponentFixture<CreateAidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
