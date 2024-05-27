import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { timeout } from 'rxjs';

import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {

  email: string = '';
  password: string = '';

  incorrect: boolean = false;
  errorMessage: string = '';

  loading = false;

  constructor(private router: Router, private database: DatabaseService) { }

  ngOnInit() {
    this.database.logout();
  }

  async verifyUser(email: string, password: string){
    this.loading = true;
    await this.database.login(email, password);
    this.loading = false;
    if(email != '' && password != ''){
      this.incorrect = true;
      this.errorMessage = 'Los Datos Ingresados no son correctos';
    }else{
      this.incorrect = true;
      this.errorMessage = 'Introduce email y contraseña';
    }
  }

  logout(){
    this.database.logout();
  } 

  change(){
    this.router.navigate(['/tabs'], { replaceUrl: true });
  }

  onEmailChange(email: string){
    this.email = email;
    this.incorrect = false;
  }

  onPasswordChange(password: string){
    this.password = password;
    this.incorrect = false;
  }

}
