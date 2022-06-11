import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';


const routes: Routes = [
  {
    path: '',
    component: SignInComponent,
    //   canActivate: [AuthGuard]
    //    canActivate: [AngularFireAuthGuard],

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
