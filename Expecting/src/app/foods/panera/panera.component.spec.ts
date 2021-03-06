import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaneraComponent } from './panera.component';

describe('PaneraComponent', () => {
  let component: PaneraComponent;
  let fixture: ComponentFixture<PaneraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaneraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaneraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
