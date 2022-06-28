import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpponentsComponent } from './opponents.component';

describe('OpponentsComponent', () => {
  let component: OpponentsComponent;
  let fixture: ComponentFixture<OpponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
