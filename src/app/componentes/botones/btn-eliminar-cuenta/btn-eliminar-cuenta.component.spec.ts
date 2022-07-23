import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnEliminarCuentaComponent } from './btn-eliminar-cuenta.component';

describe('BtnEliminarCuentaComponent', () => {
  let component: BtnEliminarCuentaComponent;
  let fixture: ComponentFixture<BtnEliminarCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnEliminarCuentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnEliminarCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
