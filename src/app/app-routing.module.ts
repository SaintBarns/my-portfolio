import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewCvComponent } from './view-cv/view-cv.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full'
  },
  {
    path: 'dashboard', component: DashboardComponent,
  },
  {
    path: 'view', component: ViewCvComponent,
  },
  {
    path: 'condition', component: TermsConditionComponent,
  },
  {
    path: 'privacy', component: PrivacyPolicyComponent,
  },
  {
    path: '**', component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
