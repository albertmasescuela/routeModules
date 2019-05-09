/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AutoComplateComponent } from './autoComplate.component';

describe('AutoComplateComponent', () => {
  let component: AutoComplateComponent;
  let fixture: ComponentFixture<AutoComplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoComplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoComplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
