import { Component, OnInit ,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PathConstants } from '../CommonModules/PathConstants';
import { RestAPIService } from '../restapi.service';
import { Message } from 'primeng/api';
import { ResponseMessage } from 'src/app/constants/message-constants';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-it-login',
  templateUrl: './it-login.component.html',
  styleUrls: ['./it-login.component.css']
})
export class ItLoginComponent implements OnInit {
  email:any;
  pw:any;
  data: any[] = [];
  responseMsg: Message[] = [];

  @ViewChild('f', { static: false }) _productmaster!: NgForm;
  RowId: any;
  constructor(private restApiService: RestAPIService, private router: Router) { }

  ngOnInit(): void {
    this.restApiService.get(PathConstants.ItRegisterMaster_Get).subscribe(res => {
      this.data = res.Table;
    })
  }
  onSubmit() {
    this.data.forEach((i: any) => {
      if (i.v_email === this.email && i.v_password === this.pw) {
        this.router.navigate(['/dashboard'])
      } else {
        this.responseMsg = [{ severity: ResponseMessage.WarnSeverity, detail: 'Incorrect UserNmae & Password !' }];
        setTimeout(() => this.responseMsg = [], 2000)
      }
    })
  }
}
