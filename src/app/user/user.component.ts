import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {

@Input() id: string = '';
@Input() name:string = '';
@Input() lastName:string = '';
@Input() email:string = '';
@Input() career:string = '';
@Input() semester:string = '';

  constructor() { }

  ngOnInit() {}

}
