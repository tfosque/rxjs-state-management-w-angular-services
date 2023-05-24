import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedDetailViewComponent } from './selected-detail-view.component';

describe('SelectedDetailViewComponent', () => {
  let component: SelectedDetailViewComponent;
  let fixture: ComponentFixture<SelectedDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedDetailViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
