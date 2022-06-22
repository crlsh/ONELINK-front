import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioFooterComponent } from './usuario-footer.component';

describe('UsuarioFooterComponent', () => {
  let component: UsuarioFooterComponent;
  let fixture: ComponentFixture<UsuarioFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
