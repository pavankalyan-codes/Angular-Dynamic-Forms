import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPlaintextComponent } from './input-plaintext.component';

describe('InputPlaintextComponent', () => {
  let component: InputPlaintextComponent;
  let fixture: ComponentFixture<InputPlaintextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputPlaintextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPlaintextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
