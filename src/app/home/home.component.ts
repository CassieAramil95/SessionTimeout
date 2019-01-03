import { Component, OnInit } from '@angular/core';
import {NgbModalRef} from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
import {Router} from '@angular/router'
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Keepalive} from '@ng-idle/keepalive';
import {EventTargetInterruptSource, Idle} from '@ng-idle/core';
import {ElementRef} from '@angular/core';
import {ProgressBarModalComponent} from '../progressbar-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  idleState = 'NOT_STARTED';
  timedOut = false;
  lastPing?: Date = null;
  progressBarPopup: NgbModalRef;

  constructor(
    private element: ElementRef, 
    private idle: Idle, 
    private keepalive: Keepalive, 
    private router:Router,
    private ngbModal: NgbModal) { 
      
    // sets an idle timeout of 15 minutes.
    idle.setIdle(10);
    // sets a timeout period of 5 minutes.
    idle.setTimeout(20);
    // sets the interrupts like Keydown, scroll, mouse wheel, mouse down, and etc
    idle.setInterrupts([
      new EventTargetInterruptSource(
        this.element.nativeElement, 'keydown DOMMouseScroll mousewheel mousedown touchstart touchmove scroll')]);

    idle.onIdleEnd.subscribe(() => {
      this.idleState = 'NO_LONGER_IDLE';
    });

    idle.onTimeout.subscribe(() => {
      this.idleState = 'TIMED_OUT';
      this.timedOut = true;
      this.logout();
      this.closeProgressForm();
    });

    idle.onIdleStart.subscribe(() => {
      this.idleState = 'IDLE_START', this.openProgressForm(1);
    });

    idle.onTimeoutWarning.subscribe((countdown: any) => {
      this.idleState = 'IDLE_TIME_IN_PROGRESS';
      this.progressBarPopup.componentInstance.count = (Math.floor((countdown - 1) / 10) + 1);
      this.progressBarPopup.componentInstance.progressCount = this.reverseNumber(countdown);
      this.progressBarPopup.componentInstance.countMinutes = (Math.floor(countdown / 60));
      this.progressBarPopup.componentInstance.countSeconds = countdown%60;
    });

    // sets the ping interval to 15 seconds
    keepalive.interval(10);
    /**
     *  // Keepalive can ping request to an HTTP location to keep server session alive
     * keepalive.request('<String URL>' or HTTP Request);
     * // Keepalive ping response can be read using below option
     * keepalive.onPing.subscribe(response => {
     * // Redirect user to logout screen stating session is timeout out if if response.status != 200
     * });
     */
   
    this.reset();
  }

  ngOnDestroy(): void {
    this.resetTimeOut();
}

  reverseNumber(countdown: number) {
    return (300 - (countdown - 1));
  }

  reset() {
    this.idle.watch();
    this.idleState = 'Started.';
    this.timedOut = false;
  }

  openProgressForm(count: number) {
    this.progressBarPopup = this.ngbModal.open(ProgressBarModalComponent, {
      backdrop: 'static',
      keyboard: false
    });
    this.progressBarPopup.componentInstance.count = count;
    this.progressBarPopup.result.then((result: any) => {
      if (result !== '' && 'logout' === result) {
        this.logout();
      } else {
        this.reset();
      }
    });
  }

  logout() {
    this.router.navigate(['login']) 
    this.ngOnDestroy();
  }

  closeProgressForm() {
    this.progressBarPopup.close();
  }

  resetTimeOut() {
    this.idle.stop();
    this.idle.onIdleStart.unsubscribe();
    this.idle.onTimeoutWarning.unsubscribe();
    this.idle.onIdleEnd.unsubscribe();
    this.idle.onIdleEnd.unsubscribe();
  }



  ngOnInit() {
  }

}
