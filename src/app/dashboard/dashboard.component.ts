import { Component, OnInit } from '@angular/core';
import { PathConstants } from 'src/app/CommonModules/PathConstants';
import { RestAPIService } from 'src/app/restapi.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
A:any;
  constructor(private restapiservice: RestAPIService) { }

  ngOnInit(): void {
    this.restapiservice.get(PathConstants.ProductCount_Get,).subscribe(res => {this.A = res.Table[0].productcount})
  }

}
