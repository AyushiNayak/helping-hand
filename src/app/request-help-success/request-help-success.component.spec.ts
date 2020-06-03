import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestHelpSuccessComponent } from './request-help-success.component';

describe('RequestHelpSuccessComponent', () => {
  let component: RequestHelpSuccessComponent;
  let fixture: ComponentFixture<RequestHelpSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestHelpSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestHelpSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
