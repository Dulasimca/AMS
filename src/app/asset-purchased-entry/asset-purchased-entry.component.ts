import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asset-purchased-entry',
  templateUrl: './asset-purchased-entry.component.html',
  styleUrls: ['./asset-purchased-entry.component.css']
})
export class AssetPurchasedEntryComponent implements OnInit {
  isShowDiv = false;  
  constructor() { }

  ngOnInit(): void {
  }
  toggleDisplayDiv() {  
    this.isShowDiv = !this.isShowDiv;  
  }  
}
