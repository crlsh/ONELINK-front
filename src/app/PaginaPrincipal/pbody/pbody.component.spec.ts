import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PbodyComponent } from './pbody.component';

describe('PbodyComponent', () => {
  let component: PbodyComponent;
  let fixture: ComponentFixture<PbodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PbodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
