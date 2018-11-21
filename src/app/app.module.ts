import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UrnComponent } from './urn/urn.component';
import { ScreenComponent } from './urn/screen/screen.component';
import { NumpadComponent } from './urn/numpad/numpad.component';

import { ForNumbersModule } from '../pipes/fornumbers/fornumbers.module';

import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabase  } from '@angular/fire/database';
import { SuccessModalComponent } from './urn/success-modal/success-modal.component';

const firebaseConfig = {
  apiKey: "AIzaSyASGp6hEHS4y636XCO3_Tw9gDn0yOwgc1k",
  authDomain: "magework-test.firebaseapp.com",
  databaseURL: "https://magework-test.firebaseio.com",
  projectId: "magework-test",
  storageBucket: "magework-test.appspot.com",
  messagingSenderId: "184163829947"
};


@NgModule({
  declarations: [
    AppComponent,
    UrnComponent,
    ScreenComponent,
    NumpadComponent,
    SuccessModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ForNumbersModule,
    NgbModalModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence()
  ],
  entryComponents:[SuccessModalComponent],
  providers: [AngularFireModule, AngularFirestore, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
