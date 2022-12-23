import { Component, OnInit } from '@angular/core';
import { PathConstants } from 'src/app/CommonModules/PathConstants';
import { RestAPIService } from 'src/app/restapi.service';

@Component({
  selector: 'app-manage-asset-entry',
  templateUrl: './manage-asset-entry.component.html',
  styleUrls: ['./manage-asset-entry.component.css']
})
export class ManageAssetEntryComponent implements OnInit {
  currentUser: any
  lastUser: any;
  assetId: any;
  product: any;
  brandname: any;
  selectedType: any;
  branddata: any[] = [];
  productdata: any[] = [];
  brandOptions: any;
  productOptions: any;
  data: any[] = [];
  cols: any;
  brand: any;
  managedata:any;
 

  constructor(private restApiService: RestAPIService) { }

  ngOnInit(): void {
    
    this.onView();
    this.getData();
this.cols = [
      { field: 'vproductname', header: 'Product', align: 'left !important' },
      { field: 'vbrandname', header: 'Brand', align: 'left !important' },
      { field: 'vcurrentuser', header: 'CurrentUser', align: 'left !important' },
      { field: 'vlastuser', header: 'LastUser', align: 'left !important' },
    ]

  }

  onSelect(type: any) {
    let brandSelection: any = [];
    let productSelection: any = [];
    switch (type) {
      case 'S':
        this.branddata.forEach((c: any) => {
          brandSelection.push({ label: c.brandname, value: c.brandid });
        })
        this.brandOptions = brandSelection;
        this.brandOptions.unshift({ label: 'Select Brand', value: null });
        break;
      case 'p':
        console.log('1', productSelection)
        this.productdata.forEach((c: any) => {
          productSelection.push({ label: c.productname, value: c.productid });
        })
        this.productOptions = productSelection;
        console.log()
        this.productOptions.unshift({ label: 'Select Product', value: null });
        break;
 }
  }
 
  onSubmit() {
 const params = {
      'assetid': 0,
      'productid':this.product,
      'brandid':this.brandname,
      'currentuser':this.currentUser,
      'lastuser':this.lastUser,
}
    this.restApiService.post(PathConstants.manageasset_Post, params).subscribe(res => { })
 }

onView() {
    this.restApiService.get(PathConstants.brandmaster_Get).subscribe(res => {
      if (res) {
        this.branddata = res.Table;
      }
    })
    this.restApiService.get(PathConstants.productmaster_Get).subscribe(res => {
      if (res) {
        this.productdata = res.Table;
  }
    })
    }

  getData()
  {
    this.restApiService.get(PathConstants.manageasset_Get).subscribe(res => {
 this.data = res.Table;  
  })
  }

  onEdit(rowData:any){

  }

}