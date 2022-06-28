import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsMeterComponent } from './stats-meter.component';

describe('StatsMeterComponent', () => {
  let component: StatsMeterComponent;
  let fixture: ComponentFixture<StatsMeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsMeterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatsMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
