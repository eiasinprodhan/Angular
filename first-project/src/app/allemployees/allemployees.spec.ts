import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Allemployees } from './allemployees';

describe('Allemployees', () => {
  let component: Allemployees;
  let fixture: ComponentFixture<Allemployees>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Allemployees]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Allemployees);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
