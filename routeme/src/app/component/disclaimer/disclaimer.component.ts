import { Component, OnInit } from '@angular/core';
import { DisclaimerService } from '../../service/disclaimer.service';

@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.scss']
})
export class DisclaimerComponent {

  constructor(private disclaimerService: DisclaimerService) { }

  onCheckChange($event: any) {
    this.disclaimerService.setDisclaimer($event.target.checked);
  }
}
