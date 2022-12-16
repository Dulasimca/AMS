import { Component, OnInit } from '@angular/core';
import { PathConstants } from 'src/app/CommonModules/PathConstants';
import { RestAPIService } from 'src/app/restapi.service';

@Component({
  selector: 'app-brand-master',
  templateUrl: './brand-master.component.html',
  styleUrls: ['./brand-master.component.css']
})
export class BrandMasterComponent implements OnInit {
  brandname: any;
  selectedType: any;
  data: any[] = [];
  cols: any;
  branddata: any[] = [];
  brandOptions: any;
  brandid: any;

  constructor(private restApiService: RestAPIService) { }

  ngOnInit(): void {
    this.onView();
    this.onSave();

    this.cols = [
      { field: 'brandname', header: 'brandname', align: 'left !important' },
      { field: 'createdate', header: 'createdate', align: 'left !important' },
      { field: 'flag', header: 'flag', align: 'right !important' },
    ]

  }

  onSignIn() {
    const params = {
      'brandid': 0,
      'brandname': this.brandname,
      'flag': (this.selectedType == 1) ? true : false
    }
    this.restApiService.post(PathConstants.brandmaster_Post, params).subscribe(res => {
    })
  }
  onSave() {
    this.restApiService.get(PathConstants.brandmaster_Get).subscribe(res => {
      if (res) {
        this.branddata = res.Table;

      }
    })
  }

  onView() {
    this.restApiService.get(PathConstants.brandmaster_Get).subscribe(res => {
      this.data = res.Table;
    })

  }

  onClear() {
    this.brandname = null;
    this.selectedType = null;
    this.brandid = 0;

  }
  onEdit(rowData: any) {
    this.brandid = rowData.brandid;
    this.brandname = rowData.brandname;
    this.selectedType = (rowData.flag === 'Active') ? 1 : 0;

  }

}

