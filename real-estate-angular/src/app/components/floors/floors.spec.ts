import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Floors } from './floors';

describe('Floors', () => {
  let component: Floors;
  let fixture: ComponentFixture<Floors>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Floors]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Floors);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
