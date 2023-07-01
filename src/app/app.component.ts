import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { Destination } from 'src/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'portfolio';

  destination = Destination;

  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {}

  scrollView(targetDestination: string): void {
    this.viewportScroller.setOffset([0, 60]);
    this.viewportScroller.scrollToAnchor(targetDestination);
    if (targetDestination === this.destination.TOP) {
      this.scrollToTop();
    }
  }

  scrollToTop(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
