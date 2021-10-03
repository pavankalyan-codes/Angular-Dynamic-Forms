import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSubmitBtnComponent } from './input-submit-btn.component';

describe('InputSubmitBtnComponent', () => {
  let component: InputSubmitBtnComponent;
  let fixture: ComponentFixture<InputSubmitBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputSubmitBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSubmitBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
