import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAssetEntryComponent } from './manage-asset-entry.component';

describe('ManageAssetEntryComponent', () => {
  let component: ManageAssetEntryComponent;
  let fixture: ComponentFixture<ManageAssetEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageAssetEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageAssetEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
