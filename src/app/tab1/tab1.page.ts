import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  listaClaves: any[] = [];

  constructor(private databaseService: DatabaseService) {}

  ngOnInit() {
    this.listaClaves = this.databaseService.getKeys();
  }

}
