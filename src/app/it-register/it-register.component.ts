import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-it-register',
  templateUrl: './it-register.component.html',
  styleUrls: ['./it-register.component.css']
})
export class ItRegisterComponent implements OnInit {
  showPwd: boolean = false;
  password:any;
  constructor() { }

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
}
