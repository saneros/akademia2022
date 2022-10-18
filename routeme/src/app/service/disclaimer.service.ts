import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisclaimerService {

  private disclaimer: boolean = false;

  constructor() { }

  setDisclaimer(checked: boolean) {
    this.disclaimer = checked;
  }

  getDisclaimer() {
    return this.disclaimer;
  }
}
