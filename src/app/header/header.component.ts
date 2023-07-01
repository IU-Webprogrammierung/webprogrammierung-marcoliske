import { Component, Output, EventEmitter } from '@angular/core';
import { Destination } from 'src/model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() scrollViewEvent = new EventEmitter<string>();

  destination = Destination;

  scrollView(targetDestination: Destination): void {
    this.scrollViewEvent.emit(targetDestination);
  }
}
