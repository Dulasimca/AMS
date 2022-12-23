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
  productid: any;
  brandid: any;
  selectedType: any;
  branddata: any[] = [];
  productdata: any[] = [];
  brandOptions: any;
  productOptions: any;
  cols: any;
  data: any[] = [];
  specname:any;
  spectype:any;
  

  constructor(private restApiService: RestAPIService) { }

  ngOnInit(): void {
    this.onView();
    this.cols = [
      { field: 'specname', header: 'SpecificationName', align: 'left !important' },
      { field: 'spectype', header: 'SpecificationType', align: 'left !important' },
    ]
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

  onEditAdd(selectedRow :any){

    if(
  
      selectedRow !== null && selectedRow !== undefined)
      this.specname=selectedRow.specname;
      this.spectype=selectedRow.spectype;
 }
 onAdd(){
    this.data.push({
      'specname':this.specname,
      'spectype': this.spectype,
    })
    this.clearAdd();
 }
 clearAdd() {
  this.specname = null;
  this.spectype = null;
}

onSubmit()
{
  const params = {
    'id': 0,
    'productid':this.productid,
    'brandid': this.brandid,
    'name':this.specname,
    'specification':this.spectype,
    'flag':true
  }
  this.restApiService.post(PathConstants.specificationmaster_Post, params).subscribe(res => { })
}

}
