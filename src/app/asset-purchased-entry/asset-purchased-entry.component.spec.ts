import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetPurchasedEntryComponent } from './asset-purchased-entry.component';

describe('AssetPurchasedEntryComponent', () => {
  let component: AssetPurchasedEntryComponent;
  let fixture: ComponentFixture<AssetPurchasedEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetPurchasedEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetPurchasedEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
