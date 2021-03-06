import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipotleComponent } from './chipotle.component';

describe('ChipotleComponent', () => {
  let component: ChipotleComponent;
  let fixture: ComponentFixture<ChipotleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipotleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipotleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
