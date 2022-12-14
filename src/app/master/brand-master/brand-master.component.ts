import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand-master',
  templateUrl: './brand-master.component.html',
  styleUrls: ['./brand-master.component.css']
})
export class BrandMasterComponent implements OnInit {
  brand:any;
  selectedType:any;
  constructor() { }

  ngOnInit(): void {
  }

}
