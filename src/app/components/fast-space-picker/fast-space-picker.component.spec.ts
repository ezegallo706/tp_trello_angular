import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastSpacePickerComponent } from './fast-space-picker.component';

describe('FastSpacePickerComponent', () => {
  let component: FastSpacePickerComponent;
  let fixture: ComponentFixture<FastSpacePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FastSpacePickerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FastSpacePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
