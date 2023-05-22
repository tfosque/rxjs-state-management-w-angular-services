import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductModalPilotComponent } from './add-product-modal-pilot.component';

describe('AddProductModalPilotComponent', () => {
  let component: AddProductModalPilotComponent;
  let fixture: ComponentFixture<AddProductModalPilotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductModalPilotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProductModalPilotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
