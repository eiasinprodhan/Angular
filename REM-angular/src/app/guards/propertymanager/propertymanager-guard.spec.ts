import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { propertymanagerGuard } from './propertymanager-guard';

describe('propertymanagerGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => propertymanagerGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
