import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DisclaimerService } from '../service/disclaimer.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DisclaimerGuard implements CanActivate {
  constructor(private disclaimerService: DisclaimerService, private router: Router) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.disclaimerService.getDisclaimer()) {
      return true;
    }
    return this.router.createUrlTree(['/disclaimer']);
  }

}
