import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRedesComponent } from './user-redes.component';

describe('UserRedesComponent', () => {
  let component: UserRedesComponent;
  let fixture: ComponentFixture<UserRedesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRedesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
