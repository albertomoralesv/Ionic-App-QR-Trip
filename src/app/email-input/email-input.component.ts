import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.scss'],
})
export class EmailInputComponent implements OnInit{

  @Output() emailInput = new EventEmitter<string>();
  userEmail: string = '';

  constructor() { }

  ngOnInit() {}

  emit(valid: boolean){
    if(valid === true){
      this.emailInput.emit(this.userEmail);
    }else{
      this.emailInput.emit('');
    }
  }

}
