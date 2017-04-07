import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyAWci0qH6YKE15RIAwppM0b5g7lDa3q4ws',
  authDomain: 'eaa-poc1.firebaseapp.com',
  databaseURL: 'https://eaa-poc1.firebaseio.com',
  storageBucket: 'eaa-poc1.appspot.com',
  messagingSenderId: '408093762433'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
