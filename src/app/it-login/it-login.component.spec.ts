import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItLoginComponent } from './it-login.component';

describe('ItLoginComponent', () => {
  let component: ItLoginComponent;
  let fixture: ComponentFixture<ItLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
