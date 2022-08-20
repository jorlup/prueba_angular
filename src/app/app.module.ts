import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CalendarModule} from 'primeng/calendar';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextModule} from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';
import {RadioButtonModule} from 'primeng/radiobutton';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {ToastModule} from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CheckboxModule} from 'primeng/checkbox';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {InputMaskModule} from 'primeng/inputmask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { RegistroComponent } from './components/auth/registro/registro.component';
import { ReactiveFormsModule } from '@angular/forms';

// ngrx
import { StoreModule } from '@ngrx/store';
import {EffectsModule} from "@ngrx/effects";
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {reducers} from "./store/reducers";
import {AuthEffects} from "./store/effects/auth.effects";
import { HttpConfigInterceptor } from './interceptor/httpconfig.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProfileComponent } from './components/dashboard/profile/profile.component';
import { UserEffects } from './store/effects/user.effects';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects, UserEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25}),
    BrowserAnimationsModule,
    CalendarModule,
    InputSwitchModule,
    InputTextModule,
    InputNumberModule,
    ButtonModule,
    CardModule,
    ToastModule,
    RadioButtonModule,
    ReactiveFormsModule,
    CheckboxModule,
    MessagesModule,
    MessageModule,
    InputMaskModule
  ],
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
