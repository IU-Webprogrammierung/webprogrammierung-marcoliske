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

  burgerMenuToggle = false;

  scrollView(targetDestination: Destination): void {
    this.scrollViewEvent.emit(targetDestination);
  }

  setBurgerMenuToggle():string{
    this.burgerMenuToggle = !this.burgerMenuToggle

    console.log(this.burgerMenuToggle)

    if(this.burgerMenuToggle){
      return "burger-menu-open"
    }else{
      return "burger-menu-close"
    }
return ""
  }
}
