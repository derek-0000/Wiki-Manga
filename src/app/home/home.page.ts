import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router: Router) {}

  signin(pageName:string=""):void{
    this.router.navigate([pageName])
  }
  login(pageName:string=""):void{
    this.router.navigate([pageName])
  }

}
