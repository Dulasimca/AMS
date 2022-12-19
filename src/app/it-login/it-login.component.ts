import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-it-login',
  templateUrl: './it-login.component.html',
  styleUrls: ['./it-login.component.css']
})
export class ItLoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.router.navigate(['/dashboard'])
  }
}
