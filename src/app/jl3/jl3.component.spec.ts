import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Jl3Component } from './jl3.component';

describe('Jl3Component', () => {
  let component: Jl3Component;
  let fixture: ComponentFixture<Jl3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Jl3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Jl3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
