import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteComponent } from './components/note/note.component';
import { ButtonComponent } from './components/button/button.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotesComponent } from './pages/notes/notes.component';
import { NewComponent } from './pages/new/new.component';
import { HttpClientModule } from '@angular/common/http';
import { SocialLoginModule, SocialAuthServiceConfig, SocialUser } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider} from '@abacritt/angularx-social-login';
import { NotesService } from './services/notes.service';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';


@NgModule({
  declarations: [
    AppComponent,
    //NoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarComponent,
    ButtonComponent,
    NotesComponent,
    NewComponent,
    HttpClientModule,

  ],
  providers: [NotesService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
            '781976054609-m18ac90tffqa0ikqokvpa5ddh74pf2og.apps.googleusercontent.com'
            )
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    },LoginService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
