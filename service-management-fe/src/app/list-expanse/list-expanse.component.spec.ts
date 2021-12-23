import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExpanseComponent } from './list-expanse.component';

describe('ListExpanseComponent', () => {
  let component: ListExpanseComponent;
  let fixture: ComponentFixture<ListExpanseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListExpanseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListExpanseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
