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
  cols: any[] = [];
  data: any[] = [];
  product:any;
  brandname:any;
  selectedType:any;
  branddata: any[] = [];
  brandOptions:any;
  constructor(private restApiService: RestAPIService) { }

  ngOnInit(): void {
    this.onSave();

  } 
  toggleDisplayDiv() {  
    this.isShowDiv = !this.isShowDiv;  
  } 
  onSelect(type:any) {
    let brandSelection:any = [];
    switch (type) {
        case 'S':
          console.log('1',brandSelection)
          this.branddata.forEach((c:any) => {
            brandSelection.push({ label: c.brandname, value: c.brandid });
          })
          this.brandOptions = brandSelection;
          console.log()
          this.brandOptions.unshift({ label: 'Select Brand', value: null });
          break;
    
  }
  } 
  onSave(){
    this.restApiService.get(PathConstants.brandmaster_Get).subscribe(res => {
      if(res){
      this.branddata = res.Table;
  
      }
    }) 
  }
}
