import { Component, OnInit } from '@angular/core';
import { PathConstants } from 'src/app/CommonModules/PathConstants';
import { RestAPIService } from 'src/app/restapi.service';

@Component({
  selector: 'app-brand-master',
  templateUrl: './brand-master.component.html',
  styleUrls: ['./brand-master.component.css']
})
export class BrandMasterComponent implements OnInit {
  brandname:any;
  selectedType:any;
  


  constructor(private restApiService: RestAPIService) { }

  ngOnInit(): void {




  }
  onSignIn(){

    const params = {
      'brandid': 0,
      'brandname': this.brandname,
      'flag': (this.selectedType == 1) ? true : false
    }
    this.restApiService.post(PathConstants.brandmaster_Post, params).subscribe(res => {
      
    })

  }

}