import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AMS';
  isLoggedIn: boolean = false;
  hideheader: boolean = false;
  hidemenu: boolean = false;
  constructor(private router: Router) {
    
    this.router.events.subscribe((events) => {
      if (events instanceof NavigationEnd) {
        if ((events.url === '/it-register') || (events.url === '/it-login') || (events.url === '/') ) {
          this.hideheader = true;
        }
        else {
          this.hideheader = false;
        }
      }
    })
    this.router.events.subscribe((events) => {
      if (events instanceof NavigationEnd) {
        if ((events.url === '/it-register') || (events.url === '/it-login') || (events.url === '/') ) {
          this.hidemenu = true;
        }
        else {
          this.hidemenu = false;
        }
      }
    })
  }
}
