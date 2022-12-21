import { Component, OnInit, ViewChild } from '@angular/core';
import { PathConstants } from 'src/app/CommonModules/PathConstants';
import { RestAPIService } from 'src/app/restapi.service';
import { Message } from 'primeng/api';
import { NgForm } from '@angular/forms';
import { ResponseMessage } from 'src/app/constants/message-constants';



@Component({
  selector: 'app-product-master',
  templateUrl: './product-master.component.html',
  styleUrls: ['./product-master.component.css']
})
export class ProductMasterComponent implements OnInit {
  product: any;
  selectedType: any;
  data: any[] = [];
  cols: any;
  productid: any;
  responseMsg: Message[] = [];

  @ViewChild('f', { static: false }) _productmaster!: NgForm;
  RowId: any;

  constructor(private restApiService: RestAPIService) { }

  ngOnInit(): void {
    this.onView();
    this.productid = 0;

    this.cols = [
      { field: 'productname', header: 'Product Name', align: 'left !important' },
      { field: 'createdate', header: 'createdate', align: 'left !important' },
      { field: 'flag', header: 'flag', align: 'left !important' },
    ]

  }
  onSubmit() {
    if (this.productid == 0) {
      const params = {
        'productid': this.productid,
        'productname': this.product,
        'flag': (this.selectedType == 1) ? true : false
      }
      this.restApiService.post(PathConstants.productmaster_Post, params).subscribe(res => { })
      this.onView();
    }
    else {
      const params = {
        'productid': this.productid,
        'productname': this.product,
        'flag': (this.selectedType == 1) ? true : false
      }
      this.restApiService.post(PathConstants.updateproductmaster_post, params).subscribe(res => {
        this.onView();
      })
      this.onClear();
    }
  }

  onView() {
    this.restApiService.get(PathConstants.productmaster_Get).subscribe(res => {
      this.data = res.Table;
    })

  }
  onClear() {
    this.product = null;
    this.selectedType = null;
    this.productid = 0;

  }
  onEdit(rowData: any) {
    this.productid = rowData.productid;
    this.product = rowData.productname;
    this.selectedType = (rowData.flag === 'Active') ? 1 : 0;

  }
  onCheck() {
    this.data.forEach(i => {
      if (i.productname === this.product) {
        this.responseMsg = [{ severity: ResponseMessage.WarnSeverity, detail: 'Product name is already exist, Please input different name' }];
        setTimeout(() => this.responseMsg = [], 2000)
        this.product = null;
      }
    })
  }

}
