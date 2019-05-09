import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Apli1ListComponent } from './apli1-list.component';

describe('Apli1ListComponent', () => {
  let component: Apli1ListComponent;
  let fixture: ComponentFixture<Apli1ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Apli1ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Apli1ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
