import { Component, OnInit } from '@angular/core';

import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  listaUsuarios: any[] = [];

  constructor(private databaseService: DatabaseService) {}

  ngOnInit() {
    this.listaUsuarios = this.databaseService.getUsers();
  }

}
