import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FloydComponent } from './components/floyd/floyd.component';
import { AngularPreDirective } from './dericetives/angular-pre.directive';

@NgModule({
  declarations: [
    AppComponent,
    FloydComponent,
    AngularPreDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
