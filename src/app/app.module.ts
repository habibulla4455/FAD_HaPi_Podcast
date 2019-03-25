import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PodcastModule } from './modules/podcast/podcast.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AudioService } from './core/services/audio.service';
import { PouchdbAudioService } from './core/services/pouchdb-audio.service';
import { PouchdbSubscribeService } from './core/services/pouchdb-subscribe.service';
import { HeaderComponent } from './core/components/header/header.component';
import { AudioPlayerComponent } from './core/components/audio-player/audio-player.component';
import { HeaderService } from '@core/services/header.service';
import { SharedModule } from '@shared/shared.module';
import { PodcastService } from '@core/http/podcast.service';
// import { environment } from 'environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NgProgressModule, NgProgressInterceptor } from 'ngx-progressbar';
import {Ng5SliderModule} from 'ng5-slider';

import { ReactiveFormsModule } from '@angular/forms';

// Firebase services + enviorment module
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';



import { AuthService } from './Auth_1/shared/services/auth.service';
// import { AppRoutingModule1 } from './Auth_1/shared/routing/app-routing.module';
import { ForgotPasswordComponent } from './Auth_1/components/forgot-password/forgot-password.component';
import { DashboardComponent } from './Auth_1/components/dashboard/dashboard.component';
import { SignInComponent } from './Auth_1/components/sign-in/sign-in.component';
import { SignUpComponent } from './Auth_1/components/sign-up/sign-up.component';
import { VerifyEmailComponent } from './Auth_1/components/verify-email/verify-email.component';
import { environment } from '../environments/environment';

export const PodcastProvider = (provider: PodcastService) => {
  return () => provider.getLocation();
};

@NgModule({
  declarations: [
    AppComponent,
    AudioPlayerComponent,
    HeaderComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent
  ],
  imports: [
    ServiceWorkerModule.register('/ngsw-worker.js',  { enabled: environment.production }),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgProgressModule,
    PodcastModule,
    AppRoutingModule,
    Ng5SliderModule,
    SharedModule.forRoot(),
    // AppRoutingModule1,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  providers: [
    HeaderService,
    PouchdbAudioService,
    PouchdbSubscribeService,
    AudioService,
    AuthService,
    { provide: APP_INITIALIZER, useFactory: PodcastProvider, deps: [PodcastService], multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
