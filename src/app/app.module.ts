import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GuessTheNumberComponent } from './guess-the-number/guess-the-number.component';
// import { WorkoutRunnerComponent } from './workout-runner/workout-runner.component';

@NgModule({
  declarations: [
    AppComponent,
    GuessTheNumberComponent
    // WorkoutRunnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
