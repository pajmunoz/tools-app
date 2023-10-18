import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showHeader: boolean | undefined;
  constructor(private router: Router) {
    console.log(this.showHeader);
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (val.url == '/') {
          this.showHeader = true;
        } else {
          this.showHeader = false;
        }
      }
    });
  }
  title = 'tools-app';

}
