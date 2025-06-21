import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Searchemployee } from './searchemployee';

describe('Searchemployee', () => {
  let component: Searchemployee;
  let fixture: ComponentFixture<Searchemployee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Searchemployee]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Searchemployee);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
