import { Component, OnInit } from '@angular/core';
import { PathConstants } from 'src/app/CommonModules/PathConstants';
import { RestAPIService } from 'src/app/restapi.service';

@Component({
  selector: 'app-manage-asset-entry',
  templateUrl: './manage-asset-entry.component.html',
  styleUrls: ['./manage-asset-entry.component.css']
})
export class ManageAssetEntryComponent implements OnInit {
  currentUser:any
  lastUser:any;
  assetId:any;
  product: any;
  brandname: any;
  selectedType: any;
  branddata: any[] = [];
  productdata: any[] = [];
  brandOptions: any;
  productOptions: any;
  data: any[] = [];
  cols: any;

  constructor(private restApiService: RestAPIService) { }

  ngOnInit(): void {
    this.onView();
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
onSubmit(){

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
onEdit(rowData:any){

}
}
