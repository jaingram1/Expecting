import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OliveComponent } from './olive.component';

describe('OliveComponent', () => {
  let component: OliveComponent;
  let fixture: ComponentFixture<OliveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OliveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OliveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
