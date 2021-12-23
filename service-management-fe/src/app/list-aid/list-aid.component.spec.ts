import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAidComponent } from './list-aid.component';

describe('ListAidComponent', () => {
  let component: ListAidComponent;
  let fixture: ComponentFixture<ListAidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
