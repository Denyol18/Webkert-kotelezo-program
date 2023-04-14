import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'electronics-service';
  page = 'home';

  changePage(selectedPage: string) {
    this.page = selectedPage;
  }
}
