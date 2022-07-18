import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDatosComponent } from './user-datos.component';

describe('UserDatosComponent', () => {
  let component: UserDatosComponent;
  let fixture: ComponentFixture<UserDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
