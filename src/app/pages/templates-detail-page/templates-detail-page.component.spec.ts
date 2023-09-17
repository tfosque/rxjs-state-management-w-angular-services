import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatesDetailPageComponent } from './templates-detail-page.component';

describe('TemplatesDetailPageComponent', () => {
  let component: TemplatesDetailPageComponent;
  let fixture: ComponentFixture<TemplatesDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatesDetailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplatesDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
