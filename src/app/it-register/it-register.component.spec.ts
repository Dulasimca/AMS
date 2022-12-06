import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItRegisterComponent } from './it-register.component';

describe('ItRegisterComponent', () => {
  let component: ItRegisterComponent;
  let fixture: ComponentFixture<ItRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
