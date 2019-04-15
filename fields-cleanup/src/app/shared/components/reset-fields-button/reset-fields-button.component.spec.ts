import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetFieldsButtonComponent } from './reset-fields-button.component';

describe('ResetFieldsButtonComponent', () => {
  let component: ResetFieldsButtonComponent;
  let fixture: ComponentFixture<ResetFieldsButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetFieldsButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetFieldsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
