import { Component, OnInit } from '@angular/core';
import { PathConstants } from 'src/app/CommonModules/PathConstants';
import { RestAPIService } from 'src/app/restapi.service';
@Component({
  selector: 'app-asset-purchased-entry',
  templateUrl: './asset-purchased-entry.component.html',
  styleUrls: ['./asset-purchased-entry.component.css']
})
export class AssetPurchasedEntryComponent implements OnInit {
  isShowDiv = false;
  product: any;
  brandname: any;
  selectedType: any;
  branddata: any[] = [];
  productdata: any[] = [];
  brandOptions: any;
  productOptions: any;

  constructor(private restApiService: RestAPIService) { }

  ngOnInit(): void {
    this.onView();
}
  toggleDisplayDiv() {
    this.isShowDiv = !this.isShowDiv;
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
}
