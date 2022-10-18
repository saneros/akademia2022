import { Component } from '@angular/core';
import { DisclaimerService } from '../../service/disclaimer.service';

@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.scss']
})
export class DisclaimerComponent {

  checked: boolean;

  constructor(private disclaimerService: DisclaimerService) {
    this.checked = this.disclaimerService.getDisclaimer();
  }

  onCheckChange($event: any) {
    this.disclaimerService.setDisclaimer($event.target.checked);
  }
}
