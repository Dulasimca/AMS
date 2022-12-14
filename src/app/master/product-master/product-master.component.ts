import { Component, OnInit } from '@angular/core';
import { PathConstants } from 'src/app/CommonModules/PathConstants';
import { RestAPIService } from 'src/app/restapi.service';



@Component({
  selector: 'app-product-master',
  templateUrl: './product-master.component.html',
  styleUrls: ['./product-master.component.css']
})
export class ProductMasterComponent implements OnInit {
  product:any;
  selectedType:any;

  constructor(private restApiService: RestAPIService) { }

  ngOnInit(): void {
  }
 onSignIn()
 {
  const params = {
    'productid': 0,
    'productname': this.product,
    'flag': (this.selectedType == 1) ? true : false
  }
this.restApiService.post(PathConstants.productmaster_Post, params).subscribe(res => {
})
 }

}
