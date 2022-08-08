import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnSidebarHomeComponent } from './btn-sidebar-home.component';

describe('BtnSidebarHomeComponent', () => {
  let component: BtnSidebarHomeComponent;
  let fixture: ComponentFixture<BtnSidebarHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnSidebarHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnSidebarHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
