import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PodcastModule } from './modules/podcast/podcast.module';
import { VerifyEmailComponent } from './Auth_1/components/verify-email/verify-email.component';
import { ForgotPasswordComponent } from './Auth_1/components/forgot-password/forgot-password.component';
import { AuthGuard } from './Auth_1/shared/guard/auth.guard';
import { SecureInnerPagesGuard } from './Auth_1/shared/guard/secure-inner-pages.guard';
import { SignInComponent } from './Auth_1/components/sign-in/sign-in.component';
import { SignUpComponent } from './Auth_1/components/sign-up/sign-up.component';
import { DashboardComponent } from './Auth_1/components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'podcast', pathMatch: 'full', canActivate: [AuthGuard] },
  {
    path: 'podcast', loadChildren: 'app/modules/podcast/podcast.module#PodcastModule'

  },
  { path: 'sign-in', component: SignInComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'register-user', component: SignUpComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [SecureInnerPagesGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
