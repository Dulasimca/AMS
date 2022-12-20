import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';
import { PathConstants } from 'src/app/CommonModules/PathConstants';
import { ResponseMessage } from 'src/app/constants/message-constants';
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
  brandid:any;
  responseMsg: Message[] = [];

  constructor(private restApiService: RestAPIService) { }

  ngOnInit(): void {
    this.onView();
    this.brandid=0;
    

    this.cols = [
      { field: 'brandname', header: 'Brandname', align: 'left !important' },
      { field: 'createdate', header: 'Createddate', align: 'left !important' },
      { field: 'flag', header: 'Flag', align: 'left !important' },
    ]

  }

  onSignIn() {
    if(this.brandid==0){
    const params = {
      'brandid': this.brandid,
      'brandname': this.brandname,
      'flag': (this.selectedType == 1) ? true : false
    }
    this.restApiService.post(PathConstants.brandmaster_Post, params).subscribe(res => { })
    this.onView();
    
  }
   else{
    const params = {
      'brandid': this.brandid,
      'brandname': this.brandname,
      'flag': (this.selectedType === '1') ? true : false,
    }
    this.restApiService.post(PathConstants.updatebrandmaster_Post, params).subscribe(res => { })

  }
  
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
    this.selectedType = (rowData.flag === 'true') ? 1 : 0;
  }

  onCheck() {
    this.data.forEach( i => {
      if(i.brandname  === this.brandname ) {
        this.responseMsg = [{ severity: ResponseMessage.WarnSeverity, detail: 'Brand name is already exist, Please input different name' }];
        setTimeout(() => this.responseMsg = [], 2000)
          this.brandname = null;
      }
    })

  }

}