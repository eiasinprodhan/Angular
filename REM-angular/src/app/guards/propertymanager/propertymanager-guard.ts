import { CanActivateFn } from '@angular/router';

export const propertymanagerGuard: CanActivateFn = (route, state) => {
  return true;
};
