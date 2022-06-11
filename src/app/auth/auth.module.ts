import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {FormsModule} from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SignInComponent],
  imports: [CommonModule, AuthRoutingModule, FormsModule, SharedModule]
})
export class AuthModule {}
