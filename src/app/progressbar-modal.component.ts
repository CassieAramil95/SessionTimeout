import {Component, Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'progressbar-modal-comp',
  templateUrl: 'progressbar-modal.component.html',
  styleUrls:['progressbar-modal.component.css'] 
})

export class ProgressBarModalComponent {

  @Input() countMinutes: number;
  @Input() countSeconds: number;
  @Input() progressCount: number;

  constructor(public activeModal: NgbActiveModal) {
  }
  continue() {
    this.activeModal.close();
  }
  logout() {
    this.activeModal.close('logout');
  }
}
