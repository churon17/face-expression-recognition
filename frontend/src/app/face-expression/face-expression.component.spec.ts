import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceExpressionComponent } from './face-expression.component';

describe('FaceExpressionComponent', () => {
  let component: FaceExpressionComponent;
  let fixture: ComponentFixture<FaceExpressionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaceExpressionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceExpressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
