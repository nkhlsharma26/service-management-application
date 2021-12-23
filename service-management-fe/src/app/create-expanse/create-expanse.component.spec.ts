import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExpanseComponent } from './create-expanse.component';

describe('CreateExpanseComponent', () => {
  let component: CreateExpanseComponent;
  let fixture: ComponentFixture<CreateExpanseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateExpanseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateExpanseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
