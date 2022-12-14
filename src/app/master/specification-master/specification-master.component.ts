import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specification-master',
  templateUrl: './specification-master.component.html',
  styleUrls: ['./specification-master.component.css']
})
export class SpecificationMasterComponent implements OnInit {
  name:any;
  spec:any;
  selectedType:any;
  constructor() { }

  ngOnInit(): void {
  }

}
