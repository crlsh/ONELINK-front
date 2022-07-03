import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnAuthenticationComponent } from './btn-authentication.component';

describe('BtnAuthenticationComponent', () => {
  let component: BtnAuthenticationComponent;
  let fixture: ComponentFixture<BtnAuthenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnAuthenticationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
