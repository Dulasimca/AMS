import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.items = [{
      items: [{ label: 'Manage Asset', routerLink: '/manage-asset' }, { label: 'Asset Purchased Entry', routerLink: '/asset-purchased-entry' }]
    }];
  }
  logOut() {
    this.router.navigate(['/it-login'])
  }
  
}
