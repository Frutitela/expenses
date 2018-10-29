import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExpenseComponentComponent } from './create-expense-component.component';

describe('CreateExpenseComponentComponent', () => {
  let component: CreateExpenseComponentComponent;
  let fixture: ComponentFixture<CreateExpenseComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateExpenseComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateExpenseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
