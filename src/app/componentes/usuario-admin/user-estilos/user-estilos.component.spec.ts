import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEstilosComponent } from './user-estilos.component';

describe('UserEstilosComponent', () => {
  let component: UserEstilosComponent;
  let fixture: ComponentFixture<UserEstilosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEstilosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserEstilosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
