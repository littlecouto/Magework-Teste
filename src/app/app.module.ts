import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UrnComponent } from './urn/urn.component';
import { ScreenComponent } from './urn/screen/screen.component';
import { NumpadComponent } from './urn/numpad/numpad.component';

@NgModule({
  declarations: [
    AppComponent,
    UrnComponent,
    ScreenComponent,
    NumpadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
