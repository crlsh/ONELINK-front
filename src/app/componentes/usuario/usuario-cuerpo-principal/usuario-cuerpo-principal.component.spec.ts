import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioCuerpoPrincipalComponent } from './usuario-cuerpo-principal.component';

describe('UsuarioCuerpoPrincipalComponent', () => {
  let component: UsuarioCuerpoPrincipalComponent;
  let fixture: ComponentFixture<UsuarioCuerpoPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioCuerpoPrincipalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioCuerpoPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
