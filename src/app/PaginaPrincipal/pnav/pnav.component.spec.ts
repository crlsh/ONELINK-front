import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PnavComponent } from './pnav.component';

describe('PnavComponent', () => {
  let component: PnavComponent;
  let fixture: ComponentFixture<PnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PnavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
