import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EkComponentLibComponent } from './ek-component-lib.component';

describe('EkComponentLibComponent', () => {
  let component: EkComponentLibComponent;
  let fixture: ComponentFixture<EkComponentLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EkComponentLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EkComponentLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
