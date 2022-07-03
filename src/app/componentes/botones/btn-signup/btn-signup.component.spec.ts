import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnSignupComponent } from './btn-signup.component';

describe('BtnSignupComponent', () => {
  let component: BtnSignupComponent;
  let fixture: ComponentFixture<BtnSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnSignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
