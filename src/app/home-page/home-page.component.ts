import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { MangaListComponent } from '../manga-list/manga-list.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})

export class HomePageComponent  implements OnInit {
  
  constructor() { }

  ngOnInit() {}

}
