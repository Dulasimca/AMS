import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  items: MenuItem[] = [];
  constructor() { }

  ngOnInit(): void {
    this.items = [{
      label: 'Forms',
      items: [{
          label: 'Asset Purchased Entry',
          routerLink: '/asset-purchased-entry'
         
      },
      {
          label: 'Manage Asset',
          routerLink: '/manage-asset-entry'
          
      },
    //   {
    //     label: 'Specification Master',
    //     routerLink: '/specification-master'
       
    // }
      ]},
      {
          label: 'Masters',
          items: [{
              label: 'Product Master',
              routerLink: '/product-master'
              
          },
          {
              label: 'Brand Master',
              routerLink: '/brand-master'
          }
      ]}
  ];
}

}
