import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugRoutesComponent } from './debug-routes.component';

describe('DebugRoutesComponent', () => {
  let component: DebugRoutesComponent;
  let fixture: ComponentFixture<DebugRoutesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DebugRoutesComponent]
    });
    fixture = TestBed.createComponent(DebugRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
