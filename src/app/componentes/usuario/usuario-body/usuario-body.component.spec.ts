import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioBodyComponent } from './usuario-body.component';

describe('UsuarioBodyComponent', () => {
  let component: UsuarioBodyComponent;
  let fixture: ComponentFixture<UsuarioBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
