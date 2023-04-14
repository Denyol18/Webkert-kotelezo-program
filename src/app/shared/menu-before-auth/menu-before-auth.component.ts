import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-menu-before-auth',
  templateUrl: './menu-before-auth.component.html',
  styleUrls: ['./menu-before-auth.component.scss']
})
export class MenuBeforeAuthComponent {
    @Input() currentPage: string = '';
    @Output() selectedPage: EventEmitter<string> = new EventEmitter<string>();

    menuSwitch() {
      this.selectedPage.emit(this.currentPage);
    }
}
