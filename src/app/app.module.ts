import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewCvComponent } from './view-cv/view-cv.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

import { HttpClientModule } from '@angular/common/http';
// import{ AngularFireModule} from '@angular/fire';
// import{ AngularFireStore} from '@angular/fire/firestore';


@NgModule({
  declarations: [
    AppComponent,
    ViewCvComponent,
    PageNotFoundComponent,
    DashboardComponent,
    TermsConditionComponent,
    PrivacyPolicyComponent,
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule,
    HttpClientModule,
    // AngularFireModule,
    // AngularFireStore,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
