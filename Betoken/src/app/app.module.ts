import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AccordionModule } from 'ngx-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { InvestmentsComponent } from './investments/investments.component';
import { CommissionsComponent } from './commissions/commissions.component';
import { RankingsComponent } from './rankings/rankings.component';
import { InvestorComponent } from './investor/investor.component';
import { MarketComponent } from './market/market.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
},
  {
    path: 'dashboard',
    component: DashboardComponent,
    pathMatch: 'full'
},
{
  path: 'investments',
  component: InvestmentsComponent,
  pathMatch: 'full'
},
{
  path: 'commissions',
  component: CommissionsComponent,
  pathMatch: 'full'
},
{
  path: 'rankings',
  component: RankingsComponent,
  pathMatch: 'full'
},
{
  path: 'invest',
  component: InvestorComponent,
  pathMatch: 'full'
},
{
  path: 'market',
  component: MarketComponent,
  pathMatch: 'full'
},
{
  path: 'investing-dashboard',
  component: InvestorComponent,
  pathMatch: 'full'
}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    DashboardComponent,
    InvestmentsComponent,
    CommissionsComponent,
    RankingsComponent,
    InvestorComponent,
    MarketComponent,
  ],
  imports: [
     AccordionModule.forRoot(),
     BrowserModule,
     CollapseModule.forRoot(),
     BrowserAnimationsModule,
     RouterModule.forRoot(routes)
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
