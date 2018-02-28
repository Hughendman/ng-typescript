import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Typescript1Component } from './typescript1.component';

describe('Typescript1Component', () => {
  let component: Typescript1Component;
  let fixture: ComponentFixture<Typescript1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Typescript1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Typescript1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
