import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Allstages } from './allstages';

describe('Allstages', () => {
  let component: Allstages;
  let fixture: ComponentFixture<Allstages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Allstages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Allstages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
