import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNuevoComponent } from './user-nuevo.component';

describe('UserNuevoComponent', () => {
  let component: UserNuevoComponent;
  let fixture: ComponentFixture<UserNuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserNuevoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
