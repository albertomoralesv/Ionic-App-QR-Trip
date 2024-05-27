import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPagePageRoutingModule } from './login-page-routing.module';

import { LoginPagePage } from './login-page.page';

import { AppNameComponent } from '../app-name/app-name.component';
import { EmailInputComponent } from '../email-input/email-input.component';
import { LoginButtonComponent } from '../login-button/login-button.component';
import { PasswordInputComponent } from '../password-input/password-input.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, LoginPagePageRoutingModule],
  declarations: [
    LoginPagePage,
    AppNameComponent,
    EmailInputComponent,
    LoginButtonComponent,
    PasswordInputComponent
  ],
})
export class LoginPagePageModule {}
