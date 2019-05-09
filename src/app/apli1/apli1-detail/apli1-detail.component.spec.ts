import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Apli1DetailComponent } from './apli1-detail.component';

describe('Apli1DetailComponent', () => {
  let component: Apli1DetailComponent;
  let fixture: ComponentFixture<Apli1DetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Apli1DetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Apli1DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
