import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-menu-before-auth',
  templateUrl: './menu-before-auth.component.html',
  styleUrls: ['./menu-before-auth.component.scss']
})
export class MenuBeforeAuthComponent {
    @Output() selectedPage: EventEmitter<string> = new EventEmitter<string>();

    menuSwitch(pageValue: string) {
      this.selectedPage.emit(pageValue);
    }
}
