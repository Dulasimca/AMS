import { Component, OnInit } from '@angular/core';
import { PathConstants } from '../CommonModules/PathConstants';
import { RestAPIService } from '../restapi.service';

@Component({
  selector: 'app-it-register',
  templateUrl: './it-register.component.html',
  styleUrls: ['./it-register.component.css']
})
export class ItRegisterComponent implements OnInit {
  showPwd: boolean = false;
  password:any;
  name:any;
  employeeid:any;
  email:any;
  confirmpassword:any;
  data: any[] = [];
  

  

  constructor(private restApiService: RestAPIService) { }

  ngOnInit(): void {
  }
  onShowPwd() {
    var inputValue = (<HTMLInputElement>document.getElementById('pwd'));
    console.log('in', inputValue)
    if (inputValue.type === 'password') {
      inputValue.type = 'text';
      this.showPwd = !this.showPwd;
    } else {
      this.showPwd = !this.showPwd;
      inputValue.type = 'password';
    }
  }
  onSignIn(){
    const params = {
      'sno': 0,
      'name':this.name,
      'employeeid': this.employeeid,
      'email': this.email,
      'password': this.password,
      'confirmpassword': this.confirmpassword,
    }
    this.restApiService.post(PathConstants.itregister_Post, params).subscribe(res => { })
  }
  onView(){
    this.restApiService.get(PathConstants.ItRegisterMaster_Get).subscribe(res => { this.data = res.Table;
     })

  }
  }

