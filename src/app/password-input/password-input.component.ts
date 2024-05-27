import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
})
export class PasswordInputComponent implements OnInit {

  @Output() passwordInput = new EventEmitter<string>();
  userPassword: string = '';

  constructor() { }

  ngOnInit() {}

  emit(){
    this.passwordInput.emit(this.userPassword);
  }
}
