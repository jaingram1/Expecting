import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McdoComponent } from './mcdo.component';

describe('McdoComponent', () => {
  let component: McdoComponent;
  let fixture: ComponentFixture<McdoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McdoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(McdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
