import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariationGroupComponent } from './variation-group.component';

describe('VariationGroupComponent', () => {
  let component: VariationGroupComponent;
  let fixture: ComponentFixture<VariationGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariationGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VariationGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
